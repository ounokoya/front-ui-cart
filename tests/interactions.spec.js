import { test, expect } from '@playwright/test'
import { open, button, link, style, cssColor } from './helpers.js'

// Spec §5 et §6 — S10 à S14

const G500 = 'hsl(158, 36%, 37%)'
const G700 = 'hsl(158, 42%, 18%)'

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 800)
})

test('S10 — survol du bouton : Green 700, puis retour à Green 500', async ({ page }) => {
  await button(page).hover()
  await expect.poll(() => style(button(page), 'backgroundColor')).toBe(await cssColor(page, G700))
  await page.mouse.move(0, 0)
  await expect.poll(() => style(button(page), 'backgroundColor')).toBe(await cssColor(page, G500))
})

test('S11 — prefers-reduced-motion : aucune transition sur le bouton', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await button(page).hover()
  const none = await button(page).evaluate((el) => {
    const s = getComputedStyle(el)
    return s.transitionProperty === 'none' || s.transitionDuration.split(',').every((d) => parseFloat(d) === 0)
  })
  expect(none).toBe(true)
})

test('S12 — le bouton ne mène nulle part : ni navigation ni envoi (Q-B1)', async ({ page }) => {
  const url = page.url()
  const requests = []
  page.on('request', (r) => { if (r.isNavigationRequest() || r.method() !== 'GET') requests.push(`${r.method()} ${r.url()}`) })
  await button(page).click()
  await button(page).focus()
  await page.keyboard.press('Enter')
  await page.waitForTimeout(300)
  expect(page.url()).toBe(url)
  expect(requests).toEqual([])
})

test('S13 — Tab : le bouton (contour Green 700 décalé de 3 px), puis les deux liens, chacun avec un contour de 2 px au moins', async ({ page }) => {
  const g700 = await cssColor(page, G700)
  const seen = []
  for (let i = 0; i < 3; i++) {
    await page.keyboard.press('Tab')
    seen.push(await page.evaluate(() => {
      const el = document.activeElement
      const s = getComputedStyle(el)
      return { name: el.textContent.replace(/\s+/g, ' ').trim(), outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2, color: s.outlineColor, offset: s.outlineOffset }
    }))
  }
  expect(seen.map((s) => s.name)).toEqual(['Add to Cart', 'Frontend Mentor', 'Koya Esdras'])
  for (const s of seen) expect.soft(s.outline, `contour sur « ${s.name} »`).toBe(true)
  expect.soft(seen[0].color, 'contour du bouton').toBe(g700)
  expect.soft(seen[0].offset, 'décalage du contour du bouton').toBe('3px')
})

test('S14 — liens du pied de page : soulignés, sans soulignement au survol ; bonnes adresses', async ({ page }) => {
  await expect(link(page, 'Frontend Mentor')).toHaveAttribute('href', 'https://www.frontendmentor.io?ref=challenge')
  await expect(link(page, 'Koya Esdras')).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/ounokoya')
  for (const name of ['Frontend Mentor', 'Koya Esdras']) {
    expect(await style(link(page, name), 'textDecorationLine'), name).toBe('underline')
    await link(page, name).hover()
    await expect.poll(() => style(link(page, name), 'textDecorationLine'), { message: `${name} survolé` }).toBe('none')
  }
})

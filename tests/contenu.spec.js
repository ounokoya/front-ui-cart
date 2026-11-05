import { test, expect } from '@playwright/test'
import { open, card, photo, title, category, description, price, oldPrice, button, style, cssColor, paint } from './helpers.js'

// Spec §2, §3 et §6 — S6 à S9

const GREY = 'hsl(228, 12%, 48%)'

test('S6 — catégorie, nom, description, prix lus distinctement, bouton ; photo nommée et adaptée à la largeur', async ({ page }) => {
  await open(page, 1440, 800)
  await expect(title(page)).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(category(page)).toBeVisible()
  expect((await category(page).boundingBox()).y, '« Perfume » au-dessus du nom').toBeLessThan((await title(page).boundingBox()).y)
  await expect(description(page)).toBeVisible()
  await expect(card(page).getByText('Current price: $149.99')).toHaveCount(1)
  await expect(card(page).locator('s')).toHaveText(/^\s*Original price:\s*\$169\.99\s*$/)
  await expect(price(page)).toBeVisible()
  await expect(oldPrice(page)).toBeVisible()
  await expect(button(page)).toHaveAttribute('type', 'button')
  await expect(card(page).getByRole('img')).toHaveCount(1)
  expect(await photo(page).evaluate((img) => img.complete && img.naturalWidth > 0 && img.currentSrc.includes('desktop')), 'photo desktop').toBe(true)
  await open(page, 375, 1002)
  expect(await photo(page).evaluate((img) => img.complete && img.naturalWidth > 0 && img.currentSrc.includes('mobile')), 'photo mobile').toBe(true)
})

test('S7 — tailles : catégorie 12 px espacée, nom et prix Fraunces 32 px, description 14 px, ancien prix 13 px barré, bouton 14 px', async ({ page }) => {
  await open(page, 1440, 800)
  expect(await style(category(page), 'fontSize')).toBe('12px')
  expect(await style(category(page), 'textTransform')).toBe('uppercase')
  expect(await style(category(page), 'letterSpacing')).toBe('5px')
  for (const [name, el] of [['nom', title(page)], ['prix', price(page)]]) {
    expect(await style(el, 'fontFamily'), name).toContain('Fraunces')
    expect(await style(el, 'fontSize'), name).toBe('32px')
  }
  expect(await style(description(page), 'fontSize')).toBe('14px')
  expect(await style(description(page), 'lineHeight')).toBe('23px')
  expect(await style(oldPrice(page), 'fontSize')).toBe('13px')
  expect(await oldPrice(page).evaluate((el) => getComputedStyle(el.closest('s') || el).textDecorationLine)).toBe('line-through')
  expect(await style(button(page), 'fontSize')).toBe('14px')
  await open(page, 375, 1002)
  expect(await style(description(page), 'lineHeight'), 'mobile').toBe('22px')
})

test('S8 — couleurs : Grey, Black, Green 500, bouton et carte', async ({ page }) => {
  await open(page, 1440, 800)
  const grey = await paint(page, GREY)
  for (const [name, el] of [['catégorie', category(page)], ['description', description(page)], ['ancien prix', oldPrice(page)]]) expect(await paint(page, await style(el, 'color')), name).toEqual(grey)
  expect(await style(title(page), 'color'), 'nom').toBe(await cssColor(page, 'hsl(212, 21%, 14%)'))
  expect(await style(price(page), 'color'), 'prix').toBe(await cssColor(page, 'hsl(158, 36%, 37%)'))
  expect(await style(button(page), 'backgroundColor'), 'bouton').toBe(await cssColor(page, 'hsl(158, 36%, 37%)'))
  expect(await style(button(page), 'color'), 'texte du bouton').toBe(await cssColor(page, 'hsl(0, 0%, 100%)'))
  expect(await style(card(page), 'backgroundColor'), 'carte').toBe(await cssColor(page, 'hsl(0, 0%, 100%)'))
})

for (const colorScheme of ['light', 'dark']) {
  test(`S9 — appareil en thème ${colorScheme === 'light' ? 'clair' : 'sombre'} : le fond de la page reste Cream (A6)`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    await open(page, 375, 1002)
    expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe(await cssColor(page, 'hsl(30, 38%, 92%)'))
  })
}

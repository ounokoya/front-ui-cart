import { test, expect } from '@playwright/test'
import { open, card, photo, title, button, footer, box, near, textBox } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

test('S1 — 1440 × 800 : carte desktop, photo à gauche, bouton', async ({ page }) => {
  await open(page, 1440, 800)
  near(await box(card(page)), { x: 420, y: 175, width: 600, height: 450 }, 'carte')
  near(await box(photo(page)), { x: 420, y: 175, width: 300, height: 450 }, 'photo')
  near(await box(button(page)), { x: 752, y: 545, width: 236, height: 48 }, 'bouton')
})

test('S2 — 375 × 1002 : carte mobile à 80 px du haut, photo en haut', async ({ page }) => {
  await open(page, 375, 1002)
  near(await box(card(page)), { x: 12.5, y: 80, width: 350, height: 750 }, 'carte')
  near(await box(photo(page)), { x: 12.5, y: 80, width: 350, height: 342 }, 'photo')
  near(await box(button(page)), { x: 45, y: 748, width: 286, height: 50 }, 'bouton')
})

test('S3 — 768 × 1024 : carte desktop centrée ; 639 px mobile, 640 px desktop (Q-B5)', async ({ page }) => {
  await open(page, 768, 1024)
  near(await box(card(page)), { x: 84, y: 287, width: 600, height: 450 }, 'carte')
  await open(page, 639, 1000)
  const [c1, p1] = [await box(card(page)), await box(photo(page))]
  expect(c1.width, '639 px : carte mobile').toBe(350)
  expect(p1.y, '639 px : photo en haut').toBe(c1.y)
  await open(page, 640, 800)
  const [c2, p2] = [await box(card(page)), await box(photo(page))]
  expect(c2.width, '640 px : carte desktop').toBe(600)
  expect(p2.x, '640 px : photo à gauche').toBe(c2.x)
})

for (const width of [320, 375, 639, 640, 768, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(title(page)).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 800 : pied de page centré sous la carte, dans la fenêtre', async ({ page }) => {
  await open(page, 1440, 800)
  const c = await box(card(page))
  // boîte sans arrondi (somme de deux demi-pixels)
  const f = await footer(page).boundingBox()
  const t = await textBox(footer(page))
  expect(f.y).toBeGreaterThanOrEqual(c.y + c.height)
  expect(f.y + f.height).toBeLessThanOrEqual(800)
  expect(Math.abs((t.left + t.right) / 2 - 720)).toBeLessThanOrEqual(1)
})

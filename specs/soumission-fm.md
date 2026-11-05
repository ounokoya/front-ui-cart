# Mise à jour de la solution sur Frontend Mentor

> SDL-FM 1.5.0 Phase 13 (refonte v2.0.0). Textes préparés pour le formulaire « Edit solution » de la solution de 2023 : https://www.frontendmentor.io/solutions/product-preview-card-component-93Wlm6snAB (titre « css positionnement, text alignment, font size »). La modification est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi. Pas de nouveaux points (solution déjà soumise).
>
> **Envoyée le 2026-11-05** avec l'accord de Koya, textes ci-dessous inchangés (les 4 tags existent sur FM) ; rapport : 0 remarque (`specs/analyse/2026-11-05-rapport-fm.md`).

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | Product card with screen-reader prices, Fraunces opsz & Tailwind v4 (67) |
| Repository URL | https://github.com/ounokoya/front-ui-cart |
| Live site URL | https://ounokoya.github.io/front-ui-cart/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |
| Capture | « Regenerate screenshot » : la page a changé depuis 2023 |

Après l'envoi : « Regenerate report » (vérifications automatiques gratuites), en vérifiant d'abord que la solution n'a pas de rapport IA (sinon un crédit serait consommé : accord de Koya).

## What are you most proud of, and what would you do differently next time?

I'm most proud of the prices: a strikethrough is not announced by screen readers, so visually hidden labels make them read "Current price: $149.99" and "Original price: $169.99", with the old price in an `s` element. The photo is a `picture` with the desktop and mobile crops and a text alternative, and Fraunces keeps its optical size axis, as in the design. Screenshots differ from the design JPGs by 0.60 % (desktop), 0.61 % (hover state) and 2.37 % (mobile) of pixels, and the 33 Playwright tests pass on the live site.

This is a rebuild of my 2023 solution. Next time, I'd give each visible value its own element from the start (see below).

## What challenges did you encounter, and how did you overcome them?

- **The heading font**: Fraunces is a variable font with an optical size axis; the design's 32 px headings match it only with that axis, so the site loads `@fontsource-variable/fraunces/opsz`.
- **Prices and hidden labels**: with the hidden label inside the price's `span`, no element had "$149.99" as its text; one `span` per visible price keeps the styles and the tests simple.
- **Two layouts**: the mobile card sits 80 px from the top while the desktop card is centred, so the page uses a centring grid only from 640 px.

## What specific areas of your project would you like help with?

1. Would you use `s` or `del` for the old price, and are the hidden "Current price" / "Original price" labels the right approach?
2. Is the photo's text alternative ("Bottle of Gabrielle Essence Eau De Parfum among green leaves") useful, or would you make it decorative since the name is the heading?

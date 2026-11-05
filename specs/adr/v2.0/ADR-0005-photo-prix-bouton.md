# ADR-0005 : Photo en `picture` décrite ; prix distingués à la lecture ; bouton sans script

## Statut
Accepté (2026-11-05) — décisions G2 (Q-B1, Q-B2, Q-B3) ; leçon M35 (lot 2).

## Contexte
Le starter fournit la photo en deux cadrages : `image-product-desktop.jpg` (600 × 900, le double de 300 × 450) et `image-product-mobile.jpg` (700 × 684, le double de 350 × 342). Elle montre le produit et reçoit un texte alternatif (Q-B3). L'ancien prix est barré, mais le barré n'est pas annoncé par les lecteurs d'écran (Q-B2). « Add to Cart » n'a pas d'action dans le challenge (Q-B1) ; au lot 2, une transition des couleurs animait aussi le contour de focus (M35).

## Options
| Option | Pour | Contre |
|---|---|---|
| **`picture` + `img` décrite ; `s` et libellés `sr-only` ; `button type="button"` avec icône `alt=""` (choisie)** | Bon cadrage à chaque largeur ; les deux prix sont lus « Current price: $149.99 », « Original price: $169.99 » ; un vrai bouton, nommé par son texte | Deux textes masqués à garder en phase avec les prix |
| `del` pour l'ancien prix | Annoncé comme suppression par certains lecteurs | Ce n'est pas une modification du document, c'est un prix qui ne vaut plus |
| Icône en SVG dans le HTML | Couleur pilotable en CSS | Plus de balisage pour une icône blanche fixe |

## Décision
- `picture` : `source media="(min-width: 40rem)"` vers `image-product-desktop.jpg` (600 × 900) ; `img` `image-product-mobile.jpg`, `width="700" height="684"`, `alt="Bottle of Gabrielle Essence Eau De Parfum among green leaves"`, à pleine taille de sa zone (`object-fit: cover`).
- Prix : `p` avec `span.sr-only` « Current price: » puis le prix « $149.99 » dans son propre `span` ; puis `s` contenant `span.sr-only` « Original price: » et l'ancien prix « $169.99 » dans son propre `span` (chaque prix visible a un élément à lui : style et tests le visent sans le libellé masqué).
- Bouton : `button type="button"`, `img` `icon-cart.svg` 15 × 16 `alt=""`, texte « Add to Cart » ; fond Green 500, Green 700 au survol ; transition de `background-color` seulement, supprimée avec `motion-reduce` ; contour de focus 2 px Green 700 décalé de 3 px.
- `src/main.js` n'importe que la feuille de style.

## Conséquences
- Vérifié par S6 (photo, prix, bouton), S10 à S13 (survol, mouvements réduits, clic sans effet, clavier) et les comparaisons visuelles (S19 à S21).

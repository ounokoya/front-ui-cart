# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [2.0.0] — 2026-11-05

Refonte complète de la solution de 2023 (SDL-FM 1.5.0, remise à niveau du profil, étape B, lot 4), à partir du starter actuel, dans le même dépôt.

### Added
- Carte mobile à 80 px du haut sous 640 px, carte desktop 600 × 450 centrée au-delà (Q-B5, G3-1, ADR-0006).
- Photo en `picture` (cadrages desktop et mobile) avec un texte alternatif (Q-B3) ; « Perfume » au-dessus du `h1` (Q-B4).
- Prix distingués à la lecture : « Current price: » et « Original price: » masqués, ancien prix dans `s` (Q-B2, ADR-0005).
- Bouton « Add to Cart » sans action, Green 700 au survol, contour de focus visible dès son arrivée (Q-B1).
- Montserrat et Fraunces (taille optique, G3-3) servies avec le site par Fontsource (ADR-0004).
- Tests : 21 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, règles FM déjà vues, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (0,60 % ; 0,61 % ; 2,37 % pour un seuil de 5 %).

### Changed
- Vite 8 et Tailwind CSS v4 (tokens dans `@theme`, ADR-0003) au lieu de Vite et Tailwind v3 ; publication sur GitHub Pages depuis la branche `gh-pages` (au lieu de Netlify et d'un `deploy.sh` qui publiait sur `main`).

### Removed
- Code de 2023 (restes du modèle Vite, dont `counter.js`, `deploy.sh`, `docs.md`) et README du starter.

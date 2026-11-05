# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 6 couleurs FM (aucune dérivée : tous les contrastes passent AA), la couleur des liens de l'attribution, les deux polices, les tailles de texte et les rayons. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Les longueurs des tokens sont écrites en rem (règle FM).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-green-500`, `--color-green-700`, `--color-black`, `--color-grey`, `--color-cream`, `--color-white` (valeurs `hsl()` du style-guide) |
| Attribution | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| Polices | `--font-display` (Fraunces, G3-3), `--font-sans` (Montserrat) ; chargement : ADR-0004 |
| Tailles de texte | `--text-category` (12 px, espacement 5 px), `--text-title` et `--text-price` (32 px, interligne 32 px), `--text-body` (14 px, interligne 23 px) et `--text-body-mobile` (interligne 22 px), `--text-old-price` (13 px), `--text-button` (14 px), `--text-attribution` (11 px) |
| Rayons | `--radius-card` (10), `--radius-button` (8) |

- Point de rupture : `sm` (640 px, valeur de Tailwind, Q-B5).

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans les classes, les styles et les blocs `<style>` de `index.html`, ni dans `src/style.css` hors des valeurs de tokens.

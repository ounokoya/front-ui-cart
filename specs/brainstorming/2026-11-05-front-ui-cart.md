# 2026-11-05 — Brainstorming : Product preview card component (refonte v2.0.0)

> SDL-FM 1.5.0, Pré-dev 1 et 2. Ancienne solution Newbie de 2023, **refaite dans le même dépôt** (étape B de la remise à niveau, lot 4, le dernier). Pas de points en plus : la solution est déjà comptée sur FM (https://www.frontendmentor.io/solutions/product-preview-card-component-93Wlm6snAB).

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape B ; Q1 même dépôt en v2.0.0, Q2 SDL-FM complète avec G2 et G3 par lot, Q3 GitHub Pages). Koya : « Oui, lance le lot 4 ».
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3), puis donne son accord avant la publication et la modification de la solution sur FM.
- **Lot 4 :** Product preview, seul.

## Existant (v1, 2023)

- Dépôt `front-ui-cart` : 11 commits du 2023-01-23, Vite + Tailwind v3, restes du modèle Vite (`counter.js`), un `deploy.sh` qui publiait `dist/` sur la branche `main`, README du starter, aucun test.
- Site sur une adresse Netlify de branche ; titre de la solution sur FM : « css positionnement, text alignment, font size ».
- **GitHub Pages déjà activé**, servi depuis la branche `main` (racine) : à faire pointer vers `gh-pages` à la publication (réglage du dépôt : accord de Koya à ce moment-là).

## Import (Phase 0)

- Ancien code retiré (historique gardé) ; starter actuel `frontendmentorio/product-preview-card-component` (branche `main`, 2026-03-30, archive GitHub publique) copié tel quel, sans le fichier Figma ; `AGENTS.md` et `CLAUDE.md` rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM) ; `.gitignore` du starter complété (dépendances, build, rapports de tests).
- Le starter ne fournit **aucun fichier de police** (Montserrat, Fraunces, Google Fonts) : choix du chargement à l'ADR.

## Analyse (Phase 2)

`specs/visuel/front-ui-cart-analyse.png` (et `.excalidraw`).

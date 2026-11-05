# 2026-11-05 — Rapport d'exécution : Product preview card component (v2.0.0)

> SDL-FM 1.5.0, Phases 7 et 8 (remise à niveau, étape B, lot 4). Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `pp-preview`, `http://localhost:4224/front-ui-cart/`).

## 1. Tests automatiques (Phase 7)

`npm test` : **33 réussis sur 33**.

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768 ; 639 mobile, 640 desktop ; 320 à 1440 sans défilement horizontal ; pied de page) | ✅ 10 / 10 |
| Contenu | S6 à S9 (catégorie, nom, description, prix lus distinctement, bouton, photo nommée et adaptée à la largeur ; tailles ; couleurs ; fond en thème clair et sombre) | ✅ 5 / 5 |
| Interactions | S10 à S14 (survol du bouton, mouvements réduits, clic sans effet, ordre au clavier, attribution) | ✅ 5 / 5 |
| Accessibilité | S15 : axe-core à 375 et 1440 px | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S16 (W3C Nu), S17 (html-validate au réglage de FM), S18 (eslint), longueurs en rem, aria-label, CSS logique ; fitness ADR-0003 et ADR-0004 | ✅ 8 / 8 |
| Visuel | S19 à S21 | ✅ 3 / 3 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 800 | `desktop.jpg` | 0,60 % | 5,0 % | 0,71 % |
| États 1440 × 800 (bouton survolé) | `etats.jpg` | 0,61 % | 5,0 % | 0,73 % |
| Mobile 375 × 1002 | `mobile.jpg` | 2,37 % | 5,0 % | 2,31 % |

Contrôle rouge fait avant le code (Phase 4) : 26 échecs pour la bonne raison sur le starter et 5 tests de garde ; fitness functions (Phase 5) : 2 échecs attendus.

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 768 px | 1440 px |
|---|---|---|---|
| Disposition | ✅ carte (12, 80) 296 × 729, nom sur 3 lignes, description sur 4, pas de défilement horizontal | ✅ carte desktop (84, 287) 600 × 450, photo à gauche, pied de page en bas | ✅ (tests S1, S5) |
| Polices, photo | ✅ Montserrat 500 et 700, Fraunces Variable (taille optique) ; photo mobile chargée | ✅ photo desktop chargée | ✅ |
| Clavier | — | ✅ Tab : « Add to Cart », contour 2 px Green 700 décalé de 3 px dès l'arrivée du focus | ✅ |

## 3. Écarts relevés et suites

Aucun écart.

Constat de la construction (Phase 6) : le prix visible partageait son élément avec son libellé masqué (« Current price: »), si bien qu'aucun élément n'avait « $149.99 » pour texte ; chaque prix visible a maintenant son propre élément (ADR-0005 précisé, commit `docs(adr)`).

## 4. En ligne (Phase 12)

`BASE_URL=https://ounokoya.github.io/front-ui-cart/ npx playwright test --workers=2` : **33 réussis sur 33**, écarts visuels identiques au local (0,60 %, 0,61 % et 2,37 %), sur la v2.0.0 déployée depuis la branche `gh-pages` (publication avec l'accord de Koya, 2026-11-05). GitHub Pages servait la branche `main` depuis 2023 : la source a été passée à `gh-pages` avant de pousser `main` (accord de Koya), pour que le site ne serve jamais les fichiers source.

## 5. Verdict

Conforme à la spec et à la maquette validée (G3). README fait (Phase 9) ; v2.0.0 en ligne. Prêt pour « Edit solution » sur FM (Phase 13).

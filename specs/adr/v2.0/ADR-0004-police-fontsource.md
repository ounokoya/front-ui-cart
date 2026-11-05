# ADR-0004 : Montserrat et Fraunces (taille optique) par Fontsource

## Statut
Accepté (2026-11-05) — même choix que les lots précédents (choix de Koya : Fontsource plutôt que le lien Google Fonts) ; G3-3 pour Fraunces.

## Contexte
Le starter ne fournit **aucun fichier de police** ; le guide de style renvoie à Google Fonts (Montserrat 500, 700 ; Fraunces 700). Fraunces est une police variable avec un axe de taille optique : la maquette a été calée avec la police de Google à taille optique automatique (nom et prix à ± 1 % à 32 px) ; les tests visuels comparent des pixels (S19 à S21).

## Options
| Option | Pour | Contre |
|---|---|---|
| **`@fontsource/montserrat` et `@fontsource-variable/fraunces` en version `opsz` (choisie)** | Les fichiers de Google Fonts, servis avec le site ; Fraunces garde l'axe de taille optique du calage ; aucun appel à un tiers | Deux dépendances ; la famille s'appelle « Fraunces Variable » |
| `@fontsource/fraunces` (instances fixes) | Fichiers plus simples | Une seule taille optique : le dessin à 32 px ne serait plus celui du calage |
| Lien Google Fonts | Ce que suggère le guide de style | Dépend du réseau et de Google (vie privée, captures des tests) |

## Décision
- `@fontsource/montserrat` (graisses 500 et 700) et `@fontsource-variable/fraunces` (`opsz`, graisse 700 utilisée) en dépendances d'exécution, importés sans `.css` (M38).
- `--font-display: "Fraunces Variable", serif` ; `font-optical-sizing: auto` (valeur par défaut).

## Conséquences
- Aucun appel à un serveur de polices.
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; Montserrat 500 et 700 et Fraunces Variable 700 se chargent.

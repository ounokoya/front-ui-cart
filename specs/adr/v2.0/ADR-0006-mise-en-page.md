# ADR-0006 : Mise en page — carte desktop centrée, carte mobile à 80 px du haut

## Statut
Accepté (2026-11-05) — sur le principe des lots 2 et 3 (ADR-0006).

## Contexte
Dès 640 px (Q-B5, G3-1), la carte 600 × 450 est centrée dans la fenêtre ((420, 175) à 1440 × 800, (84, 287) à 768 × 1024), photo à gauche (300 × 450). En dessous, la carte mobile de 350 px au plus (à 12 px des bords au moins) est à 80 px du haut, photo en haut (350 × 342), et la page peut défiler. L'attribution doit tenir sous la carte sans la déplacer (S5).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Dès `sm`, grille de 3 rangées `1fr auto 1fr` sur toute la hauteur ; en dessous, flux simple avec 80 px en haut (choisie)** | Carte centrée en desktop, à la place de l'image FM en mobile ; le pied de page ne superpose jamais la carte | Deux dispositions à tenir |
| Carte toujours centrée verticalement | Une seule règle | En mobile, la carte ne serait plus à 80 px du haut (écart visuel avec l'image FM) |

## Décision
- Dès `sm` : `body` en grille `grid-rows-[1fr_auto_1fr]` de hauteur minimale `100dvh`, `main` dans la 2e rangée, `footer` en bas de la 3e ; carte en deux colonnes de 300 px (`grid-cols-2`), 600 × 450.
- Sous `sm` : marge de 80 px en haut, carte de largeur `min(21.875rem, 100% - 1.5rem)` centrée, photo au-dessus du texte ; le pied de page suit la carte.
- Texte à 32 px des bords de la carte dans les deux dispositions ; bouton en bas du texte.

## Conséquences
- Positions S1 à S5 tenues par un seul point de rupture ; rien ne se superpose quelle que soit la hauteur de la fenêtre.

# Maquette Penpot — Product preview card component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 3 (remise à niveau, étape B, lot 4). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « Product preview ». **Validée (G3, 2026-11-05)** avec les propositions : carte desktop centrée en tablette dès 640 px (G3-1), seuils de 5 % (G3-2), Fraunces avec son axe de taille optique (G3-3).
> Décisions G2 appliquées : bouton sans action (Q-B1), ancien prix barré avec libellés masqués (Q-B2), photo décrite (Q-B3), « Perfume » au-dessus du `h1` (Q-B4), carte desktop dès 640 px (Q-B5).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, les images (adresse interne de Penpot) sont remplacées par les fichiers du starter (`media.json` ; l'icône du panier est posée en PNG dans Penpot et rendue avec son SVG), puis il est rendu dans Chromium avec Montserrat et Fraunces de Google Fonts, sans la largeur de texte imposée par Penpot (`NATURAL=1`).

**Fraunces (G3-3)** : c'est une police variable avec un axe de taille optique ; le calage (nom et prix à ± 1 % à 32 px) a été fait avec la police de Google à taille optique automatique. Le site doit charger une version qui garde cet axe.

## Bibliothèque

### Couleurs (groupe « Product preview »)

| Nom FM | Rôle | Valeur |
|---|---|---|
| Green 500 | Prix (4,67:1), fond du bouton (texte blanc 4,67:1) | `#3C8067` |
| Green 700 | Bouton survolé (11,33:1), contour de focus du bouton | `#1B4133` |
| Black | Nom du produit, texte de l'attribution | `#1C232B` |
| Grey | « Perfume », paragraphe, ancien prix (4,79:1) | `#6C7289` |
| Cream | Fond de page | `#F2EBE3` |
| White | Carte, texte du bouton | `#FFFFFF` |
| Lien (starter) | Liens de l'attribution (6,04:1 sur Cream) | `#3E52A3` |

Aucune couleur dérivée : tous les contrastes passent AA.

### Typographie

| Usage | Valeur |
|---|---|
| « PERFUME » | Montserrat 500, 12 px, majuscules, espacement des lettres 5 px |
| Nom (h1) | Fraunces 700, 32 px, interligne 32 px (3 lignes en desktop, 2 en mobile) |
| Paragraphe | Montserrat 500, 14 px, interligne 23 px en desktop, 22 px en mobile |
| Prix · ancien prix | Fraunces 700, 32 px · Montserrat 500, 13 px, barré, 20 px après le prix |
| « Add to Cart » | Montserrat 700, 14 px, blanc ; icône du panier 15 × 16, 11 px avant le texte |
| Attribution | Montserrat 500, 11 px |

### Mesures (px)

| Élément | Desktop 1440 × 800 | Mobile 375 × 1002 |
|---|---|---|
| Carte | 600 × 450 en (420, 175), centrée, rayon 10 | 350 × 750 en (12,5, 80), à 80 px du haut |
| Photo | 300 × 450 à gauche (fichier desktop 600 × 900) | 350 × 342 en haut (fichier mobile 700 × 684) |
| Texte | à 32 px du bord, 236 px de large | 286 px de large |
| « PERFUME » · nom · paragraphe · prix (capitales, sous le haut de la carte ; desktop : colonne de droite) | 36 · 73 · 194,5 · 314 | 377 · 418 · 506,5 · 618 |
| Bouton | 236 × 48 à (332, 370) de la carte, rayon 8 | 286 × 50 à (32,5, 668) |

Tablette 768 × 1024 (proposition G3-1) : la carte desktop centrée en (84, 287).

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Add to Cart | Normal (Green 500) · Survol (Green 700) · Focus clavier (contour 2 px Green 700 décalé de 3 px) |
| Attribution | Normal (texte Black, liens `#3E52A3` soulignés) · Survol (soulignement retiré) · Focus clavier |

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · Product preview | `desktop.jpg` | 0,71 % | 5,0 % |
| Desktop · états (bouton survolé) | `etats.jpg` | 0,73 % | 5,0 % |
| Mobile · Product preview | `mobile.jpg` | 2,31 % | 5,0 % |

Notes :
- Toutes les lignes de texte sont au pixel près de l'image ; la photo concorde (0,08 % de l'écran mobile). Le reste de l'écart vient du lissage des lettres, et de deux lignes du paragraphe que Montserrat rend 6 à 9 px plus larges que l'image (mêmes coupures).
- Écran sans image FM : **Tablette · Product preview (proposition G3-1)**.

## Prototype

| Parcours | Enchaînement |
|---|---|
| **Desktop · survol du bouton « Add to Cart »** | pointeur sur le bouton → écran des états ; pointeur qui sort → retour (fondu 200 ms) |

## Fichiers

- `desktop.png`, `desktop-etats.png`, `mobile.png`, `tablette.png` : rendus des 4 écrans ; `apercu-maquette.png`.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille).
- `composants.png` : les composants et leurs états (échelle 2).

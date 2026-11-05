# Spec — Product preview card component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 4 (remise à niveau, étape B, lot 4). Sources : analyse validée (G2) `specs/visuel/front-ui-cart-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-front-ui-cart.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

La fiche d'un parfum en promotion : sa photo, sa catégorie, son nom, une description, le prix actuel et l'ancien prix barré, et un bouton « Add to Cart ». Le challenge ne donne aucune action au bouton (Q-B1).

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Carte | tout ce qui suit, sauf le pied de page | `article` dans `main` |
| Photo (Q-B3) | `image-product-desktop.jpg` (600 × 900) dès 640 px, `image-product-mobile.jpg` (700 × 684) en dessous ; texte alternatif « Bottle of Gabrielle Essence Eau De Parfum among green leaves » | `picture` avec `img` |
| Catégorie (Q-B4) | « Perfume », affiché en majuscules | `p` |
| Nom | « Gabrielle Essence Eau De Parfum » | `h1` |
| Description | « A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL. » | `p` |
| Prix (Q-B2) | « $149.99 », précédé de « Current price: » masqué ; « $169.99 » barré, précédé de « Original price: » masqué | `p` ; ancien prix dans `s` |
| Bouton (Q-B1) | icône du panier décorative + « Add to Cart » ; sans action | `button type="button"` |
| Pied de page | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | Product preview card component » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`). Aucune couleur dérivée : tous les contrastes passent AA.

| Rôle | Couleur |
|---|---|
| Fond de page | Cream `hsl(30, 38%, 92%)` |
| Carte, texte du bouton | White |
| Nom, texte de l'attribution | Black `hsl(212, 21%, 14%)` |
| Catégorie, description, ancien prix | Grey `hsl(228, 12%, 48%)` (4,79:1) |
| Prix, fond du bouton | Green 500 `hsl(158, 36%, 37%)` (4,67:1) |
| Bouton survolé, contour de focus du bouton | Green 700 `hsl(158, 42%, 18%)` |
| Liens de l'attribution | `hsl(228, 45%, 44%)` (couleur du starter, 6,04:1) |

Catégorie : Montserrat 500, 12 px, espacement des lettres 5 px. Nom et prix : Fraunces 700, 32 px, avec sa taille optique (G3-3). Description : Montserrat 500, 14 px, interligne 23 px (22 px sous 640 px). Ancien prix : Montserrat 500, 13 px. Bouton : Montserrat 700, 14 px.

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 640 px (Q-B5) | La carte mobile : 350 px au plus et 12 px des bords au moins, centrée, à 80 px du haut ; photo en haut. |
| ≥ 640 px (G3-1) | La carte desktop 600 × 450 centrée dans la fenêtre ; photo à gauche (300 × 450). |

Positions de la maquette, à 1 px près :

| Élément | 1440 × 800 | 375 × 1002 | 768 × 1024 |
|---|---|---|---|
| Carte | (420, 175) 600 × 450 | (12,5, 80) 350 × 750 | (84, 287) 600 × 450 |
| Photo | (420, 175) 300 × 450 | (12,5, 80) 350 × 342 | — |
| Bouton | (752, 545) 236 × 48 | (45, 748) 286 × 50 | — |

Le pied de page ne déplace pas la carte. La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol (`etats.jpg`) | Focus clavier |
|---|---|---|---|
| Add to Cart | Green 500 | Green 700 | contour 2 px Green 700, décalé de 3 px |
| Liens du pied de page | soulignés | soulignement retiré | contour 2 px, décalé de 2 px |

| Événement | Effet |
|---|---|
| Clic ou Entrée sur Add to Cart | rien : pas de navigation, pas d'envoi (Q-B1) |

Le changement de couleur au survol peut être progressif ; toute transition est supprimée si `prefers-reduced-motion: reduce`.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Un seul `h1` : le nom du produit ; la catégorie est un paragraphe au-dessus (Q-B4). |
| A2 | La photo a un texte alternatif qui décrit le produit (Q-B3) ; l'icône du panier est décorative. |
| A3 | Les deux prix sont distingués à la lecture : « Current price: $149.99 », « Original price: $169.99 » (Q-B2). |
| A4 | Contraste AA (4,5:1) pour tous les textes, y compris le bouton au repos et survolé. |
| A5 | Ordre clavier : le bouton, puis les deux liens du pied de page ; focus visible (2 px au moins). |
| A6 | Le fond de la page est déclaré : le même en thème clair ou sombre de l'appareil. |
| A7 | Pas de transition si `prefers-reduced-motion: reduce`. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Carte | article | — (elle a la taille et la place de la carte : S1 à S3) |
| Photo | img | « Bottle of Gabrielle Essence Eau De Parfum among green leaves » |
| Nom | heading (niveau 1) | « Gabrielle Essence Eau De Parfum » |
| Bouton | button | « Add to Cart » |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 800   Then carte (420, 175) 600 × 450 ; photo (420, 175) 300 × 450 ; bouton (752, 545) 236 × 48
S2  Given 375 × 1002   Then carte (12,5, 80) 350 × 750 ; photo (12,5, 80) 350 × 342 ; bouton (45, 748) 286 × 50
S3  Given 768 × 1024   Then carte (84, 287) 600 × 450 ; given 639 px  Then la carte mobile ; given 640 px  Then la carte desktop (Q-B5)
S4  Given 320, 375, 639, 640, 768, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 800   Then le pied de page est sous la carte, centré, dans la fenêtre

Contenu
S6  Given la page  Then « Perfume » au-dessus du h1 (seul titre de niveau 1) ; la description ; « Current price: $149.99 » ;
                   « Original price: $169.99 » dans un s ; bouton « Add to Cart » type="button" ;
                   photo nommée (A2), desktop dès 640 px, mobile en dessous, chargée ; icône du panier non exposée
S7  Given la page  Then catégorie 12 px en majuscules espacée de 5 px ; nom et prix Fraunces 32 px ;
                   description 14 px (interligne 23 px, 22 px sous 640 px) ; ancien prix 13 px barré ; bouton 14 px
S8  Given la page  Then couleurs de la §3 : catégorie, description et ancien prix Grey ; nom Black ; prix Green 500 ;
                   bouton Green 500 et texte White ; carte White
S9  Given l'appareil en thème clair ou sombre  Then le fond de la page reste Cream (A6)

Interactions
S10 Given le bouton  When je le survole  Then fond Green 700 ; When je le quitte  Then Green 500
S11 Given prefers-reduced-motion: reduce  When je survole le bouton  Then aucune transition n'est jouée
S12 Given le bouton  When je clique ou appuie sur Entrée  Then l'adresse ne change pas et rien n'est envoyé (Q-B1)
S13 Given la page  When j'appuie sur Tab trois fois  Then le bouton (contour Green 700), « Frontend Mentor », « Koya Esdras »,
                   chacun avec un contour de 2 px au moins
S14 Given le pied de page  Then liens soulignés, bonnes adresses ; When je survole un lien  Then son soulignement disparaît

Accessibilité et règles FM
S15 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S16 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S17 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S18 Given le JavaScript du dépôt  Then eslint au réglage de FM : aucune erreur
    (et les tests de garde des règles FM déjà vues : longueurs en rem, aria-label, CSS logique)

Visuel (seuils calibrés en Phase 3, G3-2)
S19 1440 × 800 vs desktop.jpg ≤ 5,0 %
S20 1440 × 800, bouton survolé vs etats.jpg ≤ 5,0 %
S21 375 × 1002 vs mobile.jpg ≤ 5,0 %
```

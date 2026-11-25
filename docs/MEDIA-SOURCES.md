# Sources médias — inventaire V6

Date : **25 novembre 2026**  
Toutes les images sont **locales** (`public/images/`) — **pas de hotlink**.  
Les crédits / licences vivent **ici uniquement** — jamais affichés dans l’UI publique.

## Photos authentiques (client / établissement)

| Fichier | Usage | Source |
|---------|-------|--------|
| `brand/logo-mark.png` | Nav / footer (emblème) | Logo établissement |
| `brand/logo-wordmark.png` | Asset OG / composite | Wordmark |
| `brand/logo-le-desert.png` | Composite / OG | Emblème + wordmark |
| `venue/equipe-facade.jpg` | Histoire, galerie, contact | Photo établissement |
| `venue/salon-touareg.jpg` | Hero intérieur, histoire, CTA | Photo établissement |

Slogan enseigne : **« Le goût authentique du Nord, au cœur du Mali »**.

## Magnific (ex-Freepik) — photos gratuites V6

Téléchargements via bouton / API `api/regular/download` (fichier propre, sans filigrane preview).  
Licence : **Magnific Free License** (usage commercial autorisé ; attribution recommandée « Designed by Freepik / Magnific » dans ce fichier uniquement).  
Dimensions web : redimensionnées ≤ 2000 px (côté long).

| Fichier local | Sujet | Resource ID | Page source | Usage |
|---------------|-------|-------------|-------------|-------|
| `culture/the-femmes-nord.jpg` | Femmes / thé / hospitalité du Nord | `2059677` | [magnific](https://www.magnific.com/fr/photos-gratuite/femmes-musulmanes-buvant-du-the_2059677.htm) | Thé culture Nord (hero slideshow, histoire, galerie, essence) |
| `culture/touareg-the.jpg` | *copie web* de `the-femmes-nord.jpg` | idem | idem | Alias compat chemins |
| `culture/tapis-marche-maroc.jpg` | Tapis marché / motifs géométriques | `4246642` | [magnific](https://www.magnific.com/fr/photos-gratuite/tapis-marche-au-maroc_4246642.htm) | Motifs & artisanat, galerie |
| `culture/touareg-tapis-selle.jpg` | *copie web* de `tapis-marche-maroc.jpg` | idem | idem | Alias compat |
| `dishes/portrait-plat-communal.jpg` | Portrait / plat partagé sur tapis | `28782624` | [magnific](https://www.magnific.com/fr/photos-gratuite/portrait-homme-plat-poutine_28782624.htm) | Cuisine du Nord, galerie |

### Recherches Magnific documentées (rate-limit API)

Requêtes explorées (Playwright) : `tapis berbere`, `tapis nord du mali`, `restaurant touareg`, `plats nord du mali`, `tente desert`, `theiere`.  
Résultats libres pertinents repérés (téléchargement différé — quota anonyme) :

- `tapis-mural-oriental` — resource `8516401`
- `tapis-ait-ben-haddou` — `134137634` / `136763132`
- `verser-the` — `2059775`
- `tajine-couscous` — `6677354`
- `couscous-poisson` — `7570994`
- `plat-poterie` — `12398946`
- `poterie-marche` — `4246632`
- `dunes-sahara` — `15986516`

## Plats HD (héritage V5, toujours en galerie)

| Fichier | Sujet | Dimensions | Licence / source |
|---------|-------|------------|------------------|
| `dishes/mafe-malien.jpg` | Mafé / peanut stew | **2400×1600** | Wikimedia / Flickr |
| `dishes/mafe-boeuf.jpg` | Peanut stew | **1632×1224** | Wikimedia |
| `dishes/yassa-poisson.jpg` | Poulet yassa + riz | **2048×1536** | Wikimedia |
| `dishes/plat-touareg.jpg` | Couscous / plat sahélien | **1800×2400** | Unsplash License |
| `dishes/plats-africains.jpg` | Table dressée | **1920×1280** | Unsplash / Pexels |
| `dishes/grillade.jpg` | Grillades | **1600×2400** | Unsplash License |

## Culture / artisanat (hors Magnific V6)

| Fichier | Sujet | Licence |
|---------|-------|---------|
| `culture/touareg-artisanat.jpg` | Artisanat | CC BY-SA — Garrondo / Commons |
| `culture/touareg-panier.jpg` | Vannerie | Wikimedia Commons |
| `culture/tapis-geometrique.jpg` | Textile géométrique | Unsplash |
| `culture/natte-paille.jpg` | Natte / tissage | Unsplash |

## Textures dérivées

| Fichier | Base | Usage |
|---------|------|-------|
| `textures/rug-bg-night.jpg` | salon-touareg | Fonds sombres |
| `textures/rug-bg-cream.jpg` | salon-touareg | Fonds clairs |
| `textures/rug-detail-warm.jpg` | Crop salon | CTA |
| `textures/rug-selle-treated.jpg` | Ancien tapis-selle | Fonds culture |

## Règle éditoriale V6

- Photos `venue/` et `brand/` = **authentiques**.
- Culture / plats / désert = inspirations — **sans labels « illustrative / Wikimedia / Magnific » dans l’UI**.
- Gaps NAP / validation propriétaire = **docs/RESEARCH-*.md uniquement**.
- Pas de hotlink Magnific / Freepik.

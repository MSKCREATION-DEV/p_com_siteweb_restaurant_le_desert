# Documentation technique — Restaurant Le Désert

Date : **25 novembre 2026**

## Stack

| Couche | Choix |
|--------|-------|
| Framework | **Astro 7** (SSG) + TypeScript strict |
| Styles | Tailwind CSS **4** (`@tailwindcss/vite`) + `src/styles/tokens.css` |
| Motion | Vanilla TS (`src/lib/motion.ts`) + GSAP disponible en dépendance |
| SEO | Meta OG, canonical, `@astrojs/sitemap`, Schema.org Restaurant (champs sûrs) |
| Node | ≥ 22.12 |

Décision stack : `docs/FRAMEWORK_CHOICE.md`.

## Structure

```
src/
  components/{layout,navigation,sections,ui}/
  data/          # contenu typé (prêt Directus)
  layouts/BaseLayout.astro
  lib/{seo,motion}.ts
  pages/         # /, /notre-histoire, /carte, /galerie, /contact
  styles/{tokens,global}.css
  types/content.ts
public/images/{hero,dishes,desert,restaurant,gallery,brand,og}/
docs/            # recherche, DA, médias, QA
```

## Commandes

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # astro check
npm run build    # check + build → dist/
npm run preview  # servir dist/
```

## Contenu & CMS

- Source de vérité runtime : `src/data/*.ts`
- Statuts : `confirmed | secondary | unconfirmed | placeholder`
- CTA téléphone / WhatsApp : **uniquement** si `status === 'confirmed'`
- Formulaire contact : mailto progressif — **pas** de confirmation de table

## Domaine

Config actuelle `astro.config.mjs` : `site: https://www.restaurantdudesert.com` (référencé Maps). À aligner avec le domaine final client.

## Sources docs libs

- Astro : Context7 `/withastro/docs` — Tailwind via `astro add` / `@tailwindcss/vite`
- Tailwind 4 : `@theme` + `@import "tailwindcss"`

# Restaurant Le Désert — site officiel

Vitrine gastronomique premium (MSK Création) — **Astro + TypeScript + Tailwind 4**.

## Démarrage

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Node ≥ 22 requis.

## Pages

| Route | Rôle |
|-------|------|
| `/` | Accueil immersif |
| `/notre-histoire` | Récit (placeholders honnêtes) |
| `/carte` | Structure de carte (sans plats inventés) |
| `/galerie` | Atmosphère (images illustratives) |
| `/contact` | Demande de contact / table |

## Documentation

- [`AGENTS.md`](AGENTS.md) — règles agents
- [`docs/DEPLOY.md`](docs/DEPLOY.md) — **preview Vercel uniquement** (pas de prod)
- [`docs/RESEARCH-RESTAURANT.md`](docs/RESEARCH-RESTAURANT.md) — recherche & gaps client
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — tokens & DA
- [`docs/DESIGN-DIRECTION.md`](docs/DESIGN-DIRECTION.md) — références
- [`docs/TECHNICAL-DOCUMENTATION.md`](docs/TECHNICAL-DOCUMENTATION.md) — stack
- [`docs/MEDIA-SOURCES.md`](docs/MEDIA-SOURCES.md) — licences images
- [`docs/QA-REPORT.md`](docs/QA-REPORT.md) — QA

## Déploiement

Preview seulement pour l’instant (`dev` → Vercel Preview). **Ne pas** `vercel --prod` ni assigner un domaine production. Détails : [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Contenu

Ne pas inventer menu, prix, horaires, téléphone ou avis. Voir statuts dans `src/data/`.

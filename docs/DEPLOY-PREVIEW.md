# Preview Vercel — Restaurant Le Désert

**Preview uniquement.** Pas de production client pour l’instant.

Projet lié : `restaurant-le-desert` (`prj_0OaKgA2EUnmcHodI2MeFruo2nO1t`)  
Équipe : `mskcreations-projects`

## Commandes

```bash
# Build local
npm run check && npm run build

# Preview CLI (projet déjà lié via .vercel/ — SANS --prod)
vercel

# Jamais
# vercel --prod
```

Via Git : `git push -u origin dev` → Vercel crée un **Preview** sur `dev`.

## URLs

| Type | URL |
|------|-----|
| Preview récente | https://restaurant-le-desert-8m22vzkuc-mskcreations-projects.vercel.app |
| Alias projet | https://restaurant-le-desert.vercel.app |
| Inspector | https://vercel.com/mskcreations-projects/restaurant-le-desert |

SSO Vercel peut être requis pour ouvrir l’URL (Deployment Protection).

## Ne pas faire (prod)

- `vercel --prod`
- Promouvoir un déploiement en Production dans le dashboard
- Ajouter un domaine custom / DNS client
- Traiter l’alias `*.vercel.app` comme site public client

Note : le **premier** déploiement d’un projet neuf peut être marqué Production même sans `--prod`. Les suivants sans `--prod` sont des Preview (`target: null`). Ne pas promouvoir.

## Suite (hors scope)

Après validation client : domaine final, go-live prod, doc dédiée.

Voir aussi [`DEPLOY.md`](./DEPLOY.md) (même politique, détail Git Integration).

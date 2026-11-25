# Déploiement — Preview uniquement (pas de production)

Site **Astro SSG** (sortie `dist/`). Vercel détecte Astro sans adapter pour un site statique.

## Objectif MSK

| Environnement | Branch | Action |
|---------------|--------|--------|
| **Preview** | `dev` | Autorisé — revue client / QA |
| **Production** | — | **Interdit pour l’instant** — pas de `vercel --prod`, pas d’alias domaine prod |

## Prérequis

- Repo Git lié au projet Vercel (Git Integration) **ou** CLI `vercel` authentifiée localement.
- Build local OK : `npm run build`.

## Option A — Git Integration (recommandé)

1. Pousser la branche `dev` :
   ```bash
   git push -u origin dev
   ```
2. Dans le dashboard Vercel → Project → **Settings → Git** :
   - Production Branch : laisser `main` **mais** désactiver les déploiements Production, **ou** ne pas connecter de domaine prod, **ou** ne pas pousser `main` tant que la prod n’est pas validée.
   - Les pushes sur `dev` créent des **Preview Deployments**.
3. Ouvrir l’URL preview fournie par Vercel (commentaire Git / dashboard Deployments).

## Option B — CLI (preview only)

```bash
npm run build
vercel          # SANS --prod → preview
# jamais : vercel --prod
```

Si le projet n’est pas lié :

```bash
vercel link     # interactif — à faire par l’humain
vercel          # preview
```

## `vercel.json`

Fichier minimal présent à la racine pour figer le framework Astro. Pas d’adapter `@astrojs/vercel` requis pour du SSG pur.

## Checklist avant preview

- [ ] Pas de secrets (`.env*`) dans Git
- [ ] Contenu « à confirmer » visible si NAP / menu non validés
- [ ] `npm run check` + `npm run build` OK
- [ ] **Pas** d’assignation de domaine production
- [ ] **Pas** de promotion Production depuis le dashboard

## Après validation client

Alors seulement : trancher domaine, activer Production, documenter le go-live (hors scope actuel).

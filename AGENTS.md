# AGENTS.md — Restaurant Le Désert

Instructions pour tout agent (Cursor / humain) sur ce dépôt.

## Mission

Site web vitrine du restaurant **Le Désert** (MSK Création).  
Stack **retenue** : **Astro + TypeScript + Tailwind 4** — voir [`docs/FRAMEWORK_CHOICE.md`](docs/FRAMEWORK_CHOICE.md).

## Sources de vérité

1. Brief client / charte / assets officiels (à déposer dans `docs/` et `public/`).
2. Recherche documentée : [`docs/RESEARCH-RESTAURANT.md`](docs/RESEARCH-RESTAURANT.md).
3. Design : [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md), [`docs/DESIGN-DIRECTION.md`](docs/DESIGN-DIRECTION.md).
4. Contenu runtime : `src/data/*.ts` (UI ≠ content ≠ data).
5. Ce fichier + `.cursor/rules/*`.
6. Agent Skills : `.cursor/skills/*/SKILL.md`.

## Règles non négociables

- Ne **pas** inventer menu, prix, horaires, adresse, photos ou copy absents des sources validées.
- Contenu douteux → marquer « à confirmer » / statut `secondary|unconfirmed|placeholder`.
- Téléphone / WhatsApp en CTA **seulement** si `status === 'confirmed'`.
- Formulaire = demande de contact / table — **pas** de confirmation automatique.
- Scope strict : pas de backend / paiement / CMS inventés sans brief.
- Skills auto : lire et suivre avant le travail non trivial.

## Commandes

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Style MSK

Voir `.cursor/rules/msk-coding-style.mdc` et [`docs/STYLE_PROFILE.md`](docs/STYLE_PROFILE.md).

## Déploiement

- Preview Vercel depuis `dev` uniquement — voir [`docs/DEPLOY-PREVIEW.md`](docs/DEPLOY-PREVIEW.md).
- **Pas de production** tant que le client n’a pas validé (pas de `vercel --prod`, pas de domaine prod).

## Prochaines étapes (client)

1. Logo + photos authentiques.  
2. Valider NAP, horaires, téléphone, WhatsApp, e-mail.  
3. Remplir histoire + carte dans `src/data/`.  
4. Trancher domaine final (après preview validée).

# Astro vs Next.js — Restaurant Le Désert

Statut : **décidé**.

## Recommandation profil MSK

Pour un **site vitrine restaurant** (menu, ambiance, contact, demande de réservation / WhatsApp), le pattern MSK récent pointe vers **Astro** :

| Projet | Nature | Stack |
|--------|--------|-------|
| KARAM FC | Fast-food Bamako, commande WhatsApp | Astro 7 + Tailwind 4 |
| Prosperity Travel (PPM) | Agence voyage vitrine | Astro 7 + Tailwind 4 |
| Hôtel Les Colonnes | Proposition vitrine | Astro 5 |
| Site MSK Création | Corporate i18n SSR + Figma strict | React Router 8 SSR |
| ERP MSK | App métier auth/DB | Next.js + Prisma + Supabase |

## Quand choisir Astro

- Contenu surtout statique (pages, menu, galerie).
- SEO + perf Mali (peu de JS).
- Formulaire contact / WhatsApp sans back-office.
- Alignement avec Karam / Prosperity / Colonnes.

## Quand choisir Next.js

- Compte client, réservations serveur, back-office léger.
- Auth, DB, API Routes, intégrations SaaS lourdes.
- Même stack que l’ERP pour réutiliser patterns UI Radix / Server Actions.

## Critères de décision

- [ ] Réservation en ligne avec état serveur ? → **non en v1** (demande de contact honnête)
- [ ] Menu dynamique / CMS / multi-langue dès v1 ? → **non** (data typée ; CMS Directus plus tard)
- [ ] Panier / commande payante en ligne ? → **non**
- [x] Sinon → **Astro SSG** par défaut.

## Décision

**Astro + TypeScript** — **25 novembre 2026**.

**Motif :** vitrine gastronomique premium (pages magazine, galerie, carte, contact) sans backend de réservation ni auth. Alignement stack avec **Karam FC** et **Prosperity Travel** (Astro SSG + Tailwind 4 + JS client minimal), perf adaptée au contexte Mali, SEO natif, séparation data/rendu prête pour un CMS Directus ultérieur.

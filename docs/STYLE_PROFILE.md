# Profil de code — synthèse projets MSK

Analyse basée sur le code et les rules de : `erp_msk`, `site_web_msk`, `site_web_PPM` (Prosperity), `karamfc`.

## Principes récurrents

1. **Gouvernance agent** — `AGENTS.md` + `.cursor/rules` toujours-on + skills versionnées ; l’humain ne rappelle pas les process.
2. **Spec-first** — SPEC / CONSTRAINTS / charte avant UI ; ambiguïté → question documentée, pas d’invention.
3. **Séparation stricte** — UI / content / data / i18n / server-only.
4. **Tokens & marque** — CSS variables / `tokens.css` / brand lib ; logos fichiers officiels.
5. **Incrémental** — une section / un composant ; gates build/typecheck.
6. **Feedback UX** — pas d’`alert()` natif ; toasts / états loading ; UI ne freeze jamais (ERP).
7. **Sécurité surface** — RLS, auth MDP, FormData, secrets hors client (ERP) ; formulaires contact hardenés (vitrines).
8. **Perf locale** — images compressées, JS minimal sur vitrines, Node ≥ 22 pour Astro récent.

## Patterns techniques

- **Astro** : composants `.astro` par défaut ; îlots `client:` seulement si besoin (panier, filtres).
- **Tailwind 4** via `@tailwindcss/vite` sur les vitrines récentes.
- **Zod** pour valider data/menu quand présent (Karam).
- **WhatsApp** comme canal conversion (Karam, Prosperity) plutôt que checkout custom.
- **Figma → code** strict sur MSK corporate (pas d’UI inventée mobile).
- **ERP** : Next App Router, listes paginées, steppers, headers de fiche, Prisma v7 + adapter pg.

## Design patterns nommés

| Pattern | Où |
|---------|-----|
| Layout shell + slots SEO | Prosperity, Karam, Colonnes |
| Content collections / data typée | Karam `src/data`, MSK `app/content` |
| Progressive enhancement / îlots | Astro sites |
| Gate scripts par phase | ERP `gate:phase*` |
| Skill routing table | ERP + Karam `agent-skills.mdc` |
| Primauté marque sur best-practice générique | MSK `agent-skills.mdc` vs Addy |

## Anti-patterns refusés

- Inventer copy / images / prix.
- Cards décoratives dans le hero.
- Violet/glow « AI default », Inter/Roboto par défaut.
- Big-bang multi-pages sans validation visuelle.
- Resync Addy qui écrase skills customs projet.

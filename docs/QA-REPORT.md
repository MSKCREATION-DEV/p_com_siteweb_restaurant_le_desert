# Rapport QA — V2 Magazine nocturne

Date : **25 novembre 2026**  
Build : `npm run check` ✅ · `npm run build` ✅ (5 pages)

---

## 1. Captures

| Page | Desktop | Mobile |
|------|---------|--------|
| Accueil | `docs/qa-screenshots-v2/accueil-desktop.png` | `…/accueil-mobile.png` |
| Notre histoire | `…/notre-histoire-desktop.png` | `…/notre-histoire-mobile.png` |
| La carte | `…/carte-desktop.png` | `…/carte-mobile.png` |
| Galerie | `…/galerie-desktop.png` | `…/galerie-mobile.png` |
| Contact | `…/contact-desktop.png` | `…/contact-mobile.png` |
| Accueil full | `…/accueil-desktop-full.png` | — |

Références : `docs/refs-screenshots/{sphere-tim-raue,prideofmaui,lfdriscoll}-desktop.png`

---

## 2. Comparaison vs captures V1 rejetées

| Critère | V1 (rejet) | V2 |
|---------|------------|-----|
| Composition hero | Titre gauche + 2 boutons + dunes/montagnes voyage | Plat full-bleed, wordmark **droite**, **1** CTA éditorial |
| Identité | Cream + terracotta + Cormorant | Encre / indigo / cuivre / lin + Fraunces / Newsreader / Manrope |
| Photo | Univers trek | Gastronomie dominante + Sahel Mali Wikimedia |
| Histoire | Texte vide beige | Blocs + photos (table, Gao, Tombouctou–Gao) |
| Carte | Liste placeholder | Inspirations avec photos (mafé, etc.) labellisées |
| Galerie | — | Colonnes masonry asymétriques |
| Contact | Pas de tél. | Tél. + WhatsApp + horaires **source publique** |
| UX | Template resto | Magazine nocturne, CTA outline, formulaire → WhatsApp |

Verdict : **différence fondamentale** (composition, identité, rythme, typo, narration, photo, UX) — pas un restyling couleur.

---

## 3. A11y / sécurité / perf (revue courte)

- Skip link, focus copper, labels formulaire, `prefers-reduced-motion` + GSAP `matchMedia`
- Pas d’e-mail inventé ; WhatsApp prérempli côté client ; maxlength sur champs
- Images locales, fonts `display=swap`, JS motion dynamique
- Schema.org : pas de téléphone/avis non confirmés

---

## 4. Gaps restants (introuvables après recherche)

Logo, photos du lieu, menu officiel, e-mail, réseaux, histoire propriétaire, adresse rue.

# Direction artistique — Le Désert V2

Date : **25 novembre 2026**  
Références étudiées via WebFetch (+ captures Playwright dans `docs/refs-screenshots/` quand disponibles).  
**Principe :** décisions, jamais copie de layout / copy / assets.

---

## 1. Sphere Tim Raue (tv-turm.de/sphere-tim-raue/)

### Ce qui frappe
- L’**expérience du lieu** (hauteur, panorama) précède le menu.
- Menu présenté comme **récit éditorial** (plats nommés, typo display), pas grille e-commerce.
- Citation chef = voix d’autorité (pas faux avis clients).
- CTA réservation clair, hors clutter hero.

### ≥5 décisions + adaptation Le Désert

| # | Décision | Adaptation |
|---|----------|------------|
| 1 | Lieu immersif d’abord | Hero = immersion table/nuit, pas brochure voyage |
| 2 | Menu = composition typographique | `/carte` : colonnes magazine + photos plats illustratives labellisées |
| 3 | Un job / section | Accueil narratif : table → univers → lieu → contact |
| 4 | Voix d’autorité honnête | Pas de citation inventée ; blocs « documentés / à confirmer » |
| 5 | Densité premium | Peu d’éléments par viewport ; air généreux |
| 6 | CTA unique dominant | Un seul CTA principal par section (pas 2 boutons égaux) |

---

## 2. Pride of Maui (prideofmaui.com)

### Ce qui frappe
- Photographie **environnement réel** immersive.
- Proposition claire + preuves concrètes (années, bateaux) — pas fake social proof.
- Sections « différence » en **liste narrative**, pas 6 cards égales.

### ≥5 décisions + adaptation

| # | Décision | Adaptation |
|---|----------|------------|
| 1 | Ancre visuelle réelle | Médias Sahel Mali (Wikimedia) + cuisine Ouest-Afrique labellisée |
| 2 | Hero budget strict | Marque + une phrase + un geste CTA — pas stats / badges |
| 3 | Preuves seulement si vraies | Tél./horaires Maps = « source publique — à confirmer » ; pas de notes 3.7 |
| 4 | Différence en récit | Page histoire = univers Sahel documenté, pas inventaire de features |
| 5 | Confiance opérationnelle | Contact : téléphone + WhatsApp publics + formulaire demande |
| 6 | Photo > décoration | Galerie asymétrique, pas mosaïque Instagram générique |

---

## 3. LF Driscoll (lfdriscoll.com)

### Ce qui frappe
- Corporate **premium** : typo assurée, rythme large, peu de décoration.
- Nav sobre ; footer distinct.
- Contrastes de plans sans monochrome crème.

### ≥5 décisions + adaptation

| # | Décision | Adaptation |
|---|----------|------------|
| 1 | Contrastes de plans | Nocturne / lin / indigo — jamais beige↔marron mécanique |
| 2 | Nav élégante | Liens texte + CTA cuivre discret ; mobile plein écran |
| 3 | Footer signature | NAP secondaire + navigation + crédit MSK |
| 4 | Densité maîtrisée | Max 2–3 motions intentionnelles |
| 5 | Hiérarchie typo forte | Display éditorial dominant ; UI secondaire |
| 6 | Pas de cards décoratives | Cards uniquement si interaction (lien galerie) |

---

## 4. Trois directions artistiques (réellement différentes)

### Direction A — « Ciné oasis »
- **Concept :** générique de film — silhouette, flare, lettre géante.
- **Palette :** noir profond, ambre film, grain.
- **Typo :** display condensé (Syne) + mono UI.
- **Photo :** dunes Mali grand angle, contre-jour.
- **Hero :** titre centré plein cadre, **aucun bouton** — scroll invite.
- **Nav :** minimal invisible puis sticky noir.
- **Risque :** trop « voyage / cinéma » ; gastronomie secondaire.

### Direction B — « Magazine nocturne » ✅ CHOISIE
- **Concept :** revue gastronomique de nuit — assiette au centre, désert = langage lumière/texture.
- **Palette :** encre `#0B0908`, indigo nuit `#182230`, cuivre `#C4783A`, lin froid `#E8E4DC`, or pâle `#D6C6A8`.
- **Typo :** **Fraunces** (display) + **Newsreader** (corps) + **Manrope** (UI).
- **Photo :** culinaire dominante (assiette sombre, épices, mafé Wikimedia) ; dunes Mali en texture secondaire.
- **Hero :** full-bleed **plat** ; wordmark « Le Désert » en overlay massif asymétrique (bas-droite / traversant) ; **un seul** CTA éditorial (« Demander une table → ») ; pas de duo de boutons.
- **Nav :** wordmark + liens caps fins ; CTA cuivre outline (pas pill orange).
- **Intérieurs :** colonnes asymétriques, pull-quotes, images débordantes, filets or pâle.

### Direction C — « Photo immersive documentaire »
- **Concept :** reportage — plein cadre photo, légendes, peu de UI.
- **Palette :** noir/blanc + un accent terre.
- **Typo :** grotesk éditoriale (Space Grotesk) + serif corps.
- **Photo :** 90 % image, texte minimal.
- **Hero :** photo Mali dunes edge-to-edge, marque en coin.
- **Risque :** site « galerie voyage » ; table / réservation faibles.

---

## 5. Choix final : Direction B — Magazine nocturne

**Pourquoi :**
1. Rompt radicalement avec le template V1 (cream + terracotta + hero voyage + 2 CTA).
2. Place la **gastronomie au centre** (critère de fin mission).
3. Le désert reste **langage artistique** (texture, indigo crépuscule, Wikimedia Tombouctou–Gao) sans pastiche lodge.
4. Adapté à un contenu encore partiel : le magazine sait vivre avec « à confirmer » sans page vide.

### Motions (2–3)
1. Entrée hero : fade + léger translate du wordmark (GSAP).  
2. Reveal scroll sections `[data-reveal]` (opacity/y).  
3. Scale très légère image hero au scroll (désactivé si `prefers-reduced-motion` via `gsap.matchMedia`).

### Anti-patterns refusés
- Hero titre-gauche + 2 boutons  
- Cream `#F7F1E8` + terracotta serif AI  
- Inter / Roboto / purple glow / pills / cards hero  
- Montagnes génériques type V1 comme image dominante  

Voir `docs/DESIGN-SYSTEM.md` pour tokens et composants.

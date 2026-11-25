# Design System V4 — Culture Touareg / Sphere-like

Date : **25 novembre 2026**  
Direction : hospitalité touareg + gastronomie (pas site voyage).  
Logo officiel : `public/images/brand/logo-le-desert.png` (PNG transparent, détourage V4).  
Inspiration layout : Sphere Tim Raue (split sombre, soft mask, accents spray) — **couleurs Désert**, pas rose Berlin.

---

## 1. Palette (extraite du logo + salon tente)

| Token | Hex | Rôle |
|-------|-----|------|
| `--color-ink` | `#1A100C` | Texte fort |
| `--color-chocolate` | `#3D2117` | Fonds sombres, footer, nav sticky |
| `--color-night` | `#241610` | Sections sombres |
| `--color-desert-red` | `#A62B1F` | CTA, « Désert », accents |
| `--color-desert-red-hover` | `#8A2218` | Hover CTA |
| `--color-copper` | `#C45A28` | Accent secondaire |
| `--color-sun` | `#F29130` | Ambre soleil logo, liens sur sombre |
| `--color-amber` | `#E8A04A` | Accent chaud |
| `--color-gold` | `#E8C98A` | Méta sur sombre |
| `--color-cream` / `--color-linen` | `#FFF8F0` / `#F3EBE0` | Fonds clairs (pas beige AI générique) |
| `--color-linen-deep` | `#E6D9C8` | Bandes secondaires |
| `--color-white` | `#FFF8F0` | Texte sur sombre |
| `--color-muted` | `#6B5344` | Secondaire |

Texture : `--texture-touareg` (SVG losanges subtils) — classe `.texture-touareg`.

### Rythme sections
1. Hero full-bleed salon tente + vignette équipe asymétrique  
2. Essence — média bleed + panneau flottant (pas split 50/50)  
3. Night — équipe + assiette décalée  
4. CTA — colonne média + copy  
5. Chocolate — footer + crédit MSK  

---

## 2. Typographie

| Rôle | Famille | Notes |
|------|---------|-------|
| Display | **Fraunces** | Marque, H1 |
| Corps | **Newsreader** | Lecture |
| UI | **Manrope** | Nav, boutons, labels |

Échelle : display `clamp(3.2rem,10vw,7.5rem)` ; H2 `clamp(2rem,4vw,3.1rem)` ; body 1.0625rem / 1.65.

---

## 3. Composants

| Composant | Règle |
|-----------|-------|
| BrandLogo | PNG officiel ; plaque crème sur fonds sombres pour contraste AA |
| Hero | Split sombre Sphere-like ; **pas de double marque** (H1 ≠ « Le Désert ») ; slideshow + spray sable ; **1 CTA** |
| Sections | Fonds tapis traités (`textures/rug-*`) ; accents `overlays/spray-sable-*` ; soft mask images |
| Boutons | Radius 0 ; primary desert-red |
| Cards | Interdites hors interaction |
| Nav | Logo réel + liens sur pastille contrastée ; CTA filled |
| Footer crédit | « Design by » + `msk-creation.svg` (pattern Prosperity) |

---

## 4. Motion

GSAP + `prefers-reduced-motion` : hero fade, reveal scroll, léger scale image.

---

## 5. Fichiers

`src/styles/tokens.css` + `@theme` dans `global.css`.  
Brand : `public/images/brand/` · Venue : `public/images/venue/`.

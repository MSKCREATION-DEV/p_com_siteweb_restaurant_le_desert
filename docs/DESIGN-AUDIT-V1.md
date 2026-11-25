# Audit critique — Design V1

Date : **25 novembre 2026**  
Captures rejetées : `assets/Capture…10.07.16` (accueil), `assets/Capture…10.07.07` (notre-histoire).  
Verdict : **template restaurant générique** — pas une DA de studio gastronomique.

---

## 1. Accueil (capture hero)

| Critère | Observation V1 | Pourquoi c’est médiocre |
|---------|----------------|-------------------------|
| Composition hero | Image full-bleed + texte bas-gauche + 2 CTA côte à côte | Pattern « ThemeForest restaurant » #1 — interchangeable avec n’importe quel resto |
| Brand | « Le Désert » en serif blanc classique, taille hero correcte mais **layout générique** | La marque ne *possède* pas le cadre : sans le mot, ce pourrait être n’importe quel « desert lodge » |
| Image | Montagnes / crêtes rocailleuses sépia (look « voyage aventure ») | Univers **voyage / randonnée**, pas **table / assiette / hospitalité bamakoise** |
| Palette | Marron profond + crème + terracotta CTA | Cluster AI-template « cream + terracotta serif » explicitement interdit par les règles UI |
| Typo | Cormorant + DM Sans correctes en théorie, rendu « brochure » | Pas de tension éditoriale, pas de scale asymétrique, pas de geste typographique |
| CTA | Deux boutons égaux (primary + ghost) | Dilue l’action ; pattern SaaS landing |
| Disclaimer | Ligne « IMAGE ILLUSTRATIVE » dans le hero | Brise l’immersion ; devrait vivre hors composition principale |
| Nav | Liens uppercase + bouton orange « RÉSERVER » | Nav restaurant standard ; pas de personnalité |

---

## 2. Notre histoire (capture éditoriale)

| Critère | Observation V1 | Pourquoi c’est médiocre |
|---------|----------------|-------------------------|
| Hero page | Bloc marron uni, eyebrow, H1, paragraphe | « Page intérieure template » — zéro ancrage photo, zéro rythme |
| Corps | Texte gauche + vide à droite sur crème | Whitespace passif, pas composition magazine |
| Contenu | Placeholders honnêtes mais **présentation pauvre** | L’honnêteté n’excuse pas l’ennui : univers documenté (Sahel, Bamako) non mis en scène |
| Images | Absentes | Page « document Word » — pas éditoriale |
| Statuts | Labels « À CONFIRMER » / « SOURCE SECONDAIRE » | Utiles en data ; en UI ils dominent et font « brouillon » |

---

## 3. Patterns systémiques à tuer

1. **Hero titre-gauche + 2 boutons** — interdit comme défaut.  
2. **Alternance mécanique beige / marron** section après section.  
3. **Cards / grilles identiques** pour carte ou galerie.  
4. **Image gauche / texte droite** répété.  
5. **Désert = photo de montagne générique** au lieu de langage artistique + gastronomie au centre.  
6. **Pages intérieures « empty editorial »** : hero sombre plat + texte crème.  
7. **Look AI-template** : cream `#F7F1E8` + ember terracotta + serif display.

---

## 4. Ce qui mérite d’être conservé (archi, pas DA)

- Stack Astro + TS + Tailwind 4  
- Séparation `src/data/*` (UI ≠ content ≠ data)  
- Statuts `confirmed / secondary / placeholder`  
- Formulaire = demande (pas confirmation auto)  
- GSAP + `prefers-reduced-motion` (à réinventer, pas supprimer)  
- SEO de base / BaseLayout  

---

## 5. Barre de réussite V2

La V2 est **ratée** si la seule différence perçue est couleur / image / animation.  
Elle est **réussie** si :

- Composition hero **non reconnaissable** comme V1  
- Identité typographique + rythme magazine / ciné  
- Photo culinaire dominante ; désert = texture / lumière / langage  
- Pages intérieures riches même sans histoire inventée  
- Perception « portfolio studio international », pas « template resto Bamako »

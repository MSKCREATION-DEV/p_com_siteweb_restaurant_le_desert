# Recherche — Restaurant Le Désert

Date mise à jour : **25 novembre 2026** (pass V3 — assets authentiques)  
Méthode : WebSearch, WebFetch (fiche Exa/Places), Wikimedia, Unsplash, Pexels, annuaires Mali, requêtes FB/IG/TikTok, variantes « Desert / Désert », assets fournis client.  
Objectif : **confirmé / public-à-confirmer / introuvable** — aucune invention pour le site.

---

## 1. Identité

| Critère | Résultat |
|---------|----------|
| Nom | **Restaurant Le Désert** / RESTAURANT LE DESERT |
| Localisation | **Bamako, Mali** — **ACI 2000**, **Commune IV** |
| Coordonnées | ≈ **12.62468, -8.035495** |
| Site listé | `https://www.restaurantdudesert.com/` (HTTP 403/500 — contenu inutilisable) |
| Confusion | Commune FR « Le Désert » (Valdallière) — **exclue** |

---

## 2. Niveaux de fiabilité

| Niveau | Signification | Usage site V2 |
|--------|---------------|---------------|
| **Confirmé** | Source propriétaire / MSK | CTA sans réserve |
| **Public / à confirmer** | Agrégateur Maps cohérent | Affiché avec mention « Source publique — à confirmer » |
| **Non confirmé** | Mention isolée | Ne pas afficher |
| **Introuvable** | Recherche épuisée | Gaps listés en fin |

---

## 3. Inventaire sources

| Source | URL | Fiabilité | Extrait |
|--------|-----|-----------|---------|
| Fiche place Exa | [exa.ai/library/place/r7jfk5j2h7h](https://exa.ai/library/place/r7jfk5j2h7h) | **Public / à confirmer** | NAP partiel, tél., horaires, note 3.7/3 avis, site |
| Domaine restaurantdudesert.com | — | Non confirmé (contenu) | Inaccessible |
| Google Maps (zone) | Recherche « Restaurant Le Desert Bamako » | Public / à confirmer | Cohérent ACI 2000 |
| TripAdvisor | — | **Introuvable** fiche | — |
| Malipages | malipages.com | **Introuvable** entrée | — |
| Mali Tourisme | — | **Introuvable** | — |
| Facebook | [Restaurant du Désert / 61581453220674](https://www.facebook.com/people/Restaurant-du-D%C3%A9sert/61581453220674/) | **Public / à confirmer** | Page trouvée ; album photos **403** (non scrapable) |
| Instagram / TikTok | Requêtes site: + nom | **Introuvable** | — |
| Assets client (V3) | `logo_le_desert.jpg`, `images (1).jpeg`, `images.jpeg` | **Confirmé** (livraison MSK) | Logo + équipe façade + salon tente |
| Presse | — | **Introuvable** | — |
| Wikimedia Deserts of Mali | commons | Illustratif OK | Tombouctou–Gao, piste Sahara, Gao fleuve |
| Wikimedia cuisine | commons | Illustratif OK | Mafé (origine Mali), yassa, thiéboudienne — **pas le menu du lieu** |

---

## 4. Données structurées

### 4.1 Public / à confirmer (exploitées en V2 avec label)

| Champ | Valeur | Affichage |
|-------|--------|-----------|
| Ville | Bamako, Mali | Oui |
| Quartier | ACI 2000, Commune IV | Oui + label source |
| Téléphone | **+223 78 52 25 60** (`tel:+22378522560`) | CTA tel + label |
| WhatsApp | Même numéro → `https://wa.me/22378522560` | CTA WhatsApp + label (hypothèse canal = mobile Maps) |
| Horaires | Lun–Sam 8h–1h ; Dim 16h–2h | Affichés + label |
| Geo | 12.62468, -8.035495 | Lien Maps optionnel |
| Note 3.7 / 3 avis | — | **Interdit** d’afficher |

### 4.2 Confirmés via assets client (V3)

| Champ | Valeur |
|-------|--------|
| Logo | Wordmark « Restaurant du Désert » + emblème chameau/tente — `public/images/brand/` |
| Slogan enseigne | **« Le goût authentique du Nord, au cœur du Mali »** (exact) |
| Photos lieu | Équipe devant façade ; salon tente touareg (tapis, motifs) |

### 4.3 Introuvables (après épuisement)

- Histoire / fondateurs / année (biographie)  
- Menu officiel, prix, positionnement cuisine exact  
- Photos FB album (bloqué 403) / plats du restaurant en haute résolution  
- Email officiel  
- Adresse rue / porte  
- Capacité, parking, événements  
- Témoignages  

---

## 5. Décisions contenu V3

- Afficher contacts Maps comme **public / à confirmer**.  
- Logo PNG transparent + photos venue partout (hero, histoire, galerie).  
- Slogan enseigne = tagline site.  
- Carte : inspirations Ouest-Afrique **clairement illustratives**.  
- Histoire : immersive avec assets réels ; pas de biographie inventée.  
- Formulaire = demande seulement.  
- Culture touareg au premier plan (salon tente), gastronomie au centre — pas site voyage.

---

## 6. Hypothèses

```
ASSUMPTIONS:
1. Client MSK = Restaurant Le Désert Bamako ACI 2000.
2. WhatsApp = même mobile Maps (à confirmer propriétaire).
3. Page Facebook 61581453220674 = page officielle (à confirmer propriétaire).
4. Logo « Restaurant du Désert » = même établissement que « Le Désert ».
→ Corriger si faux.
```

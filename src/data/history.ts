import type { HistoryBlock } from '../types/content';

/**
 * Histoire V6 — univers documenté + assets authentiques / Magnific HD.
 * Pas de biographie inventée ; pas de labels internes en UI.
 * Layouts magazine : jamais de texte sous l’image.
 */
export interface HistoryBlockExtended extends HistoryBlock {
  image?: string;
  imageAlt?: string;
  /** editorial = texte + image asymétrique ; immersive = média plein puis bandeau ; feature = image dominante décalée */
  layout?: 'editorial' | 'immersive' | 'feature';
  /** Pour editorial/feature : image à gauche (true) ou à droite */
  imageLeft?: boolean;
}

export const historyBlocks: HistoryBlockExtended[] = [
  {
    title: 'Une table nommée Désert',
    body: 'À Bamako, Le Désert ouvre une table au nom du Nord : enseigne, équipe et slogan « Le goût authentique du Nord, au cœur du Mali ». Un lieu d’hospitalité où la culture sahélienne se lit dès la façade.',
    status: 'confirmed',
    image: '/images/venue/equipe-facade.jpg',
    imageAlt: 'Équipe du Restaurant Le Désert devant l’enseigne',
    layout: 'feature',
    imageLeft: true,
  },
  {
    title: 'Hospitalité touareg',
    body: 'Le salon tente — tapis, motifs géométriques, banquettes basses — est la signature visuelle du lieu. Une hospitalité qui se vit au ras du sol, autour du thé et de la table partagée.',
    status: 'confirmed',
    image: '/images/venue/salon-touareg.jpg',
    imageAlt: 'Intérieur salon tente touareg du restaurant',
    layout: 'immersive',
  },
  {
    title: 'Bamako, porte du Sahel',
    body: 'Installé à ACI 2000, Commune IV, Le Désert croise voyageurs, habitants et soirées longues. Bamako, carrefour du Sahel : la capitale accueille ici le goût et les gestes du Nord.',
    status: 'secondary',
    image: '/images/culture/the-femmes-nord.jpg',
    imageAlt: 'Hospitalité autour du thé — culture du Nord',
    layout: 'editorial',
    imageLeft: false,
  },
  {
    title: 'Motifs et artisanat',
    body: 'Nattes de paille, kilims géométriques, cuir travaillé : le langage visuel du Nord irrigue le salon. Losanges, triangles et bandes chaudes — rouge, ocre, indigo — dialoguent avec la lumière du lieu.',
    status: 'secondary',
    image: '/images/culture/tapis-marche-maroc.jpg',
    imageAlt: 'Tapis et textiles aux motifs géométriques du Nord',
    layout: 'editorial',
    imageLeft: true,
  },
  {
    title: 'Cuisine du Nord',
    body: 'Mafé, grillades, plats communaux : la cuisine ouest-africaine et sahélienne inspire la table. Les suggestions du jour se découvrent sur place — le site en donne le ton, pas la carte officielle.',
    status: 'secondary',
    image: '/images/dishes/portrait-plat-communal.jpg',
    imageAlt: 'Table basse et plat partagé — hospitalité du Nord',
    layout: 'feature',
    imageLeft: false,
  },
];

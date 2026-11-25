import type { MenuCategory } from '../types/content';

/**
 * Carte — inspirations régionales (pas le menu officiel du lieu).
 */
export interface MenuItemExtended {
  id: string;
  name: string;
  description?: string;
  priceLabel?: string;
  status: 'confirmed' | 'secondary' | 'unconfirmed' | 'placeholder';
  image?: string;
  imageAlt?: string;
  note?: string;
}

export interface MenuCategoryExtended extends Omit<MenuCategory, 'items'> {
  items: MenuItemExtended[];
}

export const menuCategories: MenuCategoryExtended[] = [
  {
    id: 'inspirations',
    title: 'Inspirations du Sahel',
    intro:
      'Repères culinaires ouest-africains pour donner le ton — la carte du jour se découvre sur place.',
    status: 'secondary',
    items: [
      {
        id: 'mafe',
        name: 'Mafé',
        description:
          'Ragoût d’arachide d’origine malienne — sauce onctueuse, viande ou légumes, riz.',
        status: 'secondary',
        priceLabel: 'Sur place',
        image: '/images/dishes/mafe-malien.jpg',
        imageAlt: 'Mafé — sauce arachide et riz',
        note: 'Inspiration régionale',
      },
      {
        id: 'mafe-boeuf',
        name: 'Mafé au bœuf',
        description: 'Variante riche, souvent servie avec riz blanc.',
        status: 'secondary',
        priceLabel: 'Sur place',
        image: '/images/dishes/mafe-boeuf.jpg',
        imageAlt: 'Mafé au bœuf',
        note: 'Inspiration régionale',
      },
      {
        id: 'yassa',
        name: 'Yassa',
        description: 'Marinade citron-oignon, poisson ou volaille — grand classique partagé.',
        status: 'secondary',
        priceLabel: 'Sur place',
        image: '/images/dishes/yassa-poisson.jpg',
        imageAlt: 'Yassa poulet citron-oignon',
        note: 'Inspiration régionale',
      },
      {
        id: 'taguella',
        name: 'Taguella & plats du désert',
        description:
          'Pain du sable et plats communaux sahéliens — le geste du feu, la table basse, le partage.',
        status: 'secondary',
        priceLabel: 'Sur place',
        image: '/images/dishes/plat-touareg.jpg',
        imageAlt: 'Plat communal sahélien',
        note: 'Inspiration régionale',
      },
    ],
  },
  {
    id: 'sur-place',
    title: 'Sur place, le vrai menu',
    intro: 'Suggestions du chef, grillades et boissons : demandez à l’équipe ou réservez une table.',
    status: 'secondary',
    items: [
      {
        id: 'du-jour',
        name: 'Suggestions du chef',
        description: 'La sélection du jour — téléphonez ou écrivez pour une demande de table.',
        status: 'secondary',
        priceLabel: 'Sur place',
        image: '/images/dishes/plats-africains.jpg',
        imageAlt: 'Table de plats ouest-africains',
        note: 'Carte du jour',
      },
    ],
  },
];

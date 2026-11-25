import type { NavLink, RestaurantProfile, SeoDefaults } from '../types/content';

/**
 * Données centralisées. Statuts issus de docs/RESEARCH-RESTAURANT.md.
 * secondary = fiche Maps — affichable (détail validation dans docs/).
 */
export const seo: SeoDefaults = {
  siteName: 'Restaurant Le Désert',
  titleTemplate: '%s · Le Désert',
  defaultDescription:
    'Restaurant Le Désert à Bamako — le goût authentique du Nord, au cœur du Mali. Hospitalité touareg et gastronomie. Demandez une table.',
  locale: 'fr_ML',
  ogImage: '/images/venue/equipe-facade.jpg',
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Accueil' },
  { href: '/notre-histoire', label: 'Notre histoire' },
  { href: '/carte', label: 'La carte' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

export const restaurant: RestaurantProfile = {
  name: 'Restaurant Le Désert',
  shortName: 'Le Désert',
  /** Slogan enseigne — exact */
  tagline: 'Le goût authentique du Nord, au cœur du Mali',
  description:
    'À Bamako, une table d’hospitalité touareg : salon tente, motifs du Nord, gastronomie au centre. Demandez votre place ; le détail se confirme sur place.',
  locationLabel: 'Bamako · ACI 2000',
  locationStatus: 'secondary',
  contact: {
    phone: {
      value: '+223 78 52 25 60',
      href: 'tel:+22378522560',
      status: 'secondary',
    },
    whatsapp: {
      value: '+223 78 52 25 60',
      href: 'https://wa.me/22378522560',
      status: 'secondary',
    },
    addressLines: ['ACI 2000, Commune IV', 'Bamako, Mali'],
    addressStatus: 'secondary',
    city: 'Bamako',
    country: 'ML',
    geo: { lat: 12.62468, lng: -8.035495, status: 'secondary' },
    hoursNote: 'Lun.–sam. 8h–1h · Dim. 16h–2h',
    hoursStatus: 'secondary',
  },
  social: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/people/Restaurant-du-D%C3%A9sert/61581453220674/',
      status: 'secondary',
    },
  ],
};

/** Confirmé propriétaire uniquement. */
export function isConfirmed(status: string): boolean {
  return status === 'confirmed';
}

/** Affichable : confirmé OU fiche Maps secondaire. */
export function isPublicContact(status: string): boolean {
  return status === 'confirmed' || status === 'secondary';
}

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=12.62468,-8.035495';

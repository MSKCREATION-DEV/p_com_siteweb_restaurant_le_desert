import type { GalleryImage } from '../types/content';

/**
 * Galerie V6 — authentiques en tête, culture Touareg / Magnific HD, gastronomie.
 * Crédits / licences : docs/MEDIA-SOURCES.md uniquement (pas d’affichage UI).
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'equipe-facade',
    src: '/images/venue/equipe-facade.jpg',
    alt: 'Équipe du Restaurant Le Désert devant la façade et l’enseigne à Bamako',
    caption: 'L’équipe — façade & enseigne',
    category: 'restaurant',
    illustrative: false,
    credit: 'Restaurant Le Désert',
  },
  {
    id: 'salon-touareg',
    src: '/images/venue/salon-touareg.jpg',
    alt: 'Salon tente touareg : banquettes basses, tapis et motifs géométriques',
    caption: 'Salon tente — hospitalité touareg',
    category: 'atmosphere',
    illustrative: false,
    credit: 'Restaurant Le Désert',
  },
  {
    id: 'culture-the',
    src: '/images/culture/the-femmes-nord.jpg',
    alt: 'Hospitalité autour du thé — théière, verres et tapis du Nord',
    caption: 'Thé — culture du Nord',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Magnific',
    creditUrl: 'https://www.magnific.com/fr/photos-gratuite/femmes-musulmanes-buvant-du-the_2059677.htm',
  },
  {
    id: 'culture-tapis',
    src: '/images/culture/tapis-marche-maroc.jpg',
    alt: 'Tapis et textiles aux motifs géométriques',
    caption: 'Tapis — motifs du Nord',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Magnific',
    creditUrl: 'https://www.magnific.com/fr/photos-gratuite/tapis-marche-au-maroc_4246642.htm',
  },
  {
    id: 'culture-artisanat',
    src: '/images/culture/touareg-artisanat.jpg',
    alt: 'Artisanat touareg présenté aux voyageurs',
    caption: 'Artisanat touareg',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Documentaire',
  },
  {
    id: 'culture-panier',
    src: '/images/culture/touareg-panier.jpg',
    alt: 'Panier tressé touareg en fibres végétales',
    caption: 'Vannerie touareg',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Documentaire',
  },
  {
    id: 'culture-natte',
    src: '/images/culture/natte-paille.jpg',
    alt: 'Natte en paille tressée aux motifs géométriques',
    caption: 'Natte de paille',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'culture-tapis-geo',
    src: '/images/culture/tapis-geometrique.jpg',
    alt: 'Textile aux motifs géométriques chauds',
    caption: 'Textile géométrique',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'plat-communal',
    src: '/images/dishes/portrait-plat-communal.jpg',
    alt: 'Table basse et plat partagé — hospitalité du Nord',
    caption: 'Table partagée',
    category: 'dishes',
    illustrative: true,
    credit: 'Magnific',
    creditUrl: 'https://www.magnific.com/fr/photos-gratuite/portrait-homme-plat-poutine_28782624.htm',
  },
  {
    id: 'mafe',
    src: '/images/dishes/mafe-malien.jpg',
    alt: 'Mafé, plat d’origine malienne',
    caption: 'Mafé — sauce arachide',
    category: 'dishes',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'yassa',
    src: '/images/dishes/yassa-poisson.jpg',
    alt: 'Yassa poulet citron-oignon',
    caption: 'Yassa',
    category: 'dishes',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'plat-touareg',
    src: '/images/dishes/plat-touareg.jpg',
    alt: 'Plat communal sahélien',
    caption: 'Table sahélienne',
    category: 'dishes',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'assiette',
    src: '/images/gallery/assiette-sombre.jpg',
    alt: 'Plat coloré sur fond sombre',
    caption: 'Dressage',
    category: 'dishes',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'epices',
    src: '/images/gallery/epices-bol.jpg',
    alt: 'Épices dans un bol',
    caption: 'Épices',
    category: 'atmosphere',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'mali-dunes',
    src: '/images/desert/mali-tombouctou-gao.jpg',
    alt: 'Désert entre Tombouctou et Gao, Mali',
    caption: 'Sahel malien — Tombouctou–Gao',
    category: 'desert',
    illustrative: true,
    credit: 'Documentaire',
  },
  {
    id: 'grillade',
    src: '/images/dishes/grillade.jpg',
    alt: 'Viande grillée sur braises',
    caption: 'Grillades',
    category: 'dishes',
    illustrative: true,
    credit: 'Stock',
  },
  {
    id: 'plats-afrique',
    src: '/images/dishes/plats-africains.jpg',
    alt: 'Assortiment de plats africains',
    caption: 'Table ouest-africaine',
    category: 'dishes',
    illustrative: true,
    credit: 'Stock',
  },
];

export const heroImage = galleryImages.find((i) => i.id === 'salon-touareg')!;

export const teamImage = galleryImages.find((i) => i.id === 'equipe-facade')!;

export const tentImage = galleryImages.find((i) => i.id === 'salon-touareg')!;

export const desertFeature = galleryImages.find((i) => i.id === 'mali-dunes')!;

export const cultureTea = galleryImages.find((i) => i.id === 'culture-the')!;

export const cultureArtisanat = galleryImages.find((i) => i.id === 'culture-artisanat')!;

export const cultureTapis = galleryImages.find((i) => i.id === 'culture-tapis')!;

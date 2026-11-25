import type { MediaAsset } from '../types/content';
import { galleryImages } from './gallery';

function licenseFor(src: string, creditUrl?: string, illustrative?: boolean): string {
  if (!illustrative && (src.includes('/venue/') || src.includes('/brand/'))) {
    return 'Restaurant Le Désert (usage site MSK)';
  }
  if (creditUrl?.includes('magnific.com') || src.includes('the-femmes-nord') || src.includes('tapis-marche-maroc') || src.includes('portrait-plat-communal')) {
    return 'Magnific Free License — voir MEDIA-SOURCES.md';
  }
  if (
    src.includes('mali-') ||
    src.includes('gao-') ||
    src.includes('mafe') ||
    src.includes('yassa') ||
    src.includes('thieb') ||
    src.includes('/culture/touareg')
  ) {
    return 'Documentaire — voir MEDIA-SOURCES.md';
  }
  if (src.includes('/culture/') || src.includes('/textures/sable') || src.includes('tapis-geometrique')) {
    return 'Stock / documentaire — voir MEDIA-SOURCES.md';
  }
  if (src.includes('plats-africains') || creditUrl?.includes('pexels')) {
    return 'Pexels License';
  }
  return 'Unsplash License';
}

const brandAssets: MediaAsset[] = [
  {
    id: 'logo-full',
    path: '/images/brand/logo-le-desert.png',
    alt: 'Logo Restaurant Le Désert',
    credit: 'Restaurant Le Désert',
    license: 'Restaurant Le Désert (usage site MSK)',
    sourceUrl: '/images/brand/logo-le-desert.png',
    illustrative: false,
    usage: 'brand',
  },
  {
    id: 'logo-mark',
    path: '/images/brand/logo-mark.png',
    alt: 'Emblème chameau et tente',
    credit: 'Restaurant Le Désert',
    license: 'Restaurant Le Désert (usage site MSK)',
    sourceUrl: '/images/brand/logo-mark.png',
    illustrative: false,
    usage: 'brand',
  },
];

/** Inventaire médias — brand + galerie + docs/MEDIA-SOURCES.md */
export const mediaAssets: MediaAsset[] = [
  ...brandAssets,
  ...galleryImages.map((img) => ({
    id: img.id,
    path: img.src,
    alt: img.alt,
    credit: img.credit ?? 'Stock',
    license: licenseFor(img.src, img.creditUrl, img.illustrative),
    sourceUrl: img.creditUrl ?? img.src,
    illustrative: img.illustrative,
    usage: img.category,
  })),
];

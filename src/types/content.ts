/** Types contenus — prêts pour un CMS Directus (UI ≠ content ≠ data). */

export type ContentStatus = 'confirmed' | 'secondary' | 'unconfirmed' | 'placeholder';

export interface NavLink {
  href: string;
  label: string;
}

export interface SeoDefaults {
  siteName: string;
  titleTemplate: string;
  defaultDescription: string;
  locale: string;
  ogImage: string;
}

export interface ContactInfo {
  /** Afficher le téléphone seulement si confirmed */
  phone?: { value: string; href: string; status: ContentStatus };
  whatsapp?: { value: string; href: string; status: ContentStatus };
  email?: { value: string; status: ContentStatus };
  addressLines: string[];
  addressStatus: ContentStatus;
  city?: string;
  country?: string;
  geo?: { lat: number; lng: number; status: ContentStatus };
  hoursNote: string;
  hoursStatus: ContentStatus;
}

export interface RestaurantProfile {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  locationLabel: string;
  locationStatus: ContentStatus;
  contact: ContactInfo;
  social: { label: string; href: string; status: ContentStatus }[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  priceLabel?: string;
  status: ContentStatus;
}

export interface MenuCategory {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
  status: ContentStatus;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: 'desert' | 'restaurant' | 'dishes' | 'atmosphere';
  /** true = photo stock illustrative, pas une photo du lieu */
  illustrative: boolean;
  credit?: string;
  creditUrl?: string;
}

export interface HistoryBlock {
  title: string;
  body: string;
  status: ContentStatus;
}

/** Alias / types complémentaires (data/site.ts, data/media.ts). */
export type NavItem = NavLink;

export interface OpeningHours {
  summary: string | null;
  status: ContentStatus;
}

export interface SiteContact {
  phoneDisplay: string | null;
  phoneTel: string | null;
  whatsapp: string | null;
  email: string | null;
  addressLine: string | null;
  city: string;
  country: string;
  mapsUrl: string | null;
  status: ContentStatus;
}

export interface MediaAsset {
  id: string;
  path: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
  illustrative: boolean;
  usage: string;
}

/** Inventaire médias téléchargés (docs/MEDIA-SOURCES.md). */
export interface MediaAsset {
  id: string;
  path: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
  illustrative: boolean;
  usage: string;
}

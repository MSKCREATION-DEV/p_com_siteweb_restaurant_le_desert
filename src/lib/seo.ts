import { restaurant, seo } from '../data/restaurant';
import { isConfirmed } from '../data/restaurant';

export function pageTitle(title?: string): string {
  if (!title || title === restaurant.shortName) return `${restaurant.name} · Bamako`;
  return seo.titleTemplate.replace('%s', title);
}

/** Schema.org Restaurant — champs confirmés seulement (+ name). */
export function restaurantJsonLd(): Record<string, unknown> {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    url: 'https://www.restaurantdudesert.com',
  };

  if (restaurant.locationStatus === 'confirmed' || restaurant.locationStatus === 'secondary') {
    // Ville seulement : secondaire acceptable pour localité large ; pas d’adresse rue non confirmée dans Schema
    data.address = {
      '@type': 'PostalAddress',
      addressLocality: restaurant.contact.city ?? 'Bamako',
      addressCountry: restaurant.contact.country ?? 'ML',
    };
  }

  // Pas de telephone, openingHours, aggregateRating, geo tant que non confirmed
  if (restaurant.contact.phone && isConfirmed(restaurant.contact.phone.status)) {
    data.telephone = restaurant.contact.phone.value;
  }

  return data;
}

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Sources: Astro docs — site + @astrojs/sitemap ; Tailwind 4 via @tailwindcss/vite
export default defineConfig({
  site: 'https://www.restaurantdudesert.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    layout: 'constrained',
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// Vercel expone el dominio de producción durante el build; en local se usa localhost
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});

// @ts-check
import fs from 'node:fs'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

/* where the site lives: src/data/site.ts decides (ascotwm.com once `indexable` is true, the preview's address until then),
   read as text so that this file needs nothing but Node itself */
const siteSrc = fs.readFileSync(new URL('./src/data/site.ts', import.meta.url), 'utf8')
const quoted = (/** @type {string} */ key) => siteSrc.match(new RegExp(`${key}:\\s*'([^']+)'`))?.[1]
const origin = (/indexable:\s*true\b/.test(siteSrc) ? quoted('launchOrigin') : quoted('previewOrigin')) ?? 'https://ascotwm.com'

export default defineConfig({
  site: origin,
  output: 'static',
  trailingSlash: 'never',
  /* one HTML file per page (/contact is contact.html), so the server keeps one address per page */
  build: { format: 'file', inlineStylesheets: 'auto' },
  /* the sitemap lists what search may show: not the 404, not the three review-only hero options */
  integrations: [sitemap({ filter: (page) => !/\/404$/.test(page) && !/\/hero\//.test(page) })],
  devToolbar: { enabled: false },
  server: { port: 4720 },
  vite: { plugins: [tailwindcss()] },
})

import type { APIRoute } from 'astro'
import { site } from '../data/site'

/* while the site is a preview, search engines are asked to stay out of all of it */
export const GET: APIRoute = ({ site: origin }) => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\nDisallow: /hero/\n\nSitemap: ${new URL('/sitemap-index.xml', origin).href}\n`
    : 'User-agent: *\nDisallow: /\n'
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}

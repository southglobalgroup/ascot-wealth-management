/* The old site's addresses that are not pages of their own: each sends on (301) to the page that holds it now. These are the
   redirects the live ascotwm.com already makes (rendered 2026-11-19), so no address that search or a client has saved breaks.
   scripts/make-nginx.mjs reads this file as TEXT: keep each entry on its own line, quoted paths only. */
export const moved: Record<string, string> = {
  '/estate-planning': '/services/protection-planning',
  '/corporate-planning': '/services/corporate-services',
  '/tax-planning': '/services/financial-planning',
  '/mortgages': '/services/mortgage-advisory',
  '/knowledge': '/resources',
  '/knowledge-assetmanagement': '/services/investment-management',
  '/knowledge-financialplanning': '/services/financial-planning',
  '/knowledge-estateplanning': '/services/protection-planning',
  '/knowledge-corporateplanning': '/services/corporate-services',
  '/knowledge-mortgages': '/services/mortgage-advisory',
  '/privacy-policy-2': '/privacy-policy',
  '/cookies-policy': '/privacy-policy',
  '/legal-disclaimer': '/privacy-policy',
  '/legal-disclaimer-2': '/privacy-policy',
  '/jargon-buster': '/faq',
  '/contact-us': '/contact',
  '/our-people': '/staff',
  '/advisers': '/staff',
  '/articles': '/blog',
  '/how-can-we-help': '/services',
  '/asset-management': '/services/investment-management',
  '/fact-find': '/contact',
  '/factfind': '/contact',
}

/* whole folders: the live site's per-stream pages (/resources/seis, /resources/vct ...) are the Market Updates index now */
export const movedPrefix: Record<string, string> = {
  '/resources/': '/market-updates',
}

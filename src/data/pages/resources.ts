/* RESOURCES (/resources), "Six intelligence streams. Updated weekly.": word for word from ascotwm.com/resources (rendered 2026-11-19).
   Each stream's "View latest" opens the market-intelligence index on that stream. */

export const meta = {
  title: 'Six Intelligence Streams | AWM Resources | Ascot Wealth Management',
  description: 'Six intelligence streams. Updated weekly. Free for clients and professionals.',
}

export const intro = {
  eyebrow: 'AWM Resources',
  title: 'Six intelligence streams. Updated weekly.',
  lede: 'Free for clients and professionals.',
}

export const streams = [
  { name: 'SEIS', text: 'Seed Enterprise Investment Scheme opportunities, deployment rates and tax-relief intelligence.', updated: 'Updated 13 Nov 2026', key: 'seis' },
  { name: 'EIS', text: 'Enterprise Investment Scheme funds, sector tilts and capital-at-risk commentary.', updated: 'Updated 13 Nov 2026', key: 'eis' },
  { name: 'VCT', text: 'Venture Capital Trust offers, dividend yields and open-offer timelines.', updated: 'Updated 13 Nov 2026', key: 'vct' },
  { name: 'Structured Products', text: 'Defined-return notes, autocalls and capital-protected structures from leading counterparties.', updated: 'Updated 13 Nov 2026', key: 'structured-products' },
  { name: 'Secured Debt', text: 'Asset-backed lending, P2P and private-debt income streams with security analysis.', updated: 'Updated 13 Nov 2026', key: 'p2p' },
  { name: 'Cash', text: 'Best-in-class deposit rates, NS&I updates and cash-management strategies.', updated: 'Updated 12 Nov 2026', key: 'cash-mm' },
].map((s) => ({ ...s, cta: 'View latest', href: `/market-updates?stream=${s.key}` }))

export const subscribe = {
  title: 'Subscribe to weekly updates',
  text: 'One email a week. All six streams. No noise.',
  cta: 'Subscribe',
}

export const more = {
  title: 'More from AWM',
  items: [
    { title: 'Articles & Insights', text: 'Expert commentary from our advisory team.', cta: 'Browse', href: '/blog' },
    { title: 'Webinars & Videos', text: 'Educational webinars and market recordings.', cta: 'Watch', href: '/webinars' },
    { title: 'Research & Reports', text: 'In-depth research and data-driven analysis.', cta: 'Download', href: '/insights' },
  ],
}

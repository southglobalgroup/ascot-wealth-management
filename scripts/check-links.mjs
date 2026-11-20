import fs from "node:fs"
const BASE = 'http://localhost:4720'
const routes = ['/', '/hero/b', '/hero/c', '/hero/d', '/services', '/services/investment-management', '/services/retirement-planning', '/services/protection-planning', '/services/mortgage-advisory', '/services/financial-planning', '/services/corporate-services', '/wealth-management', '/investment-approach', '/staff', '/about', '/testimonials', '/contact', '/faq', '/resources', '/market-updates', '/insights', '/blog', '/webinars', '/privacy-policy', '/cookie-policy', '/terms-of-use', '/client-documents', '/regulatory-information', '/404', '/blog/62d6a54f-a111-4b2b-a2bc-923ad07a6769', '/market-updates/vct/vct-vct-sector-update-dividend-yields-and-long-term-value-2026-11-08']
const internal = new Map(), live = new Map()
for (const r of routes) {
  const html = await (await fetch(BASE + r)).text()
  for (const m of html.matchAll(/href="([^"#]+)/g)) {
    const h = m[1].replace(/&amp;/g, '&')
    if (h.startsWith('/') && !h.startsWith('//') && !/\.(css|js|png|jpg|webp|ico|svg|mp4|xml)$/.test(h) && !h.startsWith('/_astro') && !h.startsWith('/@')) internal.set(h.split('?')[0], (internal.get(h.split('?')[0]) || new Set()).add(r))
    else if (/^https?:\/\/(www\.)?ascotwm\.com/.test(h)) { const p = h.replace(/^https?:\/\/(www\.)?ascotwm\.com/, '') || '/'; live.set(p, (live.get(p) || new Set()).add(r)) }
  }
}
const bad = []
for (const [h, from] of internal) { const s = (await fetch(BASE + h)).status; if (s !== 200) bad.push(`${s} ${h}  <- ${[...from].slice(0, 3).join(', ')}`) }
console.log('INTERNAL links not 200:', bad.length); bad.forEach((b) => console.log('  ' + b))
const groups = {}
for (const p of live.keys()) { const g = p.split('/').slice(0, 2).join('/'); groups[g] = (groups[g] || 0) + 1 }
console.log('LINKS TO LIVE ascotwm.com:', live.size, JSON.stringify(groups))
fs.writeFileSync('_scrape/article-paths.txt', [...live.keys()].filter((p) => /^\/(blog|market-updates)\//.test(p)).join('\n') + '\n')
for (const [p, from] of live) if (!/^\/(blog|market-updates)\//.test(p)) console.log('  ' + p + '  <- ' + [...from].slice(0, 3).join(', '))

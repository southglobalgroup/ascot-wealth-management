/* Builds the article pages' data from the scrape:  node scripts/build-article-data.mjs
   in:  _scrape/articles/<blog|market-updates>/<slug>.json (scripts/scrape-articles.mjs), public/articles/<slug>.webp (the covers),
        and the two index files (src/data/pages/blog.ts, market-updates.ts) for what only the index shows (category, read time, excerpt)
   out: src/data/articles/blog.json, src/data/articles/market-updates.json
   Their words are carried as scraped. The only changes: the live site's own links become the new site's addresses, the CMS's
   "Version" field ("public") is left out, regulatory notes are marked so they show as .risk, and three related articles are
   chosen per article (same category or stream, nearest in date). */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC = '_scrape/articles'
const OUT = 'src/data/articles'
fs.mkdirSync(OUT, { recursive: true })
const readDir = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'))) : [])
const GENERIC = /^Ascot Wealth Management: FCA-regulated financial advisers/
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const notes = []

/* ---------- links: the live site's addresses -> the new site's ---------- */
const ROUTES = new Set(fs.readdirSync('src/pages', { recursive: true }).filter((f) => f.endsWith('.astro') && !f.includes('[')).map((f) => '/' + f.replace(/\\/g, '/').replace(/\.astro$/, '').replace(/(^|\/)index$/, '')))
for (const s of ['investment-management', 'retirement-planning', 'protection-planning', 'mortgage-advisory', 'financial-planning', 'corporate-services']) ROUTES.add('/services/' + s)
const MAP = {
  '/contact-us': '/contact',
  /* ascotwm.co.uk (a parked domain that some articles link to): its service addresses */
  '/services/investment-advice': '/services/investment-management',
  '/services/pension-planning': '/services/retirement-planning',
  '/services/wealth-management': '/wealth-management',
  '/our-people': '/staff',
  '/advisers': '/staff',
  '/knowledge': '/resources',
  '/articles': '/blog',
  '/insights': '/insights',
  '/mortgages': '/services/mortgage-advisory',
  '/knowledge-mortgages': '/services/mortgage-advisory',
  '/financial-planning': '/services/financial-planning',
  '/knowledge-financialplanning': '/services/financial-planning',
  '/estate-planning': '/services/financial-planning',
  '/knowledge-estateplanning': '/services/financial-planning',
  '/tax-planning': '/services/financial-planning',
  '/asset-management': '/services/investment-management',
  '/knowledge-assetmanagement': '/services/investment-management',
  '/investment-management': '/services/investment-management',
  '/retirement-planning': '/services/retirement-planning',
  '/protection-planning': '/services/protection-planning',
  '/protection': '/services/protection-planning',
  '/corporate-planning': '/services/corporate-services',
  '/knowledge-corporateplanning': '/services/corporate-services',
}
const articlePaths = new Set(fs.readFileSync(path.join(SRC, 'paths.txt'), 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean))
const linkMisses = new Map()
const relink = (href) => {
  /* an AI tool's tracking tag on some of their source links: not part of the address */
  let h = href.trim().replace(/([?&])utm_source=chatgpt\.com(&|$)/, (_m, a, b) => (b ? a : '')).replace(/[?&]$/, '')
  href = h
  const live =h.match(/^https?:\/\/(?:www\.)?ascotwm\.(?:com|co\.uk)(\/[^#?]*)?([?#].*)?$/i)
  if (live) h = (live[1] || '/') + (live[2] || '')
  if (!h.startsWith('/') || h.startsWith('//')) return href
  const [p, rest = ''] = h.split(/(?=[?#])/)
  const clean = p.length > 1 ? p.replace(/\/$/, '') : p
  if (articlePaths.has(clean) || ROUTES.has(clean) || clean === '/') return clean + rest
  if (MAP[clean]) return MAP[clean] + rest
  const stream = clean.match(/^\/market-updates\/([\w-]+)$/)
  if (stream) return '/market-updates?stream=' + stream[1]
  linkMisses.set(clean, (linkMisses.get(clean) || 0) + 1)
  return 'https://ascotwm.com' + clean + rest
}
const relinkHtml = (html) => html.replace(/<a href="([^"]*)">/g, (_m, h) => `<a href="${relink(h.replace(/&quot;/g, '"').replace(/&amp;/g, '&')).replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`)

/* ---------- regulatory notes: a paragraph that is a disclaimer / risk warning shows as .risk ---------- */
const RISK = /^(<strong>)?\s*(important( information)?|disclaimer|risk warning)\b|(for (general )?information(al)? purposes only|does not constitute (financial|investment|tax|personal)|should not be (regarded|construed|taken) as|not (intended as|a substitute for) (personal|financial|independent)|value of (your )?investments?( and the income from (them|it))? can (go down|fall)|you (may|could) get back less|past performance is not)/i
const markRisk = (html, where) =>
  html.replace(/<p>(.*?)<\/p>/g, (m, inner) => {
    const text = inner.replace(/<[^>]+>/g, '')
    if (!RISK.test(inner) && !RISK.test(text)) return m
    notes.push(`risk  ${where}: ${text.slice(0, 110)}`)
    return `<div class="risk"><p>${inner}</p></div>`
  })

const sentenceCut = (s, max = 200) => {
  const t = s.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const sentences = t.match(/.+?[.!?]+(?:\s+|$)/g) || [t]
  let out = ''
  for (const x of sentences) {
    if ((out + x).trim().length > max && out) break
    out += x
  }
  return out.trim()
}
const docTitle = (t) => {
  const parts = t.split(' | ')
  const out = parts.filter((p, i) => parts.indexOf(p) === i)
  return out.join(' | ')
}
const isoFrom = (s) => {
  const d = new Date(s + ' 12:00 UTC')
  return isNaN(d) ? '' : d.toISOString().slice(0, 10)
}
const cover = async (slug) => {
  const f = `public/articles/${slug}.webp`
  if (!fs.existsSync(f)) return null
  const m = await sharp(f).metadata()
  const t = await sharp(`public/articles/${slug}-640.webp`).metadata()
  return { src: `/articles/${slug}.webp`, w: m.width, h: m.height, small: `/articles/${slug}-640.webp`, sw: t.width }
}

/* ---------- blog ---------- */
const blogTs = fs.readFileSync('src/data/pages/blog.ts', 'utf8')
const index = []
for (const line of blogTs.split('\n')) {
  if (!/^\s*\{ cat:/.test(line)) continue
  const o = {}
  for (const m of line.matchAll(/(\w+): ("(?:[^"\\]|\\.)*")/g)) o[m[1]] = JSON.parse(m[2])
  o.slug = o.href.split('/').pop()
  index.push(o)
}
const blogRaw = readDir(path.join(SRC, 'blog'))
const blog = []
for (const r of blogRaw) {
  const ix = index.find((x) => x.slug === r.slug)
  if (!ix) notes.push(`blog not in the index: ${r.slug}`)
  const metaDate = r.metaItems.find((s) => !isNaN(new Date(s))) ?? ''
  const author = r.metaItems.find((s) => s !== metaDate) ?? ix?.author ?? ''
  /* a little raw Markdown in a few bodies: "--- " opening a paragraph is a rule, "* " a list item */
  let body = relinkHtml(r.bodyHtml)
    .replace(/<p>-{3,}\s*/g, '<hr><p>')
    .replace(/<p>\*\s+(.*?)<\/p>/g, '<ul><li>$1</li></ul>')
    .replace(/<\/ul><ul>/g, '')
  body = markRisk(body, r.slug).replace(/<hr>(<div class="risk">)/g, '$1')
  const extra = (r.extra || []).map((e) => markRisk(relinkHtml(e.html), r.slug + ' (after body)')).join('')
  if (r.extra?.length) notes.push(`blog extra block kept: ${r.slug}: ${r.extra.map((e) => e.text.slice(0, 80)).join(' || ')}`)
  if (r.dropped?.length) notes.push(`blog dropped: ${r.slug}: ${r.dropped.join(', ').slice(0, 200)}`)
  const firstP = (r.bodyHtml.match(/<p>(.*?)<\/p>/) || [, ''])[1].replace(/<[^>]+>/g, '')
  blog.push({
    slug: r.slug,
    path: '/blog/' + r.slug,
    title: r.h1,
    docTitle: docTitle(r.docTitle),
    description: r.description && !GENERIC.test(r.description) ? r.description : sentenceCut(ix?.excerpt || firstP),
    date: ix?.date || metaDate,
    iso: isoFrom(metaDate || ix?.date || ''),
    author,
    read: ix?.read ?? '',
    cat: ix?.cat ?? '',
    excerpt: ix?.excerpt ?? '',
    cover: await cover(r.slug),
    body: body + extra,
    cta: r.cta,
    order: ix ? index.indexOf(ix) : 999,
  })
}
blog.sort((a, b) => a.order - b.order)
/* related: the same category, nearest in the index (which is newest first); topped up with the nearest of any category */
for (const a of blog) {
  const i = blog.indexOf(a)
  const near = (list) => list.filter((b) => b !== a).sort((x, y) => Math.abs(blog.indexOf(x) - i) - Math.abs(blog.indexOf(y) - i))
  const same = near(blog.filter((b) => b.cat && b.cat === a.cat))
  a.related = [...new Set([...same, ...near(blog)])].slice(0, 3).map((b) => b.slug)
}
blog.forEach((a) => delete a.order)

/* ---------- market updates ---------- */
const muTs = fs.readFileSync('src/data/pages/market-updates.ts', 'utf8')
const muIndex = JSON.parse(muTs.slice(muTs.indexOf('= [', muTs.indexOf('export const updates')) + 2))
const filters = [...muTs.matchAll(/\{ key: '([\w-]+)', label: '([^']+)' \}/g)].map((m) => ({ key: m[1], label: m[2] }))
/* the update cards hold Markdown (the live site prints it raw, asterisks and all): rendered here, words unchanged. A disclaimer
   inside a card ("**Important Regulatory Disclaimer**", "*Disclaimer: ...*") runs to the end of the card and shows as .risk. */
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
/* a backslash-escaped character (\* in "*\*From April 2026 ...*") is that character, not Markdown: held aside while the rest is read */
const inline = (s) =>
  esc(s)
    .replace(/\\([*_[\]()#|\\-])/g, (_m, c) => `\u0001${c.charCodeAt(0)}\u0002`)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, u) => `<a href="${attr(relink(u.replace(/&amp;/g, '&')))}">${t}</a>`)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\s](?:[^*]*[^*\s])?)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/\u0001(\d+)\u0002/g, (_m, n) => String.fromCharCode(Number(n)))
const plain = (s) => s.replace(/\\([*_])/g, '$1').replace(/\*\*(.+?)\*\*/g, '$1').trim()
const BULLET = /^([*\-•]|\d+[.)])\s+/
const md = (raw, where) => {
  const lines = raw.replace(/\r/g, '').split('\n')
  const blocks = []
  let para = []
  const flush = () => {
    if (para.length) blocks.push({ t: 'p', text: para.join('\n'), html: para.map(inline).join('<br>') })
    para = []
  }
  for (let i = 0; i < lines.length; ) {
    const tr = lines[i].trim()
    if (!tr) { flush(); i++; continue }
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(tr)) { flush(); blocks.push({ t: 'hr' }); i++; continue }
    if (/^#{1,6}\s/.test(tr)) { flush(); blocks.push({ t: tr.match(/^#+/)[0].length <= 3 ? 'h3' : 'h4', html: inline(tr.replace(/^#+\s*/, '')) }); i++; continue }
    if (tr.startsWith('|')) {
      flush()
      const rows = []
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(lines[i++].trim())
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
      const sep = rows[1] && /^[\s|:-]+$/.test(rows[1])
      const head = sep ? `<thead><tr>${cells(rows[0]).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>` : ''
      const body = (sep ? rows.slice(2) : rows).map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')
      blocks.push({ t: 'table', html: `<table>${head}<tbody>${body}</tbody></table>` })
      continue
    }
    if (BULLET.test(tr) && !/^\*\*/.test(tr) && !/^\*[^\s]/.test(tr)) {
      flush()
      const ordered = /^\d/.test(tr)
      const items = []
      while (i < lines.length && BULLET.test(lines[i].trim()) && /^\d/.test(lines[i].trim()) === ordered) items.push(lines[i++].trim().replace(BULLET, ''))
      const prev = blocks[blocks.length - 1]
      if (prev && prev.t === (ordered ? 'ol' : 'ul')) prev.items.push(...items)
      else blocks.push({ t: ordered ? 'ol' : 'ul', items })
      continue
    }
    para.push(tr)
    i++
  }
  flush()
  /* the disclaimer: from its first line to the end of the card; the rule just above it goes (the box marks it) */
  const at = blocks.findIndex((b) => b.t === 'p' && /^\**\s*(important regulatory disclaimer|disclaimer|important information|risk warning)\b/i.test(b.text))
  let risk = []
  if (at >= 0) {
    risk = blocks.splice(at)
    notes.push(`risk  ${where}: ${risk[0].text.slice(0, 90)}`)
  }
  while (blocks.length && blocks[blocks.length - 1].t === 'hr') blocks.pop()
  const html = (list) =>
    list
      .map((b) => (b.t === 'hr' ? '<hr>' : b.t === 'ul' || b.t === 'ol' ? `<${b.t}>${b.items.map((x) => `<li>${inline(x)}</li>`).join('')}</${b.t}>` : b.t === 'p' ? `<p>${b.html}</p>` : b.t === 'table' ? b.html : `<${b.t}>${b.html}</${b.t}>`))
      .join('')
  return html(blocks) + (risk.length ? `<div class="risk"><div>${html(risk)}</div></div>` : '')
}
const muRaw = readDir(path.join(SRC, 'market-updates'))
const mu = []
for (const r of muRaw) {
  const ix = muIndex.find((u) => u.href.endsWith('/' + r.slug))
  if (!ix) notes.push(`update not in the index: ${r.slug}`)
  const sections = []
  let hook = ''
  let sources = []
  let notice = ''
  const extras = []
  for (const b of r.blocks) {
    if (b.type === 'sources') sources = b.items.map((s) => ({ text: s.text, href: relink(s.href) }))
    else if (b.type === 'note') {
      if (/^Important information/i.test(b.text)) notice = relinkHtml(b.html)
      else extras.push(relinkHtml(b.html))
    } else if (/^Version$/i.test(b.heading)) {
      if (b.raw.trim() !== 'public') notes.push(`update Version not "public": ${r.slug}: ${b.raw}`)
    } else if (/^Cta Hook$/i.test(b.heading)) hook = inline(b.raw.trim().replace(/\s*\n\s*/g, ' '))
    else sections.push({ heading: b.heading, html: b.raw.trim() ? md(b.raw, `${r.slug} / ${b.heading}`) : relinkHtml(b.html), risk: /risk/i.test(b.heading) })
  }
  if (extras.length) notes.push(`update extra note kept: ${r.slug}`)
  const related = r.after.find((s) => /^More /.test(s.heading))
  const cta = r.after.find((s) => s.button)
  const all = related?.links.find(([t]) => /^View all/i.test(t))
  /* the summary under the title: Markdown too, sometimes several paragraphs with links. Its first paragraph is the hero's lede
     (unless it carries a source link, which only the body can keep); the rest opens the body. */
  const ledeParas = r.hero.ledes.join('\n\n').split(/\n\s*\n/).map((s) => s.trim()).filter((s) => s && !/^(-{3,}|\*{3,}|_{3,})$/.test(s))
  const heroLede = ledeParas.length && !/\]\(/.test(ledeParas[0]) ? ledeParas.shift() : ''
  const lede = heroLede ? [plain(heroLede)] : []
  const intro = ledeParas.length ? md(ledeParas.join('\n\n'), `${r.slug} / summary`) : ''
  mu.push({
    slug: r.slug,
    stream: r.stream,
    streamLabel: filters.find((f) => f.key === r.stream)?.label ?? r.stream,
    path: `/market-updates/${r.stream}/${r.slug}`,
    title: r.h1,
    docTitle: docTitle(r.docTitle),
    description: r.description && !GENERIC.test(r.description) ? r.description : sentenceCut(lede[0] || plain(ix?.excerpt || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')),
    tag: ix?.tag ?? r.hero.badges[0] ?? '',
    badges: r.hero.badges,
    date: r.hero.time,
    iso: isoFrom(r.hero.time),
    dateShort: ix?.date ?? '',
    read: ix?.read ?? '',
    back: r.hero.back,
    lede,
    intro,
    sections,
    extras,
    hook,
    sources,
    notice,
    relatedTitle: related?.heading ?? '',
    allLabel: all?.[0] ?? '',
    cta: cta ? { title: cta.heading, text: cta.text, button: cta.button } : null,
    order: ix ? muIndex.indexOf(ix) : 999,
  })
}
mu.sort((a, b) => a.order - b.order)
for (const a of mu) {
  const i = mu.indexOf(a)
  a.related = mu
    .filter((b) => b !== a && b.stream === a.stream)
    .sort((x, y) => Math.abs(mu.indexOf(x) - i) - Math.abs(mu.indexOf(y) - i) || mu.indexOf(x) - mu.indexOf(y))
    .slice(0, 3)
    .map((b) => b.slug)
}
mu.forEach((a) => delete a.order)

fs.writeFileSync(path.join(OUT, 'blog.json'), JSON.stringify(blog, null, 1) + '\n')
fs.writeFileSync(path.join(OUT, 'market-updates.json'), JSON.stringify(mu, null, 1) + '\n')
fs.writeFileSync(path.join(SRC, 'build-notes.txt'), notes.join('\n') + '\n\nLINKS NOT MAPPED (left on the live site):\n' + [...linkMisses].map(([k, v]) => `${v}x ${k}`).join('\n') + '\n')
console.log(`blog: ${blog.length} (${blog.filter((b) => b.cover).length} with covers)  market updates: ${mu.length}`)
console.log(`notes: ${notes.length}  unmapped links: ${[...linkMisses].map(([k, v]) => `${k} x${v}`).join(', ') || 'none'}`)

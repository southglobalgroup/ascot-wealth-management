/* Scrapes the live article pages (the live site is a client-side SPA, so each is rendered in Chrome) for the article pages of the new
   site:  node scripts/scrape-articles.mjs
   - reads the paths from _scrape/articles/paths.txt (a copy of the article-paths list check-links wrote)
   - the /blog index first, for each article's cover picture (the article pages themselves do not show it)
   - then each article, one at a time with a pause, into _scrape/articles/<blog|market-updates>/<slug>.json
     (pages already saved are skipped, so a re-run only fetches what failed)
   - then each cover once: downloaded, made webp with sharp (1600 and 640 wide) into public/articles/
   Progress goes to _scrape/articles/progress.log, failures to _scrape/articles/failed.json. */
import { chromium } from 'playwright-core'
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const LIVE = 'https://ascotwm.com'
const DIR = '_scrape/articles'
const LOG = path.join(DIR, 'progress.log')
const PAUSE = 900
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const log = (s) => {
  const line = `${new Date().toISOString().slice(11, 19)} ${s}`
  fs.appendFileSync(LOG, line + '\n')
  console.log(line)
}
fs.mkdirSync(path.join(DIR, 'blog'), { recursive: true })
fs.mkdirSync(path.join(DIR, 'market-updates'), { recursive: true })
fs.mkdirSync(path.join(DIR, 'covers'), { recursive: true })
fs.mkdirSync('public/articles', { recursive: true })

const ONLY = process.env.ONLY ? process.env.ONLY.split(',') : null
const paths = [...new Set(fs.readFileSync(path.join(DIR, 'paths.txt'), 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean))]
if (ONLY) paths.splice(0, paths.length, ...paths.filter((p) => ONLY.includes(p)))
log(`start: ${paths.length} paths`)

/* runs in the page: the article's words as clean HTML (only the tags we keep, no attributes but href) */
const CLEAN = `
window.__clean = (root, dropped) => {
  const KEEP = { H1: 'h2', H2: 'h2', H3: 'h3', H4: 'h4', H5: 'h4', H6: 'h4', P: 'p', UL: 'ul', OL: 'ol', LI: 'li', STRONG: 'strong', B: 'strong', EM: 'em', I: 'em', A: 'a', BLOCKQUOTE: 'blockquote', TABLE: 'table', THEAD: 'thead', TBODY: 'tbody', TR: 'tr', TH: 'th', TD: 'td', HR: 'hr', BR: 'br' }
  const SKIP = new Set(['SCRIPT', 'STYLE', 'BUTTON', 'SVG', 'NOSCRIPT', 'IFRAME', 'FORM', 'INPUT', 'SELECT', 'TEXTAREA', 'VIDEO', 'AUDIO', 'CANVAS', 'PICTURE', 'IMG', 'FIGURE'])
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const walk = (node) => {
    let out = ''
    for (const n of node.childNodes) {
      if (n.nodeType === 3) { out += esc(n.textContent); continue }
      if (n.nodeType !== 1) continue
      const tag = n.tagName.toUpperCase()
      if (SKIP.has(tag)) {
        if (dropped) n.querySelectorAll && [n, ...n.querySelectorAll('img')].forEach((im) => im.tagName === 'IMG' && dropped.push(im.currentSrc || im.src))
        if (dropped && tag === 'FIGURE') { const t = n.innerText.trim(); if (t) dropped.push('figure text: ' + t) }
        continue
      }
      const t = KEEP[tag]
      if (!t) { out += walk(n); continue }
      if (t === 'hr' || t === 'br') { out += '<' + t + '>'; continue }
      const inner = walk(n)
      if (!inner.trim() && t !== 'td' && t !== 'th') continue
      if (t === 'a') { const h = n.getAttribute('href') || ''; out += h ? '<a href="' + h.replace(/"/g, '&quot;') + '">' + inner + '</a>' : inner; continue }
      out += '<' + t + '>' + inner + '</' + t + '>'
    }
    return out
  }
  return walk(root).replace(/\\s+/g, ' ').replace(/\\s*(<\\/?(?:h2|h3|h4|p|ul|ol|li|blockquote|table|thead|tbody|tr|th|td|hr|br)>)\\s*/g, '$1').trim()
}
`

const browser = await chromium.launch({ channel: 'chrome' })
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
await ctx.addInitScript(CLEAN)
const page = await ctx.newPage()

/* 1. the blog index: each article's cover */
const coversFile = path.join(DIR, 'blog-covers.json')
let covers = fs.existsSync(coversFile) ? JSON.parse(fs.readFileSync(coversFile, 'utf8')) : null
if (!covers) {
  await page.goto(LIVE + '/blog', { waitUntil: 'networkidle', timeout: 60000 })
  for (let i = 0; i < 60; i++) {
    await page.mouse.wheel(0, 1400)
    await sleep(150)
  }
  await page.waitForLoadState('networkidle')
  covers = await page.evaluate(() => {
    const out = {}
    for (const im of document.querySelectorAll('img')) {
      const a = im.closest('a[href^="/blog/"]')
      if (a && !out[a.getAttribute('href')]) out[a.getAttribute('href')] = im.currentSrc || im.src
    }
    return out
  })
  fs.writeFileSync(coversFile, JSON.stringify(covers, null, 1))
  log(`blog index: ${Object.keys(covers).length} covers`)
  await sleep(PAUSE)
}

/* 2. the articles */
const failed = []
let n = 0
for (const p of paths) {
  n++
  const parts = p.split('/').filter(Boolean)
  const kind = parts[0]
  const slug = parts[parts.length - 1]
  const file = path.join(DIR, kind, slug + '.json')
  if (fs.existsSync(file)) continue
  try {
    await page.goto(LIVE + p, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForFunction(() => (document.querySelector('h1')?.textContent ?? '').trim().length > 3, null, { timeout: 20000 })
    if (kind === 'blog') await page.waitForSelector('article .prose', { timeout: 15000 })
    else await page.waitForFunction(() => document.querySelectorAll('h2').length > 2, null, { timeout: 15000 })
    await sleep(600)
    const data = await page.evaluate((kind) => {
      const meta = (n) => document.querySelector(`meta[name="${n}"],meta[property="${n}"]`)?.getAttribute('content') ?? ''
      const txt = (el) => (el?.innerText ?? '').replace(/\s+/g, ' ').trim()
      const dropped = []
      const base = { finalUrl: location.pathname, docTitle: document.title, description: meta('description'), ogImage: meta('og:image'), h1: txt(document.querySelector('h1')) }
      if (kind === 'blog') {
        const art = document.querySelector('article')
        const header = art.querySelector('header')
        const metaRow = header?.querySelector('h1 + div')
        const metaItems = metaRow ? [...metaRow.children].map(txt).filter(Boolean) : []
        const prose = art.querySelector('.prose')
        const imgs = [...art.querySelectorAll('img')].map((im) => im.currentSrc || im.src)
        /* anything else in the article column besides the back link, header, body, their "Ready to Take Action?" panel, related and the Google box */
        const col = prose.parentElement
        const extra = []
        let cta = null
        for (const el of col.children) {
          if (el === prose || el.tagName === 'HEADER' || el.contains(header)) continue
          const t = txt(el)
          if (!t || t === 'Back to Articles') continue
          if (/^Ready to Take Action\?/.test(t)) {
            cta = { title: txt(el.querySelector('h2,h3')), text: txt(el.querySelector('p')), button: txt(el.querySelector('a,button')), href: el.querySelector('a')?.getAttribute('href') ?? '' }
            continue
          }
          if (/^Related Articles/.test(t)) continue
          if (/^Follow AWM on Google/.test(t)) continue
          extra.push({ text: t.slice(0, 300), html: window.__clean(el, dropped) })
        }
        return { ...base, kind, metaItems, bodyHtml: window.__clean(prose, dropped), imgs, extra, cta, dropped }
      }
      /* market update: the hero, then the cards (a heading and its text), the sources, the important-information box */
      const h1 = document.querySelector('h1')
      const hero = h1.closest('section')
      const heroOut = {
        back: txt(hero.querySelector('a')),
        badges: [...hero.querySelectorAll('.rounded-full')].map(txt).filter(Boolean),
        time: txt(hero.querySelector('time')),
        datetime: hero.querySelector('time')?.getAttribute('datetime') ?? '',
        ledes: [...hero.querySelectorAll('p')].map((p) => p.textContent.trim()).filter(Boolean),
        other: [...hero.querySelectorAll('h1 ~ *:not(p)')].map(txt).filter(Boolean),
      }
      const body = hero.nextElementSibling
      const stack = body.querySelector('.space-y-8') ?? body
      const blocks = []
      for (const el of stack.children) {
        const h = el.querySelector('h2,h3')
        const heading = txt(h)
        if (/^Sources$/i.test(heading)) {
          blocks.push({ type: 'sources', heading, items: [...el.querySelectorAll('a')].map((a) => ({ text: txt(a), href: a.getAttribute('href') ?? '' })) })
          continue
        }
        if (!h) {
          blocks.push({ type: 'note', text: txt(el), html: window.__clean(el, dropped) })
          continue
        }
        const parts = [...el.children].filter((c) => !c.contains(h))
        blocks.push({ type: 'card', heading, raw: parts.map((c) => c.textContent).join('\n\n').trim(), html: parts.map((c) => window.__clean(c, dropped)).join('') })
      }
      /* the sections after the body: related ("More ... Updates") and their call to action */
      const after = []
      let s = body.nextElementSibling
      while (s && s.tagName !== 'FOOTER') {
        const t = txt(s)
        if (t) after.push({ heading: txt(s.querySelector('h2,h3')), text: txt(s.querySelector('h2 ~ p, h3 ~ p, p')), button: txt(s.querySelector('button')), href: s.querySelector('a:last-of-type')?.getAttribute('href') ?? '', links: [...s.querySelectorAll('a')].map((a) => [txt(a), a.getAttribute('href')]) })
        s = s.nextElementSibling
      }
      return { ...base, kind, hero: heroOut, blocks, after, dropped }
    }, kind)
    data.path = p
    data.slug = slug
    if (kind === 'market-updates') data.stream = parts[1]
    fs.writeFileSync(file, JSON.stringify(data, null, 1))
    log(`${n}/${paths.length} ok ${p}`)
  } catch (e) {
    failed.push({ path: p, error: String(e.message || e).split('\n')[0] })
    log(`${n}/${paths.length} FAIL ${p} ${String(e.message || e).split('\n')[0]}`)
  }
  await sleep(PAUSE)
}
fs.writeFileSync(path.join(DIR, 'failed.json'), JSON.stringify(failed, null, 1))
await browser.close()

/* 3. the covers: each once, webp at 1600 and 640 wide */
let made = 0
for (const [href, url] of Object.entries(covers)) {
  const slug = href.split('/').pop()
  if (!paths.includes(href)) continue
  const out = `public/articles/${slug}.webp`
  if (fs.existsSync(out) && fs.existsSync(`public/articles/${slug}-640.webp`)) continue
  try {
    const raw = path.join(DIR, 'covers', slug + path.extname(new URL(url).pathname))
    if (!fs.existsSync(raw)) {
      const res = await fetch(url)
      if (!res.ok) throw new Error('HTTP ' + res.status)
      fs.writeFileSync(raw, Buffer.from(await res.arrayBuffer()))
      await sleep(300)
    }
    await sharp(raw).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out)
    await sharp(raw).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`public/articles/${slug}-640.webp`)
    made++
  } catch (e) {
    log(`COVER FAIL ${href} ${e.message}`)
    failed.push({ path: href, cover: url, error: e.message })
  }
}
fs.writeFileSync(path.join(DIR, 'failed.json'), JSON.stringify(failed, null, 1))
log(`covers made: ${made}`)
log(`DONE: ${failed.length} failed`)

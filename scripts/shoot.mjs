/* Screenshots for review: each hero option at the screen size given, and (with FULL=1) the whole page.
       node scripts/shoot.mjs [width] [height]      -> _shots/hero-<a|b|c|d>-<w>.jpg
   BASE (default http://localhost:4720), ROUTES (comma list) and FULL=1 change what is taken. */
import { chromium } from 'playwright-core'
import fs from 'node:fs'

const BASE = process.env.BASE ?? 'http://localhost:4720'
const [w = 1440, h = 900] = process.argv.slice(2).map(Number)
const routes = (process.env.ROUTES ?? '/,/hero/b,/hero/c,/hero/d').split(',')
const full = process.env.FULL === '1'
fs.mkdirSync('_shots', { recursive: true })

const b = await chromium.launch({ channel: 'chrome' })
const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })
const p = await ctx.newPage()
for (const r of routes) {
  await p.goto(BASE + r, { waitUntil: 'networkidle' })
  await p.evaluate(() => document.fonts.ready)
  /* a full-page shot does not scroll, so lazy pictures would stay blank: walk the page first */
  if (full) {
    await p.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)) }
      window.scrollTo(0, 0)
    })
    await p.waitForLoadState('networkidle')
  }
  /* a still picture of the finished state: the load-in and scroll condense would otherwise be caught half-way */
  await p.addStyleTag({ content: '.enter,.condense{animation:none!important;transition:none!important;opacity:1!important;filter:none!important}' })
  await p.waitForTimeout(400)
  const name = r === '/' ? 'hero-a' : r.replace(/^\/hero\//, 'hero-').replace(/\//g, '_').replace(/^_/, '')
  const file = `_shots/${name}-${w}${full ? '-full' : ''}.jpg`
  await p.screenshot({ path: file, fullPage: full, type: 'jpeg', quality: 72 })
  const m = await p.evaluate(() => {
    const hero = document.querySelector('main > section')
    const r = hero?.getBoundingClientRect()
    return { heroH: Math.round(r?.height ?? 0), vh: innerHeight, docW: document.documentElement.scrollWidth, vw: innerWidth }
  })
  console.log(file, JSON.stringify(m))
}
await b.close()

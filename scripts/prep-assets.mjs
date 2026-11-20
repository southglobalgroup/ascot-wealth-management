/* Copies Ascot's own pictures from _scrape/assets (downloaded from ascotwm.com) into src/assets with plain names, and makes
   the favicons and the sharing card from their logo. Run again whenever _scrape/assets changes.
       node scripts/prep-assets.mjs */
import fs from 'node:fs'
import sharp from 'sharp'

const IN = '_scrape/assets/'
const IMG = 'src/assets/img/'
const BRAND = 'src/assets/brand/'
fs.mkdirSync(IMG, { recursive: true })
fs.mkdirSync(BRAND, { recursive: true })
fs.mkdirSync('public', { recursive: true })

/* the old site's names -> what each picture shows */
const photos = {
  'investment.webp': 'balance-sculpture.webp',
  'retirement-bg.webp': 'coast-path.webp',
  'protection-bg.webp': 'family-breakfast.webp',
  'mortgage-bg.webp': 'home-at-dusk.webp',
  'planning-bg.webp': 'oak-table.webp',
  'corporate-bg.webp': 'office-view.webp',
  'poster.jpg': 'sapling-at-dawn.jpg',
  'article0.webp': 'article-drawing-room.webp',
  'article1.webp': 'article-meeting.webp',
  'article2.webp': 'article-sapling.webp',
  'mark.webp': 'team-mark-insley.webp',
  'claire.webp': 'team-claire-calder.webp',
  'catriona.webp': 'team-catriona-mccarron.webp',
  'greg.webp': 'team-greg-armstrong.webp',
}
for (const [from, to] of Object.entries(photos)) fs.copyFileSync(IN + from, IMG + to)
/* the consultation room is a 2.2 MB PNG: the same picture as a webp */
await sharp(IN + 'consultation-panorama.png').webp({ quality: 86 }).toFile(IMG + 'consultation-room.webp')

/* brand marks */
fs.copyFileSync(IN + 'ascot-logo-1yJ3OLbM.png', BRAND + 'ascot-logo.png')
fs.copyFileSync(IN + 'ascot-logo-white-DSAR3wZ6.png', BRAND + 'ascot-logo-white.png')
fs.copyFileSync(IN + 'fca-logo.svg', BRAND + 'fca-logo.svg')
fs.copyFileSync(IN + 'vouchedfor-logo.svg', BRAND + 'vouchedfor-logo.svg')
fs.copyFileSync(IN + 'vouchedfor-logo-DGOO5mC4.png', BRAND + 'vouchedfor-logo-white.png')

/* favicons: their gold crown (#FEAD00, the logo's own) on the logo's navy (#022457) */
const NAVY = '#022457'
const crown = await sharp(IN + 'awm-icon.png').trim().png().toBuffer()
const tile = async (size, pad) => {
  const inner = Math.round(size * (1 - pad * 2))
  const c = await sharp(crown).resize({ width: inner, height: inner, fit: 'inside' }).toBuffer()
  return sharp({ create: { width: size, height: size, channels: 4, background: NAVY } }).composite([{ input: c, gravity: 'center' }]).png().toBuffer()
}
const p32 = await tile(32, 0.12)
const p48 = await tile(48, 0.12)
fs.writeFileSync('public/favicon-32.png', p32)
fs.writeFileSync('public/apple-touch-icon.png', await tile(180, 0.16))
fs.writeFileSync('public/icon-512.png', await tile(512, 0.16))
/* favicon.ico holding PNG images (valid since Windows Vista; every current browser reads it) */
const ico = (pngs) => {
  const head = Buffer.alloc(6); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4)
  let offset = 6 + 16 * pngs.length
  const dir = pngs.map(([size, buf]) => {
    const e = Buffer.alloc(16)
    e.writeUInt8(size >= 256 ? 0 : size, 0); e.writeUInt8(size >= 256 ? 0 : size, 1); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6)
    e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12); offset += buf.length
    return e
  })
  return Buffer.concat([head, ...dir, ...pngs.map(([, b]) => b)])
}
fs.writeFileSync('public/favicon.ico', ico([[32, p32], [48, p48]]))

/* sharing card 1200x630: the logo on white beside their balance sculpture */
const logo = await sharp(IN + 'ascot-logo-1yJ3OLbM.png').resize({ width: 400 }).toBuffer()
const photo = await sharp(IN + 'investment.webp').resize(600, 630, { fit: 'cover', position: 'right' }).toBuffer()
const rule = await sharp({ create: { width: 64, height: 4, channels: 4, background: '#FEAD00' } }).png().toBuffer()
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
  .composite([
    { input: logo, left: 100, top: 220 },
    { input: rule, left: 104, top: 440 },
    { input: photo, left: 600, top: 0 },
  ])
  .jpeg({ quality: 86 })
  .toFile('public/og.jpg')

console.log('pictures, brand marks, favicons and og.jpg written')

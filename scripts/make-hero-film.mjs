/* HERO C'S FILM (stock): London at sunset, the Shard and the Walkie-Talkie against a gold sky over the City's silhouette: Pexels
   video 34313773, https://www.pexels.com/video/34313773/ (the Pexels licence: free to use, no credit needed). No people or boats
   in it, since it plays forwards and then backwards: LEN s from FROM s, then the same frames backwards, so its last frame is its
   first and `loop` has no seam. 1600x900, 25 fps, no sound, in public/video; its first frame is the poster
   (src/assets/video/hero-poster.jpg). Copied from Universal Roofing's script (it reverses in 2 s pieces: this PC is short of memory).
   ffmpeg is a throwaway kept out of the project (npm i ffmpeg-static in a scratch folder):
     FFMPEG=<path to ffmpeg.exe> node scripts/make-hero-film.mjs */
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
import sharp from 'sharp'

const FILMS = [
  { name: 'hero', src: '_scrape/video/34313773-1920.mp4', from: 0.2, len: 6, crf: 30, grade: 'eq=contrast=1.04:saturation=1.03' },
  /* hero D: the City and the Thames at blue dusk, its lights coming on: Pexels 3568719, https://www.pexels.com/video/3568719/ */
  { name: 'hero-d', src: '_scrape/video/3568719-1920.mp4', from: 0.1, len: 4, crf: 31, grade: 'eq=contrast=1.03:saturation=0.98' },
  /* hero E: an English country estate in autumn, the drone gliding up the avenue: Pexels 40730607, https://www.pexels.com/video/40730607/ */
  { name: 'hero-e', src: '_scrape/video/40730607-1920.mp4', from: 0.4, len: 6, crf: 31, grade: 'eq=contrast=1.03:saturation=1.02' },
  /* hero F: London at twilight, a navy sky over a pink horizon and the city's lights: Pexels 5236101, https://www.pexels.com/video/5236101/ */
  { name: 'hero-f', src: '_scrape/video/5236101-1920.mp4', from: 2, len: 6, crf: 30, grade: 'eq=contrast=1.03:saturation=1.0' },
  /* hero G: a historic mansion, the drone drawing back over its parkland: Pexels 34000415, https://www.pexels.com/video/34000415/ */
  { name: 'hero-g', src: '_scrape/video/34000415-1920.mp4', from: 0.2, len: 6, crf: 31, grade: 'eq=contrast=1.02:saturation=0.98' },
]
const ffmpeg = process.env.FFMPEG
if (!ffmpeg) throw new Error('FFMPEG=<path to ffmpeg.exe> node scripts/make-hero-film.mjs')
fs.mkdirSync('public/video', { recursive: true })
fs.mkdirSync('src/assets/video', { recursive: true })

/* one film only: node scripts/make-hero-film.mjs <name> */
const only = process.argv[2]
for (const { name, src, from, len, crf, grade } of FILMS.filter((f) => !only || f.name === only)) {
  if (!fs.existsSync(src)) throw new Error(`${src} is missing: download it from the Pexels page named above`)
  const prep = `fps=25,scale=1600:900:force_original_aspect_ratio=increase:flags=lanczos,crop=1600:900,setsar=1,${grade}`
  const run = (args) => execFileSync(ffmpeg, ['-y', '-v', 'error', ...args], { stdio: ['ignore', 'ignore', 'inherit'] })
  const near = ['-an', '-c:v', 'libx264', '-crf', '12', '-preset', 'veryfast', '-threads', '2', '-pix_fmt', 'yuv420p']
  /* reversing a whole pass holds every frame in memory at once, more than this PC has spare: so the forward pass is written
     out first, then turned round in 2 s pieces (50 frames each), and the pieces are joined last one first */
  const tmp = `_scrape/video/tmp-${name}`
  fs.mkdirSync(tmp, { recursive: true })
  run(['-ss', String(from), '-t', String(len), '-i', src, '-vf', prep, ...near, `${tmp}/fwd.mp4`])
  const pieces = Math.ceil(len / 2)
  /* the backwards half starts one frame in: its first frame is the forward pass's last, and showing it twice would be a hold at
     the turn (so the last piece, which plays first, loses its first frame) */
  for (let k = 0; k < pieces; k++) run(['-ss', String(k * 2), '-t', '2', '-i', `${tmp}/fwd.mp4`, '-vf', k === pieces - 1 ? 'reverse,trim=start_frame=1,setpts=PTS-STARTPTS' : 'reverse', ...near, `${tmp}/rev-${k}.mp4`])
  /* joined one after another (the concat list reads one file at a time), with few encoder threads: the ffmpeg build is 32-bit */
  const list = [`${tmp}/fwd.mp4`, ...Array.from({ length: pieces }, (_, i) => `${tmp}/rev-${pieces - 1 - i}.mp4`)].map((f) => `file '${f.replace(/^.*\//, '')}'`).join('\n')
  fs.writeFileSync(`${tmp}/list.txt`, list)
  const out = `public/video/${name}.mp4`
  run(['-f', 'concat', '-safe', '0', '-i', `${tmp}/list.txt`, '-an', '-c:v', 'libx264', '-crf', String(crf), '-preset', 'slow', '-x264-params', 'rc-lookahead=20', '-threads', '2', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out])
  fs.rmSync(tmp, { recursive: true, force: true })

  const frame = (args) => execFileSync(ffmpeg, [...args, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'], { stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 })
  const first = frame(['-i', out])
  const poster = `src/assets/video/${name}-poster.jpg`
  await sharp(first).jpeg({ quality: 84, mozjpeg: true }).toFile(poster)
  /* the seam: how far the last frame is from the first, out of 255 on average */
  const last = frame(['-sseof', '-0.06', '-i', out])
  const [a, b] = await Promise.all([first, last].map((f) => sharp(f).resize(320, 180).removeAlpha().raw().toBuffer()))
  let diff = 0
  for (let i = 0; i < a.length; i++) diff += Math.abs(a[i] - b[i])
  console.log(`${out}: ${(fs.statSync(out).size / 1024).toFixed(0)} KB, ${(len * 2).toFixed(1)} s; poster ${(fs.statSync(poster).size / 1024).toFixed(0)} KB; seam ${(diff / a.length).toFixed(2)} of 255`)
}

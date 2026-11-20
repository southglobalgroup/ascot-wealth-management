/* Hero films: any video[data-film]. The file is fetched only once the page has loaded and the browser is idle, never under reduced
   motion or data saver (those visitors keep the poster, which is the film's first frame, so nothing jumps). It plays only while
   on screen, and fades in over the poster once it is actually playing. No controls, at his word: it is a moving picture. */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true

document.querySelectorAll<HTMLVideoElement>('video[data-film]').forEach((v) => {
  if (reduce || save) return
  const start = () => {
    v.src = v.dataset.film || ''
    v.addEventListener('playing', () => v.classList.add('is-on'), { once: true })
    new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.05 }).observe(v)
  }
  const idle = (cb: () => void) => ('requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 1500 }) : setTimeout(cb, 300))
  if (document.readyState === 'complete') idle(start)
  else addEventListener('load', () => idle(start), { once: true })
  /* a tab brought back from the background resumes */
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && v.src && v.paused && v.getBoundingClientRect().bottom > 0) v.play().catch(() => {})
  })
})

export {}

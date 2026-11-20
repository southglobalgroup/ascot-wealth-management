/* Scrolling: Reddrok's "condense" (his ask, 2026-11-19: "blur fade not just load in but on scroll down, like Reddrok").
   Every page below its opening section: headings, paragraphs, list items, cards and pictures each arrive out of a blur as they
   come into view, siblings a beat apart. Applied here once, for every page, so no page has to mark its own elements.
   Only the OUTERMOST matching element is animated (a card condenses as one, not its every line). Without script, with reduced
   motion, or without IntersectionObserver, everything is simply there. */
/* (the services explorer's panels have their own crossfade: their CONTENTS condense, not the panels) */
const BLOCKS = [
  '.eyebrow', 'h2', 'h3', 'h4', 'p', 'li', 'dl', 'table', 'figure', 'article:not([data-panel])', 'blockquote', 'form',
  '.btn', '.link-arrow', 'img', 'picture', '.risk', '[class*="__media"]', '[class*="__photo"]', '[class*="__card"]',
].join(',')
/* never hidden: anything a disclosure hides (a closed FAQ answer would never intersect, so it would stay invisible), the
   explorer's tab list, form controls */
const SKIP = '.faq__a, [role="tablist"], label, input, select, textarea, [data-no-condense]'

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
if (!reduce && 'IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll<HTMLElement>('main > section, main > div > section')].slice(1)
  const picked = new Set<HTMLElement>()
  for (const s of sections) {
    for (const el of s.querySelectorAll<HTMLElement>(BLOCKS)) {
      if (el.closest(SKIP) || el.classList.contains('enter')) continue
      let up = el.parentElement
      let inside = false
      while (up && up !== s) {
        if (picked.has(up)) {
          inside = true
          break
        }
        up = up.parentElement
      }
      if (!inside) picked.add(el)
    }
  }
  /* a beat between siblings that arrive together, capped so a long list does not crawl */
  const count = new Map<Element | null, number>()
  for (const el of picked) {
    const n = count.get(el.parentElement) ?? 0
    count.set(el.parentElement, n + 1)
    el.style.setProperty('--d', `${Math.min(n, 6) * 0.07}s`)
    el.classList.add('condense')
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target as HTMLElement
        el.classList.add('is-in')
        io.unobserve(el)
        /* once it has arrived, hand the element back its own transitions (a button's hover colour, a card's border) */
        setTimeout(() => el.classList.remove('condense', 'is-in'), 1300 + parseFloat(el.style.getPropertyValue('--d') || '0') * 1000)
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
  )
  picked.forEach((el) => io.observe(el))
}

export {}

/* The bar's menus. A menu opens on hover (after a short pause, so a pointer crossing the bar does not flash them), on click
   and from the keyboard; Escape, a click outside or leaving the bar closes it. Only one is open at a time. The curtain itself is
   CSS (a clip-path transition), so a menu reverses smoothly if it is closed half-way open. The phone sheet works the same way. */
const bar = document.querySelector<HTMLElement>('[data-bar]')
if (bar) {
  const btns = [...bar.querySelectorAll<HTMLButtonElement>('[data-menu-btn]')]
  const panel = (b: HTMLButtonElement) => document.getElementById(b.getAttribute('aria-controls') || '')
  const hoverable = matchMedia('(hover: hover) and (pointer: fine)')
  let openTimer = 0
  let closeTimer = 0

  const setOpen = (btn: HTMLButtonElement | null) => {
    for (const b of btns) {
      const on = b === btn
      b.setAttribute('aria-expanded', String(on))
      panel(b)?.classList.toggle('is-open', on)
    }
    /* the page dims behind the big menus, not behind the small account menu */
    bar.toggleAttribute('data-open', !!btn && !btn.hasAttribute('data-small'))
  }
  const current = () => btns.find((b) => b.getAttribute('aria-expanded') === 'true') ?? null

  for (const b of btns) {
    b.addEventListener('click', () => setOpen(current() === b ? null : b))
    b.addEventListener('pointerenter', () => {
      if (!hoverable.matches) return
      clearTimeout(closeTimer)
      clearTimeout(openTimer)
      openTimer = window.setTimeout(() => setOpen(b), current() ? 0 : 110)
    })
    b.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setOpen(b)
        panel(b)?.querySelector<HTMLAnchorElement>('a')?.focus()
      }
    })
  }
  /* leaving the bar and its open panel closes it, after a beat (a pointer passing over the gap does not) */
  bar.addEventListener('pointerleave', () => {
    if (!hoverable.matches) return
    clearTimeout(openTimer)
    closeTimer = window.setTimeout(() => setOpen(null), 220)
  })
  bar.addEventListener('pointerenter', () => clearTimeout(closeTimer))
  /* the plain links in the bar close any open menu as the pointer reaches them */
  bar.querySelectorAll<HTMLElement>('.bar__link:not([data-menu-btn]), .bar__home, .bar__phone, .bar__cta').forEach((el) =>
    el.addEventListener('pointerenter', () => {
      if (!hoverable.matches) return
      clearTimeout(openTimer)
      openTimer = window.setTimeout(() => setOpen(null), 120)
    }),
  )
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    const open = current()
    if (open) {
      setOpen(null)
      open.focus()
    }
    if (sheetBtn?.getAttribute('aria-expanded') === 'true') toggleSheet(false)
  })
  document.addEventListener('click', (e) => {
    if (!bar.contains(e.target as Node) || (e.target as HTMLElement).closest('[data-scrim]')) setOpen(null)
  })
  bar.addEventListener('focusout', (e) => {
    const to = e.relatedTarget as Node | null
    if (to && !bar.contains(to)) setOpen(null)
  })

  /* the phone sheet */
  const sheetBtn = bar.querySelector<HTMLButtonElement>('[data-sheet-btn]')
  const sheet = bar.querySelector<HTMLElement>('[data-sheet]')
  const toggleSheet = (on: boolean) => {
    sheetBtn?.setAttribute('aria-expanded', String(on))
    sheet?.classList.toggle('is-open', on)
    document.documentElement.style.overflow = on ? 'hidden' : ''
  }
  sheetBtn?.addEventListener('click', () => toggleSheet(sheetBtn.getAttribute('aria-expanded') !== 'true'))
  sheet?.querySelectorAll<HTMLButtonElement>('[data-acc]').forEach((h) =>
    h.addEventListener('click', () => h.setAttribute('aria-expanded', String(h.getAttribute('aria-expanded') !== 'true'))),
  )
  matchMedia('(min-width: 68em)').addEventListener('change', (m) => m.matches && toggleSheet(false))
}

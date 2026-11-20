/* The services index: pointing at a name (after a short pause), clicking it or arrowing to it brings its scene forward. The
   crossfade is CSS. Tabs follow the WAI-ARIA tabs pattern (arrow keys, Home, End). */
document.querySelectorAll<HTMLElement>('[data-explorer]').forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-tab]')]
  const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')]
  const fine = matchMedia('(hover: hover) and (pointer: fine)')
  let timer = 0
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-ready')))

  const show = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      const on = i === j
      t.setAttribute('aria-selected', String(on))
      t.tabIndex = on ? 0 : -1
      panels[j].classList.toggle('is-on', on)
    })
    if (focus) tabs[i].focus()
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(i))
    t.addEventListener('pointerenter', () => {
      if (!fine.matches) return
      clearTimeout(timer)
      timer = window.setTimeout(() => show(i), 140)
    })
    t.addEventListener('pointerleave', () => clearTimeout(timer))
    t.addEventListener('keydown', (e) => {
      const n = tabs.length
      const to = { ArrowDown: (i + 1) % n, ArrowRight: (i + 1) % n, ArrowUp: (i - 1 + n) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key]
      if (to === undefined) return
      e.preventDefault()
      show(to, true)
    })
  })
})

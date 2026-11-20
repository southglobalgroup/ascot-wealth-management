# Building the inner pages: the brief

Stage 2 of the ascotwm.com revamp. The design system, the bar, the foot and the home page are DONE. Read these before writing
anything, and build on them:

- `src/styles/global.css`: tokens and utilities (`wrap`, `section`, `bg-tint`, `eyebrow`, `display`, `h2`, `h3`, `lede`, `small`,
  `num`, `btn btn-gold|btn-line|btn-navy`, `link-arrow`, `fill-img`, `.head`, `.head-split`, `.prose`, `.risk`)
- `src/layouts/Layout.astro` (props: `title`, `description`, `path`)
- `src/components/PageHero.astro`: every inner page opens with it (crumbs, eyebrow, H1, lede, actions, optional picture)
- `src/components/Closing.astro`: every page closes with it (their "Ready to Get Started?" etc.)
- `src/components/Faq.astro`: any questions and answers
- `src/components/home/*.astro`: the home sections, the reference for quality and layout vocabulary (Services.astro, LongView,
  HowWeWork, Team, Intelligence)
- `src/data/site.ts` (phone, email, address, FCA line, reviews, `book`, `formEndpoint`), `src/data/nav.ts`

## Sources

`_scrape/pages/<page>.json`: each page of the live site as rendered on 2026-11-19 (`text`, `headings`, `imgs` with their URLs,
`links`). The `text` starts with the bar's menus and ends with the footer, cookie banner and tour: skip those, they are built.
The page's own content sits between "View All Resources" and the footer's "SERVICES".

Pictures: download the page's own images from the URLs in `imgs` (curl, into `_scrape/assets/<page>/`), then copy the ones
you use into `src/assets/img/<area>/` with plain names, and use them through `astro:assets` `<Image>` (widths + sizes).
Photos already in `src/assets/img/` may be reused.

## Rules (from his feedback on earlier sites; these are not optional)

1. **Their words verbatim.** Every heading, paragraph, list item and button label as on the live page. Never trim, merge,
   rewrite or "improve" a sentence; never invent a fact, number, quote, name or claim. Layout labels you need that the page does
   not have (an eyebrow) may reuse the page's own words. If something cannot be placed, list it in your report.
2. **FCA risk warnings stay visible** next to what they qualify (use `.risk`). Regulatory text is never shortened.
3. **The look:** mostly white and pale grey (`bg-tint`); at most ONE deep-navy band on a page (like HowWeWork), and only where it
   earns it. Gold is a fill (navy text on it) or a thin rule, never text on white (`--color-gold-ink` for small gold text).
   Corners 2px. Hairline rules. No hover lift, scale or glow shadows. No scroll-triggered reveals or animation on scroll.
   No emoji. No decorative icons (his rule: icons look "goofy"; a plain rule or a number marks a section). No visible
   captions under pictures (a person's name and role under their portrait is fine).
4. **Sizes:** stay on the scale in global.css (display <= 76px, H2 ~44px, body 16px, 44px buttons, 1200px container).
5. **Not one template stamped 18 times:** pages share the system but each gets the layout its content needs (a process is a
   numbered sequence; features are a ruled list; people are a portrait grid; legal pages are `.prose`).
6. **Every page:** `<Layout title description path>` using the live page's own title and meta description from the JSON (fix the
   ones that are the generic site-wide title: "<Page> | Ascot Wealth Management"), `PageHero` first, `Closing` last.
7. **Links** go to the new site's addresses (`/services/...`, `/staff`, `/contact`, `/market-updates`...). Article and
   market-update DETAIL pages are not built yet: link those to the live site, absolute `https://ascotwm.com/...`.
8. **Phones:** nothing may scroll sideways (document width == viewport width at 390 and 360).

## Files

- Put each page's words in `src/data/pages/<name>.ts`, its page in `src/pages/...` (build.format is 'file':
  `src/pages/staff.astro` serves /staff; `src/pages/services/[slug].astro` for the six services).
- Page-specific components go in `src/components/<area>/`.
- DO NOT edit the shared files (global.css, Layout, Header, Footer, PageHero, Closing, Faq, site.ts, nav.ts, routes.ts,
  anything in components/home). Two other builders are working in this folder at the same time. If a shared file needs a change,
  say so in your report instead.

## Checking your pages

The dev server is ALREADY running at http://localhost:4720 (do not start another; if it stops answering twice in a row, start it
with `node node_modules/astro/astro.js dev --port 4720` in the background).

- Each page answers 200: `curl -s -o /dev/null -w "%{http_code}" http://localhost:4720/<path>`
- Look at each page once: `MSYS_NO_PATHCONV=1 FULL=1 ROUTES=/staff,/about node scripts/shoot.mjs 1440 900` and `... 390 844`
  (writes `_shots/<name>-<w>-full.jpg`; the JSON line it prints includes docW, which must equal vw). Split a tall shot with
  sharp before viewing if needed. Fix real defects; one pass, no polishing loops.
- `node node_modules/astro/astro.js check` at the end: fix errors in YOUR files only.

Do not deploy, commit, or touch Supabase / the live site's admin. Be economical: read each source JSON once, write each file once.

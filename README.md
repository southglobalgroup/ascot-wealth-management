# Ascot Wealth Management: the revamp

A rebuild of ascotwm.com's public site for Ascot Wealth Management (FCA FRN 551744): Astro 5 (static), Tailwind 4, Inter, vanilla
scripts. Their own words (verbatim), logo, photographs and portraits (downloaded from ascotwm.com into `_scrape/`).

    npm run dev        # http://localhost:4720
    npm run build && npm run preview   # http://localhost:4721

## Direction (his brief, 2026-11-19)

Sharp, trustworthy, enterprise. Mostly WHITE and pale grey; navy kept for a few places (the film heroes, "How we work", the foot).
Brand colours measured from their files: logo navy `#022457`, crown gold `#FEAD00` (a fill with navy on it, never text on white;
`#8A5D00` is the same gold for small text). Corners 2px, hairline rules, no lifts or glows.

Motion (his asks): the opening words condense out of a blur on load (`.enter`), and every section's blocks do the same as they
scroll into view (`src/scripts/condense.ts`), Reddrok's effect dialled down a touch (10px / 8px). Pages change with the browser's
cross-document view transition (the bar stays put; `@view-transition` in global.css). Menus open in one soft curtain and close
when the pointer leaves. The home services panel is sticky.

## Hero options (2026-11-19): C is the home page; D to J are at /hero/<letter>; A and B are off the site

| | Address | Leads with (their own line) | Picture |
|---|---|---|---|
| C, Sunset film | `/` | Advice shaped around your life. | film: London at sunset (Pexels 34313773) |
| D, Dusk film | `/hero/d` | Advice from people who know you. | film: the Thames at dusk (Pexels 3568719), the four advisers along the foot |
| E, Autumn estate | `/hero/e` | A good plan grows with you. | white split, film: country estate in autumn (Pexels 40730607) |
| F, London twilight | `/hero/f` | Clear advice. A lasting relationship. | film: London at twilight (Pexels 5236101), We listen / We explain / You decide |
| G, Estate band | `/hero/g` | How Can We Help? | white above, film band: a mansion's parkland (Pexels 34000415), the six services along it |
| H, Gallery print | `/hero/h` | Bring the bigger picture together. | photo: Mayfair townhouse as a framed print (Kate Strilchuk, Pexels 20411306) |
| I, Manor and card | `/hero/i` | Start with a conversation. | photo: Wiltshire manor, full screen, slow drift; words on a white card (Phil Ledwith, Pexels 41018777) |
| J, Triptych | `/hero/j` | Clear advice. A lasting relationship. | photos: colonnade, Cotswolds house, garden walk (Sabine Otten 30297627, Amine Kübranur Çakıroğlu 37919804, David Pickup 32666469) |
| A, Horizon | off the site | A good plan grows with you. | their sapling at dawn |
| B, Coast | off the site | Clear advice. A lasting relationship. | their coastal path |

Stock films and photographs are under the Pexels licence (free to use, no credit needed); the originals are in `_scrape/video` and `_scrape/stock`.

**Bringing A or B back:** their components are kept (`src/components/home/HeroA.astro`, `HeroB.astro`, still wired in
`HomePage.astro`). Add `'a'` or `'b'` to `getStaticPaths` in `src/pages/hero/[v].astro` (it then serves `/hero/a` or `/hero/b`) and an
entry to the switcher in `HeroSwitch.astro`; to make one the home page, change `hero="c"` in `src/pages/index.astro`.

Films: `scripts/make-hero-film.mjs` (forwards then backwards, seamless), `src/scripts/film.ts` (after load, only on screen, never
under reduced motion / data saver). Every hero is exactly the screen under the bar at 1920x1080, 1536x864, 1440x900, 1366x768.
Once one is picked: make it `/`, delete the others, `/hero/*` and the switcher (`site.heroSwitcher`).

## Pages

Every page of the live site, at its old address: services + the six service pages, wealth management, investment approach, staff,
about, testimonials (+ /submit-testimonial), contact, FAQ, resources, market updates (+ each update), insights, blog (+ each
article), webinars, privacy, cookies, terms, client documents (the two PDFs in `public/documents`), regulatory information.
The live site's redirects are in `src/data/routes.ts`. `node scripts/check-links.mjs` crawls the dev server for broken links and
links still pointing at the live site.

## Before it can replace ascotwm.com

- **Logins:** the account menu (Client / Staff / Admin) opens the existing login app at `ascotwm.com/auth`. That app (and its
  admin) needs its own address first, e.g. app.ascotwm.com; then change `site.logins`.
- **Forms:** contact, testimonial and subscribe forms say "call or email" until `site.formEndpoint` is set (the Site Forms service,
  a new `/f/ascot` route; recipients to confirm).
- **For Ascot to confirm:** About's "Visit Our Office" address (live page: 19-21 High Street, Ascot; built with Sunningdale);
  "5★ Rated" beside the 4.8 rating; the FAQ's "often more than offset"; three market-update excerpts carry
  `utm_source=chatgpt.com` links; the IDD PDF's properties name its author.
- Deploy kit: `scripts/deploy.ps1` (rename `$Service` to `ascot-wealth-management` first) and the Dockerfile (its build checks still
  list Dusted's pages: update them).

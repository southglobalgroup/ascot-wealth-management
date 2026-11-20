/* Ascot Wealth Management: every fact here is from ascotwm.com (scraped 2026-11-19), word for word. */

export const site = {
  name: 'Ascot Wealth Management',
  legalName: 'Ascot Wealth Management Ltd',
  short: 'AWM',

  /* Search engines are kept out until this is true (nginx sends noindex, robots.txt disallows, every page carries a robots meta).
     Never write the word for "true" next to the key in a comment: astro.config.mjs and make-nginx.mjs read this file as text. */
  indexable: false,
  launchOrigin: 'https://ascotwm.com',
  previewOrigin: 'https://ascot-wealth-management-503426587396.europe-west1.run.app',

  /* the A / B / C / D hero switcher shows on review builds only */
  heroSwitcher: true,

  /* the contact form posts here once it is wired (the Site Forms service, a /f/ascot route; recipients to confirm with him).
     Empty: the form says to call or email instead of pretending to send. */
  formEndpoint: '',

  /* the bar's account menu, as on the live site (its three items and their targets, read from the live site's own code). They
     open the existing login app on ascotwm.com: when this site takes over ascotwm.com, that app needs its own address
     (e.g. app.ascotwm.com) and these three change with it. */
  logins: [
    { label: 'Client Login', href: 'https://ascotwm.com/auth', icon: 'person' },
    { label: 'Staff Login', href: 'https://ascotwm.com/auth?type=staff', icon: 'briefcase' },
    { label: 'Admin Login', href: 'https://ascotwm.com/auth?type=admin', icon: 'shield' },
  ],

  phoneDisplay: '01344 851250',
  phoneHref: 'tel:+441344851250',
  email: 'enquiries@ascotwm.com',
  address: {
    oneLine: 'Scotch Corner, London Road, Sunningdale, Berkshire, SL5 0ER',
    lines: ['Scotch Corner', 'London Road', 'Sunningdale', 'Berkshire', 'SL5 0ER'],
    registered: 'Scotch Corner, London Road, Sunningdale, Ascot, Berkshire SL5 0ER',
  },

  fca: {
    frn: '551744',
    line: 'Ascot Wealth Management Ltd is authorised and regulated by the Financial Conduct Authority (FRN 551744).',
    register: 'https://register.fca.org.uk/s/search?q=551744&type=Companies',
  },
  companyNumber: '07428369',
  regulatory:
    'Ascot Wealth Management Ltd is authorised and regulated by the Financial Conduct Authority (FRN 551744). Registered in England and Wales, company number 07428369. Registered office: Scotch Corner, London Road, Sunningdale, Ascot, Berkshire SL5 0ER.',

  reviews: { rating: '4.8', count: '1,195', countPlain: '1195', source: 'VouchedFor', line: 'Verified client reviews.' },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ascot-wealth-management/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCU1jKABZwwBsLmtBVye-Y7A' },
    { label: 'Facebook', href: 'https://www.facebook.com/ascotwealth/' },
  ],

  meta: {
    title: 'Ascot Wealth Management | Expert Financial Advisers UK',
    description:
      'Ascot Wealth Management: FCA-regulated financial advisers in Ascot, Berkshire. Investment management, retirement planning, mortgages and protection for individuals and businesses across the UK.',
  },
} as const

export const book = { label: 'Book a free introductory call', href: '/contact' }

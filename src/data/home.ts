/* The home page's words, verbatim from ascotwm.com (rendered 2026-11-19). The four hero options each lead with a different line
   that the live home page already uses; nothing here is invented. */
import balance from '../assets/img/balance-sculpture.webp'
import coast from '../assets/img/coast-path.webp'
import family from '../assets/img/family-breakfast.webp'
import home from '../assets/img/home-at-dusk.webp'
import oak from '../assets/img/oak-table.webp'
import office from '../assets/img/office-view.webp'
import mark from '../assets/img/team-mark-insley.webp'
import claire from '../assets/img/team-claire-calder.webp'
import catriona from '../assets/img/team-catriona-mccarron.webp'
import greg from '../assets/img/team-greg-armstrong.webp'
import art0 from '../assets/img/article-drawing-room.webp'
import art1 from '../assets/img/article-meeting.webp'
import art2 from '../assets/img/article-sapling.webp'

export const longView = {
  eyebrow: 'The long view',
  title: 'A good plan grows with you.',
  lede: 'Life changes. Your financial plan should be clear enough to guide your next decision, and flexible enough to change with you.',
  steps: [
    { title: 'Start with what matters.', text: 'Begin with the people, priorities and plans that shape your life.' },
    { title: 'Keep the plan in step with life.', text: 'Make informed adjustments as your circumstances and goals change.' },
    { title: 'Protect what matters.', text: 'Consider the risks that could affect the life you are building.' },
    { title: 'Think about what comes next.', text: 'Make space for future choices and the people you care about.' },
  ],
}

export const servicesIntro = {
  eyebrow: 'Services',
  title: 'Advice shaped around your life.',
  lede: 'We help you bring the different parts of your financial life into a clearer plan, with advice shaped around what matters to you.',
}

export const serviceScenes = [
  {
    tab: 'Investments', kicker: 'A considered balance', line: 'Balance for the long view.', name: 'Investment management',
    text: 'A considered approach to investing, aligned with your objectives, time horizon and attitude to risk.',
    warning: 'The value of investments and the income from them can fall as well as rise, and you may get back less than you invested.',
    cta: 'Explore investment management', href: '/services/investment-management',
    img: balance, alt: 'A tactile limestone and brass balance sculpture in warm light',
  },
  {
    tab: 'Retirement', kicker: 'The next chapter', line: 'Make room for what’s next.', name: 'Retirement planning',
    text: 'Make informed choices as you prepare for, enter and live through retirement.',
    cta: 'Explore retirement planning', href: '/services/retirement-planning',
    img: coast, alt: 'A coastal footpath winding through grasses towards an open sea horizon',
  },
  {
    tab: 'Protection', kicker: 'What matters most', line: 'For the people who matter.', name: 'Protection planning',
    text: 'Consider how to protect your income and the people who depend on you.',
    cta: 'Explore protection planning', href: '/services/protection-planning',
    img: family, alt: 'A family kitchen table laid for breakfast, morning light from the garden',
  },
  {
    tab: 'Mortgages', kicker: 'A place of your own', line: 'Find your way home.', name: 'Mortgage advice',
    text: 'Guidance to help you understand mortgage options and choose a suitable next step.',
    warning: 'Your home may be repossessed if you do not keep up repayments on your mortgage.',
    cta: 'Explore mortgage advice', href: '/services/mortgage-advisory',
    img: home, alt: 'A welcoming English home with a garden path and warm window light',
  },
  {
    tab: 'Planning', kicker: 'Joining the dots', line: 'Bring the bigger picture together.', name: 'Financial planning',
    text: 'Bring your goals, resources and future decisions into one joined-up plan.',
    cta: 'Explore financial planning', href: '/services/financial-planning',
    img: oak, alt: 'A warm oak table in a quiet room, ready for a planning conversation',
  },
  {
    tab: 'Business', kicker: 'Working together', line: 'Move forward with confidence.', name: 'Corporate services',
    text: 'Advice for employers and business owners.',
    cta: 'Explore corporate services', href: '/services/corporate-services',
    img: office, alt: 'An office meeting room with a view across the town',
  },
]

export const approach = {
  eyebrow: 'Our approach',
  title: 'Clear advice. A lasting relationship.',
  lede: ['Understanding what matters to you.', 'Bringing the way forward into focus.'],
  pillars: [
    { n: '01', title: 'We listen', text: 'Understand what matters to you before discussing solutions.', note: 'Your priorities. Your perspective.' },
    { n: '02', title: 'We explain' },
    { n: '03', title: 'You decide' },
  ],
}

export const howWeWork = {
  title: 'How we work',
  steps: [
    { title: 'Free introductory call', text: 'A relaxed 20-minute phone call about what you need and whether Ascot can help. Free, no obligation.' },
    { title: 'Discovery meeting', text: 'In person or by video, we explore your goals, circumstances and priorities.' },
    { title: 'Your personal plan', text: 'We review recommendations, reasoning, costs and risks together.' },
    { title: 'Ongoing relationship', text: 'We agree how advice and reviews will work over time.' },
  ],
}

export const team = {
  eyebrow: 'Our team',
  title: 'Advice from people who know you.',
  link: { label: 'Our Team', href: '/staff' },
  people: [
    { name: 'Mark Insley', role: 'Founder & Director', img: mark },
    { name: 'Claire Calder', role: 'Wealth Manager', img: claire },
    { name: 'Catriona McCarron', role: 'Wealth Manager', img: catriona },
    { name: 'Greg Armstrong', role: 'Global Wealth Manager', img: greg },
  ],
}

export const trust = {
  reviewsTitle: 'Client experience and trust',
  reviewsLink: { label: 'Client Testimonials', href: '/testimonials' },
  fcaTitle: 'FCA authorised',
  fcaLink: 'Financial Conduct Authority register',
}

export const intelligence = {
  eyebrow: 'Market intelligence',
  title: 'A little perspective for the road ahead.',
  link: { label: 'Market Intelligence', href: '/market-updates' },
  /* the three latest on the live site on 2026-11-19; they change weekly */
  articles: [
    { tag: 'SEIS', date: '13 Nov 2026', title: 'SEIS/EIS Market: Tax-Efficient Investing in Early-Stage Growth', href: '/market-updates/seis/seis-eis-seiseis-market-tax-efficient-investing-in-early-stage-growth-2026-11-08', img: art0 },
    { tag: 'VCT', date: '13 Nov 2026', title: 'VCT Sector Update: Dividend Yields and Long-Term Value', href: '/market-updates/vct/vct-vct-sector-update-dividend-yields-and-long-term-value-2026-11-08', img: art1 },
    { tag: 'Structured products', date: '13 Nov 2026', title: 'UK Structured Products: Defined Outcome Investing & Yields', href: '/market-updates/structured-products/structured-products-uk-structured-products-defined-outcome-investing-yields-2026-11-08', img: art2 },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Start with a conversation.',
  lede: "Tell us what you are thinking about. We'll help you decide whether a conversation with Ascot is the right next step.",
  cta: 'Book a free introductory call',
}

/* the hero options: A and B (kept), C the sunset film (added 2026-11-19). Each opens with a line the live home page already uses. */
export const heroes = {
  a: { eyebrow: longView.eyebrow, title: longView.title, lede: longView.lede },
  b: { eyebrow: approach.eyebrow, title: approach.title, lede: approach.lede.join(' ') },
  c: { eyebrow: servicesIntro.eyebrow, title: servicesIntro.title, lede: servicesIntro.lede },
  /* D, the dusk film: the lede is their menu's line for Our Team */
  d: { eyebrow: team.eyebrow, title: team.title, lede: 'Meet the experienced professionals dedicated to your financial success.' },
  /* E (autumn estate film, white split) and F (London twilight film) reuse A's and B's lines, which are off the site now */
  e: { eyebrow: longView.eyebrow, title: longView.title, lede: longView.lede },
  f: { eyebrow: approach.eyebrow, title: approach.title, lede: approach.lede.join(' ') },
  /* G (mansion film band): their Services page's own H1 and lede */
  g: { eyebrow: 'Our services', title: 'How Can We Help?', lede: 'Tailored financial solutions designed around your unique circumstances and goals.' },
  /* H, I, J: still photography (his ask, 2026-11-19: "3 more, no videos, stock images, expensive, premium and classy").
     H: their planning scene's lines; I: their contact section's; J: their approach line (as B and F). */
  h: { eyebrow: 'Joining the dots', title: 'Bring the bigger picture together.', lede: 'Bring your goals, resources and future decisions into one joined-up plan.' },
  i: { eyebrow: 'Free introductory call', title: 'Start with a conversation.', lede: "Tell us what you are thinking about. We'll help you decide whether a conversation with Ascot is the right next step." },
  j: { eyebrow: approach.eyebrow, title: approach.title, lede: approach.lede.join(' ') },
}
/* under hero I (which opens with the contact section's line) the closing takes their Services page's own close */
export const contactAlt = {
  eyebrow: 'Contact',
  title: 'Ready to Get Started?',
  lede: 'Book a free consultation with one of our experienced financial advisers to discuss your specific needs and goals.',
  cta: 'Book Free Consultation',
}
/* under hero D (which opens with the team line) the team section takes their Our Team page's own heading */
export const teamAlt = { title: 'Meet Our Expert Team' }
/* under hero C (which opens with the services line) the services section uses their menu's own heading for the services */
export const servicesAlt = { eyebrow: 'Our Services', title: 'Comprehensive financial solutions tailored to your unique needs and goals' }

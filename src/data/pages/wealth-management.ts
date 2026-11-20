/* /wealth-management, word for word from ascotwm.com (rendered 2026-11-19). The live page has no title or description of its own
   (it carries the site-wide pair), so the title is "<Page> | Ascot Wealth Management" and the description is the page's own first
   sentence. Its "Download Wealth Guide" button links nowhere on the live site, so it is not placed. */
import { investmentWarning } from './services'

export const wealthPage = {
  meta: {
    title: 'Wealth Management | Ascot Wealth Management',
    description:
      'We look after every part of your money in one place: the investments that grow it, the tax wrappers that protect it, and the plan that passes it on to your children without a large inheritance tax bill.',
  },
  title: 'Wealth Management',
  lede: 'We look after every part of your money in one place: the investments that grow it, the tax wrappers that protect it, and the plan that passes it on to your children without a large inheritance tax bill. AWM has been independent since 2010, founded by Mark Insley after years of seeing how the industry over-charged and under-explained, so you get fresh thinking, modern technology and fees written in plain pounds.',
  cta: 'Start Your Wealth Journey',
  warning: investmentWarning,
  servicesTitle: 'Our Wealth Management Services',
  servicesLede: 'Comprehensive solutions designed to help you achieve your financial aspirations',
  services: [
    { title: 'Investment Portfolio Management', text: 'Tailored investment strategies designed to grow and preserve your wealth over time.' },
    { title: 'Risk Assessment & Management', text: 'Comprehensive risk analysis to protect your investments from market volatility.' },
    { title: 'Goal-Based Planning', text: 'Strategic planning aligned with your personal and financial objectives.' },
    { title: 'Tax-Efficient Strategies', text: 'Optimized approaches to minimize tax liability while maximizing returns.' },
    { title: 'Performance Monitoring', text: 'Regular portfolio reviews and performance analysis to keep you on track.' },
    { title: 'Family Wealth Planning', text: 'Multi-generational wealth strategies for lasting financial legacy.' },
  ],
  closing: {
    title: 'Ready to Optimize Your Wealth Strategy?',
    text: 'Schedule a consultation with our wealth management experts today.',
    cta: 'Book Consultation',
  },
}

/* /investment-approach, word for word from ascotwm.com (rendered 2026-11-19, plus the "Risk Management" tab, which the live page
   keeps behind a tab: read from its own page module). The live page has no title or description of its own (it carries the
   site-wide pair), so the title is "<Page> | Ascot Wealth Management" and the description is its own lede. The portfolio models'
   figures are exactly as the live page gives them. The risk warning is the one the live home page sets under investment
   management, placed beside the models it qualifies. */
import { investmentWarning } from './services'

export const approachPage = {
  meta: {
    title: 'Investment Approach | Ascot Wealth Management',
    description:
      'Our proven investment philosophy combines rigorous research, disciplined strategy, and personalized portfolio construction to help you achieve your financial goals.',
  },
  title: 'Investment Approach',
  lede: 'Our proven investment philosophy combines rigorous research, disciplined strategy, and personalized portfolio construction to help you achieve your financial goals.',
  philosophy: {
    title: 'Investment Philosophy',
    lede: 'Built on decades of experience and market expertise',
    items: [
      { title: 'Goal-Driven Strategy', text: 'Every investment decision is aligned with your specific financial objectives and timeline.' },
      { title: 'Risk-Aware Approach', text: 'Comprehensive risk assessment ensures your portfolio matches your risk tolerance.' },
      { title: 'Long-Term Focus', text: 'Building wealth through disciplined, long-term investment strategies.' },
      { title: 'Data-Driven Decisions', text: 'Leveraging market research and analytics to inform investment choices.' },
    ],
  },
  approach: {
    label: 'Our Approach',
    title: 'Investment Process',
    steps: [
      { title: 'Research & Analysis', text: 'Market research and asset evaluation to identify optimal opportunities.' },
      { title: 'Portfolio Construction', text: 'Strategic asset allocation tailored to your risk tolerance.' },
      { title: 'Ongoing Management', text: 'Regular monitoring and rebalancing for optimal performance.' },
    ],
  },
  models: {
    title: 'Portfolio Models',
    /* bonds and equities as numbers too, only to draw each model's split; the words shown are the allocation line as given */
    items: [
      { name: 'Conservative', risk: 'Low', allocation: '70% Bonds, 30% Equities', bonds: 70, equities: 30, expected: '4-6%' },
      { name: 'Moderate', risk: 'Medium', allocation: '50% Bonds, 50% Equities', bonds: 50, equities: 50, expected: '6-8%' },
      { name: 'Aggressive', risk: 'High', allocation: '20% Bonds, 80% Equities', bonds: 20, equities: 80, expected: '8-12%' },
    ],
    warning: investmentWarning,
  },
  risk: {
    label: 'Risk Management',
    title: 'Comprehensive Risk Framework',
    groups: [
      { title: 'Risk Assessment', items: ['Market volatility analysis', 'Correlation risk evaluation', 'Liquidity risk assessment', 'Currency exposure analysis'] },
      { title: 'Risk Mitigation', items: ['Strategic diversification', 'Dynamic hedging strategies', 'Regular stress testing', 'Continuous monitoring'] },
    ],
  },
  closing: {
    title: 'Discover Your Investment Strategy',
    text: 'Let our experienced team create a personalized investment approach for your unique situation.',
    cta: 'Schedule Investment Consultation',
  },
}

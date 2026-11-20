/* The bar's menus, word for word from ascotwm.com's own menus. */

export type NavItem = { label: string; text: string; href: string }
export type NavGroup = { label: string; intro: string; items: NavItem[]; all?: { label: string; href: string } }

export const services: NavItem[] = [
  { label: 'Investment Management', text: 'Professional portfolio management tailored to your risk profile and financial objectives.', href: '/services/investment-management' },
  { label: 'Retirement Planning', text: 'Comprehensive retirement strategies to ensure your golden years are financially secure.', href: '/services/retirement-planning' },
  { label: 'Protection Planning', text: "Safeguard your family's financial future with comprehensive insurance solutions.", href: '/services/protection-planning' },
  { label: 'Mortgage Advisory', text: 'Expert guidance to find the best mortgage deals and property financing solutions.', href: '/services/mortgage-advisory' },
  { label: 'Financial Planning', text: 'Develop a personal roadmap for your financial well-being with comprehensive planning tools.', href: '/services/financial-planning' },
  { label: 'Corporate Services', text: 'Comprehensive financial services for businesses and their employees.', href: '/services/corporate-services' },
]

export const menus: NavGroup[] = [
  {
    label: 'Who We Are',
    intro: 'Discover our team, approach, and commitment to your financial success',
    items: [
      { label: 'Our Team', text: 'Meet the experienced professionals dedicated to your financial success.', href: '/staff' },
      { label: 'Investment Approach', text: 'Discover our disciplined investment philosophy and proven strategies.', href: '/investment-approach' },
      { label: 'About Us', text: 'Learn about our history, values, and commitment to excellence.', href: '/about' },
      { label: 'Client Testimonials', text: 'See what our clients say about their experience with us.', href: '/testimonials' },
    ],
  },
  {
    label: 'Services',
    intro: 'Comprehensive financial solutions tailored to your unique needs and goals',
    items: services,
    all: { label: 'View All Services', href: '/services' },
  },
  {
    label: 'Resources',
    intro: 'Access insights, tools, and knowledge to enhance your financial decisions',
    items: [
      { label: 'Articles & Insights', text: 'Expert commentary on wealth management and financial planning.', href: '/blog' },
      { label: 'Market Intelligence', text: 'Weekly updates across six alternative investment sectors.', href: '/market-updates' },
      { label: 'Webinars & Videos', text: 'Watch educational webinars and our latest video content.', href: '/webinars' },
      { label: 'Research & Reports', text: 'Download in-depth research documents and analysis.', href: '/insights' },
      { label: 'FAQ', text: 'Find answers to common questions about wealth management and financial planning.', href: '/faq' },
      { label: 'Careers', text: 'Join our team and build your career in wealth management.', href: '/staff#careers' },
    ],
    all: { label: 'View All Resources', href: '/resources' },
  },
]

export const footer = {
  services: services.map(({ label, href }) => ({ label, href })),
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/staff' },
    { label: 'Contact', href: '/contact' },
    { label: 'Resources', href: '/resources' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Client Documents', href: '/client-documents' },
    { label: 'Regulatory Information', href: '/regulatory-information' },
  ],
}

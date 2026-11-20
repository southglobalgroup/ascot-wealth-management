/* /about, "About Ascot Wealth Management": every word from ascotwm.com/about (rendered 2026-11-19).
   "Visit Our Office" on the live About page still prints an older address (19-21 High Street, Ascot, SL5 7JW) and other hours
   (Monday - Friday: 9:00 AM - 5:30 PM) than the rest of the live site. The page shows the address, telephone and email from site.ts and
   the hours from the live Contact page, so no visitor is sent to the wrong door; flagged for him to confirm. */

export const aboutPage = {
  title: 'About Us | Ascot Wealth Management',
  description:
    "For over two decades, we've helped clients across the UK build, protect, and grow their wealth through personalised financial planning and expert investment management.",
  hero: {
    eyebrow: 'About Us',
    title: 'About Ascot Wealth Management',
    lede: "For over two decades, we've helped clients across the UK build, protect, and grow their wealth through personalised financial planning and expert investment management.",
    actions: [
      { label: 'Meet Our Team', href: '/staff' },
      { label: 'Get In Touch', href: '/contact', kind: 'line' as const },
    ],
    alt: 'Rolling green countryside and woodland under a wide sky',
  },
  story: {
    title: 'Our Story',
    text: [
      "Founded in the heart of Royal Berkshire, Ascot Wealth Management has grown from a boutique advisory firm to one of the UK's most trusted wealth management companies, serving clients nationwide.",
      'Our approach combines the personal touch of a local adviser with the expertise and resources of a larger firm. Every client receives dedicated attention from experienced financial planners who take the time to understand their unique circumstances and goals.',
      'We believe in building long-term relationships based on trust, transparency, and results. Our team of qualified advisers works collaboratively to deliver comprehensive solutions across investment management, retirement planning, protection, and more.',
    ],
  },
  office: {
    title: 'Visit Our Office',
    labels: { address: 'Address', phone: 'Phone', email: 'Email', hours: 'Office Hours' },
    /* the live Contact page's hours (see the note above) */
    hours: ['Monday - Thursday: 8:00 AM - 5:00 PM', 'Friday: 9:00 AM - 4:00 PM'],
  },
  why: {
    eyebrow: 'Our Commitment',
    title: 'Why Choose Ascot Wealth Management',
    lede: "Combining London's financial expertise with Ascot's prestigious heritage to deliver exceptional wealth management services.",
    items: [
      {
        title: 'London Financial Hub',
        line: 'Access to world-class financial markets and investment opportunities',
        text: "Leveraging London's position as a global financial center, we provide our clients with access to premium investment opportunities and cutting-edge financial solutions.",
      },
      {
        title: 'Ascot Excellence',
        line: 'Prestigious heritage meets modern financial expertise',
        text: "Rooted in Ascot's tradition of excellence and sophistication, we bring the same level of prestige and attention to detail to your wealth management journey.",
      },
      {
        title: 'Expert Guidance',
        line: 'Professional wealth management tailored to your goals',
        text: 'Our comprehensive approach to wealth management combines strategic planning, expert analysis, and personalized service to help you achieve your financial aspirations.',
      },
    ],
    stories: {
      title: 'Client Success Stories',
      text: 'Discover what our clients say about their experience with Ascot Wealth Management',
      cta: { label: 'View Testimonials', href: '/testimonials' },
    },
  },
  closing: {
    title: 'Ready to Get Started?',
    text: 'Book a free consultation with one of our experienced financial advisers to discuss your specific needs and goals.',
    actions: [{ label: 'Book Free Consultation', href: '/contact' }],
  },
}

/* /testimonials, "Client Testimonials": every word from ascotwm.com/testimonials (rendered 2026-11-19). The reviews are the ten the
   live page shows, in its order, with exactly the attribution it gives them (Verified Client, a county, Verified, 5 Stars, and
   Featured on six). The live page's VouchedFor widget is an iframe and is not carried over. */

export const testimonialsPage = {
  /* the live page carries the site-wide title; this is its H1 in the site's "<Page> | Ascot Wealth Management" form */
  title: 'Client Testimonials | Ascot Wealth Management',
  description:
    'Discover what our clients say about their experience with Ascot Wealth Management. Real stories from real people who have trusted us with their financial future.',
  hero: {
    eyebrow: 'Verified Reviews',
    title: 'Client Testimonials',
    lede: 'Discover what our clients say about their experience with Ascot Wealth Management. Real stories from real people who have trusted us with their financial future.',
  },
  stats: [
    { value: '4.8', unit: '/5', label: 'Average Rating', sub: '' },
    { value: '1195', unit: '', label: 'Verified Reviews', sub: 'on VouchedFor' },
    { value: '4', unit: '', label: 'Rated Advisors', sub: 'with verified reviews' },
  ],
  advisers: {
    title: 'Meet Our Rated Advisors',
    link: 'View on Team Page',
    people: [
      { id: 'mark-insley', name: 'Mark Insley', role: 'Founder & Director', rating: '4.8', reviews: '696 reviews' },
      { id: 'catriona-mccarron', name: 'Catriona McCarron', role: 'Wealth Manager', rating: '4.8', reviews: '351 reviews' },
      { id: 'claire-calder', name: 'Claire Calder', role: 'Wealth Manager', rating: '4.8', reviews: '108 reviews' },
      { id: 'greg-armstrong', name: 'Greg Armstrong', role: 'Global Wealth Manager', rating: '4.9', reviews: '40 reviews' },
    ],
  },
  verified: { title: 'Verified Reviews', text: 'See what our clients say about us on VouchedFor' },
  stories: {
    title: 'Client Success Stories',
    text: 'Discover what our clients say about their experience with us',
    who: 'Verified Client',
    verified: 'Verified',
    stars: '5 Stars',
    featured: 'Featured',
  },
  reviews: [
    {
      place: 'Buckinghamshire',
      featured: true,
      text: 'I had an inheritance from my parents estate and also a retirement lump sum to manage. Catriona was very patient with our questions as we discussed investments and risk. She suggested a mix of investment areas where we would have a regular income and a strategy of taking capital out as and when we required it. The capital was all invested in a tax efficient way using our allowance over a few years. We are both pleased with the management of our savings by AWM (Catriona) and understand how the investments are working for us.',
    },
    {
      place: 'Berkshire',
      featured: true,
      text: 'My wife took voluntary redundancy from work after 20+ years with the same company at a point when she was 10 years away from retirement age. Catriona is very personable and always the consummate professional. She is incredibly knowledgeable, capable and efficient and an excellent communicator. Our reviews are sufficiently detailed and give us an honest summary, including any negatives as well as the positives. When acting on our behalf, we trust her, and her judgement, implicitly.',
    },
    {
      place: 'Berkshire',
      featured: true,
      text: 'My wife and I were in our mid fifties and our knowledge of the value of our pensions was not extensive. We wanted to understand what we had and what this meant in terms of options for retirement. Catriona initially reviewed all our pensions and provided us with various detailed financial cash flow scenarios. Based on the advice from Catriona we were able to retire at 60 with the confidence that it was affordable.',
    },
    {
      place: 'Bedfordshire',
      featured: false,
      text: 'I was planning on consolidating my pensions. Catriona has consolidated my pensions and advised on the most efficient way to use my pension pot. I am very satisfied with the service provided.',
    },
    {
      place: 'Tyne and Wear',
      featured: true,
      text: 'I wanted guidance from an expert. Greg has given helpful information about my retirement pension and ISA planning. After Greg explained reasons for the outcome, I saw exactly the results I was hoping for.',
    },
    {
      place: 'Surrey',
      featured: false,
      text: "I wanted to transfer my pension to a more personal service. Greg has helped with my pension payments and other investments. I'm happy with things so far and can't think of anything to improve the service.",
    },
    {
      place: 'Dorset',
      featured: false,
      text: 'I needed advice on the best way to save and invest my private pension. Greg provided advice on all aspects including drawdown, inheritance options and portfolio choice bearing in mind my wife and my circumstances. Returns have been good so I have no complaints.',
    },
    {
      place: 'Cheshire',
      featured: true,
      text: "Greg was recommended to me by a good friend. Greg has been absolutely amazing with his service and advice over the years I've been with him. He has given the best advice on how to improve my pension ready for my retirement.",
    },
    {
      place: 'East Sussex',
      featured: true,
      text: 'I required advice to plan for retirement that took me to a point of maximising my pension contribution capability. Mark created a varied portfolio of investments that have overall performed well. He worked closely with my Tax Accountant to make an early start on IHT planning. I deal directly with Mark and when I have an issue or question he normally has the answer or reaches out to discuss further very quickly.',
    },
    {
      place: 'Berkshire',
      featured: false,
      text: 'I needed advice about retirement planning. Mark has been calm and confident throughout the process, providing excellent guidance and support. The structure, frequency and accuracy of the asset summaries has greatly improved.',
    },
  ],
  share: { text: 'Have you worked with us?', cta: 'Share Your Experience', href: '/submit-testimonial' },
  closing: {
    title: 'Experience the AWM Difference',
    text: 'Join hundreds of satisfied clients who trust us with their financial future. Book a free consultation today.',
    actions: [
      { label: 'Book Free Consultation', href: '/contact' },
      { label: 'Meet Our Team', href: '/staff', kind: 'line' as const },
    ],
  },
}

/* /faq, "How Can We Help You?": every question and answer from ascotwm.com/faq (rendered 2026-11-19), in its order. The live page
   keeps them in one list, so they stay one list here. */

export const faqPage = {
  title: 'Frequently Asked Questions | AWM - Ascot Wealth Management',
  description: 'Find answers to common questions about wealth management, financial planning, and working with AWM.',
  hero: {
    eyebrow: 'Frequently Asked Questions',
    title: 'How Can We Help You?',
    lede: 'Find answers to common questions about wealth management, financial planning, and working with AWM.',
  },
  items: [
    {
      q: 'What is wealth management?',
      a: 'Wealth management is a comprehensive financial advisory service that combines investment management, financial planning, tax advice, retirement planning, and estate planning. AWM provides personalised wealth management strategies tailored to your individual goals and circumstances.',
    },
    {
      q: 'How much money do I need for wealth management services?',
      a: "At AWM, we work with clients at various stages of their financial journey. While traditional wealth management often requires significant assets, we offer services suitable for individuals looking to grow their wealth, plan for retirement, or protect their family's financial future. Contact us for a free consultation to discuss your specific situation.",
    },
    {
      q: 'What is the difference between a financial adviser and a wealth manager?',
      a: "A financial adviser typically focuses on specific products like pensions or investments, while a wealth manager takes a holistic approach to your entire financial life. AWM's wealth managers coordinate all aspects of your finances including investments, tax planning, retirement, protection, and estate planning to create a comprehensive strategy.",
    },
    {
      q: 'How do I choose a financial adviser in the UK?',
      a: 'Look for FCA-regulated advisers with relevant qualifications (such as Chartered Financial Planner status), strong client reviews, and a fee structure that suits you. AWM advisers are fully qualified, FCA-regulated, and have excellent ratings on VouchedFor. We offer a free initial consultation with no obligation.',
    },
    {
      q: 'What services does AWM (Ascot Wealth Management) offer?',
      a: 'AWM offers comprehensive financial services including investment management, retirement planning, pension advice, mortgage advisory, protection planning (life insurance, income protection), tax-efficient investing, inheritance tax planning, and corporate financial services for businesses.',
    },
    {
      q: 'Are financial advisers worth the cost?',
      a: 'Studies show that professional financial advice can add significant value over time through better investment decisions, tax efficiency, and avoiding costly mistakes. AWM clients benefit from personalised strategies that often more than offset advisory fees through improved returns and tax savings.',
    },
    {
      q: 'What is an ISA and how can it benefit me?',
      a: 'An Individual Savings Account (ISA) is a tax-efficient wrapper that allows you to save or invest up to £20,000 per year without paying tax on interest, dividends, or capital gains. AWM can help you choose the right ISA type—Cash ISA, Stocks and Shares ISA, or Lifetime ISA—based on your goals.',
    },
    {
      q: 'How can I reduce my inheritance tax liability?',
      a: "There are several legitimate strategies to reduce inheritance tax, including making gifts, using trusts, investing in qualifying assets, and taking advantage of reliefs and exemptions. AWM's advisers can create a tailored estate planning strategy to help protect your wealth for future generations.",
    },
    {
      q: 'What should I do with my pension when I retire?',
      a: 'You have several options including drawdown (flexible access), annuity purchase (guaranteed income), or a combination of both. The best choice depends on your circumstances, health, risk tolerance, and income needs. AWM provides expert pension advice to help you make the right decision.',
    },
    {
      q: 'How often will I meet with my financial adviser?',
      a: 'AWM clients typically have an annual review meeting, with additional check-ins as needed. We proactively reach out when market conditions or regulatory changes may affect your plans. You can also contact your adviser anytime with questions or concerns.',
    },
  ],
  closing: {
    title: 'Still Have Questions?',
    text: 'Our team is here to help. Book a free consultation to discuss your specific financial situation and goals.',
    actions: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Meet Our Team', href: '/staff', kind: 'line' as const },
    ],
  },
}

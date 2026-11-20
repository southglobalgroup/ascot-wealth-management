/* The services overview (/services) and the six service pages (/services/<slug>), word for word from ascotwm.com (rendered
   2026-11-19). The six services come from the live site's own service data (its servicesData module): the same words the live pages
   render, plus the FAQ answers that open on click and each page's own meta title and description. The two risk warnings are the
   ones the live home page sets under its investment and mortgage services. */
import type { ImageMetadata } from 'astro'
import balance from '../../assets/img/balance-sculpture.webp'
import coast from '../../assets/img/coast-path.webp'
import family from '../../assets/img/family-breakfast.webp'
import home from '../../assets/img/home-at-dusk.webp'
import oak from '../../assets/img/oak-table.webp'
import office from '../../assets/img/office-view.webp'

export const investmentWarning = 'The value of investments and the income from them can fall as well as rise, and you may get back less than you invested.'
export const mortgageWarning = 'Your home may be repossessed if you do not keep up repayments on your mortgage.'

export type Service = {
  slug: string
  title: string
  meta: { title: string; description: string }
  summary: string
  overview: string
  features: string[]
  offer: string[]
  process: { title: string; text: string }[]
  why: string[]
  closing: string
  faqIntro: string
  faqs: { q: string; a: string }[]
  warning?: string
  img: ImageMetadata
  alt: string
}

/* the overview page, /services */
export const servicesPage = {
  meta: {
    title: 'Financial Services | AWM - Ascot Wealth Management',
    description:
      'AWM offers comprehensive financial services: investment management, retirement planning, protection planning, mortgage advisory & corporate services. Expert UK advisers.',
  },
  eyebrow: 'Our Services',
  title: 'How Can We Help?',
  lede: 'Tailored financial solutions designed around your unique circumstances and goals.',
  more: 'Find Out More',
  closing: {
    title: 'Ready to Get Started?',
    text: 'Book a free consultation with one of our experienced financial advisers to discuss your specific needs and goals.',
    cta: 'Book Free Consultation',
  },
}

/* the labels every service page shares */
export const serviceLabels = {
  book: 'Book a Consultation',
  call: 'Call Us',
  overview: 'Overview',
  features: 'Key Features',
  offer: 'What We Offer',
  process: 'Our Process',
  processIntro: 'We follow a structured approach to ensure you receive the best possible advice and outcomes.',
  why: 'Why Choose AWM?',
  ready: 'Ready to Get Started?',
  readyCta: 'Book Your Free Consultation',
  faq: 'Frequently Asked Questions',
  others: 'Explore Our Other Services',
  all: 'View All Services',
}

export const services: Service[] = [
  {
    slug: "investment-management",
    title: "Investment Management",
    meta: { title: "Investment Management Services | AWM - Ascot Wealth Management", description: "Expert investment management with bespoke portfolio strategies, quarterly reviews, and tax-efficient investing. Professional wealth management from AWM." },
    summary: "We invest your money across global shares, bonds and specialist holdings, then rebalance the mix as markets move so you stay on track for the goal you set, whether that is a £40,000 a year retirement or buying a holiday home in ten years. AWM has been independent since 2010, uses sophisticated techniques learnt from watching the industry's mistakes, and shows every fee in pounds on a single page.",
    overview: "Our investment management service provides comprehensive portfolio oversight, combining strategic asset allocation with tactical adjustments to optimize returns while managing risk. We work closely with you to understand your financial goals, time horizon, and risk tolerance to create a personalized investment strategy that evolves with your needs.",
    features: ["Diversified portfolio strategies","Regular performance reviews","Tax-efficient investing","Access to institutional-grade investments","Ongoing portfolio rebalancing"],
    offer: ["Bespoke portfolio construction aligned with your goals","Quarterly performance reviews and reporting","Tax-loss harvesting and efficient wrapper utilization","Access to institutional investment opportunities","Dynamic rebalancing to maintain target allocations","Multi-asset class diversification strategies"],
    process: [
      { title: "Initial Consultation", text: "We discuss your financial goals, risk appetite, and investment timeline in a free, no-obligation meeting." },
      { title: "Risk Profiling", text: "We conduct a thorough assessment to understand your comfort level with market volatility and investment risk." },
      { title: "Strategy Development", text: "Our team creates a bespoke investment strategy tailored to your unique circumstances and objectives." },
      { title: "Portfolio Implementation", text: "We build and deploy your portfolio using carefully selected funds and investment vehicles." },
      { title: "Ongoing Management", text: "We continuously monitor, rebalance, and optimize your portfolio while keeping you informed." },
    ],
    why: ["Over 25 years of investment management experience","Award-winning advisory team","Access to exclusive institutional funds","Transparent fee structure with no hidden costs","Dedicated relationship manager for every client"],
    closing: "Book a free, no-obligation consultation with one of our expert advisers to discuss your investment management needs.",
    faqIntro: "Common questions about our investment management service.",
    faqs: [
      { q: "What is the minimum investment amount?", a: "We typically work with clients who have £100,000 or more to invest, though we consider each case individually based on your circumstances and goals." },
      { q: "How often will my portfolio be reviewed?", a: "Your portfolio is monitored daily by our investment team, with formal reviews conducted quarterly. You'll receive comprehensive reports and have access to your dedicated adviser at any time." },
      { q: "What fees are involved?", a: "We charge a transparent annual management fee based on your portfolio size, typically ranging from 0.5% to 1%. All fees are clearly disclosed upfront with no hidden costs." },
    ],
    warning: investmentWarning,
    img: balance,
    alt: "A tactile limestone and brass balance sculpture in warm light",
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    meta: { title: "Retirement Planning Services | AWM - Ascot Wealth Management", description: "Expert retirement planning with pension analysis, income strategies, and cash flow modeling. Secure your future with AWM's retirement advisers." },
    summary: "We work out how much income your pensions and savings can pay you each year in retirement, and how long that money will last. As an independent firm founded in 2010 by Mark Insley, we show you the numbers in plain English, with fees you can see upfront, so you can decide when to stop working with confidence rather than guesswork.",
    overview: "Planning for retirement requires careful consideration of multiple factors including pension contributions, tax efficiency, and sustainable income streams. We help you build a robust retirement strategy that ensures financial security throughout your retirement years, optimizing existing pensions and creating new income sources tailored to your lifestyle goals.",
    features: ["Pension transfer analysis","Income drawdown strategies","State pension optimization","Retirement cash flow modeling","Legacy planning"],
    offer: ["Comprehensive pension consolidation and transfer reviews","Flexible income drawdown planning and tax optimization","State pension forecasting and maximization strategies","Detailed retirement cash flow projections","Inheritance tax mitigation through legacy planning","Ongoing retirement income reviews and adjustments"],
    process: [
      { title: "Retirement Goals Discussion", text: "We explore your vision for retirement, including lifestyle, travel, and legacy aspirations." },
      { title: "Pension Review", text: "We analyze all your existing pensions, benefits, and potential consolidation opportunities." },
      { title: "Cash Flow Modelling", text: "We create detailed projections showing how your retirement income will fund your desired lifestyle." },
      { title: "Strategy Implementation", text: "We implement the agreed strategy, including pension transfers, annuity purchases, or drawdown arrangements." },
      { title: "Ongoing Reviews", text: "We regularly review your retirement income to ensure it remains sustainable and tax-efficient." },
    ],
    why: ["Specialist pension transfer advisers","Advanced cash flow modelling software","Expertise in complex pension arrangements","Track record of maximizing client retirement income","Holistic approach considering all income sources"],
    closing: "Book a free, no-obligation consultation with one of our expert advisers to discuss your retirement planning needs.",
    faqIntro: "Common questions about our retirement planning service.",
    faqs: [
      { q: "When should I start planning for retirement?", a: "The earlier, the better. However, it's never too late to start. We recommend a comprehensive review at least 10 years before your intended retirement date." },
      { q: "Should I transfer my final salary pension?", a: "This depends on your individual circumstances. We provide thorough transfer analysis to help you make an informed decision, always prioritizing your best interests." },
      { q: "How much do I need to retire comfortably?", a: "This varies based on your lifestyle expectations. Our cash flow modelling helps determine the exact amount you'll need based on your specific goals." },
    ],
    img: coast,
    alt: "A coastal footpath winding through grasses towards an open sea horizon",
  },
  {
    slug: "protection-planning",
    title: "Protection Planning",
    meta: { title: "Protection Planning & Life Insurance | AWM - Ascot Wealth Management", description: "Comprehensive protection planning including life assurance, critical illness cover, and income protection. Safeguard your family with AWM." },
    summary: "If you died tomorrow or could not work for a year, this is the cover that pays your mortgage and keeps food on the table for your family. We search the whole UK market as independent advisers, explain exactly what each policy pays out and when, and tell you in writing what our advice costs before you commit to anything.",
    overview: "Protecting your family's financial wellbeing is paramount. Our protection planning service ensures that your loved ones are financially secure in the event of unforeseen circumstances. We conduct thorough needs analysis to determine appropriate coverage levels and structure policies to provide maximum benefit when needed most.",
    features: ["Life assurance policies","Family income benefit","Critical illness protection","Income replacement cover","Trust arrangements"],
    offer: ["Comprehensive life assurance for mortgage and family protection","Family income benefit for long-term financial security","Critical illness cover for serious health conditions","Income protection insurance for salary replacement","Trust arrangements to protect policy proceeds","Regular policy reviews to ensure adequate coverage"],
    process: [
      { title: "Needs Analysis", text: "We assess your family's financial requirements in case of death, illness, or inability to work." },
      { title: "Coverage Review", text: "We evaluate any existing policies and identify gaps in your current protection." },
      { title: "Product Selection", text: "We search the whole market to find the most suitable and cost-effective solutions." },
      { title: "Application Support", text: "We guide you through the application process, including medical underwriting if required." },
      { title: "Ongoing Management", text: "We regularly review your protection needs as your life circumstances evolve." },
    ],
    why: ["Access to whole-of-market protection products","Expert underwriting support for complex cases","Specialist knowledge of trust planning","Claims support when you need it most","Regular reviews as your circumstances change"],
    closing: "Book a free, no-obligation consultation with one of our expert advisers to discuss your protection planning needs.",
    faqIntro: "Common questions about our protection planning service.",
    faqs: [
      { q: "How much life cover do I need?", a: "This depends on your debts, income, and family circumstances. We typically recommend enough to clear your mortgage and provide 10-15 years of income replacement." },
      { q: "What's the difference between life insurance and critical illness cover?", a: "Life insurance pays out on death, while critical illness cover pays a lump sum if you're diagnosed with a specified serious illness during your lifetime." },
      { q: "Should I put my life insurance in trust?", a: "In most cases, yes. Placing policies in trust ensures proceeds are paid quickly to beneficiaries and can help with inheritance tax planning." },
    ],
    img: family,
    alt: "A family kitchen table laid for breakfast, morning light from the garden",
  },
  {
    slug: "mortgage-advisory",
    title: "Mortgage Advisory",
    meta: { title: "Mortgage Advisory Services | AWM - Ascot Wealth Management", description: "Expert mortgage advice with whole-of-market access. First-time buyers, remortgages, and buy-to-let specialists. Find your perfect mortgage with AWM." },
    summary: "We find the mortgage that costs you the least over the years you actually plan to keep it, not just the lowest headline rate this month. Because we are independent and work across the whole lender market, we can place tricky cases like self-employed income or buy-to-let portfolios, and we tell you our fee in pounds before any application goes in.",
    overview: "Whether you're buying your first home, remortgaging, or investing in property, our mortgage advisers have access to a comprehensive range of lenders and products. We navigate the complex mortgage market on your behalf to find the most suitable and competitive mortgage solution for your specific circumstances and long-term financial plans.",
    features: ["Whole-of-market mortgage access","First-time buyer support","Remortgage savings analysis","Buy-to-let expertise","Protection insurance coordination"],
    offer: ["Access to thousands of mortgage products across all lenders","Dedicated first-time buyer guidance and support","Remortgage analysis to identify potential savings","Specialist buy-to-let and portfolio landlord expertise","Coordinated protection insurance for complete coverage","End-to-end application management and support"],
    process: [
      { title: "Initial Consultation", text: "We discuss your property goals and assess your borrowing capacity based on your income and circumstances." },
      { title: "Market Search", text: "We search the entire mortgage market to find the most suitable options for your needs." },
      { title: "Recommendation", text: "We present our recommendations, explaining the pros and cons of each option clearly." },
      { title: "Application", text: "We manage the entire application process, liaising with lenders, solicitors, and estate agents." },
      { title: "Completion", text: "We ensure everything is in place for a smooth completion and remain available for future remortgage reviews." },
    ],
    why: ["Whole-of-market access to all lenders","Specialist knowledge of complex income structures","Expert support for self-employed borrowers","Fast, efficient application processing","Integrated protection advice"],
    closing: "Book a free, no-obligation consultation with one of our expert advisers to discuss your mortgage advisory needs.",
    faqIntro: "Common questions about our mortgage advisory service.",
    faqs: [
      { q: "How much can I borrow?", a: "This depends on your income, expenses, and credit history. Most lenders will offer 4-5 times your annual income, though some specialist lenders may offer more." },
      { q: "Should I fix my mortgage rate?", a: "This depends on your circumstances and risk appetite. We'll discuss the pros and cons of fixed, variable, and tracker rates to help you decide." },
      { q: "Do you charge for mortgage advice?", a: "Our fees vary depending on the complexity of your case. We'll always provide a clear fee agreement before proceeding with any application." },
    ],
    warning: mortgageWarning,
    img: home,
    alt: "A welcoming English home with a garden path and warm window light",
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    meta: { title: "Financial Planning Services | AWM - Ascot Wealth Management", description: "Comprehensive financial planning with goal-based forecasting, risk assessment, and wealth strategies. Expert UK financial planners at AWM." },
    summary: "We build you a written plan that shows, year by year, whether your money will cover the life you want, from school fees to early retirement to leaving something behind. Founded in 2010 by Mark Insley after years of seeing how the industry got it wrong, AWM uses modern cash flow software and transparent fees so you always know what you are paying and why.",
    overview: "We develop a personal roadmap for your financial well-being using sophisticated tools to map and forecast your income, assets, and liabilities against your personal financial goals. Our comprehensive approach considers your complete financial picture, risk appetite, and life aspirations to create a cohesive strategy that adapts to your changing circumstances.",
    features: ["Income and asset mapping","Goal-based financial forecasting","Risk appetite assessment","Liability management","Comprehensive wealth strategies"],
    offer: ["Complete financial situation analysis and mapping","Goal-based planning with clear milestones","Detailed risk profiling and appetite assessment","Strategic liability and debt management","Holistic wealth accumulation strategies","Regular financial plan reviews and updates"],
    process: [
      { title: "Discovery Meeting", text: "We gather comprehensive information about your financial situation, goals, and aspirations." },
      { title: "Analysis", text: "We analyze your current position and identify opportunities to improve your financial outcomes." },
      { title: "Strategy Presentation", text: "We present a comprehensive financial plan with clear recommendations and projections." },
      { title: "Implementation", text: "We help you implement the agreed strategy across all areas of your financial life." },
      { title: "Review Cycle", text: "We meet regularly to review progress and adjust your plan as circumstances change." },
    ],
    why: ["Chartered Financial Planners on the team","Advanced financial planning software","Holistic approach to all aspects of your finances","Clear, jargon-free advice","Long-term relationship focus"],
    closing: "Book a free, no-obligation consultation with one of our expert advisers to discuss your financial planning needs.",
    faqIntro: "Common questions about our financial planning service.",
    faqs: [
      { q: "What is financial planning?", a: "Financial planning is the process of creating a comprehensive strategy to achieve your life goals through proper management of your finances, including savings, investments, insurance, and tax planning." },
      { q: "How often should I review my financial plan?", a: "We recommend a full review at least annually, or whenever you experience a significant life change such as marriage, children, inheritance, or career change." },
      { q: "Do I need a financial planner if I have an accountant?", a: "Yes, they serve different purposes. While accountants focus on tax compliance and historical finances, financial planners focus on future goals and comprehensive wealth strategies." },
    ],
    img: oak,
    alt: "A warm oak table in a quiet room, ready for a planning conversation",
  },
  {
    slug: "corporate-services",
    title: "Corporate Services",
    meta: { title: "Corporate Financial Services | AWM - Ascot Wealth Management", description: "Corporate financial services including workplace pensions, key person insurance, and business succession planning. Expert business advice from AWM." },
    summary: "We set up the workplace pension, key person cover and director benefits that keep your business compliant and your staff looking after their futures. As independent advisers since 2010, we negotiate scheme charges down on your behalf, run clear staff sessions instead of jargon, and publish our fees so finance directors can see exactly what they are signing off.",
    overview: "We support businesses in attracting and retaining talent through competitive employee benefit packages while ensuring business continuity through appropriate protection planning and succession strategies. Our corporate services help business owners navigate complex decisions around company structure, employee benefits, and long-term business planning.",
    features: ["Group pension schemes","Key person insurance","Share option schemes","Business succession planning","Employee financial wellness programs"],
    offer: ["Auto-enrollment pension scheme setup and management","Key person and shareholder protection insurance","Tax-efficient share option and bonus schemes","Comprehensive business succession and exit planning","Employee financial education and wellness programs","Director pension and retirement planning"],
    process: [
      { title: "Business Review", text: "We understand your business structure, goals, and employee demographics." },
      { title: "Gap Analysis", text: "We identify gaps in your current employee benefits and business protection arrangements." },
      { title: "Scheme Design", text: "We design bespoke solutions that fit your budget and business objectives." },
      { title: "Implementation", text: "We manage the implementation of all agreed solutions, including employee communications." },
      { title: "Ongoing Support", text: "We provide ongoing governance, administration support, and regular scheme reviews." },
    ],
    why: ["Expertise in workplace pension governance","Specialist business protection advisers","Understanding of corporate tax planning","Experience with business sales and succession","Employee engagement programs"],
    closing: "Book a free, no-obligation consultation with one of our expert advisers to discuss your corporate services needs.",
    faqIntro: "Common questions about our corporate services service.",
    faqs: [
      { q: "Do I need to offer a workplace pension?", a: "Yes, all UK employers must provide a qualifying workplace pension scheme under auto-enrollment legislation. We can help ensure your scheme meets all legal requirements." },
      { q: "What is key person insurance?", a: "Key person insurance protects your business financially if a crucial employee dies or becomes critically ill. It can cover lost profits, recruitment costs, or repayment of loans." },
      { q: "How can I protect my business partner's share?", a: "Shareholder protection insurance, combined with a proper legal agreement, ensures that surviving shareholders can buy out a deceased partner's share from their estate." },
    ],
    img: office,
    alt: "An office meeting room with a view across the town",
  },
]

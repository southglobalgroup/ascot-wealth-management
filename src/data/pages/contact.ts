/* /contact, "Contact Ascot Wealth Management": every word from ascotwm.com/contact (rendered 2026-11-19), the form's labels,
   placeholders and choices from the live form itself. The address, telephone and email come from site.ts. */

export const contactPage = {
  title: 'Contact Us | AWM - Ascot Wealth Management',
  description:
    'Ready to start building your wealth management strategy? Our experienced team of financial advisers are dedicated to helping you achieve your financial goals.',
  hero: {
    eyebrow: 'Get in Touch',
    title: 'Contact Ascot Wealth Management',
    lede: 'Ready to start building your wealth management strategy? Our experienced team of financial advisers are dedicated to helping you achieve your financial goals.',
  },
  chat: {
    title: 'Chat to an Advisor',
    text: "At Ascot Wealth Management, we prioritize building strong relationships with our clients. We believe that a deep understanding of each client's unique circumstances and goals is crucial in providing personalized financial advice and services.",
    labels: { visit: 'Visit Us', call: 'Call Us', email: 'Email Us' },
    country: 'United Kingdom',
    directions: 'Get directions',
    cta: 'Chat with an Advisor',
    hoursLabel: 'Office Hours:',
    hours: ['Monday - Thursday: 8:00 AM - 5:00 PM', 'Friday: 9:00 AM - 4:00 PM'],
  },
  form: {
    title: 'Send us a message',
    text: 'Reach out to schedule a consultation and discover how Ascot Wealth Management can help you create a brighter financial future.',
    fields: {
      firstName: { label: 'First Name *', placeholder: 'First name' },
      surname: { label: 'Surname *', placeholder: 'Surname' },
      email: { label: 'Email Address *', placeholder: 'your@email.com' },
      phone: { label: 'Phone Number *', placeholder: 'Your phone number' },
      message: { label: 'Reason for Enquiry *', placeholder: 'Tell us how we can help you...' },
      leadSource: { label: 'How did you find us? *', placeholder: 'Please select...' },
      referrerName: { label: 'Who can we thank for the introduction?', placeholder: 'Their name' },
    },
    sources: [
      { value: 'google', label: 'Google Search' },
      { value: 'instagram', label: 'Instagram' },
      { value: 'linkedin', label: 'LinkedIn' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'personal_referral', label: 'Personal Referral' },
      { value: 'professional_referral', label: 'Professional Referral' },
      { value: 'event', label: 'Event / Seminar' },
      { value: 'vouchedfor', label: 'VouchedFor' },
      { value: 'newspaper', label: 'Newspaper / Magazine' },
      { value: 'other', label: 'Other' },
    ],
    submit: 'Send Message',
    sending: 'Sending...',
    note: "We'll get back to you within 1 business day",
  },
  facts: [
    { title: 'FCA Regulated', text: 'Fully authorised and regulated' },
    { title: 'Award Winning', text: 'Recognised for excellence' },
    { title: '30+ Years', text: 'Combined team experience' },
    { title: '5★ Rated', text: 'On VouchedFor' },
  ],
}

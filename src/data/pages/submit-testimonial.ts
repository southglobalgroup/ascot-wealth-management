/* /submit-testimonial, word for word from the live page (rendered 2026-11-19). "Website" on the live form is a hidden spam trap,
   kept hidden here too. The live page uses the site-wide title and description; these name the page. */
export const submitTestimonial = {
  meta: {
    title: 'Share Your Experience | Ascot Wealth Management',
    description: "We'd love to hear about your experience with Ascot Wealth Management",
  },
  title: 'Share Your Experience',
  lede: "We'd love to hear about your experience with Ascot Wealth Management",
  form: {
    title: 'Submit Your Testimonial',
    text: 'Your testimonial will be reviewed by our team before being published',
    fields: {
      name: 'Your Name *',
      email: 'Email Address *',
      phone: 'Phone Number *',
      role: 'Your Role (Optional)',
      company: 'Company (Optional)',
      testimonial: 'Your Testimonial *',
      testimonialHint: 'Please be specific about what you appreciated most about our services',
      rating: 'Rating',
    },
    submit: 'Submit Testimonial',
  },
  before: {
    title: 'Before you submit:',
    items: [
      'Your testimonial will be reviewed by our team',
      'We may contact you at the provided email for verification',
      'Your email will not be published publicly',
      'We reserve the right to edit for clarity and length',
    ],
  },
}

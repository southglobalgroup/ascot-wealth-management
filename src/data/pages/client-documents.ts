/* CLIENT DOCUMENTS (/client-documents): word for word from ascotwm.com/client-documents (rendered 2026-11-19). The two PDFs are linked
   on the live site until they are copied here (read them first: client documents can carry personal data). */

export const doc = {
  title: 'Client Documents',
  updated: 'Last Updated: March 2026',
  intro: 'These documents are provided for transparency and form part of the information given to clients when engaging Ascot Wealth Management Ltd for financial advice services.',
  listTitle: 'Available Documents',
  note: 'Some documents are still being prepared. Please contact us if you require any of these documents in advance.',
  items: [
    { name: 'Client Agreement', date: 'March 2026', href: '/documents/Client-Agreement-March-2026.pdf' },
    { name: 'About Our Services & Costs (Initial Disclosure Document)', date: 'January 2026', href: '/documents/AWM-IDD-January-2026.pdf' },
    { name: 'Privacy Terms & Disclosure', date: 'March 2026', status: 'Coming soon' },
    { name: 'Best Execution Policy', status: 'Coming soon' },
    { name: 'Client Complaints Procedure', status: 'Coming soon' },
  ] as { name: string; date?: string; href?: string; status?: string }[],
}

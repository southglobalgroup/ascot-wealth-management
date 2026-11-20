/* The legal and regulatory pages, word for word from ascotwm.com (rendered 2026-11-19): every heading and paragraph, nothing
   shortened. Generated from the scrape; links (emails, web addresses) are made at render time. */

export type Block =
  | { t: 'h2'; text: string; id: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'quote'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'lines'; lines: string[] }

export type LegalDoc = { title: string; updated: string; intro: string[]; blocks: Block[] }

export const legal: Record<'privacy-policy' | 'cookie-policy' | 'terms-of-use' | 'regulatory-information', LegalDoc> = {
  "privacy-policy": {
    "title": "Privacy Policy",
    "updated": "Last Updated: March 2026",
    "intro": [
      "Ascot Wealth Management Ltd is committed to protecting the privacy and security of your personal information.",
      "This Privacy Policy explains how we collect, use, store and protect personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and applicable data protection legislation."
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "Who We Are",
        "id": "who-we-are"
      },
      {
        "t": "lines",
        "lines": [
          "Ascot Wealth Management Ltd",
          "Scotch Corner",
          "London Road",
          "Sunningdale",
          "Ascot",
          "Berkshire",
          "SL5 0ER"
        ]
      },
      {
        "t": "p",
        "text": "Ascot Wealth Management Ltd is authorised and regulated by the Financial Conduct Authority (FCA)."
      },
      {
        "t": "p",
        "text": "Firm Reference Number: 551744."
      },
      {
        "t": "p",
        "text": "If you have any questions about this policy or how we use your personal information, please contact:"
      },
      {
        "t": "lines",
        "lines": [
          "Email: enquiries@ascotwm.com",
          "Telephone: 01344 851250"
        ]
      },
      {
        "t": "h2",
        "text": "What Personal Data We Collect",
        "id": "what-personal-data-we-collect"
      },
      {
        "t": "p",
        "text": "We may collect and process personal data including:"
      },
      {
        "t": "ul",
        "items": [
          "Name and contact details",
          "Date of birth and identification information",
          "Financial information and investment objectives",
          "Employment and income details",
          "Records of meetings, communications and advice provided",
          "Documents and information provided to support financial advice",
          "Information relating to health where relevant to insurance advice",
          "Email communications and correspondence"
        ]
      },
      {
        "t": "p",
        "text": "We only collect information necessary to provide financial advice and related services."
      },
      {
        "t": "h2",
        "text": "How We Use Your Information",
        "id": "how-we-use-your-information"
      },
      {
        "t": "p",
        "text": "We process personal data for legitimate business purposes including:"
      },
      {
        "t": "ul",
        "items": [
          "providing financial advice and related services",
          "assessing your financial circumstances and objectives",
          "arranging and managing financial products",
          "maintaining accurate client records",
          "compliance with regulatory obligations",
          "responding to enquiries or service requests"
        ]
      },
      {
        "t": "p",
        "text": "Your data will not be used for purposes unrelated to the services we provide."
      },
      {
        "t": "h2",
        "text": "Recording of Meetings and Communications",
        "id": "recording-of-meetings-and-communications"
      },
      {
        "t": "p",
        "text": "To maintain accurate records of advice and instructions, meetings and telephone calls may be recorded."
      },
      {
        "t": "p",
        "text": "This may include:"
      },
      {
        "t": "ul",
        "items": [
          "in-person meetings",
          "video meetings",
          "telephone conversations"
        ]
      },
      {
        "t": "p",
        "text": "Recordings may be used for:"
      },
      {
        "t": "ul",
        "items": [
          "preparing meeting notes",
          "maintaining accurate client records",
          "compliance monitoring",
          "ensuring the quality and accuracy of advice",
          "protecting both clients and the firm in the event of any dispute"
        ]
      },
      {
        "t": "p",
        "text": "Recordings may be securely stored within our systems in accordance with regulatory record-keeping requirements."
      },
      {
        "t": "h2",
        "text": "Automated Transcription and Record Keeping",
        "id": "automated-transcription-and-record-keeping"
      },
      {
        "t": "p",
        "text": "Where meetings or calls are recorded, automated transcription tools may be used to convert recordings into written transcripts."
      },
      {
        "t": "p",
        "text": "These transcripts may be used to assist with:"
      },
      {
        "t": "ul",
        "items": [
          "file note preparation",
          "meeting summaries",
          "compliance oversight",
          "internal documentation"
        ]
      },
      {
        "t": "p",
        "text": "Transcripts may be stored within our secure client management systems as part of the official record of advice."
      },
      {
        "t": "h2",
        "text": "Use of Artificial Intelligence and Technology",
        "id": "use-of-artificial-intelligence-and-technology"
      },
      {
        "t": "p",
        "text": "We may use automated technologies, including artificial intelligence tools, to support certain internal operational activities."
      },
      {
        "t": "p",
        "text": "These technologies may assist with:"
      },
      {
        "t": "ul",
        "items": [
          "document preparation",
          "meeting transcription and summarisation",
          "internal research and analysis",
          "administrative processes"
        ]
      },
      {
        "t": "p",
        "text": "These tools are used to support internal efficiency and accuracy and do not replace professional judgement."
      },
      {
        "t": "quote",
        "text": "\"All financial advice and recommendations remain subject to human oversight by qualified advisers.\""
      },
      {
        "t": "h2",
        "text": "How Your Data Is Stored",
        "id": "how-your-data-is-stored"
      },
      {
        "t": "p",
        "text": "Client information may be stored within secure systems including:"
      },
      {
        "t": "ul",
        "items": [
          "client relationship management systems",
          "document storage systems",
          "communication platforms",
          "secure email systems"
        ]
      },
      {
        "t": "p",
        "text": "Access to personal data is restricted to authorised personnel only and is protected by security controls such as authentication systems and restricted permissions."
      },
      {
        "t": "h2",
        "text": "Sharing Your Information",
        "id": "sharing-your-information"
      },
      {
        "t": "p",
        "text": "In order to provide financial advice services, we may share information with trusted third parties including:"
      },
      {
        "t": "ul",
        "items": [
          "financial product providers",
          "investment platforms",
          "regulatory bodies such as the FCA",
          "professional advisers where appropriate",
          "technology providers supporting secure systems"
        ]
      },
      {
        "t": "p",
        "text": "These organisations are required to protect your personal information and only process it for legitimate purposes."
      },
      {
        "t": "h2",
        "text": "International Data Transfers",
        "id": "international-data-transfers"
      },
      {
        "t": "p",
        "text": "Some technology providers we use may operate systems outside the United Kingdom or European Economic Area. Where this occurs, we ensure appropriate safeguards are in place to protect personal data in accordance with UK GDPR requirements."
      },
      {
        "t": "h2",
        "text": "Data Retention",
        "id": "data-retention"
      },
      {
        "t": "p",
        "text": "We retain client records for as long as necessary to fulfil the purposes for which they were collected and to comply with regulatory obligations. In many cases, FCA rules require financial advice firms to retain records for extended periods."
      },
      {
        "t": "h2",
        "text": "Your Rights",
        "id": "your-rights"
      },
      {
        "t": "p",
        "text": "Under UK GDPR you have several rights regarding your personal data, including:"
      },
      {
        "t": "ul",
        "items": [
          "the right to be informed",
          "the right to access your data",
          "the right to correct inaccurate information",
          "the right to request deletion where appropriate",
          "the right to restrict processing",
          "the right to data portability",
          "the right to object to certain processing activities"
        ]
      },
      {
        "t": "p",
        "text": "Requests relating to personal data can be made by contacting us using the details above."
      },
      {
        "t": "h2",
        "text": "Complaints",
        "id": "complaints"
      },
      {
        "t": "p",
        "text": "If you believe your data has been processed incorrectly or unlawfully, you have the right to lodge a complaint with the Information Commissioner's Office (ICO)."
      },
      {
        "t": "ul",
        "items": [
          "Information Commissioner's Office",
          "www.ico.org.uk"
        ]
      },
      {
        "t": "h2",
        "text": "Updates to This Policy",
        "id": "updates-to-this-policy"
      },
      {
        "t": "p",
        "text": "We may update this Privacy Policy from time to time to reflect regulatory changes or improvements to our processes. The latest version will always be available on our website."
      },
      {
        "t": "p",
        "text": "Last Updated: March 2026"
      }
    ]
  },
  "cookie-policy": {
    "title": "Cookie Policy",
    "updated": "Last Updated: March 2026",
    "intro": [
      "This Cookie Policy explains how Ascot Wealth Management Ltd uses cookies and similar technologies when you visit our website."
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "What Are Cookies",
        "id": "what-are-cookies"
      },
      {
        "t": "p",
        "text": "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website operators."
      },
      {
        "t": "h2",
        "text": "Cookies We Use",
        "id": "cookies-we-use"
      },
      {
        "t": "p",
        "text": "We use the following types of cookies on our website:"
      },
      {
        "t": "h3",
        "text": "Strictly Necessary Cookies"
      },
      {
        "t": "p",
        "text": "These cookies are essential for the website to function properly. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies."
      },
      {
        "t": "h3",
        "text": "Analytics Cookies"
      },
      {
        "t": "p",
        "text": "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website experience."
      },
      {
        "t": "h3",
        "text": "Functional Cookies"
      },
      {
        "t": "p",
        "text": "These cookies enable enhanced functionality and personalisation, such as remembering your preferences or choices you have made on the website."
      },
      {
        "t": "h2",
        "text": "Managing Cookies",
        "id": "managing-cookies"
      },
      {
        "t": "p",
        "text": "You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of the website."
      },
      {
        "t": "p",
        "text": "You can also manage your cookie preferences using our cookie consent banner which appears when you first visit the website."
      },
      {
        "t": "h2",
        "text": "Third-Party Cookies",
        "id": "third-party-cookies"
      },
      {
        "t": "p",
        "text": "Some cookies may be set by third-party services that appear on our pages. We do not control the use of these cookies and you should check the relevant third-party website for more information about how they use cookies."
      },
      {
        "t": "h2",
        "text": "Changes to This Policy",
        "id": "changes-to-this-policy"
      },
      {
        "t": "p",
        "text": "We may update this Cookie Policy from time to time. The latest version will always be available on our website."
      },
      {
        "t": "h2",
        "text": "Contact",
        "id": "contact"
      },
      {
        "t": "p",
        "text": "If you have any questions about our use of cookies, please contact:"
      },
      {
        "t": "lines",
        "lines": [
          "Email: enquiries@ascotwm.com",
          "Telephone: 01344 851250"
        ]
      }
    ]
  },
  "terms-of-use": {
    "title": "Terms of Use",
    "updated": "Last Updated: March 2026",
    "intro": [
      "Please read these Terms of Use carefully before using the Ascot Wealth Management Ltd website. By accessing or using this website, you agree to be bound by these terms."
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "Use of This Website",
        "id": "use-of-this-website"
      },
      {
        "t": "p",
        "text": "This website is provided by Ascot Wealth Management Ltd for information purposes only. The content on this website does not constitute financial advice and should not be relied upon as such."
      },
      {
        "t": "p",
        "text": "You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair the website or interfere with any other party's use."
      },
      {
        "t": "h2",
        "text": "No Financial Advice",
        "id": "no-financial-advice"
      },
      {
        "t": "p",
        "text": "The information contained on this website is for general guidance only. It does not constitute personal financial advice. Before making any financial decisions, you should seek professional advice tailored to your individual circumstances."
      },
      {
        "t": "h2",
        "text": "Intellectual Property",
        "id": "intellectual-property"
      },
      {
        "t": "p",
        "text": "All content on this website, including text, graphics, logos, and images, is the property of Ascot Wealth Management Ltd or its licensors and is protected by applicable intellectual property laws."
      },
      {
        "t": "p",
        "text": "You may not reproduce, distribute, or otherwise use any content from this website without our prior written consent."
      },
      {
        "t": "h2",
        "text": "Limitation of Liability",
        "id": "limitation-of-liability"
      },
      {
        "t": "p",
        "text": "Ascot Wealth Management Ltd does not guarantee the accuracy, completeness, or timeliness of the information on this website. We accept no liability for any loss or damage arising from the use of, or reliance on, information provided on this website."
      },
      {
        "t": "h2",
        "text": "External Links",
        "id": "external-links"
      },
      {
        "t": "p",
        "text": "This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those websites."
      },
      {
        "t": "h2",
        "text": "Regulatory Information",
        "id": "regulatory-information"
      },
      {
        "t": "p",
        "text": "Ascot Wealth Management Ltd is authorised and regulated by the Financial Conduct Authority (FCA). Firm Reference Number: 551744."
      },
      {
        "t": "h2",
        "text": "Changes to These Terms",
        "id": "changes-to-these-terms"
      },
      {
        "t": "p",
        "text": "We may update these Terms of Use from time to time. The latest version will always be available on our website. Continued use of the website following any changes constitutes acceptance of those changes."
      },
      {
        "t": "h2",
        "text": "Contact",
        "id": "contact"
      },
      {
        "t": "p",
        "text": "If you have any questions about these Terms of Use, please contact:"
      },
      {
        "t": "lines",
        "lines": [
          "Ascot Wealth Management Ltd",
          "Scotch Corner, London Road, Sunningdale, Ascot, Berkshire SL5 0ER",
          "Telephone: 01344 851250",
          "Email: enquiries@ascotwm.com"
        ]
      }
    ]
  },
  "regulatory-information": {
    "title": "Regulatory Information",
    "updated": "Last Updated: March 2026",
    "intro": [],
    "blocks": [
      {
        "t": "h2",
        "text": "Firm Authorisation",
        "id": "firm-authorisation"
      },
      {
        "t": "p",
        "text": "Ascot Wealth Management Ltd is authorised and regulated by the Financial Conduct Authority (FCA)."
      },
      {
        "t": "p",
        "text": "Firm Reference Number (FRN): 551744"
      },
      {
        "t": "p",
        "text": "You can verify our authorisation on the Financial Services Register: register.fca.org.uk"
      },
      {
        "t": "h2",
        "text": "Company Details",
        "id": "company-details"
      },
      {
        "t": "lines",
        "lines": [
          "Ascot Wealth Management Ltd",
          "Scotch Corner",
          "London Road",
          "Sunningdale",
          "Ascot",
          "Berkshire",
          "SL5 0ER",
          "Telephone: 01344 851250",
          "Website: www.ascotwm.com"
        ]
      },
      {
        "t": "p",
        "text": "Registered in England and Wales."
      },
      {
        "t": "h2",
        "text": "Financial Conduct Authority",
        "id": "financial-conduct-authority"
      },
      {
        "t": "lines",
        "lines": [
          "Financial Conduct Authority",
          "12 Endeavour Square",
          "London",
          "E20 1JN",
          "Website: www.fca.org.uk"
        ]
      },
      {
        "t": "h2",
        "text": "Financial Services Compensation Scheme (FSCS)",
        "id": "financial-services-compensation-scheme-fscs"
      },
      {
        "t": "p",
        "text": "Ascot Wealth Management Ltd is covered by the Financial Services Compensation Scheme (FSCS)."
      },
      {
        "t": "p",
        "text": "You may be entitled to compensation from the scheme if we cannot meet our obligations. This depends on the type of business and the circumstances of the claim."
      },
      {
        "t": "p",
        "text": "Most investment business is covered for 100% of the first £120,000 per person per firm."
      },
      {
        "t": "p",
        "text": "Further information can be found at: www.fscs.org.uk"
      },
      {
        "t": "h2",
        "text": "Complaints",
        "id": "complaints"
      },
      {
        "t": "p",
        "text": "If you wish to make a complaint about our services, please contact:"
      },
      {
        "t": "lines",
        "lines": [
          "Mark Insley",
          "Ascot Wealth Management Ltd",
          "Scotch Corner",
          "London Road",
          "Sunningdale",
          "Ascot",
          "Berkshire",
          "SL5 0ER",
          "Telephone: 01344 851250"
        ]
      },
      {
        "t": "p",
        "text": "If you are not satisfied with our response, you may be entitled to refer your complaint to the Financial Ombudsman Service."
      },
      {
        "t": "h2",
        "text": "Financial Ombudsman Service",
        "id": "financial-ombudsman-service"
      },
      {
        "t": "lines",
        "lines": [
          "Financial Ombudsman Service",
          "Exchange Tower",
          "London",
          "E14 9SR",
          "Website: www.financial-ombudsman.org.uk"
        ]
      },
      {
        "t": "h2",
        "text": "Data Protection",
        "id": "data-protection"
      },
      {
        "t": "p",
        "text": "Ascot Wealth Management Ltd processes personal data in accordance with the UK General Data Protection Regulation (UK GDPR)."
      },
      {
        "t": "p",
        "text": "Further information is available in our Privacy Policy and Privacy Terms & Disclosure documents."
      }
    ]
  }
}

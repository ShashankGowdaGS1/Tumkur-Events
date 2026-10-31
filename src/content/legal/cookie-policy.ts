import { PolicyDocument } from './types';

export const cookiePolicyContent: PolicyDocument = {
  slug: 'cookie-policy',
  eyebrow: 'PRIVACY & TECHNOLOGY',
  title: 'Cookie Policy',
  subtitle:
    'This Cookie Policy provides transparent disclosure regarding how Tumkur Events utilizes browser storage and technical session mechanisms on our website.',
  lastUpdated: 'October 31, 2026',
  statusNote:
    'Factual technical policy reflecting the exact, audited architecture of the Tumkur Events web platform.',
  seoTitle: 'Cookie Policy | Tumkur Events',
  seoDescription:
    'Understand how technical cookies, session states, and browser storage operate across the Tumkur Events website in Tumakuru, Karnataka.',
  sections: [
    {
      id: 'what-are-cookies',
      number: '01',
      title: 'What Are Cookies & Browser Technologies',
      paragraphs: [
        'Cookies are small data files deposited on your computer, smartphone, or tablet when you visit a website. They are widely used by modern web applications to enable core site functionality, maintain responsive navigation, and remember user interface states.',
        'In addition to cookies, websites may use local browser storage (such as session storage or localStorage) to deliver responsive performance without re-fetching static layout resources repeatedly.',
      ],
    },
    {
      id: 'how-we-use-technologies',
      number: '02',
      title: 'How Tumkur Events Uses Technical Data',
      paragraphs: [
        'Tumkur Events adheres to a privacy-first, minimal-data engineering philosophy. We use only strictly necessary technical mechanisms required to render our pages reliably and ensure smooth navigation across desktop and mobile devices.',
        'We do not engage in behavioral advertising, cross-site profiling, user fingerprinting, or targeted ad retargeting.',
      ],
    },
    {
      id: 'essential-technologies',
      number: '03',
      title: 'Strictly Necessary Essential Technologies',
      paragraphs: [
        'Strictly necessary mechanisms are essential for the website to function properly. These include:',
      ],
      bullets: [
        'Next.js App Router Navigation: Caching static page routes and layout shell states for instant page transitions.',
        'Responsive Media Display: Determining appropriate image resolutions and video poster assets based on your screen size.',
        'Client-Side UI State: Remembering temporary user interactions, such as closing the mobile navigation drawer or toggling the on-screen consultation panel.',
      ],
    },
    {
      id: 'absence-of-tracking-cookies',
      number: '04',
      title: 'Absence of Advertising & Third-Party Trackers',
      paragraphs: [
        'Our website does not load third-party marketing cookies, Google Analytics tracking scripts, Meta Pixels, or programmatic advertising cookies. We believe prospective hosts deserve to browse wedding stages, mandapams, and floral galleries without being tracked across the web.',
        'Because our website does not deploy optional marketing, tracking, or analytics cookies, we do not present an obtrusive cookie banner that requires users to accept tracking. The site is entirely tracker-free by default.',
      ],
    },
    {
      id: 'third-party-links',
      number: '05',
      title: 'External Platforms & Click-to-Chat Links',
      paragraphs: [
        'When you click external links on our website—such as our "Chat on WhatsApp" buttons or our Instagram portfolio link—you leave the Tumkur Events domain and transition to the external platform (e.g., WhatsApp / Meta).',
        'These external services operate under their own independent cookie and privacy protocols. We encourage you to review their respective disclosures if you have questions regarding their data practices.',
      ],
    },
    {
      id: 'browser-controls',
      number: '06',
      title: 'Managing Cookies in Your Browser',
      paragraphs: [
        'You have the ability to accept or decline cookies through your browser settings. Most browsers automatically accept cookies, but you can usually modify your settings to block or delete cookies if you prefer.',
        'Instructions for managing cookies in major browsers:',
      ],
      bullets: [
        'Google Chrome: Settings > Privacy and Security > Third-Party Cookies.',
        'Apple Safari: Preferences > Privacy > Block All Cookies.',
        'Mozilla Firefox: Settings > Privacy & Security > Cookies and Site Data.',
        'Microsoft Edge: Settings > Cookies and Site Permissions > Manage and Delete Cookies.',
      ],
    },
    {
      id: 'policy-updates',
      number: '07',
      title: 'Updates to This Cookie Policy',
      paragraphs: [
        'Should we incorporate new website capabilities or integrations in the future that utilize optional cookies or analytics, this policy will be updated immediately to reflect those changes, and an appropriate consent management framework will be introduced.',
      ],
    },
    {
      id: 'contact-cookies',
      number: '08',
      title: 'Contact for Technical & Privacy Questions',
      paragraphs: [
        'If you have questions regarding our use of cookies or website technologies, please connect with us directly:',
      ],
      bullets: [
        'Email: concierge@tumkurevents.com',
        'Telephone: +91 94812 34567',
        'Location: Tumakuru, Karnataka 572102',
      ],
    },
  ],
};

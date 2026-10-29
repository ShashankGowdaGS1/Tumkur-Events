import { siteConfig } from './site';

/**
 * Centralized Configuration for Global Footer & Floating Contact System
 * Phase 14: "The Signature Footer"
 */

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface FooterNavColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export const footerNavColumns: readonly FooterNavColumn[] = [
  {
    title: 'EXPLORE',
    links: [
      { label: 'Home', href: siteConfig.routes.home, isExternal: false },
      { label: 'About', href: siteConfig.routes.about, isExternal: false },
      { label: 'Services', href: siteConfig.routes.services, isExternal: false },
      { label: 'Packages', href: siteConfig.routes.packages, isExternal: false },
      { label: 'Gallery', href: siteConfig.routes.gallery, isExternal: false },
      { label: 'Our Work', href: siteConfig.routes.ourWork, isExternal: false },
    ],
  },
  {
    title: 'OCCASIONS',
    links: [
      { label: 'Birthdays', href: '/events/birthdays', isExternal: false },
      { label: 'Traditional Ceremonies', href: '/events/traditional-ceremonies', isExternal: false },
      { label: 'Weddings & Engagements', href: '/events/weddings', isExternal: false },
      { label: 'Baby Showers', href: '/events/baby-showers', isExternal: false },
      { label: 'Corporate Events', href: '/events/corporate', isExternal: false },
      { label: 'All Events', href: siteConfig.routes.events, isExternal: false },
    ],
  },
  {
    title: 'DISCOVER',
    links: [
      { label: 'Reviews', href: siteConfig.routes.reviews, isExternal: false },
      { label: 'Blog', href: siteConfig.routes.blog, isExternal: false },
      { label: 'Contact', href: siteConfig.routes.contact, isExternal: false },
      {
        label: 'Instagram',
        href: siteConfig.social.instagram ?? 'https://instagram.com/tumkurevents',
        isExternal: true,
      },
    ],
  },
];

export const footerConfig = {
  brand: {
    statement: 'The finest moments deserve a beautiful setting.',
    supportingLine:
      "Thoughtful event styling and decoration for life's meaningful celebrations.",
    locationLabel: 'Tumakuru, Karnataka',
    locationHref: '/contact',
    ctaLabel: "Let's Plan Your Event",
    ctaHref: '/contact',
  },
  columns: footerNavColumns,
  contact: {
    title: 'CONTACT',
    location: `${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}`,
    phone: siteConfig.contact.phoneDisplay,
    phoneHref: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`,
    email: siteConfig.contact.email,
    emailHref: `mailto:${siteConfig.contact.email}`,
    hours: siteConfig.contact.businessHours?.weekdays ?? '09:00 AM – 08:30 PM IST',
    whatsappLabel: 'WhatsApp Enquiry',
    whatsappHref: `https://wa.me/919481234567?text=${encodeURIComponent(
      'Hello Tumkur Events! I would like to enquire about event decoration for an upcoming celebration. Could you please help me with the details?'
    )}`,
  },
  signatureWordmark: 'TUMKUR EVENTS',
  legal: [
    { label: 'Privacy Policy', href: siteConfig.routes.privacyPolicy },
    { label: 'Terms & Conditions', href: siteConfig.routes.termsAndConditions },
    { label: 'Refund & Cancellation Policy', href: siteConfig.routes.refundPolicy },
    { label: 'Cookie Policy', href: siteConfig.routes.cookiePolicy },
  ] as const,
  whatsapp: {
    number: '919481234567',
    prefilledMessage:
      'Hello Tumkur Events! I would like to enquire about event decoration for an upcoming celebration. Could you please help me with the details?',
    tooltipText: 'Chat on WhatsApp',
    ariaLabel: 'Chat with Tumkur Events on WhatsApp',
  },
  chatAssistant: {
    name: 'Tumkur Events Assistant',
    subtitle: 'How can we help with your celebration?',
    openingMessage:
      'Welcome to Tumkur Events. How can we help you plan your celebration?',
    quickActions: [
      {
        id: 'action-events',
        label: 'Explore Event Types',
        description: 'Browse birthdays, weddings, ceremonies & corporate occasions',
        href: siteConfig.routes.events,
        isExternal: false,
      },
      {
        id: 'action-packages',
        label: 'View Packages',
        description: 'Discover our transparent celebration packages & pricing',
        href: siteConfig.routes.packages,
        isExternal: false,
      },
      {
        id: 'action-quote',
        label: 'Request a Quote',
        description: 'Send event details for a personalized bespoke quotation',
        href: siteConfig.routes.contact,
        isExternal: false,
      },
      {
        id: 'action-whatsapp',
        label: 'Chat on WhatsApp',
        description: 'Direct live messaging with our celebration concierge',
        href: `https://wa.me/919481234567?text=${encodeURIComponent(
          'Hello Tumkur Events! I would like to enquire about event decoration for an upcoming celebration. Could you please help me with the details?'
        )}`,
        isExternal: true,
      },
    ],
  },
} as const;

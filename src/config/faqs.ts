/**
 * Centralized Configuration for Frequently Asked Questions (FAQ)
 * Homepage Section 10: "The Celebration Concierge"
 *
 * Grounded in verified, authentic operational policies without unsupported
 * claims regarding deposits, refund timelines, or guaranteed dates.
 */

export interface FaqItem {
  readonly id: string;
  readonly number: string;
  readonly question: string;
  readonly answer: string;
}

export const celebrationFaqs: readonly FaqItem[] = [
  {
    id: 'faq-01',
    number: '01',
    question: 'What types of events do you decorate?',
    answer:
      'Our celebration portfolio includes birthdays, traditional ceremonies, engagements, baby showers, and other special occasions. Share your event details with us to discuss suitable decoration options.',
  },
  {
    id: 'faq-02',
    number: '02',
    question: 'Can I customize the theme and decorations?',
    answer:
      'Yes, you can share your preferred colors, themes, reference images, and ideas. Available customization options can then be discussed based on your event requirements.',
  },
  {
    id: 'faq-03',
    number: '03',
    question: 'How much will my event decoration cost?',
    answer:
      'Pricing depends on the event type, venue, decoration scale, materials, and design requirements. Explore our indicative packages or request a personalized quotation.',
  },
  {
    id: 'faq-04',
    number: '04',
    question: 'How early should I contact you?',
    answer:
      'We recommend enquiring as early as practical, especially for important dates. The team can confirm availability and preparation requirements once your event details are shared.',
  },
  {
    id: 'faq-05',
    number: '05',
    question: 'Do you decorate homes and event venues?',
    answer:
      'Share your venue type, location, and decoration requirements, whether it is a home, hall, or outdoor space. The team can review the setup requirements and confirm what is feasible.',
  },
  {
    id: 'faq-06',
    number: '06',
    question: 'How do bookings, changes, and cancellations work?',
    answer:
      'Booking arrangements, date changes, and cancellations depend on the terms agreed for your event. Please request the current written terms before confirming your booking.',
  },
];

export const faqIntro = {
  eyebrow: 'THE CELEBRATION CONCIERGE',
  headline: 'Every Detail Matters.',
  description:
    'A few helpful answers before we begin planning something special.',
  photoCaption: 'THOUGHTFULLY PLANNED. BEAUTIFULLY CELEBRATED.',
} as const;

export const faqCta = {
  heading: 'Still Have a Question?',
  description:
    "Tell us a little about your celebration, and we'll help you explore the next steps.",
  ctaText: 'Get in Touch',
  ctaHref: '/contact',
} as const;

/**
 * Centralized Configuration for Packages & Flexible Celebrations
 * Homepage Section 08: "The Celebration Atelier"
 *
 * Three core decoration curations:
 * 01 - Intimate Moments (Home ceremonies, birthdays, cozy milestones)
 * 02 - Signature Celebrations (Engagements, traditional naming & saree ceremonies)
 * 03 - Grand Statements (Opulent weddings, grand reception stages)
 */

export interface CelebrationPackage {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly priceDisplay: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly detailedInclusions: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
  readonly captionTag: string;
  readonly captionQuote: string;
  readonly enquiryHref: string;
}

export const celebrationPackages: readonly CelebrationPackage[] = [
  {
    id: 'intimate-moments',
    number: '01',
    title: 'Intimate Moments',
    subtitle: 'Bespoke styling for birthdays & home gatherings',
    priceDisplay: '₹18,000 – ₹35,000',
    description:
      'Thoughtful decoration for birthdays, home ceremonies, and intimate gatherings.',
    highlights: [
      'Custom balloon or decorative backdrop',
      'Cake table and display styling',
      'Coordinated colors and decorative accents',
      'Setup and finishing arrangements',
    ],
    detailedInclusions: [
      'Custom circular or organic balloon focal backdrop',
      'Themed cake plinth, display pedestals & accent props',
      'Warm ambient wash lighting & spotlighting',
      'Personalized welcome easel display with floral accent',
      'Complete on-site artisan setup and post-event removal',
    ],
    image: '/images/events/birthdays.jpg',
    imageAlt: 'Bespoke pastel balloon garland and floral birthday celebration stage in Tumakuru',
    captionTag: '01 / 03 • INTIMATE MOMENTS',
    captionQuote: 'Thoughtfully curated styling for cozy celebrations and cherished family gatherings.',
    enquiryHref: '/contact?package=intimate-moments',
  },
  {
    id: 'signature-celebrations',
    number: '02',
    title: 'Signature Celebrations',
    subtitle: 'Elevated decor for engagements & milestone ceremonies',
    priceDisplay: '₹45,000 – ₹85,000',
    description:
      'Personalized event styling with memorable floral and ceremonial details.',
    highlights: [
      'Customized stage or main backdrop',
      'Coordinated floral arrangements',
      'Entrance and photo-area decoration',
      'Decorative lighting and finishing details',
    ],
    detailedInclusions: [
      'Full architectural stage backdrop draped in fresh roses & jasmine',
      'Coordinated entrance walkway archway with welcoming floral elements',
      'Traditional brass samai / kuthuvillakku lamps & ceremonial decor',
      'Designer couple seating or traditional ceremonial wooden chairs',
      'Dedicated guest photo opportunity corner',
      'Full on-site styling coordinator throughout event execution',
    ],
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt: 'Karnataka traditional ceremony stage with fresh jasmine, marigolds, and brass samai lamps',
    captionTag: '02 / 03 • SIGNATURE CELEBRATIONS',
    captionQuote: 'Harmonious fresh floral artistry and traditional ceremonial illumination.',
    enquiryHref: '/contact?package=signature-celebrations',
  },
  {
    id: 'grand-statements',
    number: '03',
    title: 'Grand Statements',
    subtitle: 'Monumental spatial artistry for weddings & receptions',
    priceDisplay: '₹1,10,000 – ₹2,50,000+',
    description:
      'Grand floral installations and coordinated styling for larger celebrations.',
    highlights: [
      'Grand stage and floral backdrop',
      'Entrance and venue styling',
      'Decorative lighting and ambience',
      'Ceremonial seating and finishing details',
    ],
    detailedInclusions: [
      'Monumental panoramic stage installation with cascading premium blooms',
      'Grand illuminated entrance tunnel with crystal chandeliers & draping',
      'Full venue spatial ambiance & perimeter architectural draping',
      'Bespoke royal ceremonial seating & carved brass heirloom elements',
      'Multi-tiered warm wash, profile follow-spots & fairy-light canopy',
      'Senior styling director & full artisan production crew on site',
    ],
    image: '/images/events/weddings.jpg',
    imageAlt: 'Opulent wedding stage with cascading floral arches and crystal chandeliers in Tumakuru',
    captionTag: '03 / 03 • GRAND STATEMENTS',
    captionQuote: 'Theatrical scale, panoramic floral cascades, and unforgettable grandeur.',
    enquiryHref: '/contact?package=grand-statements',
  },
];

export const packagesIntro = {
  eyebrow: 'THE CELEBRATION ATELIER',
  headline: 'Curated With Care. Priced With Transparency.',
  description:
    'Explore our signature celebration collections. Every curation blends bespoke decoration, authentic craftsmanship, and honest pricing for your special day in Tumakuru.',
  accent: 'Crafted for life’s most cherished milestones.',
} as const;

export const customQuoteContent = {
  eyebrow: 'BESPOKE COMMISSIONS',
  headline: 'Looking for a Completely Custom Setup?',
  description:
    'Every celebration in Tumakuru is one of a kind. If your vision calls for a distinct color palette, rare botanicals, or heritage rituals, our design team will tailor a bespoke proposal to your exact requirements.',
  ctaText: 'Request a Custom Estimate',
  ctaHref: '/contact?inquiry=custom-event',
} as const;

export const pricingDisclaimerText =
  'Indicative pricing. Final inclusions and costs are confirmed through a custom quotation.';

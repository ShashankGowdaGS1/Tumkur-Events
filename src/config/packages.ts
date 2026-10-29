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
  readonly priceStarting: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly captionTag: string;
  readonly captionQuote: string;
  readonly inclusions: readonly string[];
  readonly enquiryHref: string;
  readonly isPopular?: boolean;
}

export const celebrationPackages: readonly CelebrationPackage[] = [
  {
    id: 'intimate-moments',
    number: '01',
    title: 'Intimate Moments',
    subtitle: 'Bespoke styling for home ceremonies & birthdays',
    priceDisplay: '₹18,000 – ₹35,000',
    priceStarting: 'Starting at ₹18,000',
    description:
      'Thoughtfully curated decorative styling for intimate family celebrations, cozy birthday parties, and home ceremonies with warm aesthetics and personalized focal backdrops.',
    image: '/images/events/birthdays.jpg',
    imageAlt: 'Bespoke pastel balloon garland and floral birthday celebration stage in Tumakuru',
    captionTag: '01 / 03 • INTIMATE MOMENTS',
    captionQuote: 'Thoughtfully curated styling for cozy celebrations and cherished family gatherings.',
    inclusions: [
      'Custom circular or organic balloon focal backdrop',
      'Themed cake plinth, display pedestals & accent props',
      'Warm ambient wash lighting & spotlighting',
      'Personalized welcome easel display with floral accent',
      'Complete on-site artisan setup and post-event removal',
    ],
    enquiryHref: '/contact?package=intimate-moments',
  },
  {
    id: 'signature-celebrations',
    number: '02',
    title: 'Signature Celebrations',
    subtitle: 'Elevated decor for engagements & milestone ceremonies',
    priceDisplay: '₹45,000 – ₹85,000',
    priceStarting: 'Starting at ₹45,000',
    description:
      'Our most beloved styling suite. A harmonious balance of fresh seasonal florals, architectural stage backdrops, and traditional South Indian ceremonial illumination.',
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt: 'Karnataka traditional ceremony stage with fresh jasmine, marigolds, and brass samai lamps',
    captionTag: '02 / 03 • SIGNATURE CELEBRATIONS',
    captionQuote: 'Harmonious fresh floral artistry and traditional ceremonial illumination.',
    inclusions: [
      'Full architectural stage backdrop draped in fresh roses & jasmine',
      'Coordinated entrance walkway archway with welcoming floral elements',
      'Traditional brass samai / kuthuvillakku lamps & ceremonial decor',
      'Designer couple seating or traditional ceremonial wooden chairs',
      'Dedicated guest photo opportunity corner',
      'Full on-site styling coordinator throughout event execution',
    ],
    enquiryHref: '/contact?package=signature-celebrations',
    isPopular: true,
  },
  {
    id: 'grand-statements',
    number: '03',
    title: 'Grand Statements',
    subtitle: 'Monumental spatial artistry for weddings & grand receptions',
    priceDisplay: '₹1,10,000 – ₹2,50,000+',
    priceStarting: 'Starting at ₹1,10,000',
    description:
      'Theatrical scale and immersive spatial transformation. Cascading floral arrangements, crystal chandeliers, panoramic backdrops, and majestic ceremonial artistry.',
    image: '/images/events/weddings.jpg',
    imageAlt: 'Opulent wedding stage with cascading floral arches and crystal chandeliers in Tumakuru',
    captionTag: '03 / 03 • GRAND STATEMENTS',
    captionQuote: 'Theatrical scale, panoramic floral cascades, and unforgettable grandeur.',
    inclusions: [
      'Monumental panoramic stage installation with cascading premium blooms',
      'Grand illuminated entrance tunnel with crystal chandeliers & draping',
      'Full venue spatial ambiance & perimeter architectural draping',
      'Bespoke royal ceremonial seating & carved brass heirloom elements',
      'Multi-tiered warm wash, profile follow-spots & fairy-light canopy',
      'Senior styling director & full artisan production crew on site',
    ],
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

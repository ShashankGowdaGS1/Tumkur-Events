/**
 * Centralized Configuration for Section 09: The Celebration Journal
 * Homepage Section 09: "Stories Behind the Celebrations"
 *
 * Combines fine-art event photography with authentic editorial storytelling:
 * - 3 complementary event photographs (Main setting + 2 detail closeups)
 * - Honest editorial brand reflections (no fabricated testimonials or fake ratings)
 * - Verified reviews data container for future authenticated client feedback
 * - Dual navigation links to /reviews and /our-work
 */

export interface TestimonialItem {
  readonly id: string;
  readonly quote: string;
  readonly displayName?: string;
  readonly eventCategory?: string;
  readonly reviewSource?: string;
  readonly originalSourceUrl?: string;
  readonly displayImage?: string;
  readonly imageAlt?: string;
  readonly isVerified: boolean;
}

/**
 * Verified client reviews array.
 * Strictly populated only when genuine customer feedback is authorized and available.
 */
export const verifiedTestimonials: readonly TestimonialItem[] = [];

export const journalIntro = {
  eyebrow: 'CELEBRATION JOURNAL',
  headlineLine1: 'More Than a',
  headlineLine2: 'Beautiful Setting.',
  description:
    'Thoughtful details. Meaningful moments. Celebrations made personal.',
} as const;

export const journalStory = {
  heading: 'A Story in Every Detail.',
  description:
    'From thoughtfully arranged flowers to welcoming celebration spaces, the little details help shape moments worth remembering.',
  supporting:
    'Behind every handcrafted stage backdrop, traditional samai lamp, and gentle canopy of lights is a unique family gathering in Tumakuru—shaped with personal care and authentic craftsmanship.',
} as const;

export const testimonialsEditorialFallback = {
  quote:
    'Every celebration in Tumakuru is shaped around people, warmth, and shared memories. Behind every backdrop and floral garland lies a milestone that stays with you forever.',
  badge: 'Real client stories will be featured here.',
  contextNote:
    'Real client stories and verified family reflections will be featured here as our celebration archive grows. Every styling project in Tumakuru is crafted with personal care, transparent coordination, and dedicated craftsmanship.',
  defaultImage: '/images/events/special-occasions.jpg',
  defaultImageAlt:
    'Artfully arranged milestone celebration stage and warm lighting in Tumakuru',
} as const;

export interface JournalImageItem {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly caption: string;
}

export const journalImages: readonly JournalImageItem[] = [
  {
    id: 'journal-main',
    src: '/images/events/art-of-celebration.jpg',
    alt: 'Opulent celebration stage backdrop with lush florals and bespoke seating in Tumakuru',
    label: '01 / SCENIC STAGE',
    caption: 'Curated stage artistry & architectural florals',
  },
  {
    id: 'journal-detail-01',
    src: '/images/events/traditional-ceremonies.jpg',
    alt: 'Traditional South Indian ceremony decor with marigold strands, jasmine, and brass samai lamps',
    label: '02 / FLORAL RITUALS',
    caption: 'Fresh jasmine & sacred brass lamps',
  },
  {
    id: 'journal-detail-02',
    src: '/images/events/weddings.jpg',
    alt: 'Opulent wedding reception archways draped with blush roses and crystal chandelier illumination',
    label: '03 / AMBIENCE & LIGHT',
    caption: 'Crystal chandeliers & layered warm lighting',
  },
];

export const journalFooter = {
  copy: 'Every celebration has a story.',
  primaryCtaText: 'Explore All Reviews',
  primaryCtaHref: '/reviews',
  secondaryCtaText: 'See More Celebrations',
  secondaryCtaHref: '/our-work',
} as const;

/**
 * Centralized Configuration for Client Stories & Reviews
 * Homepage Section 09: "Stories Behind the Celebrations"
 *
 * DATA INTEGRITY POLICY:
 * To maintain authentic credibility, customer testimonials are strictly curated
 * from verified client feedback. Fabricated names, stock profile photos, or
 * artificial star ratings are never permitted.
 *
 * When `verifiedTestimonials` is empty, the section gracefully presents an
 * editorial curation preview without implying customer endorsement.
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
 * Array of verified customer testimonials.
 * Insert genuine client feedback here as verified reviews are collected.
 */
export const verifiedTestimonials: readonly TestimonialItem[] = [];

export const testimonialsIntro = {
  eyebrow: 'KIND WORDS & CHERISHED MOMENTS',
  headline: 'The Moments That Stay With You.',
  description:
    'Celebrations are remembered not only for how they look, but for how they make people feel.',
  accent: 'The stories behind every celebration.',
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

export const testimonialsFooter = {
  copy: 'Every celebration has a story.',
  ctaText: 'Explore All Reviews',
  ctaHref: '/reviews',
} as const;

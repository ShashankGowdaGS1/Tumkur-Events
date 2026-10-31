/**
 * Centralized Configuration for Reviews & Client Stories Page
 * Route: /reviews
 *
 * Strict Authenticity Protocol:
 * - NEVER invent customer reviews, star ratings, or client quotes.
 * - `verifiedReviews` is strictly empty until authorized, authenticated feedback is provided.
 * - Provides honest editorial copy, our celebration approach, and feedback channels.
 */

export interface ReviewItem {
  readonly id: string;
  readonly customerDisplayName: string;
  readonly quote: string;
  readonly rating?: number;
  readonly source: 'google' | 'direct' | 'wedding_wire';
  readonly sourceLabel: string;
  readonly sourceUrl?: string;
  readonly eventCategory?: string;
  readonly eventDate?: string;
  readonly reviewDate?: string;
  readonly relatedImage?: string;
  readonly relatedImageAlt?: string;
  readonly publicationApproved: boolean;
  readonly isVerified: boolean;
  readonly isFeatured?: boolean;
}

/**
 * Authentic verified client reviews repository.
 * Initialized as an empty array in compliance with the strict review authenticity requirement.
 * Will only contain genuine, approved feedback once received from real clients.
 */
export const verifiedReviews: readonly ReviewItem[] = [];

export const reviewsHeroData = {
  eyebrow: 'CLIENT STORIES & EXPERIENCES',
  heading: {
    line1: 'The Moments',
    line2: 'That Stay With Us.',
  },
  accentPhrase: 'Made with devotion.',
  // Neutral wording since no authenticated reviews are yet published
  introduction:
    'Every celebration has its own story. Explore our approach to meaningful moments and the beautiful possibilities ahead across Tumakuru.',
  primaryCtaText: 'Explore Experiences',
  primaryCtaTarget: '#celebration-stories',
  image: '/images/events/special-occasions.jpg',
  imageAlt: 'Evening milestone celebration with candlelit tables, fairy lights, and intimate family gathering in Tumakuru',
};

export const emptyStateData = {
  eyebrow: 'ARCHIVE IN PROGRESS',
  heading: 'Every Beautiful Story Begins Somewhere.',
  body:
    "We're preparing this space for authentic customer experiences and genuine reflections from families across Tumakuru. In the meantime, explore our celebration gallery or talk with us about designing your upcoming event.",
  ctaGalleryText: 'Explore Our Gallery',
  ctaGalleryHref: '/gallery',
  ctaContactText: 'Plan Your Event',
  ctaContactHref: '/contact?source=reviews-empty',
};

export const momentsBehindWordsData = {
  eyebrow: 'DECORATIVE INSPIRATION',
  heading: 'Every Detail Has a Story.',
  description:
    'While our client reflection archive grows, discover the floral artistry, atmospheric lighting, and handcrafted settings that define our celebratory styling in South Karnataka.',
  disclaimer:
    'Visual Inspiration: The photographs below represent our decor concepts and creative craftsmanship.',
  images: [
    {
      id: 'detail-01',
      title: 'Handcrafted Mandap Craft',
      subtitle: 'Sacred Jasmine & Marigold Harmony',
      src: '/images/events/art-of-celebration.jpg',
      alt: 'South Indian wedding mandapam with marigold garlands and brass samai lamps in Tumakuru',
      aspect: 'landscape',
    },
    {
      id: 'detail-02',
      title: 'Ceremonial Reverence',
      subtitle: 'Authentic Bell Metal Artifacts',
      src: '/images/events/traditional-ceremonies.jpg',
      alt: 'Traditional South Indian ceremony decor with marigold strands, jasmine, and brass lamps',
      aspect: 'portrait',
    },
    {
      id: 'detail-03',
      title: 'Luminous Reception Canopies',
      subtitle: 'Crystal Chandeliers & Warm Ambiance',
      src: '/images/events/weddings.jpg',
      alt: 'Opulent wedding reception archways draped with blush roses and crystal chandelier illumination',
      aspect: 'portrait',
    },
    {
      id: 'detail-04',
      title: 'Starlit Courtyard Dining',
      subtitle: 'Intimate Family Tablescapes',
      src: '/images/events/final-cta-canopy.jpg',
      alt: 'Celebratory starlit dining canopy with thousands of twinkling fairy lights and floral centerpieces',
      aspect: 'landscape',
    },
  ],
};

export const ourApproachData = {
  eyebrow: 'OUR PROCESS',
  heading: 'Thoughtful Celebrations Begin With Understanding.',
  description:
    'Behind every beautiful setting is a structured, attentive creative journey designed to make event planning transparent, calm, and memorable.',
  image: '/images/events/stage-events.jpg',
  imageAlt: 'Scenic stage decor with golden structural arches and floral pillars in Tumakuru',
  steps: [
    {
      number: '01',
      title: 'Understanding Your Occasion',
      description:
        'We begin by listening closely to the nature of your event, family traditions, venue parameters, guest size, and the emotional atmosphere you wish to evoke.',
    },
    {
      number: '02',
      title: 'Exploring the Possibilities',
      description:
        'Together, we explore tailored color palettes, fresh floral combinations, architectural stage flats, entrance gates, and lighting concepts matched to your venue.',
    },
    {
      number: '03',
      title: 'Bringing the Details Together',
      description:
        'Our experienced local artisans and styling crew coordinate on-site execution seamlessly, ensuring every garland, lamp, and backdrop is positioned with precision.',
    },
  ],
};

export const shareExperienceData = {
  eyebrow: 'YOUR WORDS MATTER',
  heading: 'Celebrated With Us? We’d Love to Hear Your Story.',
  supporting:
    'If you have recently hosted a wedding, traditional ceremony, birthday, or milestone with Tumkur Events, your reflections help us continue refining our craft.',
  primaryCtaText: 'Share Your Experience',
  primaryCtaHref: '/contact?source=client-feedback',
  whatsappPrompt: 'Prefer to share directly via WhatsApp?',
};

export const reviewsFinalCtaData = {
  eyebrow: 'BEGIN YOUR JOURNEY',
  heading: 'Your Celebration Could Be the Next Beautiful Story.',
  supporting:
    'Tell us about the occasion you’re planning, and let’s explore the possibilities together across Tumakuru and South Karnataka.',
  primaryCta: 'Plan Your Event',
  primaryHref: '/contact?source=reviews-final-cta',
  secondaryCta: 'Explore Our Services',
  secondaryHref: '/services',
};

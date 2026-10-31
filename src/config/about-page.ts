/**
 * Centralized Configuration for About Us Page
 * Route: /about
 *
 * Grounded in authentic brand identity:
 * - Established in Tumakuru, Karnataka (est. 2018)
 * - Contemporary celebration luxury honoring South Karnataka cultural reverence
 * - Zero fabricated awards, fake founder bios, or synthetic statistics
 */

export const aboutHeroData = {
  eyebrow: 'OUR STORY',
  heading: {
    line1: 'More Than an Event.',
    line2Accent: 'A Feeling to Remember.',
  },
  introduction:
    'We believe the most beautiful celebrations are those that reflect the people, traditions, and moments behind them.',
  ctaText: 'Discover Our Story',
  ctaTarget: '#our-story',
  image: '/images/events/weddings.jpg',
  imageAlt: 'Opulent wedding celebration floral stage and warm lighting in Tumakuru',
} as const;

export const aboutStoryData = {
  sectionNumber: '01 / OUR STORY',
  statement:
    'We create celebration environments that feel deeply personal, culturally reverent, and visually unforgettable.',
  heading: 'Every Celebration Has a Story.',
  paragraphs: [
    'Tumkur Events began with a simple appreciation for the warmth, ritual, and visual beauty of celebrations in South Karnataka. We recognized that whether a family gathers for an intimate home naming ceremony or welcomes hundreds to a grand wedding mandapam, the setting should never feel generic.',
    'Our craft blends the fragrance of fresh local jasmine and marigolds with contemporary floral architecture, heirloom brass artifacts, and carefully tuned ambient lighting. We listen to the traditions and personal preferences that matter to your family, shaping spaces where loved ones naturally linger and memories are made.',
  ],
  detailImage: '/images/decor/faq-decor-detail.jpg',
  detailImageAlt: 'Authentic South Indian ceremonial brass uruli with floating lilies and fresh marigolds',
  detailCaption: 'Handcrafted Ceremonial Detail & Brass Craft',
} as const;

export const aboutManifestoData = {
  eyebrow: 'OUR BELIEF',
  lead: 'A celebration is never just a decoration.',
  lines: ['It is a feeling.', 'A memory.', 'A moment that stays.'],
  accentPhrase: 'The heart of what we do.',
} as const;

export interface PhilosophyChapter {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly detailTag: string;
}

export const philosophyChapters: readonly PhilosophyChapter[] = [
  {
    id: 'phil-01',
    number: '01',
    title: 'Understanding the Occasion',
    description:
      'Every celebration begins with its own meaning, atmosphere, and preferences. We take time to understand the cultural significance, guest scale, and personal emotions guiding your gathering.',
    image: '/images/events/special-occasions.jpg',
    imageAlt: 'Intimate evening milestone celebration with candlelit tables and warm ambiance in Tumakuru',
    detailTag: 'Listening & Context',
  },
  {
    id: 'phil-02',
    number: '02',
    title: 'Creating the Visual Direction',
    description:
      'We explore bespoke color palettes, fresh floral combinations, backdrop structures, and tailored styling themes that harmonize with your venue and ceremonial rituals.',
    image: '/images/events/birthdays.jpg',
    imageAlt: 'Bespoke pastel birthday party stage decoration with organic balloon garland and circular backdrop',
    detailTag: 'Concept & Palette',
  },
  {
    id: 'phil-03',
    number: '03',
    title: 'Considering Every Detail',
    description:
      'Looking at how textures, lighting, floral arrangements, and venue elements work together visually. From entrance gateways to stage focal points, every line is thoughtfully considered.',
    image: '/images/events/art-of-celebration.jpg',
    imageAlt: 'Handcrafted South Indian wedding mandapam with marigold malas and antique brass vessels',
    detailTag: 'Texture & Lighting',
  },
  {
    id: 'phil-04',
    number: '04',
    title: 'Bringing the Setting Together',
    description:
      'Creating a cohesive decorative environment suited to your celebration. Our dedicated on-site styling crew coordinates flawless installation so you can focus entirely on celebrating.',
    image: '/images/events/stage-events.jpg',
    imageAlt: 'Panoramic auditorium stage setup with layered gold arches and concert-grade illumination',
    detailTag: 'On-Site Execution',
  },
];

export const behindDetailsData = {
  eyebrow: 'THE CRAFT OF STYLING',
  heading: 'Beauty Lives in the Details.',
  description:
    'The textures, colors, flowers, and finishing touches all contribute to the character of a celebration.',
  items: [
    {
      id: 'bd-01',
      title: 'Sacred Florals & Malas',
      subtitle: 'Fresh Mysore Jasmine & Marigold',
      image: '/images/events/traditional-ceremonies.jpg',
      imageAlt: 'Hand-strung marigold malas and jasmine strands on ceremonial wooden pillars',
      span: 'lg:col-span-5',
      height: 'h-[360px] lg:h-[440px]',
    },
    {
      id: 'bd-02',
      title: 'Heirloom Brass & Ritual Artifacts',
      subtitle: 'Polished Samai Lamps & Urulis',
      image: '/images/decor/faq-decor-detail.jpg',
      imageAlt: 'Carved brass samai lamps and water uruli with floating blossoms',
      span: 'lg:col-span-7',
      height: 'h-[360px] lg:h-[440px]',
    },
    {
      id: 'bd-03',
      title: 'Playful Modern Installations',
      subtitle: 'Organic Matte Balloon Garland & Fluted Plinths',
      image: '/images/events/birthdays.jpg',
      imageAlt: 'Pastel balloon arch and custom circular backdrop for milestone birthdays',
      span: 'lg:col-span-7',
      height: 'h-[360px] lg:h-[420px]',
    },
    {
      id: 'bd-04',
      title: 'Starlit Evening Lighting',
      subtitle: 'Diffused Fairy Canopies & Warm Ambient Wash',
      image: '/images/events/final-cta-canopy.jpg',
      imageAlt: 'Warm fairy light canopy over outdoor celebration dining tables',
      span: 'lg:col-span-5',
      height: 'h-[360px] lg:h-[420px]',
    },
  ],
};

export const rootedInTumakuruData = {
  eyebrow: 'LOCAL IDENTITY',
  heading: 'Rooted in Tumakuru. Inspired by Every Occasion.',
  description:
    'From meaningful family gatherings to beautifully styled celebrations, Tumkur Events draws inspiration from the traditions, people, and moments that make each occasion personal across Tumakuru district and South Karnataka.',
  quote:
    'Celebration in Tumakuru is shaped around hospitality, family respect, and lasting shared memories.',
  image: '/images/events/art-of-celebration.jpg',
  imageAlt: 'Traditional South Indian wedding stage and authentic celebration setting in Tumakuru',
  locationBadge: 'Tumakuru, Karnataka',
};

export const aboutApproachData = {
  eyebrow: 'HOW WE WORK',
  heading: 'From an Idea to an Atmosphere.',
  description:
    'Our styling journey is designed to be collaborative, clear, and reassuring from our very first conversation.',
  steps: [
    {
      number: '01',
      title: 'Share Your Occasion',
      description:
        'Tell us about your celebration date, venue in Tumakuru, guest size, and the visual mood you envision.',
    },
    {
      number: '02',
      title: 'Explore Your Possibilities',
      description:
        'We present curated decoration collections, backdrop dimensions, floral palettes, and indicative pricing estimates.',
    },
    {
      number: '03',
      title: 'Shape the Celebration',
      description:
        'Our experienced artisans coordinate seamless on-site styling, bringing the decorative setting to life before your guests arrive.',
    },
  ],
  ctaText: 'Tell Us About Your Event',
  ctaHref: '/contact?source=about-approach',
};

export const exploreWorldData = {
  eyebrow: 'DISCOVER MORE',
  heading: 'Explore Our World.',
  description:
    'Continue exploring our celebration categories, creative decoration disciplines, and visual archives.',
  links: [
    {
      id: 'nav-events',
      number: '01',
      title: 'Explore Our Events',
      description: 'From birthdays and baby showers to sacred ceremonies and grand wedding receptions.',
      href: '/events',
      image: '/images/events/weddings.jpg',
      imageAlt: 'Weddings and traditional celebrations by Tumkur Events',
      ctaText: 'View Event Types',
    },
    {
      id: 'nav-services',
      number: '02',
      title: 'Discover Our Services',
      description: 'Theme styling, floral craft, balloon installations, stage architecture, and ambient lighting.',
      href: '/services',
      image: '/images/events/stage-events.jpg',
      imageAlt: 'Event decoration and production disciplines in Tumakuru',
      ctaText: 'View Services',
    },
    {
      id: 'nav-gallery',
      number: '03',
      title: 'View Our Gallery',
      description: 'An immersive visual exhibition of stage craft, mandap designs, and atmospheric details.',
      href: '/gallery',
      image: '/images/events/special-occasions.jpg',
      imageAlt: 'Curated celebration photography gallery',
      ctaText: 'Browse Gallery',
    },
  ],
};

export const aboutFinalCtaData = {
  eyebrow: 'START A CONVERSATION',
  heading: 'Every Beautiful Celebration Begins With a Conversation.',
  supporting:
    'Tell us about the occasion you’re planning, and let’s explore how to make it feel truly yours.',
  primaryCta: 'Plan Your Event',
  primaryHref: '/contact?source=about-cta',
  secondaryCta: 'Explore Our Packages',
  secondaryHref: '/packages',
};

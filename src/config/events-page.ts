import { featuredEvents, additionalCategories } from './event-categories';

export interface EventOverviewCategory {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly tag: string;
  readonly headline: string;
  readonly description: string;
  readonly href: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly highlights: readonly string[];
}

/**
 * All Seven Event Categories for the Events Overview Page
 * Source of truth mapped directly to established routes in site configuration.
 */
export const allEventCategories: readonly EventOverviewCategory[] = [
  {
    id: 'birthdays',
    number: '01',
    title: "Birthdays & Kids' Celebrations",
    shortTitle: 'Birthdays',
    tag: 'THEMED MILESTONES',
    headline: 'Playful themes, whimsical styling, and joyful milestones.',
    description:
      'From custom pastel balloon installations to character themes and delightful cake table backdrops, create magical memories for young and growing milestones.',
    href: '/events/birthdays',
    image: '/images/events/birthdays.jpg',
    imageAlt:
      "Bespoke children's birthday celebration decoration with organic pastel balloons and themed backdrops in Tumakuru",
    highlights: ['Organic Balloon Arches', 'Custom Themed Backdrops', 'Personalized Entrance Styling'],
  },
  {
    id: 'traditional-ceremonies',
    number: '02',
    title: 'Traditional Ceremonies',
    shortTitle: 'Traditional',
    tag: 'SACRED & TIMELESS',
    headline: 'Cultural reverence with fresh floral artistry.',
    description:
      'Honor cherished South Karnataka heritage with fragrant marigold garlands, traditional samai brass lamps, banana tree gateways, and carved ceremonial stages.',
    href: '/events/traditional-ceremonies',
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt:
      'Authentic South Indian ceremony stage decor featuring marigold garlands, brass samai lamps, and carved wooden panels in Tumakuru',
    highlights: ['Fresh Jasmine & Marigold Décor', 'Authentic Brass Samai Setups', 'Traditional Wooden Mandap Styling'],
  },
  {
    id: 'weddings',
    number: '03',
    title: 'Weddings & Engagements',
    shortTitle: 'Weddings',
    tag: 'GRAND ROMANCE',
    headline: 'Where forever begins in breathtaking elegance.',
    description:
      'Curated floral mandaps, opulent reception stages, custom entryway arches, and ambient decorative lighting crafted for memorable nuptials across Tumakuru.',
    href: '/events/weddings',
    image: '/images/events/weddings.jpg',
    imageAlt:
      'Opulent South Indian wedding and engagement floral stage with curved arches, blush roses, and crystal chandeliers',
    highlights: ['Full Mandap Architecture', 'Curated Floral Stage Art', 'Fairy Light & Lantern Canopies'],
  },
  {
    id: 'baby-showers',
    number: '04',
    title: 'Baby Showers & New Beginnings',
    shortTitle: 'Baby Showers',
    tag: 'SWEET BEGINNINGS',
    headline: 'Welcoming new chapters with gentle warmth.',
    description:
      'Tender Seemantha celebrations, cradle ceremonies, and naming rituals styled with floral cradles, pastel palettes, and inviting floral backdrops.',
    href: '/events/baby-showers',
    image: '/images/events/baby-showers.jpg',
    imageAlt:
      'Delicate baby shower and naming ceremony decor with floral cradle, pastel balloon clusters, and warm ambiance',
    highlights: ['Artisanal Floral Cradles', 'Soft Pastel Palette Styling', 'Intimate Seemantha Backdrops'],
  },
  {
    id: 'corporate',
    number: '05',
    title: 'Corporate & Institutional Events',
    shortTitle: 'Corporate',
    tag: 'EXECUTIVE & REFINED',
    headline: 'Polished professionalism and flawless stage design.',
    description:
      'Executive conference stages, annual celebration galas, award ceremonies, and institutional inaugurations designed with sophisticated acoustic aesthetics.',
    href: '/events/corporate',
    image: '/images/events/corporate.jpg',
    imageAlt:
      'Sleek corporate conference stage with contemporary acoustic backdrop and ambient lighting',
    highlights: ['Modern Stage Architecture', 'Branded Podium & Backdrop Art', 'Sleek Atmospheric Lighting'],
  },
  {
    id: 'special-occasions',
    number: '06',
    title: 'Special Occasions & Milestones',
    shortTitle: 'Milestones',
    tag: 'INTIMATE GATHERINGS',
    headline: 'Private anniversaries, family dinners, and golden jubilees.',
    description:
      'Curated intimate celebration settings, candlelit open-air tables, floral arches, and personalized touches for family and milestone reunions.',
    href: '/events/special-occasions',
    image: '/images/events/special-occasions.jpg',
    imageAlt:
      'Intimate evening outdoor family dining celebration under fairy lights with candlelit floral tables',
    highlights: ['Bespoke Dining Canopies', 'Candlelit Floral Centerpieces', 'Private Milestone Stages'],
  },
  {
    id: 'stage-events',
    number: '07',
    title: 'Stage & Large Events',
    shortTitle: 'Stage Events',
    tag: 'MONUMENTAL SCENIC',
    headline: 'Grand cultural stages, college fests, and auditorium productions.',
    description:
      'Monumental multi-tier stages, festival platforms, and large-scale convention backdrops tailored to massive audiences and cultural spectacles.',
    href: '/events/stage-events',
    image: '/images/events/stage-events.jpg',
    imageAlt:
      'Grand auditorium stage setup with layered gold arches, cascading marigold pillars, and concert lighting',
    highlights: ['Monumental Stage Trusses', 'Dynamic Accent Lighting', 'Multi-tiered Cultural Platforms'],
  },
];

/**
 * Signature Celebration Stories Configuration (Section 03)
 */
export interface SignatureStoryItem {
  readonly id: string;
  readonly roman: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly tag: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly quote: string;
}

export const signatureStories: readonly SignatureStoryItem[] = [
  {
    id: 'intimate-personal',
    roman: 'I',
    title: 'Intimate & Personal',
    subtitle: 'Home Gatherings & Milestones',
    tag: 'CLOSE FAMILY CELEBRATIONS',
    description:
      'Thoughtful, handcrafted decor for birthdays, naming ceremonies, and family milestones where closeness, warmth, and heartfelt connection take center stage.',
    image: '/images/events/art-of-celebration.jpg',
    imageAlt: 'Intimate celebration setting with personalized florals and warm ambient glow',
    quote: 'Where heartfelt memories flourish in intimate warmth.',
  },
  {
    id: 'cultural-traditional',
    roman: 'II',
    title: 'Cultural & Traditional',
    subtitle: 'Sacred Rituals & Family Heritage',
    tag: 'HERITAGE & CEREMONY',
    description:
      'Time-honored South Indian traditions brought to life with fragrant natural jasmine, samai brass lamps, traditional mandaps, and ceremonial decor.',
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt: 'Traditional South Indian wedding stage with marigold strings and brass urns',
    quote: 'Honoring heritage through timeless floral craftsmanship.',
  },
  {
    id: 'grand-spectacular',
    roman: 'III',
    title: 'Grand & Spectacular',
    subtitle: 'Opulent Stages & Large Productions',
    tag: 'GRAND SCALE PRODUCTIONS',
    description:
      'Expansive wedding receptions, institutional assemblies, and cultural auditoriums featuring bespoke curved arches, dramatic lighting, and statement stagecraft.',
    image: '/images/events/stage-events.jpg',
    imageAlt: 'Grand wedding reception stage with illuminated floral backdrop and golden arches',
    quote: 'Unforgettable scale, seamless execution, and lasting wonder.',
  },
];

/**
 * Planning Assurance Steps (Section 05)
 */
export const planningAssuranceSteps = [
  {
    number: '01',
    title: 'Share Your Vision',
    description:
      'Tell us about your occasion, preferred style, venue location, and the atmosphere you wish to experience.',
  },
  {
    number: '02',
    title: 'Explore Possibilities',
    description:
      'Review tailored concepts, floral palettes, and styling recommendations curated specifically for your celebration space.',
  },
  {
    number: '03',
    title: 'Create Your Celebration',
    description:
      'Our team coordinates every aesthetic element, ensuring prompt setup, seamless on-site styling, and finishing touches.',
  },
] as const;

/**
 * Inspiration Strip Gallery Items (Section 04)
 */
export const inspirationImages = [
  {
    src: '/images/gallery/gallery-01-birthday.jpg',
    alt: 'Playful pastel birthday party styling with balloon garland in Tumakuru',
    category: 'Birthday Styling',
  },
  {
    src: '/images/gallery/gallery-02-traditional.jpg',
    alt: 'Traditional floral brass samai and marigold flower arrangement',
    category: 'Ceremonial Florals',
  },
  {
    src: '/images/gallery/gallery-03-engagement.jpg',
    alt: 'Romantic engagement floral stage with delicate blush blooms and arches',
    category: 'Engagement Stages',
  },
  {
    src: '/images/gallery/gallery-04-baby-shower.jpg',
    alt: 'Bespoke baby shower floral cradle setup with warm candlelit ambiance',
    category: 'Baby Showers',
  },
  {
    src: '/images/gallery/gallery-05-milestone.jpg',
    alt: 'Intimate dinner and anniversary milestone table décor with crystal elements',
    category: 'Milestone Details',
  },
  {
    src: '/images/gallery/gallery-06-grand-stage.jpg',
    alt: 'Monumental auditorium stage with gold arches and scenic lighting',
    category: 'Grand Productions',
  },
] as const;

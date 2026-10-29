/**
 * Centralized Event Categories Configuration for Tumkur Events
 * Defines the featured event stories and additional category index.
 */

export interface FeaturedEventItem {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly headline: string;
  readonly description: string;
  readonly ctaText: string;
  readonly href: string;
  readonly image: string;
  readonly imageAlt: string;
}

export interface AdditionalCategoryItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly image: string;
  readonly imageAlt: string;
}

export const featuredEvents: readonly FeaturedEventItem[] = [
  {
    id: 'birthdays',
    number: '01',
    category: "Birthdays & Kids' Celebrations",
    headline: 'Little Moments.\nBig Celebrations.',
    description:
      'From playful themes to personalized decorations, make every birthday a celebration worth remembering.',
    ctaText: 'Explore Birthdays',
    href: '/events/birthdays',
    image: '/images/events/birthdays.jpg',
    imageAlt:
      "Bespoke children's birthday celebration decoration with organic pastel balloons and themed backdrops",
  },
  {
    id: 'traditional-ceremonies',
    number: '02',
    category: 'Traditional Ceremonies',
    headline: 'Traditions, Beautifully Celebrated.',
    description:
      'Celebrate meaningful rituals with floral arrangements, traditional details, and thoughtfully designed ceremonial spaces.',
    ctaText: 'Explore Traditional Events',
    href: '/events/traditional-ceremonies',
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt:
      'Authentic South Indian ceremony stage decor featuring marigold garlands, brass samai lamps, and carved wooden panels',
  },
  {
    id: 'weddings',
    number: '03',
    category: 'Weddings & Engagements',
    headline: 'Where Beautiful Stories Begin.',
    description:
      'Elegant floral stages and personalized arrangements for engagement and wedding-related celebrations.',
    ctaText: 'Explore Weddings & Engagements',
    href: '/events/weddings',
    image: '/images/events/weddings.jpg',
    imageAlt:
      'Opulent South Indian wedding and engagement floral stage with curved arches, blush roses, and crystal chandeliers',
  },
  {
    id: 'baby-showers',
    number: '04',
    category: 'Baby Showers & New Beginnings',
    headline: "Welcoming Life's Sweetest Moments.",
    description:
      'Thoughtfully styled spaces for baby showers, naming celebrations, and other meaningful family milestones.',
    ctaText: 'Explore Baby Showers',
    href: '/events/baby-showers',
    image: '/images/events/baby-showers.jpg',
    imageAlt:
      'Delicate baby shower and naming ceremony decor with floral cradle, pastel balloon clusters, and warm ambiance',
  },
];

export const additionalCategories: readonly AdditionalCategoryItem[] = [
  {
    id: 'corporate',
    number: '05',
    title: 'Corporate & Institutional Events',
    description: 'Sleek executive stages, summits, and annual milestone celebrations.',
    href: '/events/corporate',
    image: '/images/events/corporate.jpg',
    imageAlt:
      'Sleek corporate conference stage with contemporary acoustic backdrop and ambient lighting',
  },
  {
    id: 'special-occasions',
    number: '06',
    title: 'Special Occasions & Milestones',
    description: 'Intimate anniversaries, private family dinners, and milestone gatherings.',
    href: '/events/special-occasions',
    image: '/images/events/special-occasions.jpg',
    imageAlt:
      'Intimate evening outdoor family dining celebration under fairy lights with candlelit floral tables',
  },
  {
    id: 'stage-events',
    number: '07',
    title: 'Stage & Large Events',
    description: 'Monumental cultural arenas, auditorium setups, and festival stages.',
    href: '/events/stage-events',
    image: '/images/events/stage-events.jpg',
    imageAlt:
      'Grand auditorium stage setup with layered gold arches, cascading marigold pillars, and concert lighting',
  },
];


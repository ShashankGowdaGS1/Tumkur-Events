import { BlogCategory } from './types';

export const blogCategories: readonly BlogCategory[] = [
  {
    id: 'weddings-engagements',
    slug: 'weddings-engagements',
    number: '01',
    displayName: 'Weddings & Engagements',
    shortName: 'Weddings',
    description:
      'Inspiration for ceremonial mandapams, bridal stages, floral color palettes, and memorable wedding celebrations in Tumakuru.',
    editorialImage: '/images/events/weddings.jpg',
    editorialImageAlt:
      'Opulent floral wedding stage in Tumakuru with blush roses and chandeliers',
    seoTitle: 'Wedding & Engagement Decor Inspiration | Tumkur Events',
    seoDescription:
      'Discover wedding stage decor ideas, floral styling concepts, and traditional engagement inspiration in Tumakuru, Karnataka.',
  },
  {
    id: 'birthdays-celebrations',
    slug: 'birthdays-celebrations',
    number: '02',
    displayName: 'Birthdays & Celebrations',
    shortName: 'Birthdays',
    description:
      'Playful themes, organic pastel balloon backdrops, and creative milestone birthday styling for children and adults.',
    editorialImage: '/images/events/birthdays.jpg',
    editorialImageAlt:
      'Children’s pastel birthday party stage decoration with balloon garlands',
    seoTitle: 'Birthday Party & Milestone Celebration Ideas | Tumkur Events',
    seoDescription:
      'Explore birthday decoration themes, balloon arches, and custom celebration backdrops in Tumakuru.',
  },
  {
    id: 'traditional-ceremonies',
    slug: 'traditional-ceremonies',
    number: '03',
    displayName: 'Traditional Ceremonies',
    shortName: 'Traditional',
    description:
      'Cultural reverence, fresh Mysore jasmine malas, yellow marigolds, heirloom brass samai lamps, and sacred ritual styling.',
    editorialImage: '/images/events/traditional-ceremonies.jpg',
    editorialImageAlt:
      'South Indian ceremonial stage with marigold garlands and brass lamps',
    seoTitle: 'Traditional Ceremony Decor & Ritual Styling | Tumkur Events',
    seoDescription:
      'South Indian ceremonial decoration ideas for Gruhapravesha, Upanayana, and family rituals in Tumakuru.',
  },
  {
    id: 'baby-showers-milestones',
    slug: 'baby-showers-milestones',
    number: '04',
    displayName: 'Baby Showers & Milestones',
    shortName: 'Baby Showers',
    description:
      'Floral cradles, tender pastel palettes, naming ceremony backdrops, and cozy family milestone celebrations.',
    editorialImage: '/images/events/baby-showers.jpg',
    editorialImageAlt:
      'Floral cradle and soft pastel balloon clusters for baby shower',
    seoTitle: 'Baby Shower & Naming Ceremony Decor Inspiration | Tumkur Events',
    seoDescription:
      'Delicate baby shower styling ideas, cradle decor, and naming ceremony concepts in Tumakuru.',
  },
  {
    id: 'event-styling-decoration',
    slug: 'event-styling-decoration',
    number: '05',
    displayName: 'Event Styling & Decoration',
    shortName: 'Event Styling',
    description:
      'Deep dives into floral architecture, backdrop textures, entrance walkway canopies, and ambient lighting craftsmanship.',
    editorialImage: '/images/events/art-of-celebration.jpg',
    editorialImageAlt:
      'Handcrafted event styling and decorative floral arrangements in Tumakuru',
    seoTitle: 'Event Styling & Decoration Craft | Tumkur Events',
    seoDescription:
      'Insights into luxury event decoration, floral arrangements, and stage design across Karnataka.',
  },
  {
    id: 'planning-tips-guides',
    slug: 'planning-tips-guides',
    number: '06',
    displayName: 'Planning Tips & Guides',
    shortName: 'Planning Guides',
    description:
      'Practical planning advice, budgeting insights, venue layout tips, and decoration timelines for celebratory hosts.',
    editorialImage: '/images/events/stage-events.jpg',
    editorialImageAlt:
      'Event venue staging and planning preparation in Tumakuru',
    seoTitle: 'Celebration Planning Tips & Decor Guides | Tumkur Events',
    seoDescription:
      'Helpful event planning guides, decoration timelines, and budget advice for hosting in Tumakuru.',
  },
];

export function getAllCategories(): readonly BlogCategory[] {
  return blogCategories;
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((cat) => cat.slug === slug);
}

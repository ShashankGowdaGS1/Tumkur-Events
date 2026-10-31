import { BlogPost } from './types';

/**
 * Editorial Article Blueprints & Draft Registry
 *
 * All articles below are prepared editorial drafts (`status: 'draft'`).
 * In accordance with Step 03 & Step 15, unpublished drafts are excluded
 * from the public journal listing, category archives, and sitemaps.
 */
export const blogPosts: readonly BlogPost[] = [
  {
    id: 'draft-01',
    slug: 'choosing-wedding-stage-floral-colors',
    title: 'How to Choose the Perfect Floral Palette for Your Wedding Stage',
    excerpt:
      'Explore harmonious color theories blending traditional marigold tones with contemporary blush roses and cascading jasmine for South Karnataka weddings.',
    categorySlug: 'weddings-engagements',
    coverImage: '/images/events/weddings.jpg',
    coverImageAlt: 'Opulent wedding stage with cascading blush roses and crystal chandeliers in Tumakuru',
    publishedAt: null,
    updatedAt: null,
    author: {
      name: 'Tumkur Events Editorial',
      role: 'Creative Design Atelier',
    },
    readingTime: '5 min read',
    status: 'draft',
    featured: true,
    tags: ['Wedding Decor', 'Florals', 'Color Palettes', 'Mandap Design'],
  },
  {
    id: 'draft-02',
    slug: 'traditional-ceremonial-mandapam-elements',
    title: 'Sacred Details: Authentic Elements of a South Karnataka Mandapam',
    excerpt:
      'From heirloom brass samai lamps to fresh banana stem gateways, discover the timeless decorative details that honor sacred family rituals.',
    categorySlug: 'traditional-ceremonies',
    coverImage: '/images/events/traditional-ceremonies.jpg',
    coverImageAlt: 'Traditional South Indian ceremonial stage with marigold garlands and brass lamps',
    publishedAt: null,
    updatedAt: null,
    author: {
      name: 'Tumkur Events Editorial',
      role: 'Creative Design Atelier',
    },
    readingTime: '6 min read',
    status: 'draft',
    featured: false,
    tags: ['Traditional Ceremonies', 'Brass Artifacts', 'Jasmine', 'Ritual Decor'],
  },
  {
    id: 'draft-03',
    slug: 'modern-birthday-backdrop-ideas',
    title: 'Creative Birthday Backdrops: Beyond Conventional Balloon Arches',
    excerpt:
      'Learn how fluted display plinths, customized typography signage, and organic pastel balloon styling create memorable photo opportunities.',
    categorySlug: 'birthdays-celebrations',
    coverImage: '/images/events/birthdays.jpg',
    coverImageAlt: 'Children’s pastel birthday party stage decoration with balloon garlands',
    publishedAt: null,
    updatedAt: null,
    author: {
      name: 'Tumkur Events Editorial',
      role: 'Creative Design Atelier',
    },
    readingTime: '4 min read',
    status: 'draft',
    featured: false,
    tags: ['Birthday Themes', 'Balloon Installations', 'Backdrops'],
  },
  {
    id: 'draft-04',
    slug: 'baby-shower-cradle-styling-trends',
    title: 'Welcoming New Beginnings: Thoughtful Baby Shower & Cradle Styling',
    excerpt:
      'Gentle pastel palettes, handcrafted wicker cradles, and delicate baby’s breath arrangements designed for intimate family blessings.',
    categorySlug: 'baby-showers-milestones',
    coverImage: '/images/events/baby-showers.jpg',
    coverImageAlt: 'Delicate baby shower and naming ceremony decor with floral cradle',
    publishedAt: null,
    updatedAt: null,
    author: {
      name: 'Tumkur Events Editorial',
      role: 'Creative Design Atelier',
    },
    readingTime: '4 min read',
    status: 'draft',
    featured: false,
    tags: ['Baby Shower', 'Cradle Decor', 'Naming Ceremony'],
  },
  {
    id: 'draft-05',
    slug: 'ambient-lighting-techniques-for-evening-events',
    title: 'The Art of Light: Transforming Celebrations with Ambient Lighting',
    excerpt:
      'Understanding how warm spotlights, fairy light canopies, and crystal chandelier illumination change the mood of outdoor and indoor venues.',
    categorySlug: 'event-styling-decoration',
    coverImage: '/images/events/final-cta-canopy.jpg',
    coverImageAlt: 'Celebratory starlit dining canopy with twinkling fairy lights and floral centerpieces',
    publishedAt: null,
    updatedAt: null,
    author: {
      name: 'Tumkur Events Editorial',
      role: 'Creative Design Atelier',
    },
    readingTime: '5 min read',
    status: 'draft',
    featured: false,
    tags: ['Lighting', 'Fairy Lights', 'Event Atmosphere'],
  },
  {
    id: 'draft-06',
    slug: 'event-decoration-budget-planning-guide',
    title: 'Planning Your Event Decoration Budget: Indicative Ranges & Priorities',
    excerpt:
      'A practical guide for hosts in Tumakuru on allocating funds between stage backdrops, fresh florals, entrance gateways, and ambient wash lighting.',
    categorySlug: 'planning-tips-guides',
    coverImage: '/images/events/stage-events.jpg',
    coverImageAlt: 'Grand auditorium stage setup with layered gold arches and concert lighting',
    publishedAt: null,
    updatedAt: null,
    author: {
      name: 'Tumkur Events Editorial',
      role: 'Creative Design Atelier',
    },
    readingTime: '7 min read',
    status: 'draft',
    featured: false,
    tags: ['Planning Guides', 'Budgets', 'Timelines'],
  },
];

/**
 * Returns only published blog posts.
 * Drafts are excluded from the public journal in adherence to content authenticity rules.
 */
export function getPublishedPosts(): readonly BlogPost[] {
  return blogPosts.filter((post) => post.status === 'published');
}

/**
 * Returns published posts marked as featured.
 */
export function getFeaturedPosts(): readonly BlogPost[] {
  return getPublishedPosts().filter((post) => post.featured);
}

/**
 * Returns published posts filtered by category.
 */
export function getPostsByCategory(categorySlug: string): readonly BlogPost[] {
  return getPublishedPosts().filter((post) => post.categorySlug === categorySlug);
}

/**
 * Searches published posts by keyword matching against title, excerpt, and tags.
 */
export function searchPosts(query: string, categorySlug?: string): readonly BlogPost[] {
  const basePosts = categorySlug ? getPostsByCategory(categorySlug) : getPublishedPosts();
  if (!query || !query.trim()) return basePosts;

  const q = query.toLowerCase().trim();
  return basePosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(q);
    const excerptMatch = post.excerpt.toLowerCase().includes(q);
    const tagMatch = post.tags?.some((t) => t.toLowerCase().includes(q));
    return titleMatch || excerptMatch || tagMatch;
  });
}

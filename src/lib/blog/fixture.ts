import { BlogPost } from './types';

/**
 * Internal Development Test Fixtures
 *
 * In strict compliance with Step 20:
 * "Create an internal sample fixture only for development validation if needed.
 * Keep the fixture unpublished and excluded from public routing, metadata,
 * sitemaps, and article listings. Document the need for approved articles."
 *
 * All fixtures are marked as `status: 'draft'` to prevent leakage into
 * public production navigation, search indexes, or sitemaps.
 */

/**
 * Fixture 1: Comprehensive Long-Form Article (with all components: drop cap, multiple headings,
 * inline photos, callouts, blockquote, lists, table, FAQs, conclusion, and author attribution)
 */
export const comprehensiveTestFixture: BlogPost = {
  id: 'fixture-comprehensive',
  slug: 'test-fixture-comprehensive-styling-guide',
  title: 'The Architecture of Celebrations: A Comprehensive Guide to Floral and Structural Design in Tumakuru',
  excerpt:
    'An exhaustive editorial study into traditional South Karnataka aesthetics, contemporary floral palettes, ambient lighting science, and structural stage engineering.',
  categorySlug: 'weddings-engagements',
  coverImage: '/images/events/weddings.jpg',
  coverImageAlt: 'Opulent wedding stage in Tumakuru with cascading blush roses and crystal chandeliers',
  publishedAt: '2026-10-15T09:00:00Z',
  updatedAt: '2026-10-20T14:30:00Z',
  author: {
    name: 'Suhasini Rao',
    role: 'Principal Creative Director',
  },
  readingTime: '6 min read',
  status: 'draft',
  featured: false,
  dropCap: true,
  tags: ['Comprehensive Guide', 'Floral Design', 'Stage Craft', 'South Karnataka'],
  tableOfContents: [
    { id: 'foundations-of-stage-craft', title: 'Foundations of Stage Craft', level: 2 },
    { id: 'balancing-color-and-light', title: 'Balancing Color and Light', level: 2 },
    { id: 'sacred-flora-and-foliage', title: 'Sacred Flora & Foliage Selection', level: 2 },
    { id: 'investment-and-space-planning', title: 'Space Planning & Budget Allocation', level: 2 },
  ],
  sections: [
    {
      id: 'foundations-of-stage-craft',
      heading: 'Foundations of Stage Craft: Spatial Symmetry and Depth',
      paragraphs: [
        'Great event design begins with architectural respect for the hall or outdoor space. When staging a celebration in Tumakuru, one must harmonize traditional motifs with the natural sightlines of arriving guests. Every vertical arch, tiered backdrop, and floral cluster should direct emotional reverence toward the ceremonial center.',
        'By establishing three distinct visual layers—foreground entrance arches, mid-ground floral framing, and an opulent background backdrop—the space feels expansive yet deeply intimate.',
      ],
      quote: {
        text: 'The true elegance of an event lies in the unspoken balance between tradition and architectural restraint.',
        author: 'Suhasini Rao',
        role: 'Principal Creative Director',
      },
    },
    {
      id: 'balancing-color-and-light',
      heading: 'Balancing Color and Light: The 3000K Illumination Rule',
      paragraphs: [
        'Illumination is the invisible soul of evening celebrations. Pure cold white LEDs drain warmth from natural petals and cast harsh facial shadows in portraits.',
        'We calibrated our lighting systems to 2700K–3000K warm-amber frequencies. Under this illumination, brass heirloom lamps gleam, blush English roses retain their velvet luster, and marigold garlands glow like liquid gold.',
      ],
      callout: {
        type: 'tip',
        title: 'DECORATION TIP FOR EVENING EVENTS',
        text: 'Always install indirect warm uplighting along backdrop drapery rather than pointing harsh spotlights directly at the center stage. This produces a soft ethereal halo effect behind the host family.',
      },
      inlineImage: {
        src: '/images/gallery/gallery-03-engagement.jpg',
        alt: 'Editorial wedding stage illumination with cascading floral arch in Tumakuru',
        caption: 'Warm ambient wash lighting highlighting delicate petal contours and crystal chandeliers.',
        layout: 'wide',
      },
    },
    {
      id: 'sacred-flora-and-foliage',
      heading: 'Sacred Flora & Foliage Selection for Longevity',
      paragraphs: [
        'A celebration in Karnataka carries profound cultural expectations regarding botanical freshness. Traditional blooms must withstand hours of warmth and ceremonial movement without wilting.',
      ],
      lists: [
        {
          title: 'Signature Auspicious Blooms:',
          type: 'bullet',
          items: [
            'Mysore Mallige (Jasmine) – Incomparable sacred fragrance and immaculate white elegance.',
            'Sugandharaja (Tuberose) – High structural durability for dense ceremonial curtain drapes.',
            'Sevanthige (Chrysanthemums) – Vivid sunny yellow and amber hues symbolizing solar joy.',
            'Dutch Grand Prix Roses – Deep velvet reds that hold their shape under hall spotlights.',
          ],
        },
      ],
    },
    {
      id: 'investment-and-space-planning',
      heading: 'Space Planning & Resource Allocation',
      paragraphs: [
        'Allocating your decoration budget requires a clear understanding of venue dynamics. Directing investment to the zones where family memories and photographs occur ensures exceptional visual impact.',
      ],
      table: {
        caption: 'Spatial Budget Allocation Matrix',
        headers: ['Zone', 'Priority', 'Key Visual Asset'],
        rows: [
          ['Main Stage Backdrop', 'High', 'Layered arches, custom monogram, fresh floral garland cascades'],
          ['Entrance Gateway (Torana)', 'High', 'Banana stems, heirloom brass samai, hanging jasmine tassels'],
          ['Dining & Guest Walkways', 'Medium', 'Fairy light canopies, minimalist botanical centerpieces'],
        ],
      },
    },
  ],
  conclusion: {
    summary:
      'Designing a meaningful celebration requires honoring heritage while sculpting moments of breathtaking beauty. With meticulous floral craftsmanship, calibrated illumination, and respectful spatial architecture, your celebration remains etched in memory forever.',
    relatedEventHref: '/events/weddings',
    relatedEventLabel: 'Explore Wedding & Engagement Decor Services',
  },
};

/**
 * Fixture 2: Short Headline, No Author, No Date (Edge Case Test)
 */
export const shortHeadlineNoAuthorFixture: BlogPost = {
  id: 'fixture-short-no-author',
  slug: 'test-fixture-short-headline',
  title: 'Art of Marigolds',
  excerpt: 'A brief study on yellow marigolds in traditional ceremonial styling.',
  categorySlug: 'traditional-ceremonies',
  coverImage: '/images/events/traditional-ceremonies.jpg',
  coverImageAlt: 'Marigold ceremonial decor',
  publishedAt: null,
  updatedAt: null,
  author: {
    name: 'Tumkur Events Editorial',
    role: '',
  },
  readingTime: '2 min read',
  status: 'draft',
  featured: false,
  dropCap: false,
  sections: [
    {
      id: 'marigold-symbolism',
      heading: 'Solar Symbolism in Ceremonial Decor',
      paragraphs: [
        'Yellow and orange marigolds embody solar energy and divine auspiciousness across Indian celebrations. Their resilience and vivid pigmentation make them an enduring favorite for traditional ceremonies across South Karnataka.',
      ],
    },
  ],
  conclusion: {
    summary: 'A simple, timeless element that brings sacred warmth to any occasion.',
    relatedEventHref: '/events/traditional-ceremonies',
    relatedEventLabel: 'Explore Traditional Ceremonies',
  },
};

/**
 * Fixture 3: Minimal Article (Single heading, no inline images, no callouts, no related stories)
 */
export const minimalTestFixture: BlogPost = {
  id: 'fixture-minimal',
  slug: 'test-fixture-minimal',
  title: 'Minimalist Celebration Lighting',
  excerpt: 'Understanding ambient fairy light installations for outdoor lawn receptions.',
  categorySlug: 'event-styling-decoration',
  coverImage: '/images/events/final-cta-canopy.jpg',
  coverImageAlt: 'Outdoor starlit dining canopy',
  publishedAt: null,
  author: {
    name: 'Tumkur Events',
    role: '',
  },
  readingTime: '2 min read',
  status: 'draft',
  featured: false,
  dropCap: false,
  sections: [
    {
      id: 'fairy-light-canopies',
      heading: 'Fairy Light Canopies for Outdoor Spaces',
      paragraphs: [
        'Overhead micro-filament fairy lights create an open-air celestial ceiling for lawn receptions. By keeping the fixtures at a uniform height and using warm amber tones, the garden feels intimate and welcoming.',
      ],
    },
  ],
};

/**
 * Registry of all test fixtures.
 */
export const testFixtures: readonly BlogPost[] = [
  comprehensiveTestFixture,
  shortHeadlineNoAuthorFixture,
  minimalTestFixture,
];

/**
 * Lookup helper for development fixtures.
 */
export function getTestFixtureBySlug(slug: string): BlogPost | undefined {
  return testFixtures.find((f) => f.slug === slug);
}

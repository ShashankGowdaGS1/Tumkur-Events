/**
 * Centralized Gallery Configuration for Tumkur Events
 * Route: /gallery
 *
 * Defines the category taxonomy, curated celebration photographs,
 * layout metadata, editorial hero content, and interlude storytelling.
 */

export interface GalleryCategory {
  readonly id: string;
  readonly slug: string;
  readonly number: string;
  readonly label: string;
  readonly shortLabel: string;
  readonly description: string;
}

export type GallerySourceStatus = 'visual_concept' | 'verified_project' | 'design_inspiration';

export interface GalleryItem {
  readonly id: string;
  readonly number: string;
  readonly categoryId: string;
  readonly categoryName: string;
  readonly title: string;
  readonly caption: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly sourceStatus: GallerySourceStatus;
  readonly sourceLabel: string;
  readonly aspectDesktop: 'wide' | 'portrait' | 'square' | 'panoramic';
  readonly colSpanDesktop: 4 | 5 | 7 | 8 | 12;
  readonly heightDesktop: string;
  readonly aspectMobile: 'landscape' | 'portrait' | 'square';
  readonly focalPoint?: string;
  readonly isFeatured?: boolean;
}

export const galleryCategories: readonly GalleryCategory[] = [
  {
    id: 'all',
    slug: 'all',
    number: '00',
    label: 'All Celebrations',
    shortLabel: 'All',
    description: 'A comprehensive collection of bespoke celebrations, styling, and decor across Tumakuru.',
  },
  {
    id: 'birthdays',
    slug: 'birthdays',
    number: '01',
    label: "Birthdays & Kids' Celebrations",
    shortLabel: 'Birthdays',
    description: 'Playful themes, organic pastel balloon installations, and custom photographic backdrops.',
  },
  {
    id: 'traditional-ceremonies',
    slug: 'traditional-ceremonies',
    number: '02',
    label: 'Traditional Ceremonies',
    shortLabel: 'Traditional',
    description: 'Sacred jasmine garlands, marigold malas, heirloom brass samai lamps, and cultural reverence.',
  },
  {
    id: 'weddings',
    slug: 'weddings',
    number: '03',
    label: 'Weddings & Engagements',
    shortLabel: 'Weddings',
    description: 'Architectural floral stages, cascading blush roses, crystal chandeliers, and opulent aisleways.',
  },
  {
    id: 'baby-showers',
    slug: 'baby-showers',
    number: '04',
    label: 'Baby Showers & New Beginnings',
    shortLabel: 'Baby Showers',
    description: 'Floral cradles, tender pastel palettes, naming ceremony backdrops, and cozy family settings.',
  },
  {
    id: 'corporate',
    slug: 'corporate',
    number: '05',
    label: 'Corporate & Institutional Events',
    shortLabel: 'Corporate',
    description: 'Sleek executive stages, corporate summits, annual galas, and professional ambient wash lighting.',
  },
  {
    id: 'special-occasions',
    slug: 'special-occasions',
    number: '06',
    label: 'Special Occasions & Milestones',
    shortLabel: 'Milestones',
    description: 'Intimate anniversaries, silver jubilees, private lawn dining pavilions, and starlit celebrations.',
  },
  {
    id: 'stage-events',
    slug: 'stage-events',
    number: '07',
    label: 'Stage & Large Events',
    shortLabel: 'Large Stages',
    description: 'Monumental cultural arenas, convention hall stages, curved gold structures, and theatrical illumination.',
  },
];

export const galleryHeroData = {
  eyebrow: 'THE CELEBRATION GALLERY',
  heading: {
    line1: 'A Gallery of',
    line2: 'Beautiful Moments.',
  },
  accentPhrase: 'Made to be remembered.',
  description:
    'Explore colors, textures, floral arrangements, and creative settings inspired by celebrations of every kind across Tumakuru and South Karnataka.',
  primaryCtaText: 'Explore the Gallery',
  primaryCtaTarget: '#gallery-explorer',
  dominantImage: {
    src: '/images/events/weddings.jpg',
    alt: 'Opulent wedding celebration floral stage in Tumakuru with cascading blush roses and crystal chandeliers',
  },
  supportingImage: {
    src: '/images/decor/faq-decor-detail.jpg',
    alt: 'Heirloom brass uruli with floating yellow marigolds and jasmine detail',
  },
};

export const galleryItems: readonly GalleryItem[] = [
  // ROW 01: 7 cols & 5 cols
  {
    id: 'gal-01',
    number: '01',
    categoryId: 'weddings',
    categoryName: 'Weddings & Engagements',
    title: 'Ivory & Blush Cascading Stage',
    caption:
      'Curved architectural arches draped in hundreds of blush roses, complemented by tiered crystal chandeliers and velvet bridal seating.',
    image: '/images/gallery/gallery-03-engagement.jpg',
    imageAlt:
      'Opulent South Indian wedding and engagement floral stage with curved arches, blush roses, and crystal chandeliers',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'wide',
    colSpanDesktop: 7,
    heightDesktop: 'h-[460px] lg:h-[500px]',
    aspectMobile: 'landscape',
    isFeatured: true,
  },
  {
    id: 'gal-02',
    number: '02',
    categoryId: 'traditional-ceremonies',
    categoryName: 'Traditional Ceremonies',
    title: 'Sacred Jasmine & Marigold Mandapam',
    caption:
      'Karnataka-style ceremonial decor with brass samai lamps, banana stem pillars, and fragrant yellow marigold malas.',
    image: '/images/gallery/gallery-02-traditional.jpg',
    imageAlt:
      'Traditional South Indian ceremony stage with yellow marigolds, jasmine strands, and brass kuthuvillakku lamps',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'portrait',
    colSpanDesktop: 5,
    heightDesktop: 'h-[460px] lg:h-[500px]',
    aspectMobile: 'portrait',
  },

  // ROW 02: 4 cols, 4 cols, 4 cols
  {
    id: 'gal-03',
    number: '03',
    categoryId: 'birthdays',
    categoryName: "Birthdays & Kids' Celebrations",
    title: 'Whimsical Floral & Balloon Arch',
    caption:
      'Custom organic pastel balloon garland with circular floral backdrop and fluted display plinths for milestone celebrations.',
    image: '/images/gallery/gallery-01-birthday.jpg',
    imageAlt:
      'Bespoke pastel birthday party stage decoration with organic balloon garland and circular backdrop',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'square',
    colSpanDesktop: 4,
    heightDesktop: 'h-[380px] lg:h-[420px]',
    aspectMobile: 'square',
  },
  {
    id: 'gal-04',
    number: '04',
    categoryId: 'baby-showers',
    categoryName: 'Baby Showers & New Beginnings',
    title: 'Serene Milestone & Floral Cradle',
    caption:
      'Tender baby shower styling with golden wicker cradle, delicate baby’s breath, and soft pastel balloon clusters.',
    image: '/images/gallery/gallery-04-baby-shower.jpg',
    imageAlt:
      'Delicate baby shower and naming ceremony decor with floral cradle, pastel balloon clusters, and warm ambiance',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'square',
    colSpanDesktop: 4,
    heightDesktop: 'h-[380px] lg:h-[420px]',
    aspectMobile: 'square',
  },
  {
    id: 'gal-05',
    number: '05',
    categoryId: 'corporate',
    categoryName: 'Corporate & Institutional Events',
    title: 'Executive Summit & Plenary Backdrop',
    caption:
      'Contemporary corporate stage architecture featuring custom acoustic flat panels, tailored branding, and balanced spotlighting.',
    image: '/images/events/corporate.jpg',
    imageAlt:
      'Sleek corporate conference stage with contemporary acoustic backdrop and ambient lighting',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'square',
    colSpanDesktop: 4,
    heightDesktop: 'h-[380px] lg:h-[420px]',
    aspectMobile: 'square',
  },

  // ROW 03: 5 cols & 7 cols
  {
    id: 'gal-06',
    number: '06',
    categoryId: 'special-occasions',
    categoryName: 'Special Occasions & Milestones',
    title: 'Candlelit Evening Pergola Dining',
    caption:
      'Intimate celebration dinner under fairy-lit timber canopies with brass lanterns, floral runners, and ambient warmth.',
    image: '/images/gallery/gallery-05-milestone.jpg',
    imageAlt:
      'Intimate evening outdoor family dining celebration under fairy lights with candlelit floral tables',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'portrait',
    colSpanDesktop: 5,
    heightDesktop: 'h-[440px] lg:h-[480px]',
    aspectMobile: 'portrait',
  },
  {
    id: 'gal-07',
    number: '07',
    categoryId: 'stage-events',
    categoryName: 'Stage & Large Events',
    title: 'Monumental Tiered Floral Arena',
    caption:
      'Panoramic 36ft auditorium stage with multi-tiered gold archways, cascading yellow marigolds, and dynamic lighting consoles.',
    image: '/images/gallery/gallery-06-grand-stage.jpg',
    imageAlt:
      'Grand auditorium stage setup with layered gold arches, cascading marigold pillars, and concert lighting',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'wide',
    colSpanDesktop: 7,
    heightDesktop: 'h-[440px] lg:h-[480px]',
    aspectMobile: 'landscape',
    isFeatured: true,
  },

  // ROW 04: 4 cols & 8 cols
  {
    id: 'gal-08',
    number: '08',
    categoryId: 'traditional-ceremonies',
    categoryName: 'Traditional Ceremonies',
    title: 'Handcrafted Heritage Mandap Craft',
    caption:
      'Intricate marigold and tuberose canopies woven with traditional bell metal artifacts and auspicious floral hangings.',
    image: '/images/events/art-of-celebration.jpg',
    imageAlt:
      'Authentic South Indian wedding mandapam with fragrant flower malas and antique brass vessels',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'square',
    colSpanDesktop: 4,
    heightDesktop: 'h-[400px] lg:h-[440px]',
    aspectMobile: 'square',
  },
  {
    id: 'gal-09',
    number: '09',
    categoryId: 'special-occasions',
    categoryName: 'Special Occasions & Milestones',
    title: 'Luminous Starlit Dining Pavilion',
    caption:
      'Canopy of hanging fairy lights and cascading greens over family banquet tables in a celebratory garden courtyard.',
    image: '/images/events/final-cta-canopy.jpg',
    imageAlt:
      'Celebratory starlit dining canopy with thousands of twinkling fairy lights and floral centerpieces',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'wide',
    colSpanDesktop: 8,
    heightDesktop: 'h-[400px] lg:h-[440px]',
    aspectMobile: 'landscape',
    isFeatured: true,
  },

  // ROW 05: 12 cols (Editorial Panoramic Centerpiece)
  {
    id: 'gal-10',
    number: '10',
    categoryId: 'weddings',
    categoryName: 'Weddings & Engagements',
    title: 'Grand Symphony of Blooms & Brass',
    caption:
      'Full panoramic ballroom styling combining grand entrance gateways, illuminated floral aisles, and heirloom ritual aesthetics.',
    image: '/images/events/weddings.jpg',
    imageAlt:
      'Panoramic view of grand wedding decor and floral staging by Tumkur Events',
    sourceStatus: 'design_inspiration',
    sourceLabel: 'Design Inspiration',
    aspectDesktop: 'panoramic',
    colSpanDesktop: 12,
    heightDesktop: 'h-[420px] lg:h-[500px]',
    aspectMobile: 'landscape',
    isFeatured: true,
  },
];

export const galleryInterludeData = {
  eyebrow: 'BEHIND THE DETAILS',
  heading: 'The Beauty Is in the Details.',
  description:
    'From delicate flowers and warm lighting to thoughtfully styled spaces, every element contributes to the atmosphere of a celebration.',
  image: '/images/decor/faq-decor-detail.jpg',
  imageAlt: 'Close-up of fresh marigolds, jasmine, and polished ceremonial brass vessels in Tumakuru',
  quote: 'The craft of celebration lies in the details that guests feel before they even notice.',
  pills: [
    'Hand-strung Marigold Malas',
    'Heirloom Polished Brass',
    'Diffused Atmospheric Light',
    'Bespoke Fabric Drapes',
  ],
};

export const galleryEnquiryData = {
  eyebrow: 'BEGIN YOUR CELEBRATION',
  heading: 'Imagine What We Could Create for You.',
  supporting:
    'Found inspiration for your celebration? Share your occasion and ideas with us, and let’s explore the possibilities together.',
  primaryCta: 'Plan Your Event',
  primaryHref: '/contact?source=gallery',
  secondaryCta: 'Explore Event Types',
  secondaryHref: '/events',
};

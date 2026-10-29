/**
 * Centralized Configuration for Selected Celebrations
 * Homepage Section 05: The Expanding Editorial Gallery (5 Items)
 */

export interface SelectedCelebrationItem {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly isConcept: boolean;
}

export const selectedCelebrations: readonly SelectedCelebrationItem[] = [
  {
    id: 'celebration-01',
    number: '01',
    category: 'Birthday Celebration',
    title: 'Whimsical Floral & Balloon Arch',
    description:
      'Custom organic pastel balloon garland with circular floral backdrop and fluted display plinths.',
    image: '/images/gallery/gallery-01-birthday.jpg',
    imageAlt:
      'Bespoke pastel birthday party stage decoration with organic balloon garland and circular backdrop',
    isConcept: true,
  },
  {
    id: 'celebration-02',
    number: '02',
    category: 'Traditional Ceremony',
    title: 'Sacred Jasmine & Marigold Mandapam',
    description:
      'Karnataka-style ceremonial decor with brass samai lamps, banana stem pillars, and fresh floral garlands.',
    image: '/images/gallery/gallery-02-traditional.jpg',
    imageAlt:
      'Traditional South Indian ceremony stage with yellow marigolds, jasmine strands, and brass kuthuvillakku lamps',
    isConcept: true,
  },
  {
    id: 'celebration-03',
    number: '03',
    category: 'Engagement Celebration',
    title: 'Ivory & Blush Cascading Stage',
    description:
      'Architectural arches draped with lush blush roses, crystal chandeliers, and velvet seating.',
    image: '/images/gallery/gallery-03-engagement.jpg',
    imageAlt:
      'Opulent wedding and engagement floral stage with arched backdrop, blush florals, and amber chandeliers',
    isConcept: true,
  },
  {
    id: 'celebration-04',
    number: '04',
    category: 'Baby Shower',
    title: 'Serene Milestone & Floral Cradle',
    description:
      "Tender baby shower styling with golden wicker cradle, delicate baby's breath, and pastel balloon accents.",
    image: '/images/gallery/gallery-04-baby-shower.jpg',
    imageAlt:
      'Luxury baby shower naming ceremony setup with garlanded floral cradle and pastel balloon clusters',
    isConcept: true,
  },
  {
    id: 'celebration-05',
    number: '05',
    category: 'Special Celebration',
    title: 'Candlelit Pergola Gathering',
    description:
      'Intimate evening milestone celebration beneath fairy-lit pergolas with candlelit floral tablescapes.',
    image: '/images/gallery/gallery-05-milestone.jpg',
    imageAlt:
      'Intimate evening outdoor family dining celebration under glowing fairy lights with romantic table decor',
    isConcept: true,
  },
];

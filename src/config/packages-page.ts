import { FaqItem } from './faqs';

export interface PackageCollectionDetail {
  readonly id: string;
  readonly number: string;
  readonly anchorId: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly headline: string;
  readonly priceDisplay: string;
  readonly suitableFor: readonly string[];
  readonly description: string;
  readonly options: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly image: string;
  readonly imageAlt: string;
  readonly supportingImage?: string;
  readonly supportingImageAlt?: string;
  readonly enquiryHref: string;
  readonly preparedMessage: string;
}

export const packagesHeroData = {
  eyebrow: 'OUR CELEBRATION COLLECTIONS',
  headline: {
    line1: 'Beautiful Celebrations.',
    line2Accent: 'Thoughtfully Curated.',
  },
  supporting:
    'Explore decoration collections designed for intimate gatherings, meaningful milestones, and grand celebrations across Tumakuru.',
  primaryCta: 'Explore Collections',
  secondaryCta: 'Request Custom Quote',
  image: '/images/events/weddings.jpg',
  imageAlt: 'Curated luxury celebration decoration and floral stage craft in Tumakuru',
} as const;

export const packageCollections: readonly PackageCollectionDetail[] = [
  // =========================================================================
  // 01. INTIMATE MOMENTS
  // =========================================================================
  {
    id: 'intimate-moments',
    number: '01',
    anchorId: 'intimate-moments',
    title: 'Intimate Moments',
    shortTitle: 'Intimate',
    headline: 'Beautifully Personal. Wonderfully Intimate.',
    priceDisplay: '₹18,000 – ₹35,000',
    suitableFor: [
      'Home birthday celebrations',
      'Small family gatherings (20–60 guests)',
      'Simple milestone decorations',
      'Intimate home ceremonies & naming rituals',
    ],
    description:
      'Curated for cozy celebrations held at home, private terraces, or boutique party halls. We blend organic pastel balloon arches, refined floral plinths, and warm illumination to create an inviting focal point for family photographs.',
    options: [
      {
        title: 'Themed Decorative Backdrop',
        description: 'Circular arch frame or arched pastel panels with custom celebratory signage.',
      },
      {
        title: 'Coordinated Floral or Balloon Styling',
        description: 'Biodegradable matte balloon garlands or fresh botanical sprays matched to your palette.',
      },
      {
        title: 'Accent Display Elements & Plinths',
        description: 'Ribbed cake pedestals and display stands framing the cake or puja elements.',
      },
      {
        title: 'Decorative Ambient Lighting',
        description: 'Warm spotlighting and diffused perimeter wash lights tailored to domestic spaces.',
      },
      {
        title: 'Personalized Finishing Details',
        description: 'Welcome easel sign with custom calligraphy and small decorative accents.',
      },
    ],
    image: '/images/events/birthdays.jpg',
    imageAlt: 'Intimate birthday celebration decor with pastel balloons and custom backdrop in Tumakuru',
    supportingImage: '/images/events/baby-showers.jpg',
    supportingImageAlt: 'Delicate floral cradle and balloon accents for intimate home ceremonies',
    enquiryHref: '/contact?package=intimate-moments',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about the Intimate Moments decoration collection (₹18,000–₹35,000).',
  },

  // =========================================================================
  // 02. SIGNATURE CELEBRATIONS
  // =========================================================================
  {
    id: 'signature-celebrations',
    number: '02',
    anchorId: 'signature-celebrations',
    title: 'Signature Celebrations',
    shortTitle: 'Signature',
    headline: 'Thoughtful Details. Extraordinary Moments.',
    priceDisplay: '₹45,000 – ₹85,000',
    suitableFor: [
      'Engagement celebrations & Sangeet',
      'Traditional ceremonies (Upanayana, Gruhapravesha)',
      'Milestone birthdays & Silver Jubilees',
      'Medium-scale family gatherings (80–250 guests)',
    ],
    description:
      'Our most requested collection for milestone family rituals. We harmonize authentic South Karnataka cultural reverence with fresh fragrant marigolds, heirloom brass lamps, statement floral arches, and coordinated entrance walkways.',
    options: [
      {
        title: 'Customized Stage Concept & Backdrops',
        description: 'Multi-layered 16ft–24ft stage architecture featuring rich fabric drapery and textured flats.',
      },
      {
        title: 'Elaborate Fresh Floral Styling',
        description: 'Hand-strung marigold ropes, fresh Mysore jasmine malas, lotus blooms, and blush roses.',
      },
      {
        title: 'Coordinated Entrance Archway',
        description: 'Welcoming floral gateway with natural banana stems or modern geometric arches.',
      },
      {
        title: 'Ceremony-Inspired Brass Artifacts',
        description: 'Authentic multi-tier brass samai lamps, urulis with floating blossoms, and wooden diwans.',
      },
      {
        title: 'Enhanced Ambient Warm Wash Lighting',
        description: 'Architectural warm stage lighting and soft aisle wash creating flattering photographs.',
      },
    ],
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt: 'South Indian traditional ceremony stage with fresh jasmine, marigolds, and brass lamps in Tumakuru',
    supportingImage: '/images/events/special-occasions.jpg',
    supportingImageAlt: 'Evening milestone celebration with candlelit tables and fairy lights',
    enquiryHref: '/contact?package=signature-celebrations',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about the Signature Celebrations decoration collection (₹45,000–₹85,000).',
  },

  // =========================================================================
  // 03. GRAND STATEMENTS
  // =========================================================================
  {
    id: 'grand-statements',
    number: '03',
    anchorId: 'grand-statements',
    title: 'Grand Statements',
    shortTitle: 'Grand',
    headline: 'Designed to Impress. Made to Remember.',
    priceDisplay: '₹1,10,000 – ₹2,50,000+',
    suitableFor: [
      'Grand wedding receptions & Muhurthams',
      'Large cultural & community festivals',
      'High-impact convention hall stages',
      'Expansive celebrations (300–2,000+ guests)',
    ],
    description:
      'Engineered for monumental scale and panoramic splendour. Featuring soaring architectural archways, thousands of fresh blooms, crystal chandeliers, grand aisle canopies, and concert-grade theatrical lighting across major venues in Tumakuru.',
    options: [
      {
        title: 'Large-Scale Decorative Concepts',
        description: '30ft to 60ft+ wide-span multi-tier stage facades engineered for vast viewing distances.',
      },
      {
        title: 'Elaborate Stage Environments & Thrones',
        description: 'Luxury couple seating, coordinated carpeted risers, and multi-layered backdrop textures.',
      },
      {
        title: 'Architectural Floral Arrangements',
        description: 'Voluminous cascading floral crowns featuring exotic orchids, lilies, and premium roses.',
      },
      {
        title: 'Coordinated Grand Entrance Canopies',
        description: 'Starlight fairy light tunnels, floral arch sequences, and branded greeting reception foyers.',
      },
      {
        title: 'Theatrical Illumination & Wash',
        description: 'Moving-head beams, warm profile follow-spots, perimeter wash, and crystal chandeliers.',
      },
      {
        title: 'Venue-Wide Styling Possibilities',
        description: 'Coordinated VIP lounges, dining area floral centerpieces, and photo installations.',
      },
    ],
    image: '/images/events/weddings.jpg',
    imageAlt: 'Grand wedding reception stage with curved floral arches and crystal chandeliers in Tumakuru',
    supportingImage: '/images/events/stage-events.jpg',
    supportingImageAlt: 'Monumental auditorium stage with gold arches and theatrical concert lighting',
    enquiryHref: '/contact?package=grand-statements',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about the Grand Statements decoration collection (₹1,10,000–₹2,50,000+).',
  },
];

// =========================================================================
// SIMPLE COMPARISON MATRIX (Section 06)
// Clear, non-technical comparison across 5 essential dimensions
// =========================================================================
export interface ComparisonRow {
  readonly criteria: string;
  readonly intimate: string;
  readonly signature: string;
  readonly grand: string;
}

export const packagesComparisonRows: readonly ComparisonRow[] = [
  {
    criteria: 'Typical Occasion',
    intimate: 'Birthdays, Naming Rites, Small Home Poojas',
    signature: 'Engagements, Traditional Ceremonies, Milestones',
    grand: 'Weddings, Grand Receptions, Large Stage Festivals',
  },
  {
    criteria: 'Event Scale',
    intimate: '20 to 60 Guests',
    signature: '80 to 250 Guests',
    grand: '300 to 2,000+ Guests',
  },
  {
    criteria: 'Decoration Complexity',
    intimate: 'Focal backdrop, cake plinth, ambient spotlight',
    signature: 'Full stage, entrance arch, fresh garlands & brass',
    grand: 'Panoramic 40ft+ stage, light tunnel, chandeliers',
  },
  {
    criteria: 'Indicative Budget',
    intimate: '₹18,000 – ₹35,000',
    signature: '₹45,000 – ₹85,000',
    grand: '₹1,10,000 – ₹2,50,000+',
  },
  {
    criteria: 'Customization Level',
    intimate: 'Theme & color palette custom choices',
    signature: 'Full concept customization & floral selection',
    grand: 'Bespoke 3D architectural staging & venue-wide design',
  },
];

// =========================================================================
// PRICING TRANSPARENCY FACTORS (Section 08)
// Honest, non-fabricated breakdown of pricing considerations
// =========================================================================
export const pricingFactors = [
  {
    title: 'Venue Size & Architecture',
    desc: 'Stage dimensions, ceiling height, rigging anchor points, and whether the space is indoor or outdoor lawn.',
  },
  {
    title: 'Floral & Material Selection',
    desc: 'Seasonal marigold and jasmine versus exotic domestic roses, lilies, hydrangeas, or custom wooden flats.',
  },
  {
    title: 'Spatial Scope of Styling',
    desc: 'Whether decoration is focused strictly on the main stage or extends across entrance canopies, dining, and aisles.',
  },
  {
    title: 'Event Date & Muhurtham Timing',
    desc: 'Peak wedding dates require advance artisan crew scheduling and overnight setup coordination.',
  },
  {
    title: 'Lighting & Technical Needs',
    desc: 'Simple ambient wash versus multi-circuit fairy canopies, crystal chandeliers, and follow-spot illumination.',
  },
  {
    title: 'Logistics & Venue Location',
    desc: 'Location within Tumakuru city versus outstation venues across Sira, Tiptur, Gubbi, Kunigal, or Nelamangala.',
  },
] as const;

export const mandatoryTransparencyDisclaimer =
  'All prices shown are indicative planning estimates. Final pricing, inclusions, availability, and applicable charges are confirmed through a personalized quote.';

// =========================================================================
// PACKAGES FAQ (Section 09)
// 6 Confirmed questions from the prompt with grounded answers
// =========================================================================
export const packagesFaqs: readonly FaqItem[] = [
  {
    id: 'pkg-faq-01',
    number: '01',
    question: 'Are package prices fixed?',
    answer:
      'No. The prices shown are indicative planning budget ranges to help you understand typical investment levels. Because every venue has unique stage dimensions and every family has specific preferences, final pricing is confirmed via an itemized quote.',
  },
  {
    id: 'pkg-faq-02',
    number: '02',
    question: 'Can I customize a decoration collection?',
    answer:
      'Yes, absolutely. All collections can be customized in terms of color palettes, floral species, backdrop textures, lighting arrangements, and special cultural elements to match your vision.',
  },
  {
    id: 'pkg-faq-03',
    number: '03',
    question: 'What determines the final quotation?',
    answer:
      'The final quote is calculated based on exact stage dimensions, volume and type of fresh florals requested, entrance walkway length, lighting equipment, venue access hours, and delivery distance.',
  },
  {
    id: 'pkg-faq-04',
    number: '04',
    question: 'Can I combine elements from two collections?',
    answer:
      'Yes. Many clients combine the intimate stage styling from Intimate Moments with the grand entrance canopy from Signature Celebrations. We will prepare a blended proposal tailored to your venue.',
  },
  {
    id: 'pkg-faq-05',
    number: '05',
    question: 'How do I enquire about a package?',
    answer:
      'You can select the "Enquire" button on any collection, complete our brief contact form, or message us on WhatsApp with your event date, venue in Tumakuru, and preferred collection. We will respond promptly with availability and ideas.',
  },
  {
    id: 'pkg-faq-06',
    number: '06',
    question: 'How early should I plan my celebration?',
    answer:
      'For weddings and peak auspicious Muhurtham dates, we recommend booking 1 to 3 months in advance. For intimate birthdays, baby showers, or home poojas, 1 to 2 weeks notice is generally sufficient.',
  },
];

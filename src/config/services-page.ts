import { FaqItem } from './faqs';

export interface ServiceDetailItem {
  readonly id: string;
  readonly number: string;
  readonly anchorId: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly headline: string;
  readonly tagline: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
  readonly supportingImage: string;
  readonly supportingImageAlt: string;
  readonly enquirySlug: string;
  readonly preparedMessage: string;
}

export const servicesData: readonly ServiceDetailItem[] = [
  // =========================================================================
  // 01. EVENT CONCEPT & THEME STYLING
  // =========================================================================
  {
    id: 'concept-and-theme',
    number: '01',
    anchorId: 'concept-and-theme',
    title: 'Event Concept & Theme Styling',
    shortTitle: 'Concept & Theme',
    headline: 'Every Beautiful Celebration Begins With an Idea.',
    tagline: 'Personalized themes and holistic spatial design',
    description:
      'We translate your personal stories, family traditions, and celebratory dreams into a cohesive spatial language. From curated color palettes to tailored floorplans, every decorative touch feels intentional, refined, and distinctly yours.',
    features: [
      'Personalized theme and mood board development',
      'Harmonious color palette curation and linen matching',
      'Spatial layout planning tailored to venue architecture',
      'Occasion-specific styling for both intimate and grand scales',
      'Coordinated decorative elements from entrance to stage',
    ],
    image: '/images/events/art-of-celebration.jpg',
    imageAlt: 'Creative concept styling board and floral materials curated by Tumkur Events',
    supportingImage: '/images/events/special-occasions.jpg',
    supportingImageAlt: 'Intimate evening milestone celebration with candlelit table styling in Tumakuru',
    enquirySlug: 'concept-and-theme',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about Event Concept & Theme Styling for my upcoming celebration in Tumakuru.',
  },

  // =========================================================================
  // 02. FLORAL & TRADITIONAL DÉCOR
  // =========================================================================
  {
    id: 'floral-and-traditional',
    number: '02',
    anchorId: 'floral-and-traditional',
    title: 'Floral & Traditional Décor',
    shortTitle: 'Floral & Traditional',
    headline: 'Rooted in Tradition. Styled With Elegance.',
    tagline: 'Sacred botanical artistry and South Karnataka heritage',
    description:
      'Honoring South Indian cultural reverence through fresh botanical craft. We harmonize fragrant marigolds, Mysore jasmine malas, lotus blooms, and banana stem gateways with heirloom brass samais to evoke sacred auspicious grace.',
    features: [
      'Fresh floral garlands (Marigold, Jasmine, Lotus, Roses)',
      'Auspicious entrance toranas and banana leaf gateways',
      'Authentic brass samai lamps, vilakkus, and urulis',
      'Traditional wooden and temple-inspired mandap styling',
      'Pooja room, homa platform, and seating floral arrangements',
    ],
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt: 'Traditional South Indian ceremony decor with marigold garlands and brass lamps in Tumakuru',
    supportingImage: '/images/events/weddings.jpg',
    supportingImageAlt: 'Grand wedding floral mandap with curved arches and blush roses',
    enquirySlug: 'floral-and-traditional',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about Floral & Traditional Décor for my upcoming ceremony in Tumakuru.',
  },

  // =========================================================================
  // 03. BALLOON & THEMED INSTALLATIONS
  // =========================================================================
  {
    id: 'balloon-and-themed',
    number: '03',
    anchorId: 'balloon-and-themed',
    title: 'Balloon & Themed Installations',
    shortTitle: 'Balloon & Themed',
    headline: 'Playful Ideas. Beautifully Brought to Life.',
    tagline: 'Whimsical organic balloon architecture and bespoke props',
    description:
      'Elevate birthdays, baby showers, and milestones beyond standard party decor. We craft organic balloon arches using matte, double-stuffed pastel palettes, custom wooden backdrop panels, acrylic signage, and dimensional themed props.',
    features: [
      'Organic matte and pastel balloon garland arches',
      'Multi-paneled arched backdrop walls with LED neon accents',
      'Custom wooden character and adventure theme cutouts',
      'Coordinated cake pedestals and ribbed dessert plinths',
      'Interactive photobooth backdrops for family memories',
    ],
    image: '/images/events/birthdays.jpg',
    imageAlt: "Children's birthday celebration decoration with pastel balloon arch and themed backdrop in Tumakuru",
    supportingImage: '/images/events/baby-showers.jpg',
    supportingImageAlt: 'Delicate baby shower decor with floral cradle and pastel balloon clusters',
    enquirySlug: 'balloon-and-themed',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about Balloon & Themed Installations for my upcoming event in Tumakuru.',
  },

  // =========================================================================
  // 04. STAGE & BACKDROP DESIGN
  // =========================================================================
  {
    id: 'stage-and-backdrop',
    number: '04',
    anchorId: 'stage-and-backdrop',
    title: 'Stage & Backdrop Design',
    shortTitle: 'Stage & Backdrop',
    headline: 'Creating the Perfect Setting for Every Story.',
    tagline: 'Grand focal stages and architectural statements',
    description:
      'The stage is the heart of your celebration, framing your sacred vows, milestone toasts, and keynote addresses. We construct bespoke stages engineered for perfect sightlines, camera depth, and exquisite focal aesthetics.',
    features: [
      'Layered architectural facades and arched stage frameworks',
      'Opulent floral stage curtains and curved floral crowns',
      'Comfortable luxury couple thrones and dignitary seating',
      'Integrated stage lighting, pin spots, and wash accents',
      'Seamless carpeting, steps, and skirting in coordinating tones',
    ],
    image: '/images/events/weddings.jpg',
    imageAlt: 'Opulent wedding reception stage with curved floral arches and crystal chandeliers in Tumakuru',
    supportingImage: '/images/events/stage-events.jpg',
    supportingImageAlt: 'Grand auditorium stage with layered gold arches and concert lighting',
    enquirySlug: 'stage-and-backdrop',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about Stage & Backdrop Design for my upcoming celebration in Tumakuru.',
  },

  // =========================================================================
  // 05. VENUE & ENTRANCE STYLING
  // =========================================================================
  {
    id: 'venue-and-entrance',
    number: '05',
    anchorId: 'venue-and-entrance',
    title: 'Venue & Entrance Styling',
    shortTitle: 'Venue & Entrance',
    headline: 'Setting the Mood From the Very First Step.',
    tagline: 'Immersive arrival walkways and cohesive spatial zoning',
    description:
      'A great event welcomes guests before they even step into the main hall. We transform bare driveways, porticos, and foyers into enchanting arrival pathways with floral arches, lantern-lit walkways, and bespoke greeting signs.',
    features: [
      'Grand arrival entrance gates and floral canopy arches',
      'Aisle styling with pedestals, carpet runners, and florals',
      'Personalized welcome easels and guest message areas',
      'Spatial zoning: VIP lounges, buffet framing, and dining areas',
      'Directional signage and seamless architectural drapery',
    ],
    image: '/images/events/final-cta-canopy.jpg',
    imageAlt: 'Enchanting illuminated entrance canopy and floral walkway at celebration venue in Tumakuru',
    supportingImage: '/images/events/special-occasions.jpg',
    supportingImageAlt: 'Evening garden celebration with fairy lights and ambient outdoor seating',
    enquirySlug: 'venue-and-entrance',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about Venue & Entrance Styling for my upcoming event in Tumakuru.',
  },

  // =========================================================================
  // 06. DECORATIVE LIGHTING & DETAILS
  // =========================================================================
  {
    id: 'lighting-and-details',
    number: '06',
    anchorId: 'lighting-and-details',
    title: 'Decorative Lighting & Details',
    shortTitle: 'Lighting & Details',
    headline: 'From the First Impression to the Final Glow.',
    tagline: 'Atmospheric illumination, lanterns, and micro-finishes',
    description:
      'Lighting breathes emotion into decor. We design ambient lighting environments using warm amber fairy canopies, hanging Moroccan and brass lanterns, Edison bulbs, and precision spotlights that flatter guests and photographs alike.',
    features: [
      'Warm fairy light overhead canopies and tunnel installations',
      'Traditional hanging brass lanterns and diya arrangements',
      'Table centerpieces with wax candles and botanical accents',
      'Stage wash lighting and key illumination on guests of honor',
      'Festoon lighting for outdoor lawns, farmhouses, and terraces',
    ],
    image: '/images/events/special-occasions.jpg',
    imageAlt: 'Outdoor dinner under fairy light canopy with warm golden ambiance in Tumakuru',
    supportingImage: '/images/decor/faq-decor-detail.jpg',
    supportingImageAlt: 'Close-up of decorative lighting accents, floral details, and ambient lanterns',
    enquirySlug: 'lighting-and-details',
    preparedMessage:
      'Hello Tumkur Events, I would like to enquire about Decorative Lighting & Details for my upcoming celebration in Tumakuru.',
  },
];

// =========================================================================
// SERVICES FAQ (Section 08)
// 6 Confirmed questions with grounded, verified answers
// =========================================================================
export const servicesFaqs: readonly FaqItem[] = [
  {
    id: 'srv-faq-01',
    number: '01',
    question: 'Can you customize an event decoration theme?',
    answer:
      'Yes, absolutely. We tailor themes to your personal taste, reference photographs, color palette, and chosen venue. We create bespoke mood boards and concept sketches during the initial consultation.',
  },
  {
    id: 'srv-faq-02',
    number: '02',
    question: 'Do you provide decorations for different types of celebrations?',
    answer:
      'Yes. Our portfolio spans birthdays, traditional ceremonies (such as Upanayana and Gruhapravesha), weddings, engagements, baby showers, naming ceremonies, corporate summits, and large-scale cultural events across Tumakuru district.',
  },
  {
    id: 'srv-faq-03',
    number: '03',
    question: 'Can you decorate both homes and event venues?',
    answer:
      'Yes. We regularly style intimate spaces (living rooms, terraces, family backyards) as well as large convention centers, wedding halls (Kalyana Mantapas), hotels, and open-air resort lawns in Tumakuru and surrounding regions.',
  },
  {
    id: 'srv-faq-04',
    number: '04',
    question: 'How can I receive a quotation for my event?',
    answer:
      'You can submit an enquiry through our contact form, call our concierge, or message us on WhatsApp with your event date, venue location, occasion type, and initial decor ideas. We will provide an itemized, transparent quotation based on your exact requirements.',
  },
  {
    id: 'srv-faq-05',
    number: '05',
    question: 'How early should I enquire about my event?',
    answer:
      'For large celebrations, weddings, and peak auspicious Muhurtham dates, we recommend reaching out 1 to 3 months in advance. For intimate birthdays and home poojas, 1 to 2 weeks notice is generally sufficient, though earlier confirmation ensures complete availability.',
  },
  {
    id: 'srv-faq-06',
    number: '06',
    question: 'Can I combine multiple decoration services?',
    answer:
      'Yes, most celebrations combine multiple services—such as entrance styling, stage design, floral mandap, and decorative fairy lighting. We package and coordinate these together seamlessly under one unified creative direction.',
  },
];

// =========================================================================
// INSPIRATION GALLERY (Section 07)
// 6 Authentic photographs showcasing diverse capabilities
// =========================================================================
export const servicesGalleryImages = [
  {
    id: 'srv-gal-01',
    title: 'Grand Floral Mandap Architecture',
    service: 'Floral & Traditional Décor',
    image: '/images/events/weddings.jpg',
    imageAlt: 'Opulent wedding reception stage with curved floral arches and chandeliers in Tumakuru',
    caption: 'Curved floral archways featuring blush roses and tiered crystal chandeliers.',
  },
  {
    id: 'srv-gal-02',
    title: 'Auspicious Ceremonial Marigold Stage',
    service: 'Floral & Traditional Décor',
    image: '/images/events/traditional-ceremonies.jpg',
    imageAlt: 'Authentic South Indian ceremony stage decor with marigold garlands in Tumakuru',
    caption: 'Fresh yellow and orange marigold garlands paired with brass samai lamps.',
  },
  {
    id: 'srv-gal-03',
    title: 'Whimsical Pastel Balloon Art',
    service: 'Balloon & Themed Installations',
    image: '/images/events/birthdays.jpg',
    imageAlt: "Children's birthday party decoration with organic pastel balloons in Tumakuru",
    caption: 'Organic double-stuffed pastel balloon clusters framing a themed birthday celebration.',
  },
  {
    id: 'srv-gal-04',
    title: 'Evening Starlight Dining Canopy',
    service: 'Decorative Lighting & Details',
    image: '/images/events/special-occasions.jpg',
    imageAlt: 'Outdoor dinner under fairy light canopy with warm golden ambiance in Tumakuru',
    caption: 'Warm ambient fairy light ceiling creating a romantic atmosphere for milestone dinners.',
  },
  {
    id: 'srv-gal-05',
    title: 'Executive Keynote Stage Setting',
    service: 'Stage & Backdrop Design',
    image: '/images/events/corporate.jpg',
    imageAlt: 'Sleek corporate conference stage setup with architectural acoustic panels in Tumakuru',
    caption: 'Clean, architectural stage designed for corporate summits and executive presentations.',
  },
  {
    id: 'srv-gal-06',
    title: 'Monumental Auditorium Cultural Stage',
    service: 'Stage & Backdrop Design',
    image: '/images/events/stage-events.jpg',
    imageAlt: 'Grand auditorium stage with layered gold arches and concert lights in Tumakuru',
    caption: 'Sweeping 50-foot layered arch stage for grand cultural celebrations.',
  },
] as const;

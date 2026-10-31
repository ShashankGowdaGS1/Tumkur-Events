import { FaqItem } from './faqs';

export interface ConceptItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly highlights: readonly string[];
}

export interface StylingElementItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly iconType: 'backdrop' | 'floral' | 'lighting' | 'entrance' | 'cradle' | 'table' | 'stage';
}

export interface GalleryPhotoItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly caption: string;
}

export interface EventCategoryDetail {
  readonly slug: string;
  readonly id: string;
  readonly number: string; // "01" - "07"
  readonly title: string;
  readonly shortTitle: string;
  readonly tag: string;
  readonly headline: {
    readonly line1: string;
    readonly line2Accent: string;
  };
  readonly shortIntro: string;
  readonly heroImage: string;
  readonly heroImageAlt: string;
  readonly heroFocalPoint: string;
  readonly essence: {
    readonly eyebrow: string;
    readonly headline: string;
    readonly scriptAccent: string;
    readonly paragraphs: readonly string[];
    readonly detailImage: string;
    readonly detailImageAlt: string;
    readonly attributes: readonly { readonly label: string; readonly value: string }[];
  };
  readonly concepts: readonly ConceptItem[];
  readonly stylingElements: readonly StylingElementItem[];
  readonly gallery: readonly GalleryPhotoItem[];
  readonly planningNotes: string;
  readonly relatedSlugs: readonly string[];
  readonly faqs: readonly FaqItem[];
  readonly seo: {
    readonly title: string;
    readonly metaDescription: string;
    readonly keywords: readonly string[];
  };
}

export const eventCategoryDetails: Record<string, EventCategoryDetail> = {
  // =========================================================================
  // 01. BIRTHDAYS & KIDS' CELEBRATIONS
  // =========================================================================
  birthdays: {
    slug: 'birthdays',
    id: 'birthdays',
    number: '01',
    title: "Birthdays & Kids' Celebrations",
    shortTitle: 'Birthdays',
    tag: 'JOYFUL & PERSONALIZED',
    headline: {
      line1: 'Little Moments.',
      line2Accent: 'Beautifully Celebrated.',
    },
    shortIntro:
      "Transform milestone birthdays and magical children's parties into joyful celebrations filled with custom themed backdrops, organic pastel balloon styling, and picture-perfect cake tables across Tumakuru.",
    heroImage: '/images/events/birthdays.jpg',
    heroImageAlt:
      "Bespoke children's birthday celebration decoration with organic pastel balloons and themed backdrops in Tumakuru",
    heroFocalPoint: 'center 45%',
    essence: {
      eyebrow: 'PLAYFUL ELEGANCE & WONDER',
      headline: 'A world of imagination,',
      scriptAccent: 'crafted for cherished smiles.',
      paragraphs: [
        'A birthday is a snapshot of childhood wonder or a heartfelt tribute to a milestone year. At Tumkur Events, we approach birthday styling with equal parts whimsy and sophistication—steering clear of cookie-cutter plastic setups in favor of bespoke artisan backdrops and delicate pastel palettes.',
        'Whether designing an enchanting safari adventure for a first birthday, a modern pastel floral party for a young teen, or an elegant milestone banquet for a 50th celebration, every installation is custom-tailored to reflect your family’s unique story across venues in Tumakuru and surrounding districts.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of customized birthday backdrop styling with organic balloon and floral art',
      attributes: [
        { label: 'Event Scale', value: 'Intimate to Grand (20 - 400+ Guests)' },
        { label: 'Palette Direction', value: 'Custom Themes, Pastels & Vibrant Accents' },
        { label: 'Key Highlights', value: 'Balloon Architecture, Custom Name Cutouts & Stage' },
        { label: 'Venue Suitable', value: 'Home Lawns, Banquet Halls & Rooftops' },
      ],
    },
    concepts: [
      {
        id: 'bday-concept-01',
        number: '01',
        title: 'Whimsical Balloon Celebrations',
        subtitle: 'Organic Arches & Balloon Sculptures',
        description:
          'Flowing matte and pastel balloon arches woven with subtle eucalyptus or fresh floral sprays. Designed around modern circular and arched backdrop panels that create a dreamy focal point for family photography.',
        image: '/images/events/birthdays.jpg',
        imageAlt: 'Whimsical pastel balloon arch and custom birthday backdrop styling in Tumakuru',
        highlights: ['Organic matte balloon cascades', 'Circular arch architecture', 'Custom LED neon milestone sign'],
      },
      {
        id: 'bday-concept-02',
        number: '02',
        title: 'Elegant Floral Birthday Styling',
        subtitle: 'Botanical & Sweet Floral Backdrops',
        description:
          'Sophisticated birthday styling utilizing fresh roses, baby’s breath clouds, and gold geometric plinths. Perfect for sweet sixteens, 21st milestones, and adult birthday banquets wanting refined celebration elegance.',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Elegant floral birthday table and ambient fairy light decor',
        highlights: ['Fresh floral table runners', 'Gilded plinth cake displays', 'Soft candlelit accent lighting'],
      },
      {
        id: 'bday-concept-03',
        number: '03',
        title: 'Personalized Theme Installations',
        subtitle: 'Custom Character & Adventure Stages',
        description:
          'From celestial stars and fairytale castles to jungle adventures, each theme is brought to life through multi-layered wooden cutouts, bespoke illustration prints, and themed decorative props.',
        image: '/images/events/baby-showers.jpg',
        imageAlt: 'Personalized adventure themed backdrop with multi-layered props',
        highlights: ['Multi-dimensional backdrop flats', 'Themed character cutouts', 'Coordinated entrance archway'],
      },
    ],
    stylingElements: [
      {
        id: 'bday-style-01',
        number: '01',
        title: 'Themed Backdrop Architecture',
        description: 'Multi-paneled arched flats, custom acrylic name signage, and coordinated palette backings.',
        iconType: 'backdrop',
      },
      {
        id: 'bday-style-02',
        number: '02',
        title: 'Balloon & Floral Artistry',
        description: 'Biodegradable matte balloon garlands seamlessly integrated with fresh greenery and blooms.',
        iconType: 'floral',
      },
      {
        id: 'bday-style-03',
        number: '03',
        title: 'Cake Table & Plinth Styling',
        description: 'Tiered pedestals, ambient uplighting, and custom floral accents framing the celebration cake.',
        iconType: 'table',
      },
      {
        id: 'bday-style-04',
        number: '04',
        title: 'Personalized Entrance Styling',
        description: 'Welcoming easel board with personalized calligraphy, balloon cluster accents, and guest photo corners.',
        iconType: 'entrance',
      },
    ],
    gallery: [
      {
        id: 'bday-gal-01',
        title: "Whimsical First Birthday Arch",
        category: "Pastel Balloon Styling",
        image: '/images/events/birthdays.jpg',
        imageAlt: "Organic pastel balloon arch with circular backdrop for 1st birthday in Tumakuru",
        caption: "Bespoke pastel balloon arrangement framing a personalized celebration stage in Tumakuru.",
      },
      {
        id: 'bday-gal-02',
        title: "Floral & Balloon Celebration Stage",
        category: "Stage Concept",
        image: '/images/gallery/gallery-01-birthday.jpg',
        imageAlt: "Custom birthday backdrop with LED signage and floral plinths",
        caption: "Multi-layered stage panels with illuminated neon number and floral bases.",
      },
      {
        id: 'bday-gal-03',
        title: "Cake Table & Pedestal Composition",
        category: "Detail Styling",
        image: '/images/events/art-of-celebration.jpg',
        imageAlt: "Close-up of birthday decor elements and cake display plinths",
        caption: "Harmonious combination of ribbed pedestals and fresh botanical accents.",
      },
      {
        id: 'bday-gal-04',
        title: "Evening Fairy Light Milestone",
        category: "Evening Ambiance",
        image: '/images/events/special-occasions.jpg',
        imageAlt: "Outdoor birthday dinner with ambient fairy lights and table blooms",
        caption: "Warm evening celebration styling for intimate milestone family gatherings.",
      },
      {
        id: 'bday-gal-05',
        title: "Sweet Milestone Photobooth",
        category: "Photo Feature",
        image: '/images/events/baby-showers.jpg',
        imageAlt: "Interactive photo corner with balloon wreath and wicker chair",
        caption: "Dedicated interactive corner designed for memorable portraits with family and friends.",
      },
    ],
    planningNotes:
      "For birthday celebrations in Tumakuru, we recommend sharing your child’s favorite theme or preferred color palette 10–14 days in advance so custom name boards and specialized props can be handcrafted.",
    relatedSlugs: ['baby-showers', 'special-occasions', 'stage-events'],
    faqs: [
      {
        id: 'bday-faq-01',
        number: '01',
        question: 'How early should we book birthday decor in Tumakuru?',
        answer:
          'We recommend reaching out at least 1 to 2 weeks before the celebration. For bespoke character themes requiring custom wooden cutouts or specialized printing, earlier confirmation ensures every element is prepared seamlessly.',
      },
      {
        id: 'bday-faq-02',
        number: '02',
        question: 'Can you set up birthday decor at our home or backyard?',
        answer:
          'Yes, absolutely. We design setups for private residences, living rooms, terraces, apartment clubhouses, and outdoor lawns, tailoring the stage dimensions to your exact space.',
      },
      {
        id: 'bday-faq-03',
        number: '03',
        question: 'Can we customize the balloon color palette to match our cake or outfit?',
        answer:
          'Yes. We custom-blend balloon tones using premium double-stuffed or matte balloons to achieve unique sage, blush, dusty blue, neutral champagne, or vibrant tones matching your theme.',
      },
      {
        id: 'bday-faq-04',
        number: '04',
        question: 'Do you provide cake tables and number marquee lights?',
        answer:
          'Yes, our styling concepts frequently include matching acrylic or ribbed plinths, illuminated LED marquee numbers, and neon celebration signage as part of the stage package.',
      },
    ],
    seo: {
      title: "Birthday & Kids' Party Decoration in Tumakuru | Tumkur Events",
      metaDescription:
        "Bespoke birthday party and kids' celebration decor in Tumakuru. Custom themed backdrops, organic pastel balloon styling, cake tables, and personalized milestone stages.",
      keywords: [
        'birthday decoration Tumkur',
        'kids party decor Tumakuru',
        'balloon decoration Tumkur',
        'first birthday stage Tumakuru',
        'cake table decor Tumkur',
      ],
    },
  },

  // =========================================================================
  // 02. TRADITIONAL CEREMONIES
  // =========================================================================
  'traditional-ceremonies': {
    slug: 'traditional-ceremonies',
    id: 'traditional-ceremonies',
    number: '02',
    title: 'Traditional Ceremonies',
    shortTitle: 'Traditional',
    tag: 'SACRED & TIMELESS',
    headline: {
      line1: 'Traditions That',
      line2Accent: 'Deserve to Shine.',
    },
    shortIntro:
      'Honor cherished South Karnataka heritage with fragrant marigold garlands, traditional samai brass lamps, banana tree gateways, and carved ceremonial stages across Tumakuru.',
    heroImage: '/images/events/traditional-ceremonies.jpg',
    heroImageAlt:
      'Authentic South Indian ceremony stage decor featuring marigold garlands, brass samai lamps, and carved wooden panels in Tumakuru',
    heroFocalPoint: 'center 35%',
    essence: {
      eyebrow: 'CULTURAL REVERENCE & HERITAGE',
      headline: 'Rooted in sacred rituals,',
      scriptAccent: 'elevated with fresh floral grace.',
      paragraphs: [
        'South Indian family rituals carry deep emotional and spiritual resonance. From Upanayana (sacred thread ceremonies) and Gruhapravesha (housewarmings) to Satyanarayana pujas and golden anniversaries, these occasions deserve an atmosphere that honors tradition without feeling chaotic.',
        'We blend authentic ceremonial customs with refined spatial design. Fresh strings of yellow and orange Sevanti, fragrant Mysore jasmine, traditional brass urulis with floating blossoms, and carved wooden temple motifs create an authentic sanctuary for your family’s sacred milestones in Tumakuru.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of hand-threaded marigold garlands and brass ceremonial lamps in Tumakuru',
      attributes: [
        { label: 'Ritual Types', value: 'Upanayana, Gruhapravesha, Pujas & Haldi' },
        { label: 'Floral Materials', value: 'Fresh Marigold, Mysore Jasmine, Lotus & Greens' },
        { label: 'Artifacts Used', value: 'Brass Samai Lamps, Urulis, Wooden Mandaps' },
        { label: 'Geographic Scope', value: 'Tumakuru Town, Gubbi, Sira, Tiptur & Kunigal' },
      ],
    },
    concepts: [
      {
        id: 'trad-concept-01',
        number: '01',
        title: 'Heritage-Inspired Floral Decor',
        subtitle: 'Marigold & Jasmine Garland Architecture',
        description:
          'Draped marigold ropes cascading from natural wooden beams, framed by tightly woven white jasmine tassels and banana leaves. Creates an inviting, deeply auspicious atmosphere for ceremonial rites.',
        image: '/images/events/traditional-ceremonies.jpg',
        imageAlt: 'Authentic South Indian floral decor with marigolds and jasmine in Tumakuru',
        highlights: ['Fresh Sevanti & Jasmine garlands', 'Natural banana stem gateways', 'Brass vilakku oil lamp highlights'],
      },
      {
        id: 'trad-concept-02',
        number: '02',
        title: 'Traditional Wooden Mandap Styling',
        subtitle: 'Carved Temple Pillar Architecture',
        description:
          'Stately temple-inspired pillars draped in silk drapes and fragrant floral borders. Backdropped by woven coconut leaf mats or auspicious handloom fabrics that center the sacred homa or puja.',
        image: '/images/events/weddings.jpg',
        imageAlt: 'Traditional mandap architecture with carved pillars and floral top borders',
        highlights: ['Authentic carved wooden pillars', 'Silk fabric pleating', 'Lotus bud centerpieces'],
      },
      {
        id: 'trad-concept-03',
        number: '03',
        title: 'Warm Ceremonial Brass & Oil Ambience',
        subtitle: 'Urulis, Diya Illumination & Rangoli',
        description:
          'A radiant sea of hand-polished brass urulis with floating rose petals and floating wick lamps. Completed with handcrafted rice powder and flower-petal Rangolis guiding guests from the threshold.',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Ceremonial warm brass lamps and floral pathway decoration',
        highlights: ['Heirloom brass uruli vessels', 'Intricate flower petal rangoli', 'Warm ambient golden illumination'],
      },
    ],
    stylingElements: [
      {
        id: 'trad-style-01',
        number: '01',
        title: 'Ceremonial Floral Craft',
        description: 'Locally sourced fresh marigold (Sevanti), jasmine (Mogra), and lotus flowers woven freshly on event day.',
        iconType: 'floral',
      },
      {
        id: 'trad-style-02',
        number: '02',
        title: 'Brass Artifacts & Deepams',
        description: 'Authentic multi-tier brass samai lamps, traditional hanging brass bells, and water vessels.',
        iconType: 'lighting',
      },
      {
        id: 'trad-style-03',
        number: '03',
        title: 'Sacred Entrance Torana',
        description: 'Auspicious mango leaf toranas, fresh plantain trees, and welcoming floral archways at your entryway.',
        iconType: 'entrance',
      },
      {
        id: 'trad-style-04',
        number: '04',
        title: 'Homa & Puja Stage Layout',
        description: 'Thoughtful spatial arrangement ensuring ceremonial fire safety, priest convenience, and dignified family seating.',
        iconType: 'stage',
      },
    ],
    gallery: [
      {
        id: 'trad-gal-01',
        title: 'Auspicious Marigold Stage',
        category: 'Ceremony Stage',
        image: '/images/events/traditional-ceremonies.jpg',
        imageAlt: 'South Indian traditional stage with marigold garlands and brass lamps in Tumakuru',
        caption: 'Sacred ceremonial stage adorned with fresh marigolds and heirloom brass samais.',
      },
      {
        id: 'trad-gal-02',
        title: 'Temple Pillar Backdrop',
        category: 'Mandap Artistry',
        image: '/images/gallery/gallery-02-traditional.jpg',
        imageAlt: 'Carved temple pillars with floral ropes and silk fabric drapery',
        caption: 'Classical temple pillar architecture framing auspicious family rituals.',
      },
      {
        id: 'trad-gal-03',
        title: 'Heirloom Brass Uruli Detail',
        category: 'Detail Styling',
        image: '/images/events/art-of-celebration.jpg',
        imageAlt: 'Brass uruli filled with fresh water, rose petals, and floating diyas',
        caption: 'Warm brass vessel with fresh blooms welcoming guests at the threshold.',
      },
      {
        id: 'trad-gal-04',
        title: 'Ceremonial Floral Gateway',
        category: 'Entrance Styling',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Banana stem and marigold floral archway at traditional venue entrance',
        caption: 'Authentic entrance torana with fresh banana leaves and fragrant jasmine.',
      },
      {
        id: 'trad-gal-05',
        title: 'Sacred Homa Ambience',
        category: 'Lighting & Setting',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Warm ambient lighting around traditional ceremonial prayer platform',
        caption: 'Warm golden ambience designed for peaceful, dignified ceremonial poojas.',
      },
    ],
    planningNotes:
      'Because traditional ceremonies like Upanayanas and Gruhapraveshas often begin at early morning Muhurthams (e.g., 6:00 AM), our team coordinates on-site floral installation the previous evening to guarantee fresh, pristine blooms at dawn.',
    relatedSlugs: ['weddings', 'baby-showers', 'special-occasions'],
    faqs: [
      {
        id: 'trad-faq-01',
        number: '01',
        question: 'Do you arrange fresh flowers for early morning Muhurtham ceremonies?',
        answer:
          'Yes. For auspicious morning Muhurthams, our team completes setup the evening before or during the pre-dawn hours so all garlands, mango leaves, and brass lamps are in place well before priests and guests arrive.',
      },
      {
        id: 'trad-faq-02',
        number: '02',
        question: 'Can you provide authentic brass lamps (Samai) and puja props?',
        answer:
          'Yes, we provide clean, polished authentic South Indian brass samai lamps in varied heights, traditional brass urulis, and decorative bell stands as part of our ceremony packages.',
      },
      {
        id: 'trad-faq-03',
        number: '03',
        question: 'Do you decorate private homes for Gruhapravesha (housewarmings) in Tumakuru?',
        answer:
          'Yes. We specialize in home Gruhapravesha styling, including entrance door toranas, stairwell floral garlands, prayer room backdrops, and balcony or terrace seating setups.',
      },
      {
        id: 'trad-faq-04',
        number: '04',
        question: 'Can we combine traditional marigold with modern pastel flowers?',
        answer:
          'Certainly. We frequently create hybrid fusion aesthetics—combining traditional marigolds and lotus buds with soft blush roses or neutral drapes for a contemporary South Indian touch.',
      },
    ],
    seo: {
      title: 'Traditional Ceremony Decoration in Tumakuru | Tumkur Events',
      metaDescription:
        'Authentic traditional ceremony decor in Tumakuru. Fresh marigold and jasmine garlands, brass samai lamps, temple mandaps for Gruhapravesha, Upanayana, and family pujas.',
      keywords: [
        'traditional decoration Tumkur',
        'Gruhapravesha decor Tumakuru',
        'Upanayana stage decor Tumkur',
        'marigold flower decoration Tumkur',
        'pooja floral decoration Tumakuru',
      ],
    },
  },

  // =========================================================================
  // 03. WEDDINGS & ENGAGEMENTS
  // =========================================================================
  weddings: {
    slug: 'weddings',
    id: 'weddings',
    number: '03',
    title: 'Weddings & Engagements',
    shortTitle: 'Weddings',
    tag: 'GRAND ROMANCE & OPULENCE',
    headline: {
      line1: 'Where Beautiful',
      line2Accent: 'Stories Begin.',
    },
    shortIntro:
      'Curated floral mandaps, opulent reception stages, custom entryway arches, and ambient decorative lighting crafted for memorable nuptials across Tumakuru district and South Karnataka.',
    heroImage: '/images/events/weddings.jpg',
    heroImageAlt:
      'Opulent South Indian wedding and engagement floral stage with curved arches, blush roses, and crystal chandeliers in Tumakuru',
    heroFocalPoint: 'center 40%',
    essence: {
      eyebrow: 'TIMELESS ROMANCE & GRANDEUR',
      headline: 'A sacred union,',
      scriptAccent: 'framed in unforgettable splendour.',
      paragraphs: [
        'A wedding is the grand convergence of two families, centuries of heritage, and a lifetime of devotion. In Tumakuru, wedding celebrations span intimate engagement ceremonies to monumental multi-day wedding celebrations welcoming thousands of well-wishers.',
        'At Tumkur Events, we curate bespoke wedding environments that harmoniously balance grand scale with intimate poetic detail. From handcrafted floral mandaps that frame the sacred Saptapadi to contemporary reception stages with cascading floral arches and warm chandeliers, every view is designed to be cinematic.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of luxury wedding floral stage craft with roses and chandeliers in Tumakuru',
      attributes: [
        { label: 'Event Types', value: 'Engagements, Muhurtham, Sangeet & Grand Receptions' },
        { label: 'Floral Design', value: 'Exotic Lilies, Orchids, Hydrangeas & Traditional Blooms' },
        { label: 'Architecture', value: 'Dome Mandaps, Floral Arches & Crystal Chandeliers' },
        { label: 'Venue Scale', value: 'Convention Halls, Kalyana Mantapas & Open-Air Lawns' },
      ],
    },
    concepts: [
      {
        id: 'wed-concept-01',
        number: '01',
        title: 'Romantic Floral Elegance',
        subtitle: 'Curved Arches & Pastel Bloom Cascades',
        description:
          'Voluminous floral arrangements in romantic hues of blush, ivory, and champagne rose gold. Framed by curving architectural arches, crystal chandeliers, and warm diffused lighting for modern reception elegance.',
        image: '/images/events/weddings.jpg',
        imageAlt: 'Romantic luxury wedding stage with curved floral arches and chandeliers in Tumakuru',
        highlights: ['Layered curved arch frames', 'Blush rose & orchid cascades', 'Tiered crystal chandeliers'],
      },
      {
        id: 'wed-concept-02',
        number: '02',
        title: 'Timeless Traditional Grandeur',
        subtitle: 'Authentic South Indian Royal Mandap',
        description:
          'Deep gold and royal maroon drapery accented with thousands of fresh marigold ropes, cascading white jasmine, and brass oil lamps. Designed to honor sacred Vedic rites with ceremonial grandeur.',
        image: '/images/events/traditional-ceremonies.jpg',
        imageAlt: 'Timeless traditional wedding mandap with royal pillars and fresh marigold decor',
        highlights: ['Four-pillar carved mandap', 'Thousand-bloom jasmine ceilings', 'Auspicious kalasha accents'],
      },
      {
        id: 'wed-concept-03',
        number: '03',
        title: 'Contemporary Luxury Styling',
        subtitle: 'Geometric Lines & Theatrical Glow',
        description:
          'Sleek mirrored runways, customized geometric backdrops with integrated LED warmth, and floating floral clouds. Tailored for contemporary sangeet evenings and luxury banquet receptions.',
        image: '/images/events/stage-events.jpg',
        imageAlt: 'Contemporary wedding reception stage with architectural backdrops and concert lighting',
        highlights: ['Seamless mirror aisle carpet', 'Minimalist metallic framework', 'Dynamic theatrical warm beams'],
      },
    ],
    stylingElements: [
      {
        id: 'wed-style-01',
        number: '01',
        title: 'Mandap Architecture',
        description: 'Bespoke circular, square, or dome mandap structures engineered for 360-degree guest visibility.',
        iconType: 'stage',
      },
      {
        id: 'wed-style-02',
        number: '02',
        title: 'Grand Entrance Pathway',
        description: 'Aisle styling with floral pedestals, warm fairy light canopies, and custom bride-and-groom welcome arches.',
        iconType: 'entrance',
      },
      {
        id: 'wed-style-03',
        number: '03',
        title: 'Stage & Backdrop Design',
        description: 'Multi-layered acoustic and floral backdrops, tailored sofas, and stage carpeting creating timeless photographs.',
        iconType: 'backdrop',
      },
      {
        id: 'wed-style-04',
        number: '04',
        title: 'Lighting & Ambiance Craft',
        description: 'Warm pin spots on the bride and groom, perimeter wash lights, and hanging brass or crystal fixtures.',
        iconType: 'lighting',
      },
    ],
    gallery: [
      {
        id: 'wed-gal-01',
        title: 'Grand Floral Reception Stage',
        category: 'Reception Styling',
        image: '/images/events/weddings.jpg',
        imageAlt: 'Opulent wedding reception stage with curved floral arches in Tumakuru',
        caption: 'Breathtaking reception stage adorned with thousands of fresh roses and chandeliers.',
      },
      {
        id: 'wed-gal-02',
        title: 'Classical Vedic Mandap',
        category: 'Muhurtham Mandap',
        image: '/images/gallery/gallery-03-engagement.jpg',
        imageAlt: 'Traditional South Indian wedding mandap with golden pillars and fresh florals',
        caption: 'Auspicious mandap setup crafted for the sacred morning Muhurtham ceremony.',
      },
      {
        id: 'wed-gal-03',
        title: 'Candlelit Walkway Canopy',
        category: 'Aisle Decor',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Fairy light tunnel and floral walkway for bride and groom entry',
        caption: 'Luminous entrance aisle creating an unforgettable bridal walk.',
      },
      {
        id: 'wed-gal-04',
        title: 'Engagement Ring Ceremony Stage',
        category: 'Engagement Concept',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Intimate engagement stage with warm fairy lights and modern backdrop',
        caption: 'Refined engagement decor balancing modern intimacy with floral elegance.',
      },
      {
        id: 'wed-gal-05',
        title: 'Theatrical Reception Arena',
        category: 'Grand Venue',
        image: '/images/events/stage-events.jpg',
        imageAlt: 'Massive wedding hall setup with layered stage facades in Tumakuru',
        caption: 'Expansive convention hall transformation for grand celebratory receptions.',
      },
    ],
    planningNotes:
      'We recommend booking wedding and engagement decor 1 to 3 months prior to your celebration date. We conduct detailed site visits to your chosen Kalyana Mantapa or resort in Tumakuru to map stage measurements, acoustics, and power distribution.',
    relatedSlugs: ['traditional-ceremonies', 'special-occasions', 'stage-events'],
    faqs: [
      {
        id: 'wed-faq-01',
        number: '01',
        question: 'Do you conduct site visits to Kalyana Mantapas across Tumakuru?',
        answer:
          'Yes. We perform pre-event venue walkthroughs across convention centers and wedding halls in Tumakuru to measure exact stage dimensions, check rigging points, and plan logistical access.',
      },
      {
        id: 'wed-faq-02',
        number: '02',
        question: 'Can you handle both morning Muhurtham and evening Reception styling?',
        answer:
          'Yes. We often manage comprehensive wedding transformations—creating an authentic traditional mandap for the morning rituals and seamlessly refreshing the stage for the evening cocktail or reception.',
      },
      {
        id: 'wed-faq-03',
        number: '03',
        question: 'Can we choose specific flowers for our wedding decor?',
        answer:
          'Yes. We source premium domestic and exotic blooms including Holland roses, white hydrangeas, orchids, lilies, as well as traditional Mysore jasmine and marigold based on your preferences.',
      },
      {
        id: 'wed-faq-04',
        number: '04',
        question: 'Do you provide stage furniture and lighting as part of the setup?',
        answer:
          'Yes, our wedding packages include comfortable luxury couple sofas, matching ottomans, warm stage wash lighting, and decorative chandeliers.',
      },
    ],
    seo: {
      title: 'Wedding & Engagement Decor in Tumakuru | Tumkur Events',
      metaDescription:
        'Luxury wedding and engagement stage decoration in Tumakuru. Bespoke floral mandaps, reception stages, entrance canopies, and lighting for South Indian weddings.',
      keywords: [
        'wedding decoration Tumkur',
        'mandap decoration Tumakuru',
        'engagement stage decor Tumkur',
        'reception stage design Tumkur',
        'kalyana mantapa decor Tumakuru',
      ],
    },
  },

  // =========================================================================
  // 04. BABY SHOWERS & NEW BEGINNINGS
  // =========================================================================
  'baby-showers': {
    slug: 'baby-showers',
    id: 'baby-showers',
    number: '04',
    title: 'Baby Showers & New Beginnings',
    shortTitle: 'Baby Showers',
    tag: 'SWEET BEGINNINGS & BLESSINGS',
    headline: {
      line1: "Welcoming Life's",
      line2Accent: 'Sweetest Moments.',
    },
    shortIntro:
      'Tender Seemantha celebrations, cradle ceremonies, and naming rituals styled with floral cradles, pastel palettes, and inviting floral backdrops in Tumakuru.',
    heroImage: '/images/events/baby-showers.jpg',
    heroImageAlt:
      'Delicate baby shower and naming ceremony decor with floral cradle, pastel balloon clusters, and warm ambiance in Tumakuru',
    heroFocalPoint: 'center 35%',
    essence: {
      eyebrow: 'GENTLE WARMTH & CHERISHED HOPES',
      headline: 'A tender new chapter,',
      scriptAccent: 'cradled in soft beauty and love.',
      paragraphs: [
        'The arrival of a newborn is among life’s purest joys. In Karnataka tradition, celebrations like Seemantha (baby shower) and Thottilu Utsava (cradle ceremony / naming ceremony) weave together ancestral blessings with the intimate excitement of parenthood.',
        'We craft serene, heartfelt environments designed for comfort and elegance. Thoughtfully arranged floral cradles, gentle pastel balloons, fragrant tuberoses, and relaxed seating ensure the mom-to-be and newborn feel serene throughout the blessings.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of floral cradle and soft pastel flowers in Tumakuru',
      attributes: [
        { label: 'Ceremonies', value: 'Seemantha, Cradle Ceremony (Thottilu), Naming Rites' },
        { label: 'Palette Choices', value: 'Cream, Sage Green, Pastel Pink, Powder Blue & Gold' },
        { label: 'Centerpiece', value: 'Artisanal Floral Cradle / Golden Wicker Bassinet' },
        { label: 'Atmosphere', value: 'Soft, Warm, Comfortable & Family-Centered' },
      ],
    },
    concepts: [
      {
        id: 'baby-concept-01',
        number: '01',
        title: 'Artisanal Floral Cradles',
        subtitle: 'Wicker & Floral Bassinet Styling',
        description:
          'Heirloom golden wicker cradles or suspended wooden swings tenderly garlanded with fresh baby’s breath, white roses, and trailing ivy. The signature centerpiece for naming and cradle ceremonies.',
        image: '/images/events/baby-showers.jpg',
        imageAlt: 'Delicate artisanal floral cradle with pastel blooms in Tumakuru',
        highlights: ['Hand-garlanded wicker cradle', 'Cloud-soft baby padding & textiles', 'Floating flower halo frame'],
      },
      {
        id: 'baby-concept-02',
        number: '02',
        title: 'Soft Pastel Balloon Sculptures',
        subtitle: 'Cloud-Like Arches & Teddy Themes',
        description:
          'Organic balloon clusters in cream, eucalyptus, and pale blush forming gentle arches around soft arch backdrops. Complemented by delicate woodland or cloud motifs for modern baby shower joy.',
        image: '/images/events/birthdays.jpg',
        imageAlt: 'Soft pastel cloud balloon installation for baby shower celebration',
        highlights: ['Pastel double-stuffed balloons', 'Woodland or celestial prop details', 'Custom welcoming name plaque'],
      },
      {
        id: 'baby-concept-03',
        number: '03',
        title: 'Traditional Seemantha Stage Setups',
        subtitle: 'Marigold & Lotus Blessing Stage',
        description:
          'Traditional cultural decor honoring the expectant mother with brass urulis, fresh jasmine bangles, marigold drapes, and comfortable silk seating for elderly family blessings.',
        image: '/images/events/traditional-ceremonies.jpg',
        imageAlt: 'Traditional South Indian Seemantha ceremony stage with fresh flowers',
        highlights: ['Auspicious jasmine & marigold backdrop', 'Traditional wooden swing or Diwan', 'Brass puja accessories'],
      },
    ],
    stylingElements: [
      {
        id: 'baby-style-01',
        number: '01',
        title: 'Floral Cradle Styling',
        description: 'Bespoke cradle decoration featuring baby-safe, allergen-tested fresh blossoms and soft organic fabrics.',
        iconType: 'cradle',
      },
      {
        id: 'baby-style-02',
        number: '02',
        title: 'Mom-to-Be Seating Throne',
        description: 'Specially cushioned comfortable seating ensuring the mother-to-be rests comfortably during long blessings.',
        iconType: 'backdrop',
      },
      {
        id: 'baby-style-03',
        number: '03',
        title: 'Entrance & Keepsake Signage',
        description: 'Gentle welcome board with customized calligraphy, floral accents, and keepsake guest blessing cards.',
        iconType: 'entrance',
      },
      {
        id: 'baby-style-04',
        number: '04',
        title: 'Soft Ambient Illumination',
        description: 'Diffused warm lighting that avoids harsh glare, ensuring beautiful, flattering family photographs.',
        iconType: 'lighting',
      },
    ],
    gallery: [
      {
        id: 'baby-gal-01',
        title: 'Floral Cradle Centerpiece',
        category: 'Cradle Styling',
        image: '/images/events/baby-showers.jpg',
        imageAlt: 'Artisanal wicker cradle with white flowers and pastel balloons in Tumakuru',
        caption: 'Wicker cradle adorned with white roses and baby’s breath for Thottilu Utsava.',
      },
      {
        id: 'baby-gal-02',
        title: 'Serene Pastel Stage',
        category: 'Baby Shower Stage',
        image: '/images/gallery/gallery-04-baby-shower.jpg',
        imageAlt: 'Soft pastel backdrop with floral pillars and comfortable mother seating',
        caption: 'Calm cream and sage green stage setting for Seemantha celebration.',
      },
      {
        id: 'baby-gal-03',
        title: 'Floral Detail & Welcome Board',
        category: 'Entrance Art',
        image: '/images/events/art-of-celebration.jpg',
        imageAlt: 'Welcome board framed in pastel flowers for baby shower ceremony',
        caption: 'Customized greeting sign welcoming loved ones to the ceremony.',
      },
      {
        id: 'baby-gal-04',
        title: 'Organic Balloon Halo',
        category: 'Modern Theme',
        image: '/images/events/birthdays.jpg',
        imageAlt: 'Circular balloon arch in pastel hues with floral accents',
        caption: 'Organic balloon halo framing intimate family blessings.',
      },
      {
        id: 'baby-gal-05',
        title: 'Traditional Blessing Ambience',
        category: 'Traditional Touch',
        image: '/images/events/traditional-ceremonies.jpg',
        imageAlt: 'Traditional brass uruli and marigold decor for Seemantha ceremony',
        caption: 'Cultural auspicious accents celebrating the upcoming new arrival.',
      },
    ],
    planningNotes:
      'We prioritize the mother-to-be’s comfort in all floor layouts, ensuring plenty of space around the cradle for aunts, grandmothers, and guests to perform traditional blessing rituals without crowding.',
    relatedSlugs: ['birthdays', 'traditional-ceremonies', 'special-occasions'],
    faqs: [
      {
        id: 'baby-faq-01',
        number: '01',
        question: 'Do you provide the cradle for the naming ceremony?',
        answer:
          'Yes, we provide beautifully crafted wicker bassinet cradles or traditional wooden suspended cradles, decorated with fresh florals and safe linen liners.',
      },
      {
        id: 'baby-faq-02',
        number: '02',
        question: 'Are the flowers used safe for newborns?',
        answer:
          'Yes. We select fresh, pollen-light blooms (such as spray roses, baby’s breath, and tuberoses) and keep all stems carefully bound so there are no loose needles or thorns near the baby.',
      },
      {
        id: 'baby-faq-03',
        number: '03',
        question: 'Can you set up Seemantha decor at home in Tumakuru?',
        answer:
          'Yes, we regularly transform living rooms and family halls for intimate home Seemantha and naming rituals, adjusting backdrops to fit your room dimensions perfectly.',
      },
      {
        id: 'baby-faq-04',
        number: '04',
        question: 'Can we include gender-neutral or customized theme colors?',
        answer:
          'Absolutely. Popular palettes include cream and sage green, neutral gold and white, sunny yellow, as well as classic blush pink and powder blue combinations.',
      },
    ],
    seo: {
      title: 'Baby Shower & Cradle Ceremony Decor in Tumakuru | Tumkur Events',
      metaDescription:
        'Heartfelt baby shower, Seemantha, and naming ceremony decoration in Tumakuru. Floral cradles, pastel balloon styling, traditional backdrops, and photo corners.',
      keywords: [
        'baby shower decoration Tumkur',
        'cradle ceremony decor Tumakuru',
        'Seemantha decoration Tumkur',
        'naming ceremony stage Tumakuru',
        'floral cradle decor Tumkur',
      ],
    },
  },

  // =========================================================================
  // 05. CORPORATE & INSTITUTIONAL EVENTS
  // =========================================================================
  corporate: {
    slug: 'corporate',
    id: 'corporate',
    number: '05',
    title: 'Corporate & Institutional Events',
    shortTitle: 'Corporate',
    tag: 'PROFESSIONAL & ARCHITECTURAL',
    headline: {
      line1: 'Every Occasion.',
      line2Accent: 'A Lasting Impression.',
    },
    shortIntro:
      'Executive stages, branded environments, clean floral accents, and premium lighting for corporate conferences, summits, and annual milestone celebrations in Tumakuru.',
    heroImage: '/images/events/corporate.jpg',
    heroImageAlt:
      'Sleek corporate conference stage with contemporary acoustic backdrop and ambient lighting in Tumakuru',
    heroFocalPoint: 'center 40%',
    essence: {
      eyebrow: 'ARCHITECTURAL PRECISION & REFINEMENT',
      headline: 'Where professional vision,',
      scriptAccent: 'meets impeccable execution.',
      paragraphs: [
        'Corporate gatherings reflect your brand’s stature, values, and forward ambition. In the expanding industrial and educational hub of Tumakuru, business events demand punctuality, structural integrity, and executive polish.',
        'We design architectural stage environments tailored for clear visibility, keynote acoustics, and seamless media coverage. From annual general meetings and milestone galas to product unveilings and institutional symposiums, our decor balances sophisticated corporate identity with subtle aesthetic warmth.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of modern corporate stage backdrop and podium florals in Tumakuru',
      attributes: [
        { label: 'Event Formats', value: 'Conferences, Annual Days, Awards & Product Launches' },
        { label: 'Design Language', value: 'Architectural Panels, Matte Finishes & Brand Colors' },
        { label: 'Technical Fit', value: 'LED Screen Integration, Podium & Dignitary Seating' },
        { label: 'Turnaround', value: 'Strict Punctual Handover with Technical Rehearsal Window' },
      ],
    },
    concepts: [
      {
        id: 'corp-concept-01',
        number: '01',
        title: 'Executive Keynote & Presentation Stages',
        subtitle: 'Sleek Backdrops & AV Integration',
        description:
          'Structured acoustic-finish backdrop panels framing high-definition LED displays. Finished with precision podium styling, concealed cable routing, and understated floral accents that project corporate authority.',
        image: '/images/events/corporate.jpg',
        imageAlt: 'Executive keynote stage with LED screen integration in Tumakuru',
        highlights: ['Seamless LED screen surround panels', 'Branded podium with floral crest', 'Executive dignitary lounge seating'],
      },
      {
        id: 'corp-concept-02',
        number: '02',
        title: 'Branded Corporate Gala Environments',
        subtitle: 'Milestone Banquets & Award Nights',
        description:
          'Sophisticated black-and-gold or deep navy palettes for annual company banquets. Featuring branded step-and-repeat photo walls, customized trophy display tables, and ambient perimeter uplighting.',
        image: '/images/events/stage-events.jpg',
        imageAlt: 'Corporate gala award ceremony stage with dramatic warm lighting',
        highlights: ['Media photo backdrop wall', 'Trophy & award presentation staging', 'Dynamic programmed lighting cues'],
      },
      {
        id: 'corp-concept-03',
        number: '03',
        title: 'Contemporary Floral & Architectural Accents',
        subtitle: 'Refined Table & Reception Styling',
        description:
          'Low-profile architectural floral arrangements on round banquet tables, executive registration counters, and VIP entrance walkways that provide warmth without cluttering business conversations.',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Executive banquet dining setup with minimal floral table runners',
        highlights: ['Low-profile executive table blooms', 'Registration & welcome desk branding', 'Directional entrance archways'],
      },
    ],
    stylingElements: [
      {
        id: 'corp-style-01',
        number: '01',
        title: 'Stage & Backdrop Structure',
        description: 'Rigid wooden and truss framework with matte fabric or vinyl wrapping matched to brand PANTONE guidelines.',
        iconType: 'backdrop',
      },
      {
        id: 'corp-style-02',
        number: '02',
        title: 'Podium & Dignitary Layout',
        description: 'Custom acrylic or wooden lecterns with subtle floral crests and coordinated VIP chairs on stage.',
        iconType: 'stage',
      },
      {
        id: 'corp-style-03',
        number: '03',
        title: 'Registration & Entrance Experience',
        description: 'Branded reception counters, sponsor acknowledgment backdrops, and clean directional signage.',
        iconType: 'entrance',
      },
      {
        id: 'corp-style-04',
        number: '04',
        title: 'Presentation Lighting',
        description: 'Even wash lighting across presenters and dignitaries ensuring broadcast-quality photography and videography.',
        iconType: 'lighting',
      },
    ],
    gallery: [
      {
        id: 'corp-gal-01',
        title: 'Keynote Conference Stage',
        category: 'Conference Setup',
        image: '/images/events/corporate.jpg',
        imageAlt: 'Sleek corporate conference stage setup in Tumakuru',
        caption: 'Clean, architectural stage designed for executive business conferences.',
      },
      {
        id: 'corp-gal-02',
        title: 'Annual Gala Stage Arena',
        category: 'Award Ceremony',
        image: '/images/events/stage-events.jpg',
        imageAlt: 'Auditorium stage with layered gold arches and corporate lighting',
        caption: 'Grand auditorium stage tailored for corporate awards and milestones.',
      },
      {
        id: 'corp-gal-03',
        title: 'Executive Banquet Setting',
        category: 'Corporate Dining',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Evening corporate milestone banquet tables under warm fairy lights',
        caption: 'Refined banquet arrangement for annual leadership dinners.',
      },
      {
        id: 'corp-gal-04',
        title: 'VIP Entrance Canopy',
        category: 'Entrance Styling',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Well-lit entrance tunnel for corporate summit delegates',
        caption: 'Welcoming delegate walkway creating a polished first impression.',
      },
      {
        id: 'corp-gal-05',
        title: 'Podium & Floral Accent Detail',
        category: 'Branded Detail',
        image: '/images/events/art-of-celebration.jpg',
        imageAlt: 'Detail of fresh corporate flower arrangement on reception counter',
        caption: 'Understated botanical touches adding natural elegance to business venues.',
      },
    ],
    planningNotes:
      'We coordinate closely with hotel AV technicians, facility managers, and event conveners in Tumakuru to ensure stage load-in, branding approvals, and safety compliances are signed off well before attendee registration.',
    relatedSlugs: ['stage-events', 'special-occasions', 'birthdays'],
    faqs: [
      {
        id: 'corp-faq-01',
        number: '01',
        question: 'Can you match stage decor to our company brand colors and guidelines?',
        answer:
          'Yes. We align backdrop fabrics, lighting washes, print media, and floral accents with your corporate brand palette and vector brand assets.',
      },
      {
        id: 'corp-faq-02',
        number: '02',
        question: 'Do you provide stage lighting and podium rentals?',
        answer:
          'Yes. We provide presentation lighting, spotlights for speakers, branded podiums, dignitary sofas, and backdrop structures as a unified package.',
      },
      {
        id: 'corp-faq-03',
        number: '03',
        question: 'Can you work within strict venue setup time windows?',
        answer:
          'Yes. We routinely execute overnight or early-morning setups with tight turnaround deadlines so your venue is ready for technical sound checks hours before delegates arrive.',
      },
      {
        id: 'corp-faq-04',
        number: '04',
        question: 'Do you provide formal GST invoices for corporate bookings?',
        answer:
          'Yes, all corporate and institutional bookings are accompanied by proper commercial agreements, itemized quotations, and formal GST tax invoices.',
      },
    ],
    seo: {
      title: 'Corporate Event & Conference Decor in Tumakuru | Tumkur Events',
      metaDescription:
        'Professional corporate event, seminar, and conference stage decoration in Tumakuru. Branded backdrops, podium styling, gala lighting, and executive setups.',
      keywords: [
        'corporate event decor Tumkur',
        'conference stage design Tumakuru',
        'annual day stage decoration Tumkur',
        'seminar backdrop Tumakuru',
        'corporate party planner Tumkur',
      ],
    },
  },

  // =========================================================================
  // 06. SPECIAL OCCASIONS & MILESTONES
  // =========================================================================
  'special-occasions': {
    slug: 'special-occasions',
    id: 'special-occasions',
    number: '06',
    title: 'Special Occasions & Milestones',
    shortTitle: 'Milestones',
    tag: 'PERSONAL & MEMORABLE',
    headline: {
      line1: 'For Every Moment',
      line2Accent: 'Worth Remembering.',
    },
    shortIntro:
      'Intimate anniversaries, retirement banquets, silver jubilees, romantic dinner settings, and surprise celebrations curated with heartfelt care in Tumakuru.',
    heroImage: '/images/events/special-occasions.jpg',
    heroImageAlt:
      'Intimate evening outdoor family dining celebration under fairy lights with candlelit floral tables in Tumakuru',
    heroFocalPoint: 'center 45%',
    essence: {
      eyebrow: 'HEARTFELT MEMORIES & INTIMACY',
      headline: 'Celebrating life’s milestones,',
      scriptAccent: 'with warmth, poetry, and grace.',
      paragraphs: [
        'Not every unforgettable gathering requires a stadium. Some of life’s most profound milestones—a 25th wedding anniversary, a parent’s retirement celebration, a housewarming with close kin, or a private surprise dinner—thrive on intimacy and thoughtful curation.',
        'We specialize in crafting atmospheric, detail-rich settings that feel like home. Golden fairy light canopies overhead, candlelit banquet tables dressed with seasonal florals, and personalized memory walls make every attendee feel deeply cherished across venues in Tumakuru.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of candlelit floral dining table and fairy lights in Tumakuru',
      attributes: [
        { label: 'Celebration Types', value: 'Silver/Golden Anniversaries, Retirements & Private Dinners' },
        { label: 'Aesthetic Direction', value: 'Candlelight, Warm Fairy Lights & Lush Table Florals' },
        { label: 'Venue Options', value: 'Private Lawns, Farmhouses, Rooftops & Boutique Halls' },
        { label: 'Guest Scale', value: 'Intimate (15 - 150 Cherished Guests)' },
      ],
    },
    concepts: [
      {
        id: 'spec-concept-01',
        number: '01',
        title: 'Candlelit Milestone Dining & Banquets',
        subtitle: 'Canopy Fairy Lights & Long Table Florals',
        description:
          'Long banquet tables styled with ivory linen runners, brass candlestick holders, and lush botanical centerpieces. Sheltered beneath a cascading ceiling of warm fairy lights that glow gently as twilight settles.',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Intimate outdoor dinner under fairy light canopy in Tumakuru',
        highlights: ['Overhead starlight fairy canopy', 'Real wax LED taper candles', 'Lush botanical table garlands'],
      },
      {
        id: 'spec-concept-02',
        number: '02',
        title: 'Golden & Silver Anniversary Stages',
        subtitle: 'Gilded Frames & Floral Backdrop',
        description:
          'Sophisticated stage setups celebrating 25, 50, or 60 years of togetherness. Featuring elegant gold-leaf metallic arches, framed family journey photographs, and comfortable couple armchairs.',
        image: '/images/events/weddings.jpg',
        imageAlt: 'Elegant golden anniversary stage with warm florals and chandeliers',
        highlights: ['Gilded metallic arch frames', 'Milestone year numerals in gold', 'Memory timeline photograph display'],
      },
      {
        id: 'spec-concept-03',
        number: '03',
        title: 'Intimate Memory & Photo Backdrops',
        subtitle: 'Personalized Storytelling Corners',
        description:
          'Dedicated photo backdrops incorporating personalized timelines, vintage wooden frames, neon quotes, and lush greenery that invite guests to share stories and capture heirloom photographs.',
        image: '/images/events/birthdays.jpg',
        imageAlt: 'Memory wall photo backdrop with framed pictures and floral border',
        highlights: ['Rustic timber photo display wall', 'Warm fairy light strings', 'Interactive guest wishing tree'],
      },
    ],
    stylingElements: [
      {
        id: 'spec-style-01',
        number: '01',
        title: 'Fairy Light & Lantern Canopies',
        description: 'Warm overhead illumination creating an enchanting, romantic outdoor ambience.',
        iconType: 'lighting',
      },
      {
        id: 'spec-style-02',
        number: '02',
        title: 'Curated Milestone Photo Walls',
        description: 'Tribute displays showcasing photographs and memorabilia spanning decades of memories.',
        iconType: 'backdrop',
      },
      {
        id: 'spec-style-03',
        number: '03',
        title: 'Table Linens & Floral Runners',
        description: 'Premium textured table linens, low floral centerpieces, and personalized dinner menus.',
        iconType: 'table',
      },
      {
        id: 'spec-style-04',
        number: '04',
        title: 'Intimate Welcome Entryway',
        description: 'A welcoming pathway of lanterns, customized chalkboard calligraphy, and floral planters.',
        iconType: 'entrance',
      },
    ],
    gallery: [
      {
        id: 'spec-gal-01',
        title: 'Evening Fairy Light Banquet',
        category: 'Dining Ambiance',
        image: '/images/events/special-occasions.jpg',
        imageAlt: 'Outdoor dinner celebration with fairy lights in Tumakuru',
        caption: 'Enchanting evening lawn dinner celebrating a 50th birthday milestone.',
      },
      {
        id: 'spec-gal-02',
        title: 'Anniversary Stage Elegance',
        category: 'Anniversary Stage',
        image: '/images/gallery/gallery-05-milestone.jpg',
        imageAlt: 'Silver jubilee anniversary stage with gold accents in Tumakuru',
        caption: 'Golden anniversary backdrop designed for cherished family memories.',
      },
      {
        id: 'spec-gal-03',
        title: 'Canopy Tunnel Lighting',
        category: 'Pathway Lighting',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Illuminated fairy light tunnel leading into celebration venue',
        caption: 'Magical light tunnel welcoming guests into an evening garden gathering.',
      },
      {
        id: 'spec-gal-04',
        title: 'Refined Tabletop Blooms',
        category: 'Table Detail',
        image: '/images/events/art-of-celebration.jpg',
        imageAlt: 'Close-up of candlelit table setting with fresh white florals',
        caption: 'Intimate dining centerpieces encouraging warm, relaxed conversation.',
      },
      {
        id: 'spec-gal-05',
        title: 'Tender Celebration Arch',
        category: 'Photo Arch',
        image: '/images/events/baby-showers.jpg',
        imageAlt: 'Pastel and gold floral arch for family milestone portraits',
        caption: 'Bespoke archway designed for multi-generational family portraits.',
      },
    ],
    planningNotes:
      'For surprise anniversary dinners or intimate retirement banquets in Tumakuru, our setup crew works discreetly and punctually so the honoree is completely delighted upon arrival.',
    relatedSlugs: ['birthdays', 'weddings', 'traditional-ceremonies'],
    faqs: [
      {
        id: 'spec-faq-01',
        number: '01',
        question: 'Can you organize secret surprise anniversary decorations?',
        answer:
          'Yes! We frequently coordinate discreet surprise setups at private homes, farmhouses, or restaurants in Tumakuru, arriving during specific coordination windows.',
      },
      {
        id: 'spec-faq-02',
        number: '02',
        question: 'Do you decorate outdoor farmhouse or garden spaces?',
        answer:
          'Yes, we specialize in outdoor and garden setups, providing weather-rated fairy lights, stable freestanding arches, and lawn dining arrangements.',
      },
      {
        id: 'spec-faq-03',
        number: '03',
        question: 'Can we incorporate family photographs into the decor?',
        answer:
          'Yes. We craft custom photo timelines, memory clotheslines, and framed collage panels that tell the story of the couple or honoree through the years.',
      },
      {
        id: 'spec-faq-04',
        number: '04',
        question: 'What is the ideal lead time for intimate celebrations?',
        answer:
          'We typically require 5 to 7 days for intimate dining or milestone setups, though we can occasionally accommodate expedited requests based on availability.',
      },
    ],
    seo: {
      title: 'Anniversary & Milestone Event Decor in Tumakuru | Tumkur Events',
      metaDescription:
        'Intimate anniversary, retirement, and milestone celebration decor in Tumakuru. Fairy light canopies, candlelit tables, photo walls, and garden banquet styling.',
      keywords: [
        'anniversary decoration Tumkur',
        'milestone celebration decor Tumakuru',
        'fairy light dinner decor Tumkur',
        'retirement party stage Tumakuru',
        'surprise party decor Tumkur',
      ],
    },
  },

  // =========================================================================
  // 07. STAGE & LARGE EVENTS
  // =========================================================================
  'stage-events': {
    slug: 'stage-events',
    id: 'stage-events',
    number: '07',
    title: 'Stage & Large Events',
    shortTitle: 'Stage Events',
    tag: 'GRAND & SPECTACULAR',
    headline: {
      line1: 'Celebrations',
      line2Accent: 'Beyond the Ordinary.',
    },
    shortIntro:
      'Monumental cultural arenas, auditorium setups, large floral stages, and dramatic event lighting for grand festivals and public celebrations across Tumakuru.',
    heroImage: '/images/events/stage-events.jpg',
    heroImageAlt:
      'Grand auditorium stage setup with layered gold arches, cascading marigold pillars, and concert lighting in Tumakuru',
    heroFocalPoint: 'center 35%',
    essence: {
      eyebrow: 'MONUMENTAL SCALE & ARTISTRY',
      headline: 'A theatrical spectacle,',
      scriptAccent: 'engineered for awe and wonder.',
      paragraphs: [
        'When an occasion gathers an entire community, the visual stage must carry commanding presence, uncompromised structural safety, and flawless sightlines from the front row to the furthest gallery seat.',
        'At Tumkur Events, we have the technical inventory, skilled craftsmen, and rigging expertise to transform vast auditoriums, open-air stadium grounds, and major convention halls. Layered architectural facades, thousands of fresh floral ropes, and coordinated theatrical lighting produce an unforgettable panoramic visual.',
      ],
      detailImage: '/images/events/art-of-celebration.jpg',
      detailImageAlt: 'Detail of large stage truss construction and floral layering in Tumakuru',
      attributes: [
        { label: 'Stage Dimensions', value: '30ft to 80ft+ Wide Span Installations' },
        { label: 'Engineering', value: 'Heavy Duty Trussing, Fire-Retardant Drapes & Wind Anchoring' },
        { label: 'Lighting Craft', value: 'Sharpys, LED Pars, Warm Blinders & Follow Spots' },
        { label: 'Audiences', value: '500 to 5,000+ Attendees Across South Karnataka' },
      ],
    },
    concepts: [
      {
        id: 'stage-concept-01',
        number: '01',
        title: 'Monumental Layered Arch Stages',
        subtitle: 'Multi-Tiered Gold & Floral Facades',
        description:
          'Staggered architectural arches in gold and ivory soaring up to 24 feet high. Draped in thousands of fresh floral ropes and backdropped by rich velvet pleating for grand public inaugurations.',
        image: '/images/events/stage-events.jpg',
        imageAlt: 'Monumental layered arch stage setup with dramatic concert lighting in Tumakuru',
        highlights: ['Triple-layered arch depth', 'Cascading floral curtain ropes', 'Concealed stage monitor integration'],
      },
      {
        id: 'stage-concept-02',
        number: '02',
        title: 'Cultural Auditorium Theatrical Sets',
        subtitle: 'Heritage Motifs & Symmetrical Columns',
        description:
          'Designed specifically for college auditoriums and indoor cultural centers in Tumakuru. Incorporating classic temple pillars, warm amber stage washes, and dignified dignitary dais layouts.',
        image: '/images/events/traditional-ceremonies.jpg',
        imageAlt: 'Cultural auditorium stage with traditional pillars and floral borders',
        highlights: ['Acoustic-safe drapery', 'Symmetrical floral side pillars', 'Central ceremonial podium backdrop'],
      },
      {
        id: 'stage-concept-03',
        number: '03',
        title: 'Festival & Open-Air Arena Canopies',
        subtitle: 'Weather-Proof Staging & Luminous Ceilings',
        description:
          'Massive open-air festival stages built with heavy-duty box trussing, wind-resistant printed scrims, and towering flower towers that withstand the elements while projecting vibrant festivity.',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Open-air canopy stage and festival light arches at night',
        highlights: ['Heavy-duty box truss framework', 'Weather-rated light fixtures', 'Grand VIP enclosure canopies'],
      },
    ],
    stylingElements: [
      {
        id: 'stage-style-01',
        number: '01',
        title: 'Wide-Span Truss & Facade Architecture',
        description: 'Engineered stage framing tested for weight loads, wind resistance, and perfect audience sightlines.',
        iconType: 'stage',
      },
      {
        id: 'stage-style-02',
        number: '02',
        title: 'Massive Floral Sculptures',
        description: 'Thousands of freshly woven flower ropes, towering floral columns, and cascading stage skirtings.',
        iconType: 'floral',
      },
      {
        id: 'stage-style-03',
        number: '03',
        title: 'Theatrical Stage Lighting',
        description: 'Intelligent moving heads, warm ambient stage washes, and dramatic beam effects for stage performances.',
        iconType: 'lighting',
      },
      {
        id: 'stage-style-04',
        number: '04',
        title: 'VIP Arena & Crowd Barriers',
        description: 'Polished brass stanchions, red carpet aisles, and organized front-row dignitary enclosures.',
        iconType: 'entrance',
      },
    ],
    gallery: [
      {
        id: 'stage-gal-01',
        title: 'Auditorium Grand Arch Stage',
        category: 'Auditorium Setup',
        image: '/images/events/stage-events.jpg',
        imageAlt: 'Grand auditorium stage with gold arches and concert lights in Tumakuru',
        caption: 'Sweeping 50-foot layered arch stage for major cultural convention.',
      },
      {
        id: 'stage-gal-02',
        title: 'Royal Mandap Stage Architecture',
        category: 'Palace Stage',
        image: '/images/events/weddings.jpg',
        imageAlt: 'Massive wedding reception stage with cascading floral arches',
        caption: 'Wide-angle view of grand floral stage accommodating 3,000+ attendees.',
      },
      {
        id: 'stage-gal-03',
        title: 'Festival Canopy Ambience',
        category: 'Open-Air Arena',
        image: '/images/events/final-cta-canopy.jpg',
        imageAlt: 'Open-air light tunnel and festival canopy in Tumakuru',
        caption: 'Dramatic luminous gateway framing evening public celebrations.',
      },
      {
        id: 'stage-gal-04',
        title: 'Traditional Cultural Dais',
        category: 'Heritage Production',
        image: '/images/gallery/gallery-06-grand-stage.jpg',
        imageAlt: 'Traditional South Indian cultural stage with flower pillars and lamps',
        caption: 'Heritage stage decor tailored for state ceremonies and folk festivals.',
      },
      {
        id: 'stage-gal-05',
        title: 'Corporate Summit Stage',
        category: 'Keynote Arena',
        image: '/images/events/corporate.jpg',
        imageAlt: 'Clean architectural stage for major corporate summit in Tumakuru',
        caption: 'Architectural multi-screen backdrop setup for executive summits.',
      },
    ],
    planningNotes:
      'Large stage productions in Tumakuru require 2 to 4 weeks planning to draft CAD staging blueprints, verify electrical power capacity, and coordinate generator redundancies.',
    relatedSlugs: ['corporate', 'weddings', 'special-occasions'],
    faqs: [
      {
        id: 'stage-faq-01',
        number: '01',
        question: 'What is the maximum stage size you can construct?',
        answer:
          'We have built and styled stages spanning up to 80+ feet in width with heights up to 24 feet, utilizing heavy-duty aluminum box trussing and reinforced scaffolding.',
      },
      {
        id: 'stage-faq-02',
        number: '02',
        question: 'Do you manage complete audio-visual trussing and lighting?',
        answer:
          'Yes. We coordinate lighting trusses, LED video walls, speaker arrays, and stage decor into one unified, cohesive technical setup.',
      },
      {
        id: 'stage-faq-03',
        number: '03',
        question: 'Can you handle open-air ground events during varying weather?',
        answer:
          'Yes. Our outdoor stages utilize water-resistant tarpaulins, sandbag ballast anchoring, and weather-shielded electrical distributions to ensure safety under changing weather.',
      },
      {
        id: 'stage-faq-04',
        number: '04',
        question: 'Do you work in towns outside Tumakuru city?',
        answer:
          'Yes. We regularly execute large stage productions across Tumakuru district including Sira, Tiptur, Gubbi, Kunigal, Madhugiri, as well as Nelamangala and Bangalore outskirts.',
      },
    ],
    seo: {
      title: 'Large Stage & Event Decoration in Tumakuru | Tumkur Events',
      metaDescription:
        'Monumental stage decoration and production in Tumakuru. Large floral stages, trussing, concert lighting, and auditorium backdrops for grand festivals and conventions.',
      keywords: [
        'stage decoration Tumkur',
        'auditorium stage decor Tumakuru',
        'large event stage design Tumkur',
        'cultural festival stage Tumkur',
        'truss and lighting setup Tumakuru',
      ],
    },
  },
};

/**
 * Helper to fetch category by slug
 */
export function getEventCategoryBySlug(slug: string): EventCategoryDetail | undefined {
  return eventCategoryDetails[slug];
}

/**
 * All valid slugs for static params generation
 */
export const allCategorySlugs = Object.keys(eventCategoryDetails);

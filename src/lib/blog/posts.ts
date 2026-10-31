import { BlogPost, TableOfContentsItem } from './types';

/**
 * Editorial Article Blueprints & Draft Registry
 *
 * All articles below are prepared editorial drafts (`status: 'draft'`).
 * In accordance with Step 03, Step 11, and Step 20, unpublished drafts are excluded
 * from the public journal listing, category archives, and live public sitemaps.
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
    tags: ['Wedding Decor', 'Florals', 'Color Palettes', 'Mandap Design', 'Tumakuru Weddings'],
    dropCap: true,
    tableOfContents: [
      { id: 'honoring-ceremonial-heritage', title: 'Honoring Ceremonial Heritage', level: 2 },
      { id: 'the-trio-color-formula', title: 'The Three-Tone Palette Formula', level: 2 },
      { id: 'venue-ambient-lighting-harmony', title: 'Harmonizing with Venue Lighting', level: 2 },
      { id: 'seasonal-bloom-availability', title: 'Seasonal Blooms in South Karnataka', level: 2 },
      { id: 'curating-your-bridal-backdrop', title: 'Curating Your Bridal Backdrop', level: 2 },
    ],
    sections: [
      {
        id: 'honoring-ceremonial-heritage',
        heading: 'Honoring Ceremonial Heritage with Contemporary Grace',
        paragraphs: [
          'A wedding stage in South Karnataka is far more than a decorative visual backdrop; it is the sacred focal point where vows are exchanged, family blessings are bestowed, and ancestral traditions are commemorated. When designing the floral palette, the goal is to weave cultural resonance with refined aesthetic restraint.',
          'Traditional ceremonies historically relied on the auspicious warmth of deep saffron marigolds, pristine white Mysore mallige (jasmine), and sacred mango leaves. While these elemental botanicals remain timeless, modern celebrations often seek an elevated nuance—balancing bold auspicious pigments with serene pastels, ivory drapes, and gentle champagne accents.',
        ],
        quote: {
          text: 'Great event design does not erase traditional customs; it gives them an architectural frame where every petal feels deliberate and deeply revered.',
          author: 'Lead Floral Stylist',
          role: 'Tumkur Events Atelier',
        },
      },
      {
        id: 'the-trio-color-formula',
        heading: 'The Three-Tone Palette Formula for Timeless Photography',
        subheading: 'Balancing Dominant, Supporting, and Metallic Accents',
        paragraphs: [
          'To ensure stage photographs remain timeless across decades of family albums, we recommend adhering to our studio’s signature three-tone floral formula:',
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              'Primary Foundation (60%): Soft neutrals such as ivory hydrangeas, cream tuberose (Sugandharaja), or blush English roses that provide visual expanse without competing with bridal silk sarees.',
              'Secondary Character (30%): Deep cultural or romantic tones—rich crimson roses, amber marigold clusters, or lavender orchids that bring depth and ceremonial grounding.',
              'Sculptural Accents (10%): Warm metallic textures, heirloom brass kuthu vilakku lamps, gilded lotus motifs, or subtle gold-dusted ruscus foliage.',
            ],
          },
        ],
        callout: {
          type: 'tip',
          title: 'DECORATION TIP FOR KANJIVARAM SILKS',
          text: 'Always review your bridal saree swatch before finalizing background blossoms. If your attire features vivid royal blue or magenta silk, opt for creamy ivory backdrop florals with pale champagne roses to ensure the bride and groom stand out crisply in wide lens portraits.',
        },
      },
      {
        id: 'venue-ambient-lighting-harmony',
        heading: 'Harmonizing Flower Tones with Hall Lighting',
        paragraphs: [
          'Many kalyana mantapas and convention centers across Tumakuru feature warm halogen or high-output LED wash lighting. Flowers react dramatically to color temperature. Cool white LEDs can make pure red roses appear purplish or flat, while overly warm halogens can yellow pristine white jasmine.',
          'Our floral team tests all stage palettes under calibrated 3000K warm-white ambient lighting. This temperature enhances the natural velvet sheen of fresh roses, brings out the golden shimmer in marigold garlands, and maintains true-to-life skin tones for video coverage.',
        ],
        inlineImage: {
          src: '/images/gallery/gallery-03-engagement.jpg',
          alt: 'Close-up detail of wedding stage floral architecture with warm ambient illumination',
          caption: 'Cascading floral arch featuring pale champagne roses, seeded eucalyptus, and warm uplighting.',
          layout: 'wide',
        },
      },
      {
        id: 'seasonal-bloom-availability',
        heading: 'Navigating Seasonal Bloom Availability in Karnataka',
        paragraphs: [
          'Tumakuru’s proximity to Bengaluru’s renowned floral hubs and Devanahalli markets affords access to both locally cultivated blossoms and premium exotic imports. However, freshness and climate resilience are essential.',
          'During peak summer months (March through May), delicate petals like hydrangeas require specialized hydration reservoirs or strategic placement away from direct heat blowers. Conversely, hardy native florals like tuberose and button chrysanthemums (Sevanthige) retain their crisp geometry and fragrant presence effortlessly throughout multi-hour receptions.',
        ],
        lists: [
          {
            title: 'Reliable Blooms for Long Ceremonies:',
            type: 'bullet',
            items: [
              'Tuberose (Sugandharaja) – Exceptional structural longevity and sacred fragrance.',
              'Sevanthige (Chrysanthemums) – Available in vivid saffron, cream, and rich amber.',
              'Dutch Roses – Dense petal counts that maintain shape under stage spotlights.',
              'Carnations – Excellent moisture retention for dense floral wall textures.',
            ],
          },
        ],
      },
      {
        id: 'curating-your-bridal-backdrop',
        heading: 'Curating Your Bespoke Bridal Stage',
        paragraphs: [
          'Whether you are envisioning an open-air lawn reception with starlit floral canopies or an opulent convention hall mandapam lined with brass bells, your floral palette should mirror your family’s unique aesthetic story.',
          'Our design process begins with venue spatial mapping, attire color harmonization, and custom 3D floral sketches, ensuring every garland, centerpiece, and entrance walkway forms an unbroken visual narrative.',
        ],
      },
    ],
    conclusion: {
      summary:
        'A thoughtfully composed floral palette elevates your celebration from a decorative display to an immersive emotional sanctuary. By honoring cultural staples while embracing contemporary restraint, your wedding stage will be remembered for its effortless majesty.',
      closingThought:
        'Every wedding we style in Tumakuru is tailored to the architecture of the venue and the personal traditions of the family.',
      relatedEventHref: '/events/weddings',
      relatedEventLabel: 'Explore Wedding & Engagement Decor Services',
    },
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
    tags: ['Traditional Ceremonies', 'Brass Artifacts', 'Jasmine', 'Ritual Decor', 'Gruhapravesha'],
    dropCap: true,
    tableOfContents: [
      { id: 'the-sacred-threshold', title: 'The Sacred Threshold (Torana)', level: 2 },
      { id: 'brass-kuthu-vilakku', title: 'Heirloom Brass & Illumination', level: 2 },
      { id: 'botanical-auspiciousness', title: 'Auspicious Botanical Flora', level: 2 },
      { id: 'spatial-reverence', title: 'Spatial Reverence & Seating', level: 2 },
    ],
    sections: [
      {
        id: 'the-sacred-threshold',
        heading: 'The Sacred Threshold: Welcoming with Torana & Banana Stems',
        paragraphs: [
          'In traditional Karnataka households, every auspicious ritual begins at the threshold. The torana—hand-woven with fresh mango leaves and fragrant marigold tassels—serves as both a visual welcome and a spiritual purification barrier.',
          'Flanking the main entrance with twin fruiting banana stems (bale gida) represents fertility, continuity, and boundless prosperity. In our bespoke setups, we pair these revered botanical guardians with intricately carved brass urli bowls brimming with floating lotus buds and flickering ghee wicks.',
        ],
      },
      {
        id: 'brass-kuthu-vilakku',
        heading: 'The Warmth of Heirloom Brass & Oil Illumination',
        paragraphs: [
          'No synthetic lighting can replicate the soft, meditative glow of polished brass samai lamps and kuthu vilakku. Their golden silhouettes ground the ceremonial stage, infusing the atmosphere with timeless sanctity.',
          'We meticulously restore and polish handcrafted antique brass artifacts, arranging them in stepped tiers around the havan kund or ceremonial platform to create gentle golden illumination that respects the priests’ sacred rites.',
        ],
        quote: {
          text: 'There is a quiet divinity in the flicker of brass oil lamps reflecting off fresh yellow marigolds that anchors the soul of any traditional home celebration.',
          author: 'Ceremony Coordinator',
          role: 'Tumkur Events',
        },
      },
      {
        id: 'botanical-auspiciousness',
        heading: 'Auspicious Botanical Flora: Jasmine, Marigold, and Betel Leaves',
        paragraphs: [
          'Every flower chosen for a traditional mandapam carries symbolic significance. Fragrant Mysore jasmine signifies purity and devotion; vibrant golden marigolds evoke solar energy and prosperity; while deep green betel leaves (veleya dele) honor divine blessings.',
          'By suspending dense floral jhumkas and cascading jasmine chandeliers from the mandapam rafters, the scent of fresh blossoms envelops arriving elders and guests the moment they step into the courtyard.',
        ],
        callout: {
          type: 'note',
          title: 'PLANNING NOTE ON FRESHNESS',
          text: 'For early morning Muhurtham ceremonies, floral mandapam installations are executed between 1:00 AM and 5:00 AM. This guarantees that morning dew and petal crispness are at their absolute peak when the sacred rituals begin.',
        },
      },
      {
        id: 'spatial-reverence',
        heading: 'Balancing Ritual Space with Guest Viewing Comfort',
        paragraphs: [
          'A successful ceremonial mandapam respects both the sacred priest enclosure and the sightlines of seated family members. Low platform heights, discreet cable routing, and non-intrusive backdrop framing allow photographers and guests to witness sacred mantras without obstruction.',
        ],
      },
    ],
    conclusion: {
      summary:
        'A sacred ceremonial mandapam honors the rituals of yesterday while providing an intimate, serene setting for today’s family memories. Through authentic materials, fresh local botanicals, and respectful craftsmanship, your traditional celebration becomes an enduring blessing.',
      relatedEventHref: '/events/traditional-ceremonies',
      relatedEventLabel: 'Explore Traditional Ceremony Decor',
    },
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
    tags: ['Birthday Themes', 'Balloon Installations', 'Backdrops', 'Milestone Parties'],
    dropCap: true,
    tableOfContents: [
      { id: 'the-evolution-of-party-design', title: 'The Evolution of Party Backdrops', level: 2 },
      { id: 'organic-balloon-garlands', title: 'Organic Matte Balloon Styling', level: 2 },
      { id: 'fluted-plinths-and-signage', title: 'Architectural Plinths & Custom Acrylics', level: 2 },
      { id: 'curating-cake-cutting-moments', title: 'Designing for the Cake-Cutting Moment', level: 2 },
    ],
    sections: [
      {
        id: 'the-evolution-of-party-design',
        heading: 'The Evolution of Milestone Party Backdrops',
        paragraphs: [
          'Gone are the days when birthday decor was confined to glossy foil banners and symmetrical balloon doorways. Today’s families in Tumakuru desire sophisticated, theme-driven visual stories that reflect the personality of the guest of honor—whether celebrating a magical first birthday or a distinguished 60th milestone.',
          'Modern birthday design combines architectural backdrops, bespoke typography, organic balloon installations, and soft ambient wash lighting to craft immersive photo galleries.',
        ],
      },
      {
        id: 'organic-balloon-garlands',
        heading: 'The Elegance of Organic Matte Balloon Sculptures',
        paragraphs: [
          'Unlike rigid, uniform arches of the past, organic balloon installations utilize varied sphere diameters—from miniature 5-inch accents to grand 24-inch orbs—blended with double-stuffed matte finishes. This eliminates artificial plastic glare, producing soft, velvety pastel tones that photograph exquisitely.',
          'Infusing natural eucalyptus sprigs, pampas grass, or delicate dried florals into the balloon contours adds tactile texture and organic sophistication.',
        ],
        callout: {
          type: 'inspiration',
          title: 'CELEBRATION INSPIRATION',
          text: 'Pair eucalyptus green and warm sand balloons with custom brushed-gold acrylic lettering for a timeless first birthday theme that appeals to both children and adults.',
        },
      },
      {
        id: 'fluted-plinths-and-signage',
        heading: 'Architectural Display Plinths & Bespoke Signage',
        paragraphs: [
          'Tiered display plinths—in ribbed fluted textures or sleek matte white cylinders—create multi-dimensional stages for the birthday cake, customized favors, and milestone photo albums. Placing cake displays at varied heights creates dynamic visual depth in photographs.',
        ],
      },
      {
        id: 'curating-cake-cutting-moments',
        heading: 'Designing for the Core Cake-Cutting Moment',
        paragraphs: [
          'The cake cutting is the centerpiece of any birthday celebration. By positioning warm spotlights directly overhead and ensuring clean floor pathways, we create an unobstructed perimeter where parents, siblings, and friends can gather closely without crowding the backdrop.',
        ],
      },
    ],
    conclusion: {
      summary:
        'Bespoke birthday styling transforms an ordinary hall or garden into an enchanting wonderland. With thoughtfully balanced color stories and architectural backdrops, every milestone is captured with joy and artistic elegance.',
      relatedEventHref: '/events/birthdays',
      relatedEventLabel: 'Explore Birthday Celebration Packages',
    },
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
    tags: ['Baby Shower', 'Cradle Decor', 'Naming Ceremony', 'Seemantha'],
    dropCap: true,
    tableOfContents: [
      { id: 'tender-palette-selection', title: 'Tender Pastel Color Palettes', level: 2 },
      { id: 'the-art-of-cradle-adornment', title: 'The Art of Cradle Adornment', level: 2 },
      { id: 'intimate-comfort-for-mother-child', title: 'Comfort for Mother and Newborn', level: 2 },
    ],
    sections: [
      {
        id: 'tender-palette-selection',
        heading: 'Tender Pastel Palettes for Meaningful Blessings',
        paragraphs: [
          'A baby shower (Seemantha) or cradle ceremony (Namakarana) is an intimate celebration of warmth, maternal love, and welcoming new life into the family fold. The styling should reflect this serenity with whisper-soft hues—blush rose, powder lavender, butter yellow, and mint sage.',
          'Instead of heavy, dense backdrops, we utilize breezy organza drapes, hand-strung jasmine curtains, and cloud-like baby’s breath (gypsophila) halos that convey light and tenderness.',
        ],
      },
      {
        id: 'the-art-of-cradle-adornment',
        heading: 'The Art of Cradle Adornment: Wicker, Wood, and Silks',
        paragraphs: [
          'The cradle (thottilu) is the sacred heart of the naming ceremony. Whether the family selects a vintage teakwood swing cradle or an artisanal woven rattan basket, floral dressing must be soft, non-abrasive, and completely secure.',
          'We wrap the cradle rails in plush silk padding before affixing floral garlands, ensuring no rough stems or pollen come into contact with the newborn.',
        ],
        callout: {
          type: 'consideration',
          title: 'THINGS TO CONSIDER FOR NEWBORNS',
          text: 'We exclusively select hypoallergenic, non-staining, and low-pollen floral varieties for cradle ceremonies. Heavy fragrant scents like concentrated incense or strong synthetic sprays are strictly avoided around the baby.',
        },
      },
      {
        id: 'intimate-comfort-for-mother-child',
        heading: 'Ensuring Comfortable Seating for the Mother',
        paragraphs: [
          'The mother’s seating throne during the Seemantha bangle-wearing ceremony must prioritize ergonomic support and easy accessibility. Plush velvet chairs with lumbar support and wide footrests allow the mother to remain relaxed and radiant throughout the hours of family blessings.',
        ],
      },
    ],
    conclusion: {
      summary:
        'Every child’s arrival is a momentous milestone for grandparents, parents, and extended family. With gentle colors, fragrant blooms, and safe, comfortable cradle staging, we help you welcome your newest blessing in style.',
      relatedEventHref: '/events/baby-showers',
      relatedEventLabel: 'Explore Baby Shower & Naming Ceremony Decor',
    },
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
    tags: ['Lighting', 'Fairy Lights', 'Event Atmosphere', 'Evening Receptions'],
    dropCap: true,
    tableOfContents: [
      { id: 'layers-of-illumination', title: 'The Three Layers of Event Illumination', level: 2 },
      { id: 'outdoor-fairy-light-canopies', title: 'Outdoor Fairy Light Starlit Canopies', level: 2 },
      { id: 'warmth-vs-cool-temperatures', title: 'Choosing the Right Color Temperature', level: 2 },
    ],
    sections: [
      {
        id: 'layers-of-illumination',
        heading: 'The Three Layers of Event Illumination',
        paragraphs: [
          'Lighting is the invisible brush that paints emotion across an event space. When guests step into an evening reception, it is not merely the floral arches they notice, but the atmospheric warmth that invites them to pause and celebrate.',
          'A professional lighting scheme balances three distinct layers: ambient wash to illuminate the perimeter comfortably, focal spotlights to highlight the stage and centerpieces, and decorative accents (such as chandeliers and Edison bulbs) that offer visual charm.',
        ],
      },
      {
        id: 'outdoor-fairy-light-canopies',
        heading: 'Outdoor Fairy Light Starlit Canopies for Lawns',
        paragraphs: [
          'For open-air resort lawns and private garden venues in Tumakuru, an overhead fairy light tunnel or starlit canopy creates an unforgettable dining ambiance. Suspending hundreds of micro warm-LED filaments overhead mimics a clear nocturnal sky, transforming the lawn into an enchanting open-air ballroom.',
        ],
        callout: {
          type: 'tip',
          title: 'DECORATION TIP FOR LAWNS',
          text: 'Pair warm string lights with soft amber ground uplights cast against perimeter trees. This visual framing encloses the space intimately without making guests feel boxed in.',
        },
      },
      {
        id: 'warmth-vs-cool-temperatures',
        heading: 'The Psychology of 2700K Warmth vs Cool Temperatures',
        paragraphs: [
          'Cool white lights (5000K+) create a sterile, clinical environment that drains color from photographs and can feel unwelcoming. For luxury evening weddings and social gatherings, we exclusively utilize 2700K to 3000K warm incandescent glow, which enhances gold jewelry, flatters skin tones, and creates an intimate, celebratory radiance.',
        ],
      },
    ],
    conclusion: {
      summary:
        'Mastering light is the key to transforming good decorations into breathtaking memories. With thoughtful dimming, warm color temperatures, and tailored architectural uplighting, your evening celebration will shimmer with timeless magic.',
      relatedEventHref: '/services',
      relatedEventLabel: 'Explore Event Styling & Lighting Craft',
    },
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
    tags: ['Planning Guides', 'Budgets', 'Timelines', 'Event Checklists'],
    dropCap: true,
    tableOfContents: [
      { id: 'allocating-your-decor-budget', title: 'Allocating Your Decoration Budget', level: 2 },
      { id: 'high-impact-focus-zones', title: 'Prioritizing High-Impact Focal Zones', level: 2 },
      { id: 'fresh-vs-curated-artificial', title: 'Fresh Blooms vs Artful Artificial Florals', level: 2 },
      { id: 'working-with-local-ateliers', title: 'Why Transparent Planning Matters', level: 2 },
    ],
    sections: [
      {
        id: 'allocating-your-decor-budget',
        heading: 'Allocating Your Decoration Budget with Clarity',
        paragraphs: [
          'Hosting a memorable celebration should bring excitement, not financial uncertainty. One of the most common questions families ask is how much of their overall budget should be allocated to decoration, and how to distribute those funds effectively across various venue spaces.',
          'In general, decoration accounts for 20% to 35% of a celebration’s overall budget. To achieve maximum visual impact without unnecessary expenditure, smart hosts prioritize the areas where guests spend the most time and where photographs will be taken.',
        ],
        table: {
          caption: 'Recommended Decor Budget Allocation Breakdown',
          headers: ['Zone / Component', 'Recommended Share', 'Core Purpose'],
          rows: [
            ['Main Stage & Backdrop', '45% – 55%', 'Primary photographic setting and ceremonial focus'],
            ['Entrance Arch & Walkway', '20% – 25%', 'First impression and welcoming aesthetic transition'],
            ['Dining & Table Centerpieces', '10% – 15%', 'Guest hospitality and ambient dining comfort'],
            ['Ambient Lighting & Rigging', '10% – 15%', 'Photographic color balance and evening atmosphere'],
          ],
        },
      },
      {
        id: 'high-impact-focus-zones',
        heading: 'Prioritizing High-Impact Focal Zones',
        paragraphs: [
          'If working within a defined budget ceiling, resist the temptation to spread resources thinly across every corner of a large hall. Concentrating your investment on a breathtaking, opulent stage backdrop and an inviting entrance arch yields vastly superior results compared to placing sparse decorations throughout the venue.',
        ],
        callout: {
          type: 'note',
          title: 'PLANNING NOTE ON TIMELINES',
          text: 'Booking your decor atelier 6 to 10 weeks in advance secures your desired date and allows time for venue recce visits, 3D concept sketching, and direct wholesale flower reservations—avoiding last-minute market surges.',
        },
      },
      {
        id: 'fresh-vs-curated-artificial',
        heading: 'Fresh Blooms vs Artful High-Grade Hybrid Styling',
        paragraphs: [
          'A modern budget-smart technique is hybrid floral styling. By utilizing lush, high-grade silk hydrangeas and greenery for upper structural canopies that sit 15 feet in the air, you can concentrate 100% fresh, fragrant roses, jasmine, and lilies at eye level where guests can smell and touch them.',
        ],
      },
      {
        id: 'working-with-local-ateliers',
        heading: 'Why Transparent Local Planning Matters',
        paragraphs: [
          'Working with a local Tumakuru atelier eliminates hefty outstation logistics surcharges and ensures intimate knowledge of local kalyana mantapa dimensions, power grid limits, and setup time windows.',
        ],
      },
    ],
    conclusion: {
      summary:
        'Clear budgeting and thoughtful prioritization empower you to create a luxury celebration that aligns with your family’s financial comfort. Transparent quotes, clear itemization, and artistic vision ensure zero hidden surprises.',
      relatedEventHref: '/packages',
      relatedEventLabel: 'Explore Curated Decoration Packages & Budget Tiers',
    },
  },
];

/**
 * Returns only published blog posts.
 * Drafts are excluded from public journal listings, category archives, and sitemaps.
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
 * Returns a post by slug regardless of status (used for internal previews and tests).
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Returns only a published post by slug.
 */
export function getPublishedPostBySlug(slug: string): BlogPost | undefined {
  const post = getPostBySlug(slug);
  if (post && post.status === 'published') {
    return post;
  }
  return undefined;
}

/**
 * Extracts or generates table-of-contents items from an article's sections.
 */
export function getTableOfContents(post: BlogPost): readonly TableOfContentsItem[] {
  if (post.tableOfContents && post.tableOfContents.length > 0) {
    return post.tableOfContents;
  }

  if (post.sections && post.sections.length > 0) {
    const items: TableOfContentsItem[] = [];
    post.sections.forEach((sec) => {
      if (sec.heading && sec.id) {
        items.push({ id: sec.id, title: sec.heading, level: 2 });
      }
      if (sec.subheading) {
        const subId = `${sec.id}-sub`;
        items.push({ id: subId, title: sec.subheading, level: 3 });
      }
    });
    return items;
  }

  return [];
}

/**
 * Finds up to `limit` related published posts for an article.
 * Prioritizes posts from the same category, then other published posts.
 * Strictly excludes the current article and any unpublished drafts.
 */
export function getRelatedPosts(
  currentSlug: string,
  categorySlug: string,
  limit: number = 3
): readonly BlogPost[] {
  const allPublished = getPublishedPosts().filter((p) => p.slug !== currentSlug);

  const sameCategory = allPublished.filter((p) => p.categorySlug === categorySlug);
  const otherCategories = allPublished.filter((p) => p.categorySlug !== categorySlug);

  const combined = [...sameCategory, ...otherCategories];
  return combined.slice(0, limit);
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

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ContextNavigationProps {
  readonly categorySlug: string;
  readonly customHref?: string;
  readonly customLabel?: string;
}

interface DestinationConfig {
  readonly href: string;
  readonly title: string;
  readonly description: string;
  readonly actionLabel: string;
}

const CATEGORY_DESTINATION_MAP: Record<string, DestinationConfig> = {
  'weddings-engagements': {
    href: '/events/weddings',
    title: 'Weddings & Engagements Atelier',
    description:
      'Discover our ceremonial mandapam staging, floral color theory, and bespoke stage backdrops across Tumakuru.',
    actionLabel: 'Explore Wedding Decor Services',
  },
  'birthdays-celebrations': {
    href: '/events/birthdays',
    title: 'Milestone Birthday Celebrations',
    description:
      'Organic balloon sculptures, custom display plinths, and whimsical backdrops crafted for memorable family moments.',
    actionLabel: 'Explore Birthday Celebration Packages',
  },
  'traditional-ceremonies': {
    href: '/events/traditional-ceremonies',
    title: 'Traditional Ceremonies & Sacred Rites',
    description:
      'Heirloom brass samai lamps, fresh Mysore mallige garlands, and auspicious botanical rituals for Gruhapravesha and Upanayana.',
    actionLabel: 'Explore Traditional Ceremony Decor',
  },
  'baby-showers-milestones': {
    href: '/events/baby-showers',
    title: 'Baby Shower & Naming Ceremony Styling',
    description:
      'Handcrafted wicker cradles, soft pastel balloon clusters, and tender floral canopies for welcoming new beginnings.',
    actionLabel: 'Explore Cradle Ceremony Decor',
  },
  'event-styling-decoration': {
    href: '/services',
    title: 'Complete Event Styling & Decoration Craft',
    description:
      'From architectural floral installations to 2700K ambient wash lighting, explore our complete spectrum of event services.',
    actionLabel: 'View Full Decoration Services',
  },
  'planning-tips-guides': {
    href: '/packages',
    title: 'Transparent Celebration Collections & Pricing',
    description:
      'Review indicative budget tiers, decor inclusions, and transparent packages tailored for venues throughout South Karnataka.',
    actionLabel: 'Browse Curated Decoration Packages',
  },
};

export function ArticleContextNavigation({
  categorySlug,
  customHref,
  customLabel,
}: ContextNavigationProps) {
  const destination = CATEGORY_DESTINATION_MAP[categorySlug] || {
    href: '/services',
    title: 'Celebration Styling & Decor Services',
    description:
      'Let Tumkur Events bring bespoke artistry, fresh florals, and warm illumination to your next celebration.',
    actionLabel: 'Explore Our Services',
  };

  const finalHref = customHref || destination.href;
  const finalLabel = customLabel || destination.actionLabel;

  return (
    <aside
      aria-label="Related event service"
      className="my-12 sm:my-16 p-6 sm:p-8 bg-[#FAF6EE] border border-gold/30 rounded-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-gold-dark">
            <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
            <span>Curated Service Spotlight</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-2">
            {destination.title}
          </h3>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
            {destination.description}
          </p>
        </div>

        <Link
          href={finalHref}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] hover:bg-gold hover:text-charcoal transition-all duration-normal ease-luxury flex-shrink-0 focus-visible:outline-2 focus-visible:outline-gold shadow-md"
        >
          <span>{finalLabel}</span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-normal"
            aria-hidden="true"
          />
        </Link>
      </div>
    </aside>
  );
}

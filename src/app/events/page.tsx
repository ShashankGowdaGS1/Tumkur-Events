import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { allEventCategories } from '@/config/events-page';
import { EventsHero } from '@/components/events/events-hero';
import { CelebrationExplorer } from '@/components/events/celebration-explorer';
import { SignatureStories } from '@/components/events/signature-stories';
import { CelebrationInspiration } from '@/components/events/celebration-inspiration';
import { PlanningAssurance } from '@/components/events/planning-assurance';
import { EventsFinalCta } from '@/components/events/events-final-cta';

export const metadata: Metadata = {
  title: 'Events & Celebration Décor | Tumkur Events',
  description:
    'Explore birthdays, traditional ceremonies, weddings, baby showers, corporate events, and celebration décor by Tumkur Events in Tumakuru, Karnataka.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/events`,
  },
  openGraph: {
    title: 'Events & Celebration Décor | Tumkur Events',
    description:
      'Explore birthdays, traditional ceremonies, weddings, baby showers, corporate events, and celebration décor by Tumkur Events in Tumakuru, Karnataka.',
    url: `${siteConfig.meta.siteUrl}/events`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
  },
};

export default function EventsPage() {
  // Structured Data (JSON-LD) for CollectionPage and ItemList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Events & Celebration Décor | Tumkur Events',
    description:
      'Explore birthdays, traditional ceremonies, weddings, baby showers, corporate events, and celebration décor by Tumkur Events in Tumakuru, Karnataka.',
    url: `${siteConfig.meta.siteUrl}/events`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allEventCategories.map((cat, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: cat.title,
        url: `${siteConfig.meta.siteUrl}${cat.href}`,
        description: cat.description,
      })),
    },
  };

  return (
    <main className="flex-1 flex flex-col bg-ivory text-charcoal">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          PAGE SECTION 01: EDITORIAL HERO
          Asymmetrical 65% photograph / 35% narrative layout with smooth scroll CTA
         ========================================================================= */}
      <EventsHero />

      {/* =========================================================================
          PAGE SECTION 02: INTERACTIVE CELEBRATION EXPLORER
          Main creative catalog featuring all 7 event categories
         ========================================================================= */}
      <CelebrationExplorer />

      {/* =========================================================================
          PAGE SECTION 03: SIGNATURE CELEBRATION STORIES
          Magazine-like presentation of Intimate, Traditional, and Grand scale
         ========================================================================= */}
      <SignatureStories />

      {/* =========================================================================
          PAGE SECTION 04: CELEBRATION INSPIRATION
          Asymmetric editorial inspiration gallery strip of 5-6 authentic photos
         ========================================================================= */}
      <CelebrationInspiration />

      {/* =========================================================================
          PAGE SECTION 05: PLANNING ASSURANCE
          Three confidence-building steps for starting event planning
         ========================================================================= */}
      <PlanningAssurance />

      {/* =========================================================================
          PAGE SECTION 06: FINAL ENQUIRY CTA
          Charcoal closing section with dual CTAs leading to /contact and /packages
         ========================================================================= */}
      <EventsFinalCta />
    </main>
  );
}

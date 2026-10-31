import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { packageCollections } from '@/config/packages-page';
import { PackagesHero } from '@/components/packages/packages-hero';
import { PackagesCollectionSelector } from '@/components/packages/packages-collection-selector';
import { PackageIntimateMoments } from '@/components/packages/package-intimate-moments';
import { PackageSignatureCelebrations } from '@/components/packages/package-signature-celebrations';
import { PackageGrandStatements } from '@/components/packages/package-grand-statements';
import { PackagesComparison } from '@/components/packages/packages-comparison';
import { PackagesBespoke } from '@/components/packages/packages-bespoke';
import { PackagesTransparency } from '@/components/packages/packages-transparency';
import { PackagesFaq } from '@/components/packages/packages-faq';
import { PackagesFinalCta } from '@/components/packages/packages-final-cta';

export const metadata: Metadata = {
  title: 'Decoration Collections & Packages | Tumkur Events',
  description:
    'Explore curated decoration collections by Tumkur Events in Tumakuru. From intimate celebrations to grand wedding statements, discover transparent indicative planning budgets and personalized quotes.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/packages`,
  },
  openGraph: {
    title: 'Decoration Collections & Packages | Tumkur Events',
    description:
      'Explore curated decoration collections by Tumkur Events in Tumakuru. From intimate celebrations to grand wedding statements, discover transparent indicative planning budgets and personalized quotes.',
    url: `${siteConfig.meta.siteUrl}/packages`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/weddings.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tumkur Events curated celebration packages and decoration collections',
      },
    ],
  },
};

export default function PackagesPage() {
  // Structured Data (JSON-LD) for CollectionPage and Package ItemList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.meta.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Packages',
            item: `${siteConfig.meta.siteUrl}/packages`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Curated Decoration Collections & Packages',
        description:
          'Transparent, indicative celebration decoration packages offered by Tumkur Events in Tumakuru, Karnataka.',
        itemListElement: packageCollections.map((pkg, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: pkg.title,
          description: pkg.description,
          url: `${siteConfig.meta.siteUrl}/packages#${pkg.anchorId}`,
        })),
      },
    ],
  };

  return (
    <main className="flex-1 flex flex-col bg-ivory text-charcoal">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 01: PACKAGES HERO */}
      <PackagesHero />

      {/* SECTION 02: COLLECTION SELECTOR */}
      <PackagesCollectionSelector />

      {/* SECTION 03: INTIMATE MOMENTS COLLECTION */}
      <PackageIntimateMoments />

      {/* SECTION 04: SIGNATURE CELEBRATIONS COLLECTION */}
      <PackageSignatureCelebrations />

      {/* SECTION 05: GRAND STATEMENTS COLLECTION */}
      <PackageGrandStatements />

      {/* SECTION 06: SIMPLE COMPARISON */}
      <PackagesComparison />

      {/* SECTION 07: BESPOKE COMMISSIONS */}
      <PackagesBespoke />

      {/* SECTION 08: PRICING TRANSPARENCY */}
      <PackagesTransparency />

      {/* SECTION 09: PACKAGES FAQ */}
      <PackagesFaq />

      {/* SECTION 10: FINAL ENQUIRY CTA */}
      <PackagesFinalCta />
    </main>
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import {
  allCategorySlugs,
  getEventCategoryBySlug,
} from '@/config/event-detail-data';
import { CategoryHero } from '@/components/events-detail/category-hero';
import { CategoryEssence } from '@/components/events-detail/category-essence';
import { CategoryConcepts } from '@/components/events-detail/category-concepts';
import { CategoryStylingElements } from '@/components/events-detail/category-styling-elements';
import { CategoryGallery } from '@/components/events-detail/category-gallery';
import { CategoryPlanning } from '@/components/events-detail/category-planning';
import { CategoryRelated } from '@/components/events-detail/category-related';
import { CategoryFaq } from '@/components/events-detail/category-faq';
import { CategoryFinalCta } from '@/components/events-detail/category-final-cta';

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Static Params Generator for all seven curated event categories
 */
export async function generateStaticParams() {
  return allCategorySlugs.map((slug) => ({
    slug,
  }));
}

/**
 * Dynamic Metadata Generator for SEO and Open Graph
 */
export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getEventCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Event Not Found | Tumkur Events',
    };
  }

  const pageUrl = `${siteConfig.meta.siteUrl}/events/${category.slug}`;

  return {
    title: category.seo.title,
    description: category.seo.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: category.seo.title,
      description: category.seo.metaDescription,
      url: pageUrl,
      siteName: siteConfig.brand.name,
      locale: siteConfig.meta.locale,
      type: 'website',
      images: [
        {
          url: `${siteConfig.meta.siteUrl}${category.heroImage}`,
          width: 1200,
          height: 630,
          alt: category.heroImageAlt,
        },
      ],
    },
  };
}

/**
 * Event Category Detail Page System
 * Fully reusable, data-driven architecture serving all seven event categories.
 */
export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const category = getEventCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Structured Data (JSON-LD) for BreadcrumbList and Service
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
            name: 'Events',
            item: `${siteConfig.meta.siteUrl}/events`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.title,
            item: `${siteConfig.meta.siteUrl}/events/${category.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: `${category.title} Decoration & Event Styling`,
        serviceType: 'Event Planning and Luxury Decoration',
        description: category.shortIntro,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.brand.name,
          telephone: siteConfig.contact.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.contact.address.streetAddress,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.state,
            postalCode: siteConfig.contact.address.postalCode,
            addressCountry: siteConfig.contact.address.country,
          },
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Tumakuru District, Karnataka',
        },
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

      {/* SECTION 01: IMMERSIVE EDITORIAL HERO */}
      <CategoryHero category={category} />

      {/* SECTION 02: THE ESSENCE OF THE OCCASION */}
      <CategoryEssence category={category} />

      {/* SECTION 03: SIGNATURE DECORATION CONCEPTS */}
      <CategoryConcepts category={category} />

      {/* SECTION 04: THE DETAILS THAT MAKE IT SPECIAL */}
      <CategoryStylingElements category={category} />

      {/* SECTION 05: IMMERSIVE CATEGORY GALLERY */}
      <CategoryGallery category={category} />

      {/* SECTION 06: PERSONALIZED CELEBRATION PLANNING */}
      <CategoryPlanning category={category} />

      {/* SECTION 07: RELATED CELEBRATIONS */}
      <CategoryRelated category={category} />

      {/* SECTION 08: CATEGORY-SPECIFIC FAQ */}
      <CategoryFaq category={category} />

      {/* SECTION 09: FINAL ENQUIRY CTA */}
      <CategoryFinalCta category={category} />
    </main>
  );
}

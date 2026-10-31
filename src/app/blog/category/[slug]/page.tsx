import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { blogCategories, getCategoryBySlug } from '@/lib/blog/categories';
import { CategoryArchiveView } from '@/components/blog/category-archive-view';

interface BlogCategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Pre-generate static paths for all 6 editorial categories
 */
export async function generateStaticParams() {
  return blogCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

/**
 * Dynamic Metadata Generator for Category Archives
 */
export async function generateMetadata({
  params,
}: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found | Tumkur Events',
    };
  }

  const canonicalUrl = `${siteConfig.meta.siteUrl}/blog/category/${category.slug}`;

  return {
    title: `${category.seoTitle}`,
    description: category.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.seoTitle}`,
      description: category.seoDescription,
      url: canonicalUrl,
      siteName: siteConfig.brand.name,
      locale: siteConfig.meta.locale,
      type: 'website',
      images: [
        {
          url: `${siteConfig.meta.siteUrl}${category.editorialImage}`,
          width: 1200,
          height: 630,
          alt: category.editorialImageAlt,
        },
      ],
    },
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

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
            name: 'Celebration Journal',
            item: `${siteConfig.meta.siteUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.displayName,
            item: `${siteConfig.meta.siteUrl}/blog/category/${category.slug}`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: `${category.displayName} | The Celebration Journal`,
        description: category.description,
        url: `${siteConfig.meta.siteUrl}/blog/category/${category.slug}`,
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

      <CategoryArchiveView category={category} />
    </main>
  );
}

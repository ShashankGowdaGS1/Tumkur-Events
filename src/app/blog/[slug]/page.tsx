import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import { BlogPost, BlogCategory } from '@/lib/blog/types';
import {
  getPublishedPosts,
  getPublishedPostBySlug,
  getPostBySlug,
  getTableOfContents,
} from '@/lib/blog/posts';
import { getCategoryBySlug } from '@/lib/blog/categories';
import { getTestFixtureBySlug } from '@/lib/blog/fixture';
import { ArticleReadingProgress } from '@/components/blog/article-reading-progress';
import { ArticleHero } from '@/components/blog/article-hero';
import { ArticleTableOfContents } from '@/components/blog/article-table-of-contents';
import { ArticleBody } from '@/components/blog/article-body';
import { ArticleContextNavigation } from '@/components/blog/article-context-navigation';
import { ArticleRelatedStories } from '@/components/blog/article-related-stories';
import { ArticleEnquiry } from '@/components/blog/article-enquiry';
import { ArticleDraftBanner } from '@/components/blog/article-draft-banner';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const dynamicParams = true;

/**
 * Pre-render only verified published posts.
 * Draft blueprints and internal fixtures are strictly excluded from static generation.
 */
export async function generateStaticParams() {
  const publishedPosts = getPublishedPosts();
  return publishedPosts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Helper to resolve an article by slug.
 * In production: ONLY returns verified published posts.
 * In development: allows internal drafts and test fixtures for visual verification.
 */
function resolvePost(slug: string): { post: BlogPost; isDraft: boolean } | null {
  const isDev = process.env.NODE_ENV !== 'production';

  // 1. Check for published post (accessible in both dev and production)
  const publishedPost = getPublishedPostBySlug(slug);
  if (publishedPost) {
    return { post: publishedPost, isDraft: false };
  }

  // 2. In development mode, allow internal drafts and fixtures for manual UI review
  if (isDev) {
    const draftPost = getPostBySlug(slug);
    if (draftPost) {
      return { post: draftPost, isDraft: true };
    }

    const testFixture = getTestFixtureBySlug(slug);
    if (testFixture) {
      return { post: testFixture, isDraft: true };
    }
  }

  return null;
}

/**
 * Dynamic SEO & Open Graph Metadata
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolvePost(slug);

  if (!resolved) {
    return {
      title: 'Story Not Found | Tumkur Events Celebration Journal',
      description: 'The requested celebration story could not be found.',
    };
  }

  const { post, isDraft } = resolved;
  const baseUrl = siteConfig.meta.siteUrl;
  const pageUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImageUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${baseUrl}${post.coverImage}`;

  const title = `${post.title} | Tumkur Events Journal`;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    // If draft in development, tell crawlers not to index
    robots: isDraft ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.brand.name,
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt || post.publishedAt || undefined,
      authors: post.author.name ? [post.author.name] : undefined,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolvePost(slug);

  // Return standard 404 for unknown slugs or unpublished drafts in production
  if (!resolved) {
    notFound();
  }

  const { post, isDraft } = resolved;

  // Resolve category with graceful fallback
  const category: BlogCategory = getCategoryBySlug(post.categorySlug) || {
    id: post.categorySlug,
    slug: post.categorySlug,
    number: '00',
    displayName: 'Celebration Journal',
    shortName: 'Journal',
    description: 'Stories and decorative inspiration from Tumkur Events.',
    editorialImage: post.coverImage,
    editorialImageAlt: post.coverImageAlt,
    seoTitle: 'Celebration Journal | Tumkur Events',
    seoDescription: 'Stories and decorative inspiration from Tumkur Events.',
  };

  const tocItems = getTableOfContents(post);
  const baseUrl = siteConfig.meta.siteUrl;
  const pageUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImageUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${baseUrl}${post.coverImage}`;

  // JSON-LD Structured Data: BlogPosting & BreadcrumbList
  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: ogImageUrl,
    datePublished: post.publishedAt || undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    author: post.author.name
      ? {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role || undefined,
        }
      : {
          '@type': 'Organization',
          name: siteConfig.brand.name,
        },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`,
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Celebration Journal',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.displayName,
        item: `${baseUrl}/blog/category/${category.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Script Tags */}
      <Script
        id={`jsonld-article-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Script
        id={`jsonld-breadcrumbs-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Reading Progress Bar (Fixed Top) */}
      <ArticleReadingProgress targetId="article-content" />

      {/* Editorial Draft Notice in Development Mode */}
      {isDraft && <ArticleDraftBanner slug={post.slug} />}

      <main className="w-full bg-[#FDFBF7] min-h-screen text-charcoal">
        {/* Editorial Article Hero Header */}
        <ArticleHero post={post} category={category} />

        {/* Mobile Accordion Table of Contents (After Hero, Before Body) */}
        <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6 lg:hidden">
          <ArticleTableOfContents items={tocItems} mobileOnly={true} />
        </div>

        {/* Main Editorial Reading Container */}
        <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
          {/* Main Article Body (680–760px) */}
          <div className="w-full flex-grow flex justify-center">
            <ArticleBody post={post} />
          </div>

          {/* Desktop Sticky Table of Contents Sidebar */}
          {tocItems.length >= 2 && (
            <aside aria-label="Article navigation" className="hidden lg:block flex-shrink-0">
              <ArticleTableOfContents items={tocItems} desktopOnly={true} />
            </aside>
          )}
        </div>

        {/* Contextual Event Navigation Card */}
        <div className="container-luxury max-w-4xl mx-auto px-4 sm:px-6">
          <ArticleContextNavigation
            categorySlug={post.categorySlug}
            customHref={post.conclusion?.relatedEventHref}
            customLabel={post.conclusion?.relatedEventLabel}
          />
        </div>

        {/* Related Stories Section (Published Only) */}
        <ArticleRelatedStories
          currentSlug={post.slug}
          categorySlug={post.categorySlug}
        />

        {/* Final Charcoal Enquiry CTA */}
        <ArticleEnquiry
          articleSlug={post.slug}
          articleTitle={post.title}
        />
      </main>
    </>
  );
}

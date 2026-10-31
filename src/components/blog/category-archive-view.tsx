'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BlogCategory } from '@/lib/blog/types';
import { queryPosts } from '@/lib/blog/queries';
import { CategoryNavigation } from '@/components/blog/category-navigation';
import { EditorialArticleList } from '@/components/blog/editorial-article-list';
import { BlogPagination } from '@/components/blog/blog-pagination';
import { BlogPlanningLinks } from '@/components/blog/blog-planning-links';
import { BlogEnquiry } from '@/components/blog/blog-enquiry';

interface CategoryArchiveViewProps {
  readonly category: BlogCategory;
}

function CategoryArchiveContent({ category }: CategoryArchiveViewProps) {
  const searchParams = useSearchParams();
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const page = isNaN(pageParam) ? 1 : pageParam;

  const result = queryPosts({
    categorySlug: category.slug,
    page,
    pageSize: 6,
  });

  return (
    <>
      {/* CATEGORY HERO */}
      <section
        aria-label={`${category.displayName} Archive`}
        className="relative w-full bg-[#FAF7F2] text-charcoal pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 border-b border-charcoal/10 overflow-hidden"
      >
        <div className="container-luxury">
          {/* Back to All Stories Link */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal/60 hover:text-gold-deep transition-colors focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to All Stories</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
                <span className="overline-luxury text-gold-deep text-xs font-mono">
                  {category.number} &middot; CATEGORY ARCHIVE
                </span>
              </div>

              <h1 className="font-display text-fluid-h1 text-charcoal tracking-tight mb-4">
                {category.displayName}
              </h1>

              <p className="font-sans text-sm sm:text-base lg:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                {category.description}
              </p>
            </div>

            {/* Right Editorial Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[240px] sm:h-[280px] rounded-xs overflow-hidden border border-charcoal/10 shadow-sm bg-champagne/20">
                <Image
                  src={category.editorialImage}
                  alt={category.editorialImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY ARTICLES REGION */}
      <div className="w-full bg-ivory pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-charcoal/10">
        <div className="container-luxury">
          {/* Category Navigation with active state */}
          <CategoryNavigation activeCategorySlug={category.slug} />

          {/* Article List or Empty State */}
          <EditorialArticleList posts={result.posts} categoryName={category.displayName} />

          {/* Pagination */}
          {result.totalPages > 1 && (
            <BlogPagination
              currentPage={result.currentPage}
              totalPages={result.totalPages}
              hasPrevPage={result.hasPrevPage}
              hasNextPage={result.hasNextPage}
            />
          )}
        </div>
      </div>

      {/* PLANNING LINKS */}
      <BlogPlanningLinks />

      {/* FINAL ENQUIRY CTA */}
      <BlogEnquiry />
    </>
  );
}

export function CategoryArchiveView({ category }: CategoryArchiveViewProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[50vh] flex items-center justify-center bg-ivory text-charcoal">
          <div className="font-mono text-xs uppercase tracking-widest text-gold-deep animate-pulse">
            Loading {category.displayName}...
          </div>
        </div>
      }
    >
      <CategoryArchiveContent category={category} />
    </Suspense>
  );
}

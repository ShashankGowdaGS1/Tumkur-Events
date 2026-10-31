'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { queryPosts } from '@/lib/blog/queries';
import { BlogHero } from '@/components/blog/blog-hero';
import { CategoryNavigation } from '@/components/blog/category-navigation';
import { BlogSearch } from '@/components/blog/blog-search';
import { EditorialArticleList } from '@/components/blog/editorial-article-list';
import { BlogPagination } from '@/components/blog/blog-pagination';
import { JournalInspiration } from '@/components/blog/journal-inspiration';
import { BlogPlanningLinks } from '@/components/blog/blog-planning-links';
import { BlogEnquiry } from '@/components/blog/blog-enquiry';

function BlogIndexContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const page = isNaN(pageParam) ? 1 : pageParam;

  const result = queryPosts({
    query,
    page,
    pageSize: 6,
  });

  const hasPublishedContent = result.totalCount > 0;

  return (
    <>
      {/* SECTION 01: EDITORIAL BLOG HERO */}
      <BlogHero />

      {/* PRIMARY ARTICLES & CATEGORY REGION */}
      <div className="w-full bg-ivory pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-charcoal/10">
        <div className="container-luxury">
          {/* SECTION 02: CATEGORY TOPIC NAVIGATOR */}
          <CategoryNavigation />

          {/* SECTION 03: SEARCH INPUT (When published content exists) */}
          {hasPublishedContent && <BlogSearch />}

          {/* SECTION 04: ARTICLE PREVIEWS OR PUBLICATION-READY EMPTY STATE */}
          <EditorialArticleList posts={result.posts} />

          {/* PAGINATION */}
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

      {/* SECTION 05: EDITOR'S INSPIRATION INTERLUDE */}
      <JournalInspiration />

      {/* SECTION 06: CELEBRATION PLANNING LINKS */}
      <BlogPlanningLinks />

      {/* SECTION 07: FINAL ENQUIRY CTA */}
      <BlogEnquiry />
    </>
  );
}

export function BlogIndexView() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[50vh] flex items-center justify-center bg-ivory text-charcoal">
          <div className="font-mono text-xs uppercase tracking-widest text-gold-deep animate-pulse">
            Loading Celebration Journal...
          </div>
        </div>
      }
    >
      <BlogIndexContent />
    </Suspense>
  );
}

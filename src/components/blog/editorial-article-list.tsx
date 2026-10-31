'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';
import { BlogEmptyState } from './blog-empty-state';

interface EditorialArticleListProps {
  readonly posts: readonly BlogPost[];
  readonly categoryName?: string;
}

export function EditorialArticleList({ posts, categoryName }: EditorialArticleListProps) {
  if (!posts || posts.length === 0) {
    return <BlogEmptyState categoryName={categoryName} />;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {posts.map((post, idx) => {
          // Asymmetric layout: First post in grid is prominent (7 cols), others 5 cols or 4 cols
          const isLead = idx === 0;
          const colSpan = isLead ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-6 lg:col-span-5';

          return (
            <article
              key={post.id}
              className={`group flex flex-col justify-between rounded-xs overflow-hidden border border-charcoal/10 bg-[#FAF7F2] p-6 sm:p-7 transition-all duration-normal hover:shadow-[0_12px_36px_rgba(21,21,21,0.08)] hover:border-gold-deep/40 ${colSpan}`}
            >
              <div>
                {/* Image Stage */}
                <div
                  className={`relative w-full rounded-xs overflow-hidden mb-5 bg-champagne/20 ${
                    isLead ? 'h-[260px] sm:h-[320px]' : 'h-[200px] sm:h-[240px]'
                  }`}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-[10px] tracking-wider uppercase font-semibold text-ivory px-2.5 py-0.5 bg-charcoal/60 backdrop-blur-xs rounded-[2px] border border-white/10">
                      {post.categorySlug.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs font-mono text-charcoal/60 mb-2.5">
                  {post.publishedAt && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
                      <span>{post.publishedAt}</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
                    <span>{post.readingTime}</span>
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-xl sm:text-2xl text-charcoal tracking-tight mb-2.5 group-hover:text-gold-deep transition-colors duration-fast">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Link: Read Story */}
              <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-gold-deep transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

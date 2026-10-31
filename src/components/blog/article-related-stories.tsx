import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';
import { getRelatedPosts } from '@/lib/blog/posts';

interface ArticleRelatedStoriesProps {
  readonly currentSlug: string;
  readonly categorySlug: string;
}

export function ArticleRelatedStories({
  currentSlug,
  categorySlug,
}: ArticleRelatedStoriesProps) {
  const relatedPosts = getRelatedPosts(currentSlug, categorySlug, 3);

  // If no published related posts exist, omit the entire section cleanly
  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-stories-heading"
      className="w-full bg-[#FAF7F0] py-16 sm:py-20 lg:py-24 border-t border-sand"
    >
      <div className="container-luxury max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-sand pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-gold-dark">
              <span className="w-4 h-px bg-gold" aria-hidden="true" />
              <span>Continue Exploring</span>
            </div>
            <h2
              id="related-stories-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight"
            >
              Stories Worth Reading
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-charcoal hover:text-gold transition-colors group focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-normal" />
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white border border-sand/70 rounded-sm overflow-hidden hover:border-gold/50 hover:shadow-lg transition-all duration-normal"
            >
              {/* Cover Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative w-full aspect-[16/10] overflow-hidden bg-sand/20 block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-slow ease-luxury"
                />
              </Link>

              {/* Story Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-mono text-charcoal/60 mb-3">
                  <span className="text-gold-dark font-medium uppercase tracking-wider">
                    {post.categorySlug.replace('-', ' ')}
                  </span>
                  <span>·</span>
                  <div className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold" aria-hidden="true" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl text-charcoal group-hover:text-gold-dark transition-colors leading-snug mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="font-sans text-sm text-charcoal/70 line-clamp-2 leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-charcoal font-semibold group-hover:text-gold transition-colors pt-2 border-t border-sand/60"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-normal" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

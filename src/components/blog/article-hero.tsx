'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Clock, Calendar, User, ArrowLeft } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/lib/blog/types';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface ArticleHeroProps {
  readonly post: BlogPost;
  readonly category: BlogCategory;
}

export function ArticleHero({ post, category }: ArticleHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const excerptRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 }
        );
      }

      if (excerptRef.current) {
        tl.fromTo(
          excerptRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );
      }

      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
      }

      if (imageWrapperRef.current) {
        tl.fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 0.985 },
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.4'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Format verified date if present
  const formattedDate = post.publishedAt
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(post.publishedAt))
    : null;

  return (
    <header
      ref={containerRef}
      className="relative w-full bg-[#FDFBF7] text-charcoal pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 border-b border-sand/40 overflow-hidden"
    >
      {/* Decorative Botanical Watermark */}
      <div
        className="pointer-events-none select-none absolute top-4 right-0 w-[200px] sm:w-[260px] opacity-[0.05] z-0 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/journal-corner-floral.webp"
          alt=""
          width={260}
          height={320}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>

      <div className="container-luxury relative z-10 max-w-6xl mx-auto">
        {/* Navigation Bar / Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 text-xs font-mono text-charcoal/60">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2">
            <Link
              href="/"
              className="hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gold/60" aria-hidden="true" />
            <Link
              href="/blog"
              className="hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
            >
              Journal
            </Link>
            <ChevronRight className="w-3 h-3 text-gold/60" aria-hidden="true" />
            <Link
              href={`/blog/category/${category.slug}`}
              className="text-gold font-medium hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-gold"
            >
              {category.shortName}
            </Link>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-charcoal/70 hover:text-gold transition-colors group focus-visible:outline-2 focus-visible:outline-gold"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-normal" />
            <span>All Stories</span>
          </Link>
        </div>

        {/* Category Pill */}
        <div className="mb-4 sm:mb-6">
          <Link
            href={`/blog/category/${category.slug}`}
            className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs font-mono tracking-widest text-gold-dark hover:bg-gold/20 transition-colors uppercase focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
            <span>{category.displayName}</span>
          </Link>
        </div>

        {/* Dynamic Editorial Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.12] mb-5 sm:mb-6 max-w-4xl"
        >
          {post.title}
        </h1>

        {/* Article Excerpt */}
        <p
          ref={excerptRef}
          className="font-sans text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed max-w-3xl mb-8 sm:mb-10 font-normal"
        >
          {post.excerpt}
        </p>

        {/* Verified Metadata Row */}
        <div
          ref={metaRef}
          className="flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 pb-8 sm:pb-12 text-xs sm:text-sm font-mono text-charcoal/70 border-b border-sand"
        >
          {/* Author Attribution when verified */}
          {post.author.name && (
            <div className="inline-flex items-center gap-2">
              <User className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>
                By <strong className="font-semibold text-charcoal">{post.author.name}</strong>
                {post.author.role ? ` · ${post.author.role}` : ''}
              </span>
            </div>
          )}

          {/* Published Date when verified */}
          {formattedDate && (
            <div className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" aria-hidden="true" />
              <time dateTime={post.publishedAt || undefined}>{formattedDate}</time>
            </div>
          )}

          {/* Reading Time */}
          <div className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" aria-hidden="true" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Hero Photograph (16:9 / Editorial Landscape) */}
        <div
          ref={imageWrapperRef}
          className="relative w-full aspect-[16/9] sm:aspect-[21/10] mt-8 sm:mt-10 rounded-sm overflow-hidden bg-sand/20 shadow-xl shadow-charcoal/5"
        >
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
            quality={90}
            className="object-cover object-center"
          />
          {/* Subtle gold framing overlay */}
          <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}

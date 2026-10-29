import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface BrandLogoProps {
  /**
   * isScrolled: false when atop dark cinematic hero (transparent navbar);
   * true when scrolled or on standard ivory page.
   */
  isScrolled?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

/**
 * Tumkur Events Brand Logo
 * Integrates the official Tumkur Events logo emblem featuring the metallic
 * gold & silver TE monogram, slicing needle, and circular luxury rim.
 */
export function BrandLogo({
  isScrolled = true,
  className,
  showSubtitle = true,
}: BrandLogoProps) {
  return (
    <Link
      href={siteConfig.routes.home}
      aria-label={`${siteConfig.brand.name} — Return to Homepage`}
      className={cn(
        'group inline-flex items-center gap-3 transition-opacity duration-fast hover:opacity-90 focus-visible:outline-2 focus-visible:outline-gold',
        className
      )}
    >
      {/* Official Tumkur Events Logo Emblem */}
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/50 shadow-sm ring-1 ring-gold/25 sm:h-12 sm:w-12">
        <Image
          src="/brand/tumkur-logo-circle.webp"
          alt="Tumkur Events Logo Emblem"
          width={96}
          height={96}
          priority
          className="h-full w-full object-cover transition-transform duration-normal ease-luxury group-hover:scale-105"
        />
      </div>

      {/* Brand Wordmark Lockup */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              'font-display text-base font-normal tracking-[0.04em] transition-colors duration-normal sm:text-lg',
              isScrolled ? 'text-charcoal' : 'text-ivory'
            )}
          >
            Tumkur
          </span>
          <span
            className={cn(
              'font-display text-base font-normal tracking-[0.04em] transition-colors duration-normal sm:text-lg',
              isScrolled ? 'text-gold-deep' : 'text-gold'
            )}
          >
            Events
          </span>
        </div>

        {showSubtitle && (
          <span
            className={cn(
              'font-sans text-[9px] uppercase tracking-[0.22em] font-medium transition-colors duration-normal sm:text-[10px]',
              isScrolled ? 'text-charcoal/60' : 'text-ivory/70'
            )}
          >
            Bespoke Celebrations
          </span>
        )}
      </div>
    </Link>
  );
}

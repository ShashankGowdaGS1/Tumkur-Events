import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { BrandLogo } from './brand-logo';
import { footerConfig } from '@/config/footer';

/**
 * Footer Area A: Brand Introduction
 * Features approved brand logo emblem, Marcellus statement, and location reference.
 */
export function FooterBrand() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 sm:pb-16 border-b border-[#222222]">
      {/* Left Column (8 cols): Logo & Brand Statement */}
      <div className="lg:col-span-8 flex flex-col items-start">
        <BrandLogo isScrolled={false} />

        <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] text-[#F7F4EE] leading-snug mt-6 mb-3 max-w-xl">
          {footerConfig.brand.statement}
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#B8B8B6] max-w-lg leading-relaxed">
          {footerConfig.brand.supportingLine}
        </p>
      </div>

      {/* Right Column (4 cols): Location & Quick Action */}
      <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between self-end gap-3 pt-4 lg:pt-0">
        <div className="flex items-center gap-2 text-[#C79E22] text-xs sm:text-sm uppercase tracking-[0.18em] font-mono font-medium">
          <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{footerConfig.brand.locationLabel}</span>
        </div>

        <Link
          href={footerConfig.brand.ctaHref}
          className="inline-flex items-center gap-2 text-[#F7F4EE] hover:text-[#C79E22] transition-colors duration-200 font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-medium group py-1"
        >
          <span className="relative">
            {footerConfig.brand.ctaLabel}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C79E22] transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C79E22]"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

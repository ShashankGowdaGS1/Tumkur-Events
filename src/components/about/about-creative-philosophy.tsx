'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { philosophyChapters } from '@/config/about-page';

export function AboutCreativePhilosophy() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const currentChapter = philosophyChapters[activeChapterIndex] || philosophyChapters[0];

  return (
    <section
      aria-label="Our Creative Philosophy"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                CREATIVE PHILOSOPHY
              </span>
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
              Every Detail Has a Purpose.
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
              Our styling framework balances South Karnataka tradition with contemporary luxury to curate cohesive celebrations.
            </p>
          </div>

          {/* Desktop & Mobile Responsive Chapter Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* LEFT COLUMN: CHAPTER SELECTORS (5 Cols) */}
            <div
              role="tablist"
              aria-label="Philosophy Chapters"
              className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 order-2 lg:order-1"
            >
              {philosophyChapters.map((chap, idx) => {
                const isActive = activeChapterIndex === idx;

                return (
                  <button
                    key={chap.id}
                    role="tab"
                    id={`chapter-tab-${chap.id}`}
                    aria-selected={isActive}
                    aria-controls={`chapter-panel-${chap.id}`}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`group w-full text-left p-5 sm:p-6 rounded-xs border transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                      isActive
                        ? 'bg-[#FAF7F2] border-gold-deep/50 shadow-[0_6px_20px_rgba(21,21,21,0.05)]'
                        : 'bg-ivory border-charcoal/10 hover:border-charcoal/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`font-mono text-xs font-semibold transition-colors ${
                          isActive ? 'text-gold-deep' : 'text-charcoal/50 group-hover:text-charcoal'
                        }`}
                      >
                        {chap.number} &middot; {chap.detailTag}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold-deep animate-pulse" />
                      )}
                    </div>

                    <h3
                      className={`font-display text-base sm:text-lg lg:text-xl transition-colors ${
                        isActive ? 'text-charcoal font-medium' : 'text-charcoal/70 group-hover:text-charcoal'
                      }`}
                    >
                      {chap.title}
                    </h3>

                    {/* Concise description appears in active tab on desktop */}
                    {isActive && (
                      <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light mt-2.5 animate-in fade-in duration-300 hidden lg:block">
                        {chap.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: LARGE PHOTOGRAPHIC DISPLAY & MOBILE DESCRIPTION (7 Cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                id={`chapter-panel-${currentChapter.id}`}
                role="tabpanel"
                aria-labelledby={`chapter-tab-${currentChapter.id}`}
                className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-xs overflow-hidden border border-charcoal/10 shadow-[0_12px_36px_rgba(21,21,21,0.08)] bg-champagne/20"
              >
                <Image
                  key={currentChapter.id}
                  src={currentChapter.image}
                  alt={currentChapter.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center animate-in fade-in duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Info on Mobile/Tablet */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-ivory z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs text-gold font-semibold">
                      CHAPTER {currentChapter.number}
                    </span>
                    <span className="text-white/20">&middot;</span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-champagne">
                      {currentChapter.detailTag}
                    </span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl text-ivory tracking-tight mb-1.5">
                    {currentChapter.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-silver-light/85 font-light leading-relaxed line-clamp-3 lg:hidden">
                    {currentChapter.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

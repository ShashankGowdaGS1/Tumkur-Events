import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ContactClosing() {
  return (
    <section
      aria-label="A Beautiful Beginning"
      className="relative w-full bg-[#151515] text-ivory py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#262626]"
    >
      {/* Decorative Gold Lanterns Watermark */}
      <div
        className="pointer-events-none select-none absolute top-0 right-4 lg:right-12 w-[130px] lg:w-[170px] opacity-[0.14] z-0 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/golden-hanging-lanterns.webp"
          alt=""
          width={170}
          height={380}
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(199,158,34,0.18)]"
          priority={false}
        />
      </div>

      <div className="container-luxury relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
          <span className="w-6 sm:w-8 h-px bg-gold" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-gold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
            <span>A BEAUTIFUL BEGINNING</span>
          </span>
          <span className="w-6 sm:w-8 h-px bg-gold" aria-hidden="true" />
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ivory tracking-tight leading-[1.14] mb-5 sm:mb-6 max-w-3xl">
          Your Next Beautiful Moment
          <span className="block font-serif italic text-gold pt-1">
            Starts With a Conversation.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base lg:text-lg text-silver-light/85 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-light">
          Big celebrations or intimate occasions, every idea deserves thoughtful attention. Let’s make something memorable together.
        </p>

        {/* Single Navigation CTA */}
        <div>
          <Link
            href="/events"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-lg shadow-gold/10"
          >
            <span>Explore Our Celebrations</span>
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-normal"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

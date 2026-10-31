import React from 'react';
import Image from 'next/image';
import { footerConfig } from '@/config/footer';

/**
 * Footer Area C: Signature Wordmark & Butterfly Accent
 * An oversized, restrained typographic outline treatment with an elegant gold butterfly line-art accent.
 */
export function FooterSignature() {
  return (
    <div className="relative py-8 sm:py-12 overflow-hidden border-b border-[#222222]">
      {/* Oversized Signature Wordmark Outline with Anchored Butterfly Accent */}
      <div className="w-full text-center select-none overflow-hidden relative px-4 sm:px-6">
        <div className="inline-flex items-end justify-center relative gap-1 sm:gap-2 lg:gap-3 max-w-full">
          <p
            className="font-display uppercase tracking-[0.04em] sm:tracking-[0.08em] lg:tracking-[0.1em] text-transparent leading-none select-none text-[clamp(1.15rem,5.2vw,7.2rem)] font-normal pointer-events-none"
            style={{
              WebkitTextStroke: '1px rgba(199, 158, 34, 0.35)',
            }}
            aria-hidden="true"
          >
            {footerConfig.signatureWordmark}
          </p>
          <span className="sr-only">{footerConfig.signatureWordmark}</span>

          {/* Gold Butterfly Line Art Decoration trailing off the end of wordmark */}
          <div
            className="pointer-events-none select-none shrink-0 w-5 sm:w-10 lg:w-16 xl:w-20 opacity-35 z-10 mb-0.5 sm:mb-1 lg:mb-2"
            aria-hidden="true"
          >
            <Image
              src="/decor/gold-butterfly-signature.webp"
              alt=""
              width={88}
              height={88}
              className="w-full h-auto object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

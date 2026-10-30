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
      <div className="w-full text-center select-none overflow-hidden relative">
        <div className="relative inline-block px-4 sm:px-6">
          <p
            className="font-display uppercase tracking-[0.08em] sm:tracking-[0.1em] text-transparent leading-none select-none text-[clamp(2.2rem,8.5vw,7.2rem)] font-normal pointer-events-none"
            style={{
              WebkitTextStroke: '1px rgba(199, 158, 34, 0.35)',
            }}
            aria-hidden="true"
          >
            {footerConfig.signatureWordmark}
          </p>
          <span className="sr-only">{footerConfig.signatureWordmark}</span>

          {/* Gold Butterfly Line Art Decoration anchored right at the end of wordmark */}
          <div
            className="pointer-events-none select-none absolute -right-4 sm:-right-8 lg:-right-12 bottom-0 sm:bottom-1 w-12 sm:w-16 lg:w-20 opacity-35 z-10"
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

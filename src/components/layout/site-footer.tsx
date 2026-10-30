'use client';

import React, { useRef, useEffect } from 'react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { FooterBrand } from './footer-brand';
import { FooterNavigation } from './footer-navigation';
import { FooterSignature } from './footer-signature';
import { FooterLegal } from './footer-legal';

/**
 * SiteFooter Component
 * Design Name: "THE SIGNATURE FOOTER"
 *
 * Global premium closing signature for Tumkur Events:
 * - Background: Charcoal #151515
 * - Text: Warm Ivory #F7F4EE
 * - Muted accents: Silver #B8B8B6 & Brand Gold #C79E22
 * - Four integrated areas:
 *   Area A: Brand Introduction & Logo
 *   Area B: Navigation & Contact Directory (4 columns)
 *   Area C: Signature Typographic Wordmark & Botanical Accent
 *   Area D: Minimal Legal Bar with Dynamic Year
 */
export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const footer = footerRef.current;
    if (!footer) return;

    if (prefersReducedMotion()) {
      gsap.set(containerRef.current, { opacity: 1, y: 0, clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="site-footer"
      ref={footerRef}
      role="contentinfo"
      className="relative w-full bg-[#151515] text-[#F7F4EE] pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-20 lg:pb-16 overflow-hidden border-t border-[#222222]"
    >
      <div ref={containerRef} className="container-luxury relative z-10">
        {/* AREA A: BRAND INTRODUCTION */}
        <FooterBrand />

        {/* AREA B: NAVIGATION & CONTACT DIRECTORY */}
        <FooterNavigation />

        {/* AREA C: SIGNATURE WORDMARK */}
        <FooterSignature />

        {/* AREA D: LEGAL BOTTOM BAR */}
        <FooterLegal />
      </div>
    </footer>
  );
}

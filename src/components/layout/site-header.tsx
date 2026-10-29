'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BrandLogo } from './brand-logo';
import { DesktopNavigation } from './desktop-navigation';
import { NavigationCTA } from './navigation-cta';
import { MobileNavigation } from './mobile-navigation';

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  // State: isScrolled is false only when at the top of the homepage hero.
  // On all inner pages, it defaults to true (solid warm ivory navbar).
  const [isScrolled, setIsScrolled] = useState<boolean>(!isHomepage);

  useEffect(() => {
    // If not on homepage, immediately lock to solid ivory state
    if (!isHomepage) {
      setIsScrolled(true);
      return;
    }

    // Listener for custom hero state dispatched by the cinematic hero's ScrollTrigger
    const handleHeroState = (e: Event) => {
      const customEvent = e as CustomEvent<{ isScrolled: boolean }>;
      if (typeof customEvent.detail?.isScrolled === 'boolean') {
        setIsScrolled(customEvent.detail.isScrolled);
      }
    };

    window.addEventListener('tumkur:hero-state', handleHeroState);

    // Observer and scroll fallback targeting the continuation section (#trust-presence)
    const checkScrollBoundary = () => {
      const nextSection = document.getElementById('trust-presence');
      if (nextSection) {
        const rect = nextSection.getBoundingClientRect();
        // While continuation section is below header height (84px), navbar remains transparent
        setIsScrolled(rect.top <= 84);
      } else {
        setIsScrolled(false);
      }
    };

    checkScrollBoundary();
    window.addEventListener('scroll', checkScrollBoundary, { passive: true });

    let observer: IntersectionObserver | null = null;
    const nextSection = document.getElementById('trust-presence');
    if (nextSection) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(entry.boundingClientRect.top <= 84);
        },
        { rootMargin: '-84px 0px 0px 0px', threshold: [0, 0.1] }
      );
      observer.observe(nextSection);
    }

    return () => {
      window.removeEventListener('tumkur:hero-state', handleHeroState);
      window.removeEventListener('scroll', checkScrollBoundary);
      if (observer && nextSection) {
        observer.unobserve(nextSection);
      }
    };
  }, [isHomepage]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 h-20 transition-all duration-normal ease-luxury sm:h-[84px]',
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 shadow-[0_4px_24px_rgba(21,21,21,0.04)] text-charcoal'
          : 'bg-gradient-to-b from-charcoal/75 via-charcoal/35 to-transparent text-ivory border-b border-transparent'
      )}
    >
      <div className="container-luxury mx-auto flex h-full items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <BrandLogo isScrolled={isScrolled} />
        </div>

        {/* Center: Desktop Navigation Links & Events Dropdown */}
        <div className="flex items-center justify-center">
          <DesktopNavigation isScrolled={isScrolled} />
        </div>

        {/* Right: Primary CTA (Desktop) & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <NavigationCTA
            isScrolled={isScrolled}
            className="hidden sm:inline-flex"
          />
          <MobileNavigation isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}


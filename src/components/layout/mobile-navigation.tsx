'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail, Sparkles } from 'lucide-react';
import { cn, getTelUrl } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { BrandLogo } from './brand-logo';

interface MobileNavigationProps {
  isScrolled: boolean;
}

/**
 * Mobile Navigation Drawer
 *
 * Rendered via React Portal directly into document.body to prevent containing-block
 * trapping from header backdrop-filter (backdrop-blur-md) or GSAP transformed ancestors.
 * - Solid Warm Ivory surface (no transparency bleeding)
 * - Independent vertical scrolling with overscroll containment
 * - Strict full-viewport sizing (100dvh with 100vh fallback)
 * - Escape key, route transition, and backdrop close triggers
 * - High z-index (z-[70]) positioned above fixed headers and floating widgets
 */
export function MobileNavigation({ isScrolled }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsExpanded, setEventsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Mark client mounted for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close automatically on route transition
  useEffect(() => {
    setIsOpen(false);
    setEventsExpanded(false);
  }, [pathname]);

  // Lock background body scroll while drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Drawer Content rendered into body portal
  const drawerPortal = mounted
    ? createPortal(
        <div
          id="mobile-navigation-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className={cn(
            'fixed inset-0 z-[70] flex flex-col bg-[#F7F4EE] text-charcoal h-[100dvh] w-screen overflow-hidden transition-all duration-300 ease-luxury lg:hidden',
            isOpen
              ? 'visible opacity-100 translate-x-0'
              : 'invisible opacity-0 translate-x-full pointer-events-none'
          )}
          style={{
            paddingTop: 'env(safe-area-inset-top, 0px)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
        >
          {/* Header inside Drawer */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-charcoal/10 px-6 sm:px-8">
            <BrandLogo isScrolled={true} />
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center rounded-xs p-2.5 text-charcoal hover:bg-charcoal/5 focus-visible:outline-2 focus-visible:outline-gold"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6">
            <nav aria-label="Mobile Navigation" className="space-y-4">
              <ul className="space-y-1">
                {siteConfig.navigation.primary.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isActive = pathname === item.href;

                  if (hasChildren) {
                    return (
                      <li key={item.label} className="border-b border-charcoal/5 pb-2">
                        <button
                          type="button"
                          onClick={() => setEventsExpanded((prev) => !prev)}
                          aria-expanded={eventsExpanded}
                          className="flex w-full items-center justify-between py-3 text-left font-display text-xl tracking-tight text-charcoal transition-colors hover:text-gold-deep"
                        >
                          <span className={cn(isActive && 'text-gold-deep font-semibold')}>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              'h-5 w-5 text-charcoal/60 transition-transform duration-normal ease-luxury',
                              eventsExpanded && 'rotate-180 text-gold-deep'
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        {/* Expandable Events Submenu */}
                        <div
                          className={cn(
                            'overflow-hidden transition-all duration-normal ease-luxury',
                            eventsExpanded ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'
                          )}
                        >
                          <ul className="space-y-1 pl-4 border-l-2 border-gold/40">
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={handleClose}
                                    className={cn(
                                      'block py-2.5 text-sm transition-colors duration-fast font-sans',
                                      isChildActive
                                        ? 'text-gold-deep font-semibold'
                                        : 'text-charcoal/80 hover:text-gold-deep'
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label} className="border-b border-charcoal/5">
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className={cn(
                          'block py-3 font-display text-xl tracking-tight transition-colors duration-fast',
                          isActive
                            ? 'text-gold-deep font-semibold'
                            : 'text-charcoal hover:text-gold-deep'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Primary Mobile CTA Button */}
              <div className="pt-6">
                <Link
                  href={siteConfig.navigation.cta.href}
                  onClick={handleClose}
                  className="flex w-full items-center justify-center gap-2 rounded-xs bg-[#151515] px-6 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ivory hover:bg-[#8A6714] transition-all duration-200 border border-charcoal shadow-sm"
                >
                  <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span>{siteConfig.navigation.cta.label}</span>
                </Link>
              </div>
            </nav>

            {/* Quick Concierge Info Box */}
            <div className="mt-8 space-y-3 rounded-sm border border-charcoal/10 bg-[#FAF7F2] p-4 text-xs text-charcoal/80">
              <span className="overline-luxury text-gold-deep">
                Private Concierge
              </span>
              <div className="space-y-2 pt-1 font-sans">
                <a
                  href={getTelUrl(siteConfig.contact.phone)}
                  className="flex items-center gap-2 hover:text-gold-deep text-charcoal/80"
                >
                  <Phone className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.inquiryEmail}`}
                  className="flex items-center gap-2 hover:text-gold-deep text-charcoal/80"
                >
                  <Mail className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                  <span>{siteConfig.contact.inquiryEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Hamburger Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        className={cn(
          'inline-flex items-center justify-center rounded-xs p-2 transition-colors duration-fast focus-visible:outline-2 focus-visible:outline-gold',
          isScrolled
            ? 'text-charcoal hover:bg-charcoal/5'
            : 'text-ivory hover:bg-ivory/10'
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-charcoal" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Portal Mounted Drawer */}
      {drawerPortal}
    </div>
  );
}

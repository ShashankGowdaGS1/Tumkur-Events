'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { EventsDropdown } from './events-dropdown';

interface DesktopNavigationProps {
  isScrolled: boolean;
}

export function DesktopNavigation({ isScrolled }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden items-center gap-6 xl:gap-8 lg:flex"
    >
      <ul className="flex items-center gap-5 xl:gap-7">
        {siteConfig.navigation.primary.map((item) => {
          if (item.children && item.children.length > 0) {
            return (
              <li key={item.label} className="relative">
                <EventsDropdown item={item} isScrolled={isScrolled} />
              </li>
            );
          }

          const isActive = pathname === item.href;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'group relative inline-block py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-fast focus-visible:outline-2 focus-visible:outline-gold',
                  isScrolled
                    ? isActive
                      ? 'text-gold-deep font-semibold'
                      : 'text-charcoal hover:text-gold-deep'
                    : isActive
                    ? 'text-gold font-semibold'
                    : 'text-ivory hover:text-gold'
                )}
              >
                <span>{item.label}</span>

                {/* Animated Gold Underline on Hover & Persistent Active Indicator */}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-normal ease-luxury',
                    isActive
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  )}
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


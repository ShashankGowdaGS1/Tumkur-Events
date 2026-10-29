'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from '@/types';

interface EventsDropdownProps {
  item: NavLink;
  isScrolled: boolean;
}

export function EventsDropdown({ item, isScrolled }: EventsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isCurrentActive =
    pathname === item.href ||
    (item.children && item.children.some((child) => pathname === child.href));

  // Clear pending close timeout
  const cancelClose = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Graceful close with slight delay for continuous mouse travel
  const scheduleClose = useCallback(() => {
    cancelClose();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }, [cancelClose]);

  const handleMouseEnter = () => {
    cancelClose();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    scheduleClose();
  };

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      cancelClose();
    };
  }, [isOpen, cancelClose]);

  // Handle keyboard accessibility (Escape to close, Arrow keys)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        itemsRef.current[0]?.focus();
      }
    }
  };

  const handleItemKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (index + 1) % (item.children?.length ?? 1);
      itemsRef.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (index === 0) {
        triggerRef.current?.focus();
      } else {
        itemsRef.current[index - 1]?.focus();
      }
    }
  };

  // Close dropdown on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Events categories menu"
        className={cn(
          'group relative inline-flex items-center gap-1.5 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-fast focus-visible:outline-2 focus-visible:outline-gold',
          isScrolled
            ? isCurrentActive
              ? 'text-gold-deep font-semibold'
              : 'text-charcoal hover:text-gold-deep'
            : isCurrentActive
            ? 'text-gold font-semibold'
            : 'text-ivory hover:text-gold'
        )}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-normal ease-luxury',
            isOpen && 'rotate-180',
            isScrolled ? 'text-charcoal/70' : 'text-ivory/80'
          )}
          aria-hidden="true"
        />

        {/* Animated Gold Underline for Trigger */}
        <span
          className={cn(
            'absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-normal ease-luxury',
            isCurrentActive
              ? 'w-full opacity-100'
              : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
          )}
          aria-hidden="true"
        />
      </button>

      {/* Invisible Hover Bridge & Dropdown Panel */}
      <div
        className={cn(
          'absolute left-0 top-full pt-2 transition-all duration-fast ease-luxury z-50',
          isOpen
            ? 'visible opacity-100 translate-y-0 pointer-events-auto'
            : 'invisible opacity-0 -translate-y-1.5 pointer-events-none'
        )}
      >
        {/* Continuous hit bridge area above panel */}
        <div className="absolute inset-x-0 -top-2.5 h-3" />

        <div className="w-72 rounded-sm border border-charcoal/10 bg-ivory p-2 shadow-[0_16px_40px_rgba(21,21,21,0.12)]">
          <ul className="flex flex-col space-y-0.5" role="menu">
            {item.children?.map((subItem, index) => {
              const isChildActive = pathname === subItem.href;
              const isPastEvents = subItem.href === '/our-work';

              return (
                <React.Fragment key={subItem.href}>
                  {/* Subtle Separator before Our Past Events */}
                  {isPastEvents && (
                    <li className="my-1.5 border-t border-charcoal/10" role="separator" />
                  )}

                  <li role="none">
                    <Link
                      ref={(el) => {
                        itemsRef.current[index] = el;
                      }}
                      href={subItem.href}
                      role="menuitem"
                      tabIndex={isOpen ? 0 : -1}
                      onKeyDown={(e) => handleItemKeyDown(index, e)}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'group flex items-center justify-between rounded-xs px-3.5 py-2.5 text-xs tracking-wide transition-all duration-fast focus-visible:outline-2 focus-visible:outline-gold',
                        isChildActive
                          ? 'bg-champagne/50 font-semibold text-gold-deep pl-4'
                          : 'text-charcoal hover:bg-champagne/30 hover:text-gold-deep hover:pl-4'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {/* Small gold bullet on active/hover */}
                        <span
                          className={cn(
                            'h-1.5 w-1.5 rounded-full transition-all duration-fast',
                            isChildActive
                              ? 'bg-gold'
                              : 'bg-transparent group-hover:bg-gold'
                          )}
                          aria-hidden="true"
                        />
                        <span className="font-sans">{subItem.label}</span>
                      </div>

                      <ArrowRight
                        className={cn(
                          'h-3 w-3 opacity-0 transition-all duration-fast group-hover:opacity-100 group-hover:translate-x-0.5',
                          isChildActive ? 'opacity-100 text-gold-deep' : 'text-gold'
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


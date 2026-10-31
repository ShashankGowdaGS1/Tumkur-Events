'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, AlignLeft } from 'lucide-react';
import { TableOfContentsItem } from '@/lib/blog/types';

interface ArticleTableOfContentsProps {
  readonly items: readonly TableOfContentsItem[];
  readonly mobileOnly?: boolean;
  readonly desktopOnly?: boolean;
}

export function ArticleTableOfContents({
  items,
  mobileOnly = false,
  desktopOnly = false,
}: ArticleTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (items.length === 0) return;

    // Track active section using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length < 2) return null;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // 84px navbar + 24px comfortable reading clearance
    const yOffset = -108;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
    setActiveId(id);
    setIsOpenMobile(false);
  };

  // Mobile Accordion View
  if (mobileOnly) {
    return (
      <div className="w-full lg:hidden my-6 bg-[#FAF7F0] border border-gold/25 p-4 rounded-sm shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpenMobile((prev) => !prev)}
          className="w-full flex items-center justify-between text-left font-mono text-xs uppercase tracking-widest text-charcoal focus-visible:outline-2 focus-visible:outline-gold py-1"
          aria-expanded={isOpenMobile}
          aria-controls="mobile-toc-list"
        >
          <span className="flex items-center gap-2 font-semibold">
            <AlignLeft className="w-4 h-4 text-gold" aria-hidden="true" />
            <span>In This Story ({items.length} Sections)</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal/70 transition-transform duration-normal ${
              isOpenMobile ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>

        {isOpenMobile && (
          <ul
            id="mobile-toc-list"
            className="mt-4 pt-3 border-t border-gold/20 space-y-2.5 font-sans text-sm"
          >
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li
                  key={item.id}
                  className={item.level === 3 ? 'pl-4 text-xs' : 'text-sm'}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`block py-1 transition-colors leading-snug ${
                      isActive
                        ? 'text-gold-dark font-semibold'
                        : 'text-charcoal/80 hover:text-gold'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  // Desktop Sticky Sidebar View
  if (desktopOnly) {
    return (
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-[108px] w-64 xl:w-72 self-start pl-4 border-l border-gold/30 my-8 py-1 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar"
      >
        <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-charcoal/70">
          <span className="w-2 h-px bg-gold" aria-hidden="true" />
          <span className="font-semibold text-charcoal">In This Story</span>
        </div>

        <ul className="space-y-3 font-sans text-xs xl:text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`transition-all duration-200 ${
                  item.level === 3 ? 'pl-3 text-xs' : ''
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`group flex items-start gap-2 py-0.5 leading-snug transition-colors ${
                    isActive
                      ? 'text-gold-dark font-medium'
                      : 'text-charcoal/60 hover:text-charcoal'
                  }`}
                >
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                      isActive ? 'bg-gold' : 'bg-transparent group-hover:bg-gold/40'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return null;
}

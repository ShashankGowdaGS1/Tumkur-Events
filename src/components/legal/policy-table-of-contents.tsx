'use client';

import React, { useState, useEffect } from 'react';
import { AlignLeft, ChevronDown } from 'lucide-react';
import { PolicySection } from '@/content/legal/types';

interface PolicyTableOfContentsProps {
  readonly sections: readonly PolicySection[];
  readonly mobileOnly?: boolean;
  readonly desktopOnly?: boolean;
}

export function PolicyTableOfContents({
  sections,
  mobileOnly = false,
  desktopOnly = false,
}: PolicyTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (sections.length === 0) return;

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

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -108; // 84px fixed header + 24px comfortable reading clearance
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
    setActiveId(id);
    setIsOpenMobile(false);
  };

  // Mobile Collapsible View
  if (mobileOnly) {
    return (
      <div className="w-full lg:hidden my-6 bg-[#FAF7F0] border border-gold/30 p-4 rounded-sm shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpenMobile((prev) => !prev)}
          className="w-full flex items-center justify-between text-left font-mono text-xs uppercase tracking-widest text-charcoal focus-visible:outline-2 focus-visible:outline-gold py-1"
          aria-expanded={isOpenMobile}
          aria-controls="mobile-policy-toc"
        >
          <span className="flex items-center gap-2 font-semibold">
            <AlignLeft className="w-4 h-4 text-gold" aria-hidden="true" />
            <span>On This Page ({sections.length} Sections)</span>
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
            id="mobile-policy-toc"
            className="mt-4 pt-3 border-t border-gold/20 space-y-2.5 font-sans text-xs"
          >
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => handleScrollTo(e, sec.id)}
                    className={`block py-1 transition-colors leading-snug ${
                      isActive
                        ? 'text-gold-dark font-semibold'
                        : 'text-charcoal/80 hover:text-gold'
                    }`}
                  >
                    <span className="font-mono text-charcoal/50 mr-1.5">{sec.number}.</span>
                    <span>{sec.title}</span>
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
        aria-label="Policy sections"
        className="hidden lg:block sticky top-[108px] w-64 xl:w-72 self-start pl-4 border-l border-gold/30 my-4 py-1 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar"
      >
        <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-charcoal/70">
          <span className="w-2 h-px bg-gold" aria-hidden="true" />
          <span className="font-semibold text-charcoal">On This Page</span>
        </div>

        <ul className="space-y-2.5 font-sans text-xs xl:text-sm">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <li key={sec.id} className="transition-all duration-200">
                <a
                  href={`#${sec.id}`}
                  onClick={(e) => handleScrollTo(e, sec.id)}
                  className={`group flex items-start gap-2 py-0.5 leading-snug transition-colors ${
                    isActive
                      ? 'text-gold-dark font-medium'
                      : 'text-charcoal/65 hover:text-charcoal'
                  }`}
                >
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                      isActive ? 'bg-gold' : 'bg-transparent group-hover:bg-gold/40'
                    }`}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-mono text-[11px] text-charcoal/45 mr-1">
                      {sec.number}.
                    </span>
                    {sec.title}
                  </span>
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

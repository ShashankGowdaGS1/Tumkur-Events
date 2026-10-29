'use client';

import React, { useState } from 'react';
import type { FaqItem } from '@/config/faqs';
import { FaqItemComponent } from './faq-item';

interface FaqAccordionProps {
  readonly items: readonly FaqItem[];
  readonly defaultActiveId?: string | null;
}

/**
 * FaqAccordion Component
 *
 * Coordinates a single-open accordion list with keyboard accessibility
 * and accessible toggle behaviors.
 */
export function FaqAccordion({ items, defaultActiveId = 'faq-01' }: FaqAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full divide-y-0 border-t border-[#E8DFCF]">
      {items.map((item) => (
        <FaqItemComponent
          key={item.id}
          item={item}
          isOpen={activeId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}


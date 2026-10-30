'use client';

import React, { useState } from 'react';
import { footerConfig } from '@/config/footer';

/**
 * Floating WhatsApp Button (Bottom-Left)
 *
 * Provides instant access to official WhatsApp event enquiries.
 * - WhatsApp green (#25D366) with clean circular icon
 * - Responsive sizing: 52px (mobile) / 56px (tablet) / 60px (desktop)
 * - Safe area inset compliant
 * - Subtle hover & press feedback
 */
export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed z-40 select-none"
      style={{
        bottom: 'max(var(--fab-bottom), calc(var(--fab-bottom) + env(safe-area-inset-bottom, 0px)))',
        left: 'max(var(--fab-edge), calc(var(--fab-edge) + env(safe-area-inset-left, 0px)))',
      }}
    >
      <div className="relative flex items-center">
        {/* External WhatsApp Click-to-Chat Link */}
        <a
          href={footerConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={footerConfig.whatsapp.ariaLabel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[#20bd5a] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
          style={{
            width: 'var(--fab-size)',
            height: 'var(--fab-size)',
          }}
        >
          {/* Official WhatsApp Speech Bubble Glyph */}
          <svg
            className="fill-current transition-transform duration-200"
            style={{
              width: 'var(--fab-icon-size)',
              height: 'var(--fab-icon-size)',
            }}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        {/* Desktop Expanding Tooltip Label */}
        <div
          className={`hidden lg:block absolute left-full ml-3 px-3 py-1.5 rounded-sm bg-[#151515] border border-[#C79E22]/40 text-[#F7F4EE] text-xs font-sans font-medium whitespace-nowrap shadow-md pointer-events-none transition-all duration-200 ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-2'
          }`}
          aria-hidden="true"
        >
          {footerConfig.whatsapp.tooltipText}
        </div>
      </div>
    </div>
  );
}

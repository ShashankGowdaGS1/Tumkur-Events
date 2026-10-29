import React from 'react';
import Link from 'next/link';
import { footerConfig } from '@/config/footer';

/**
 * Footer Area D: Legal Bottom Bar
 * Minimal legal row with dynamically computed copyright year and policy links.
 */
export function FooterLegal() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs font-sans text-[#B8B8B6]">
      {/* Dynamic Copyright Statement */}
      <p className="text-center sm:text-left">
        © {currentYear} Tumkur Events. All rights reserved.
      </p>

      {/* Legal Navigation Links */}
      <ul
        className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2"
        role="list"
      >
        {footerConfig.legal.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[#B8B8B6] hover:text-[#F7F4EE] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79E22]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

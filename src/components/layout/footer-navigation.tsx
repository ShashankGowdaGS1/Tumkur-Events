import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { footerConfig } from '@/config/footer';

/**
 * Footer Area B: Navigation & Contact Directory
 * 4 clean information columns on desktop, thoughtfully stacked on mobile.
 */
export function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-16 border-b border-[#222222]">
      {/* Dynamic Navigation Columns 01 - 03 (Explore, Occasions, Discover) */}
      {footerConfig.columns.map((col) => (
        <div key={col.title} className="flex flex-col">
          <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-[#C79E22] font-semibold mb-4 sm:mb-6">
            {col.title}
          </h3>

          <ul className="space-y-2.5 sm:space-y-3" role="list">
            {col.links.map((link) => (
              <li key={link.label}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-sans text-[#F7F4EE]/75 hover:text-[#C79E22] transition-colors duration-200 group py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79E22]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="w-3 h-3 text-[#B8B8B6] group-hover:text-[#C79E22] transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-[#F7F4EE]/75 hover:text-[#C79E22] transition-colors duration-200 block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79E22]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Column 04: Verified Contact Directory */}
      <div className="col-span-2 md:col-span-1 flex flex-col pt-4 md:pt-0 border-t md:border-t-0 border-[#222222]/80">
        <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-[#C79E22] font-semibold mb-4 sm:mb-6">
          {footerConfig.contact.title}
        </h3>

        <div className="space-y-3 sm:space-y-3.5 text-sm font-sans text-[#F7F4EE]/80">
          <p className="text-[#B8B8B6] text-xs uppercase tracking-wider font-mono">
            {footerConfig.contact.location}
          </p>

          <div>
            <a
              href={footerConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-[#F7F4EE]/85 hover:text-[#C79E22] transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#C79E22] shrink-0" aria-hidden="true" />
              <span>{footerConfig.contact.phone}</span>
            </a>
          </div>

          <div>
            <a
              href={footerConfig.contact.emailHref}
              className="inline-flex items-center gap-2 text-sm text-[#F7F4EE]/85 hover:text-[#C79E22] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#C79E22] shrink-0" aria-hidden="true" />
              <span>{footerConfig.contact.email}</span>
            </a>
          </div>

          <div>
            <a
              href={footerConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#25D366]/80 transition-colors duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{footerConfig.contact.whatsappLabel}</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-[#B8B8B6] flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#B8B8B6]/70 shrink-0" aria-hidden="true" />
            <span>{footerConfig.contact.hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

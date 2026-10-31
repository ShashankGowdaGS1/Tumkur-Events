import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, AlertCircle, ArrowLeft, Mail } from 'lucide-react';
import { PolicyDocument } from '@/content/legal/types';
import { PolicyTableOfContents } from './policy-table-of-contents';
import { RelatedPolicyLinks } from './related-policy-links';

interface PolicyPageLayoutProps {
  readonly document: PolicyDocument;
}

export function PolicyPageLayout({ document }: PolicyPageLayoutProps) {
  return (
    <main className="w-full bg-[#FDFBF7] text-charcoal min-h-screen">
      {/* Editorial Policy Header */}
      <header className="relative w-full bg-[#F7F4EE] pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 border-b border-sand">
        <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs font-mono text-charcoal/60">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link
                href="/"
                className="hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
              >
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gold/60" aria-hidden="true" />
              <span className="text-charcoal font-medium" aria-current="page">
                {document.title}
              </span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-charcoal/70 hover:text-gold transition-colors group focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-normal" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-dark mb-3">
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
            <span>{document.eyebrow}</span>
          </div>

          {/* H1 Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-tight mb-4 max-w-4xl">
            {document.title}
          </h1>

          {/* Subtitle / Policy Intro */}
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-3xl mb-6 font-normal">
            {document.subtitle}
          </p>

          {/* Metadata Row: Last Updated & Status Note */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-sand/60 text-xs font-mono text-charcoal/65">
            <div className="inline-flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>Last Updated: {document.lastUpdated}</span>
            </div>
            <span>·</span>
            <span>Version: 2026.1 (Editorial Draft)</span>
          </div>

          {/* Editorial Review Alert Banner */}
          {document.statusNote && (
            <div className="mt-6 p-4 bg-[#F5EFE3] border-l-4 border-gold rounded-r-sm flex items-start gap-3 text-xs sm:text-sm font-sans text-charcoal/85">
              <AlertCircle className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="leading-relaxed">
                <strong className="font-semibold text-charcoal">Status Notice:</strong> {document.statusNote}
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Collapsible TOC (After Header, Before Body) */}
      <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6 lg:hidden">
        <PolicyTableOfContents sections={document.sections} mobileOnly={true} />
      </div>

      {/* Main Two-Column Reading Section */}
      <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 relative">
        {/* Left Column: Desktop Sticky Table of Contents */}
        <aside aria-label="Policy sections" className="hidden lg:block flex-shrink-0">
          <PolicyTableOfContents sections={document.sections} desktopOnly={true} />
        </aside>

        {/* Right Column: Policy Body Text (680–760px) */}
        <article className="w-full max-w-[740px] font-sans text-charcoal flex-grow">
          <div className="space-y-12 sm:space-y-16">
            {document.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                className="scroll-mt-28"
              >
                {/* Section Heading */}
                <div className="flex items-baseline gap-3 mb-4 border-b border-sand/50 pb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-gold-dark font-bold">
                    {section.number}.
                  </span>
                  <h2
                    id={`heading-${section.id}`}
                    className="font-display text-2xl sm:text-[26px] text-charcoal tracking-tight leading-snug"
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 font-sans text-[16px] sm:text-[17px] text-[#222222] leading-[1.8] font-normal">
                  {section.paragraphs.map((pText, pIdx) => (
                    <p key={pIdx}>{pText}</p>
                  ))}
                </div>

                {/* Bullets if present */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="my-5 space-y-2.5 font-sans text-[15px] sm:text-[16px] text-[#2c2c2c] leading-relaxed pl-6 list-disc marker:text-gold">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Review Note for unconfirmed terms */}
                {section.reviewNote && (
                  <div
                    role="note"
                    className="my-5 p-3.5 sm:p-4 bg-amber-500/10 border-l-4 border-amber-600 rounded-r-sm text-xs sm:text-sm font-sans text-amber-950 font-mono leading-relaxed"
                  >
                    <strong className="font-bold text-amber-900 block mb-1">
                      EDITORIAL NOTICE / PENDING DETERMINATION:
                    </strong>
                    {section.reviewNote}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Contact Assistance Callout */}
          <div className="mt-14 sm:mt-16 p-6 sm:p-8 bg-[#FAF6EE] border border-gold/40 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg sm:text-xl text-charcoal mb-1">
                Have questions regarding our terms?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                Our concierge desk in Tumakuru is available to assist with contract questions and celebration queries.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-charcoal transition-colors flex-shrink-0 focus-visible:outline-2 focus-visible:outline-gold shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Contact Concierge</span>
            </Link>
          </div>

          {/* Related Legal Policies Navigator */}
          <RelatedPolicyLinks currentSlug={document.slug} />
        </article>
      </div>
    </main>
  );
}

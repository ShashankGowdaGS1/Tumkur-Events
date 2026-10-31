import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag, Lightbulb, Info, AlertCircle, Sparkles } from 'lucide-react';
import {
  BlogPost,
  ArticleSection,
  ArticleCallout,
  ArticleQuote,
  ArticleInlineImage,
  ArticleList,
  ArticleTable,
  CalloutType,
} from '@/lib/blog/types';

interface ArticleBodyProps {
  readonly post: BlogPost;
}

export function ArticleBody({ post }: ArticleBodyProps) {
  const sections = post.sections || [];
  const conclusion = post.conclusion;
  const tags = post.tags || [];

  return (
    <article
      id="article-content"
      className="w-full max-w-[740px] mx-auto font-sans text-charcoal"
    >
      {/* Editorial Sections */}
      {sections.map((section, sIndex) => {
        const isFirstSection = sIndex === 0;

        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`heading-${section.id}`}
            className="mb-12 sm:mb-16 scroll-mt-28"
          >
            {/* Section H2 Heading */}
            <h2
              id={`heading-${section.id}`}
              className="font-display text-2xl sm:text-3xl lg:text-[34px] text-charcoal tracking-tight leading-[1.22] mb-5 pt-2"
            >
              {section.heading}
            </h2>

            {/* Optional H3 Subheading */}
            {section.subheading && (
              <h3
                id={`${section.id}-sub`}
                className="font-display text-lg sm:text-xl text-gold-dark font-medium -mt-2 mb-4 scroll-mt-28"
              >
                {section.subheading}
              </h3>
            )}

            {/* Section Paragraphs */}
            <div className="space-y-5 text-[17px] sm:text-[18px] text-[#222222] leading-[1.8] font-normal">
              {section.paragraphs.map((pText, pIndex) => {
                // Apply drop cap only to the very first paragraph of the first section if enabled
                const shouldApplyDropCap = isFirstSection && pIndex === 0 && post.dropCap !== false;

                if (shouldApplyDropCap && pText.length > 1) {
                  const firstLetter = pText.charAt(0);
                  const restOfParagraph = pText.slice(1);

                  return (
                    <p key={pIndex} className="leading-[1.8]">
                      <span
                        className="float-left font-display text-5xl sm:text-6xl text-gold-dark leading-[0.8] pr-3 pt-1 select-none font-bold"
                        aria-hidden="true"
                      >
                        {firstLetter}
                      </span>
                      {restOfParagraph}
                    </p>
                  );
                }

                return (
                  <p key={pIndex} className="leading-[1.8]">
                    {pText}
                  </p>
                );
              })}
            </div>

            {/* Gold Divider below introduction */}
            {isFirstSection && (
              <div className="flex items-center gap-3 my-8" aria-hidden="true">
                <span className="w-16 h-px bg-gold/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
              </div>
            )}

            {/* Editorial Blockquote if present */}
            {section.quote && <RenderQuote quote={section.quote} />}

            {/* Structured Lists if present */}
            {section.lists && section.lists.map((list, lIdx) => (
              <RenderList key={lIdx} list={list} />
            ))}

            {/* Editorial Highlight Callout Box if present */}
            {section.callout && <RenderCallout callout={section.callout} />}

            {/* Inline Photograph if present */}
            {section.inlineImage && <RenderInlineImage image={section.inlineImage} />}

            {/* Accessible Table if present */}
            {section.table && <RenderTable table={section.table} />}
          </section>
        );
      })}

      {/* Article Conclusion */}
      {conclusion && (
        <section
          id="article-conclusion"
          aria-labelledby="conclusion-heading"
          className="pt-8 sm:pt-10 my-10 sm:my-14 border-t border-sand"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-gold-dark">
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
            <span>Conclusion & Key Takeaways</span>
          </div>

          <h2
            id="conclusion-heading"
            className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight leading-snug mb-4"
          >
            Reflections & Final Thoughts
          </h2>

          <p className="font-sans text-[17px] sm:text-[18px] text-[#222222] leading-[1.8] mb-4">
            {conclusion.summary}
          </p>

          {conclusion.closingThought && (
            <p className="font-sans text-base sm:text-lg text-charcoal/80 italic border-l-2 border-gold/60 pl-4 py-1 my-6 font-serif">
              “{conclusion.closingThought}”
            </p>
          )}
        </section>
      )}

      {/* Editorial Footer: Tags & Return Navigation */}
      <footer className="pt-6 sm:pt-8 border-t border-sand/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2" aria-label="Article tags">
            <Tag className="w-3.5 h-3.5 text-gold/70" aria-hidden="true" />
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2.5 py-0.5 bg-sand/30 border border-sand rounded-sm text-xs font-mono text-charcoal/70"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/blog/category/${post.categorySlug}`}
          className="text-xs font-mono text-gold-dark hover:underline focus-visible:outline-2 focus-visible:outline-gold"
        >
          More in this category →
        </Link>
      </footer>
    </article>
  );
}

// Subcomponent: Editorial Blockquote
function RenderQuote({ quote }: { quote: ArticleQuote }) {
  return (
    <figure className="my-8 sm:my-10 pl-6 sm:pl-8 border-l-2 border-gold bg-gold/[0.03] py-4 pr-4 rounded-r-sm">
      <blockquote className="font-display text-xl sm:text-2xl text-charcoal leading-snug tracking-tight italic">
        “{quote.text}”
      </blockquote>
      {quote.author && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-wider text-charcoal/70">
          — <strong className="font-semibold text-charcoal">{quote.author}</strong>
          {quote.role ? `, ${quote.role}` : ''}
        </figcaption>
      )}
    </figure>
  );
}

// Subcomponent: Structured List
function RenderList({ list }: { list: ArticleList }) {
  const isOrdered = list.type === 'ordered';
  const ListTag = isOrdered ? 'ol' : 'ul';

  return (
    <div className="my-6">
      {list.title && (
        <h4 className="font-sans font-semibold text-charcoal text-base mb-3">
          {list.title}
        </h4>
      )}
      <ListTag
        className={`space-y-3 font-sans text-[16px] sm:text-[17px] text-[#2c2c2c] leading-relaxed pl-6 ${
          isOrdered ? 'list-decimal' : 'list-disc marker:text-gold'
        }`}
      >
        {list.items.map((item, idx) => (
          <li key={idx} className="pl-1">
            {item}
          </li>
        ))}
      </ListTag>
    </div>
  );
}

// Subcomponent: Callout Highlights / Editorial Insights
function RenderCallout({ callout }: { callout: ArticleCallout }) {
  const getCalloutMeta = (type: CalloutType) => {
    switch (type) {
      case 'tip':
        return {
          icon: Lightbulb,
          badge: 'DECORATION TIP',
          border: 'border-gold',
          badgeColor: 'text-gold-dark',
        };
      case 'note':
        return {
          icon: Info,
          badge: 'PLANNING NOTE',
          border: 'border-gold/70',
          badgeColor: 'text-gold-dark',
        };
      case 'consideration':
        return {
          icon: AlertCircle,
          badge: 'THINGS TO CONSIDER',
          border: 'border-[#A3702C]',
          badgeColor: 'text-[#845214]',
        };
      case 'inspiration':
        return {
          icon: Sparkles,
          badge: 'CELEBRATION INSPIRATION',
          border: 'border-gold',
          badgeColor: 'text-gold-dark',
        };
      default:
        return {
          icon: Info,
          badge: 'EDITORIAL NOTE',
          border: 'border-gold',
          badgeColor: 'text-gold-dark',
        };
    }
  };

  const meta = getCalloutMeta(callout.type);
  const Icon = meta.icon;

  return (
    <aside
      aria-label={callout.title}
      className={`my-8 sm:my-10 p-5 sm:p-6 bg-[#FAF6EE] border-l-4 ${meta.border} rounded-r-sm shadow-sm`}
    >
      <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
        <Icon className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
        <span className={meta.badgeColor}>{callout.title || meta.badge}</span>
      </div>
      <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-normal">
        {callout.text}
      </p>
    </aside>
  );
}

// Subcomponent: Inline Photograph
function RenderInlineImage({ image }: { image: ArticleInlineImage }) {
  const isWide = image.layout === 'wide';

  return (
    <figure className={`my-8 sm:my-12 ${isWide ? 'w-full' : 'max-w-[740px]'}`}>
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden bg-sand/30 shadow-md">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-center"
        />
      </div>
      {image.caption && (
        <figcaption className="mt-2.5 text-xs sm:text-sm font-sans text-charcoal/65 italic text-center sm:text-left">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

// Subcomponent: Accessible Responsive Table
function RenderTable({ table }: { table: ArticleTable }) {
  return (
    <div className="my-8 sm:my-10 w-full overflow-x-auto no-scrollbar border border-sand rounded-sm bg-white shadow-sm">
      <table className="w-full text-left border-collapse text-sm">
        {table.caption && (
          <caption className="p-3 text-xs font-mono uppercase tracking-wider text-charcoal/60 bg-[#FAF7F0] border-b border-sand text-left font-semibold">
            {table.caption}
          </caption>
        )}
        <thead>
          <tr className="bg-[#FAF7F0] border-b border-sand text-xs font-mono uppercase tracking-wider text-charcoal">
            {table.headers.map((header, hIdx) => (
              <th key={hIdx} className="p-3.5 sm:p-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-sand/60 font-sans text-charcoal/85">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-sand/10 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3.5 sm:p-4 text-xs sm:text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

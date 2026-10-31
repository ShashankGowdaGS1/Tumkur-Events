import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, FileText, RotateCcw, Cookie, MessageSquare } from 'lucide-react';

interface RelatedPolicyLinksProps {
  readonly currentSlug: string;
}

const POLICY_LINKS = [
  {
    slug: 'privacy-policy',
    href: '/privacy-policy',
    label: 'Privacy Policy',
    description: 'Data handling, confidentiality & communication boundaries',
    icon: ShieldCheck,
  },
  {
    slug: 'terms-and-conditions',
    href: '/terms-and-conditions',
    label: 'Terms & Conditions',
    description: 'Website usage, consultation rules & commercial expectations',
    icon: FileText,
  },
  {
    slug: 'refund-policy',
    href: '/refund-policy',
    label: 'Refund & Cancellation Policy',
    description: 'Date reservations, advance commitments & rescheduling guidelines',
    icon: RotateCcw,
  },
  {
    slug: 'cookie-policy',
    href: '/cookie-policy',
    label: 'Cookie Policy',
    description: 'Essential technical session data & tracker-free disclosure',
    icon: Cookie,
  },
];

export function RelatedPolicyLinks({ currentSlug }: RelatedPolicyLinksProps) {
  const otherPolicies = POLICY_LINKS.filter((p) => p.slug !== currentSlug);

  return (
    <aside
      aria-label="Related Legal Policies"
      className="mt-14 sm:mt-20 pt-10 border-t border-sand/80"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-semibold block mb-1">
            LEGAL NAVIGATION
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-charcoal">
            Related Policies & Information
          </h3>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
        >
          <MessageSquare className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          <span>Contact Concierge Desk</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherPolicies.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.slug}
              href={item.href}
              className="group p-5 bg-white border border-sand/80 hover:border-gold/60 rounded-sm shadow-sm transition-all duration-normal flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-gold"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                  <ArrowRight className="w-3.5 h-3.5 text-charcoal/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-normal" />
                </div>
                <h4 className="font-display text-base text-charcoal group-hover:text-gold-dark transition-colors mb-1.5">
                  {item.label}
                </h4>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sand/50 text-[11px] font-mono text-gold-dark font-semibold">
                Read Policy →
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

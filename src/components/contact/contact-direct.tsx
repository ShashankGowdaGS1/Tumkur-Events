import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerConfig } from '@/config/footer';

export function ContactDirect() {
  return (
    <section
      aria-labelledby="direct-contact-heading"
      className="w-full bg-[#FDFBF7] py-16 sm:py-20 lg:py-24 border-b border-sand"
    >
      <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-dark mb-2">
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
            <span>DIRECT CHANNELS</span>
          </div>
          <h2
            id="direct-contact-heading"
            className="font-display text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-3"
          >
            Prefer a Direct Conversation?
          </h2>
          <p className="font-sans text-base text-charcoal/75 leading-relaxed font-light">
            Reach our design concierge directly via phone, WhatsApp, email, or visit our studio location in Tumakuru.
          </p>
        </div>

        {/* Editorial Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Channel 1: WhatsApp */}
          <div className="p-6 bg-white border border-sand hover:border-gold/60 transition-colors rounded-sm flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4 text-[#25D366]">
                <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 block mb-1">
                INSTANT MESSAGING
              </span>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Chat on WhatsApp
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
                Fast consultation for event dates, quick queries, and photo references.
              </p>
            </div>
            <a
              href={footerConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold-dark group-hover:text-gold transition-colors pt-3 border-t border-sand focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span>+91 94812 34567</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Channel 2: Telephone */}
          <div className="p-6 bg-white border border-sand hover:border-gold/60 transition-colors rounded-sm flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 text-gold">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 block mb-1">
                TELEPHONE CONCIERGE
              </span>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Call Our Atelier
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
                Speak directly with our team to discuss decoration scale, themes, and quotes.
              </p>
            </div>
            <div className="pt-3 border-t border-sand flex flex-col gap-1">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold-dark group-hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
              >
                <span>{siteConfig.contact.phoneDisplay}</span>
                <span aria-hidden="true">→</span>
              </a>
              {siteConfig.contact.alternatePhone && (
                <span className="text-[11px] font-mono text-charcoal/50">
                  Alt: {siteConfig.contact.alternatePhone}
                </span>
              )}
            </div>
          </div>

          {/* Channel 3: Email */}
          <div className="p-6 bg-white border border-sand hover:border-gold/60 transition-colors rounded-sm flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-sand/30 flex items-center justify-center mb-4 text-charcoal">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 block mb-1">
                FORMAL INQUIRIES
              </span>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Send an Email
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
                Detailed design briefs, RFP documents, institutional and corporate requests.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold-dark group-hover:text-gold transition-colors pt-3 border-t border-sand focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span>{siteConfig.contact.email}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Channel 4: Instagram */}
          <div className="p-6 bg-white border border-sand hover:border-gold/60 transition-colors rounded-sm flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 text-pink-600">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 block mb-1">
                PORTFOLIO & STORIES
              </span>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Follow on Instagram
              </h3>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
                Recent stage setups, live mandapam stories, and backstage setup videos.
              </p>
            </div>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold-dark group-hover:text-gold transition-colors pt-3 border-t border-sand focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span>@tumkurevents</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Channel 5: Studio Address */}
          <div className="p-6 bg-white border border-sand rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-sand/30 flex items-center justify-center mb-4 text-charcoal">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 block mb-1">
                TUMAKURU ATELIER
              </span>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Studio Address
              </h3>
              <address className="not-italic font-sans text-xs text-charcoal/75 leading-relaxed mb-4">
                {siteConfig.contact.address.streetAddress},<br />
                {siteConfig.contact.address.area}, {siteConfig.contact.address.city},<br />
                {siteConfig.contact.address.state} — {siteConfig.contact.address.postalCode}
              </address>
            </div>
            <div className="pt-3 border-t border-sand text-[11px] font-mono text-charcoal/60">
              In-person consultation by prior appointment
            </div>
          </div>

          {/* Channel 6: Business Hours */}
          <div className="p-6 bg-white border border-sand rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-sand/30 flex items-center justify-center mb-4 text-charcoal">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 block mb-1">
                OPERATIONAL HOURS
              </span>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Consultation Hours
              </h3>
              <div className="font-sans text-xs text-charcoal/75 space-y-1 mb-4">
                <p>
                  <strong className="text-charcoal font-medium">Monday – Friday:</strong><br />
                  {siteConfig.contact.businessHours.weekdays}
                </p>
                <p>
                  <strong className="text-charcoal font-medium">Saturday – Sunday:</strong><br />
                  {siteConfig.contact.businessHours.weekends}
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-sand text-[11px] font-mono text-charcoal/60">
              Active event setups operate on 24/7 schedules
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

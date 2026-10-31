'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const CONTACT_FAQS: readonly FAQItem[] = [
  {
    id: 'faq-01',
    question: 'How can I enquire about event decoration?',
    answer:
      'You can enquire by filling out our event enquiry form on this page to prepare a direct WhatsApp consultation, or by calling our concierge line directly at +91 94812 34567. We will discuss your celebration details, date availability, and preliminary design thoughts.',
  },
  {
    id: 'faq-02',
    question: 'What details should I share initially?',
    answer:
      'To provide the most helpful guidance, it is useful to share your estimated celebration date, event type (e.g., wedding, birthday, naming ceremony), the venue or area in Tumakuru, and any rough theme or floral preferences you have in mind.',
  },
  {
    id: 'faq-03',
    question: 'Can I discuss a customized theme?',
    answer:
      'Yes, absolutely. While we offer curated package collections for easy reference, every event is tailored. You are welcome to share Pinterest mood boards, Instagram photos, color swatches, or specific mandapam concepts you wish to bring to life.',
  },
  {
    id: 'faq-04',
    question: 'Can I enquire without a fixed budget?',
    answer:
      'Yes. You can select "Not decided yet" or "Prefer to discuss" on our enquiry form. We can walk you through indicative price tiers for stages, fresh florals, entrance gateways, and lighting so you can decide comfortably.',
  },
  {
    id: 'faq-05',
    question: 'How can I check availability for my event date?',
    answer:
      'Auspicious Muhurtham dates during peak wedding seasons (especially November through February and April through June) book up quickly. We recommend enquiring 4 to 8 weeks in advance so we can verify team and asset availability for your date.',
  },
  {
    id: 'faq-06',
    question: 'Can I contact Tumkur Events directly through WhatsApp?',
    answer:
      'Yes, WhatsApp is our most active direct communication channel. You can reach our design team directly at +91 94812 34567 for fast questions, date checks, and sending venue reference photos.',
  },
];

export function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-labelledby="contact-faq-heading"
      className="w-full bg-[#FDFBF7] py-16 sm:py-20 lg:py-24 border-b border-sand"
    >
      <div className="container-luxury max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-dark mb-2">
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>COMMONLY ASKED QUESTIONS</span>
            </span>
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
          </div>
          <h2
            id="contact-faq-heading"
            className="font-display text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-3"
          >
            Before We Begin.
          </h2>
          <p className="font-sans text-base text-charcoal/75 leading-relaxed font-light">
            Answers to common questions regarding planning, enquiries, and date availability.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {CONTACT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-sand/80 rounded-sm overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg text-charcoal hover:text-gold-dark transition-colors focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <span className="font-medium pr-2">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal/60 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-gold' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base font-sans text-charcoal/80 leading-relaxed border-t border-sand/40"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

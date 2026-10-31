'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  MessageCircle,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import {
  ContactFormData,
  ContactFormErrors,
  EventTypeOption,
  BudgetRangeOption,
} from '@/lib/contact/types';
import { validateContactForm } from '@/lib/contact/validation';
import { getWhatsAppEnquiryUrl } from '@/lib/contact/whatsapp';
import { resolveEnquiryContext } from '@/lib/contact/context';
import { footerConfig } from '@/config/footer';

const EVENT_TYPE_OPTIONS: readonly EventTypeOption[] = [
  'Birthday Celebration',
  'Traditional Ceremony',
  'Wedding / Engagement',
  'Baby Shower',
  'Corporate Event',
  'Special Occasion',
  'Stage / Large Event',
  'Other',
];

const BUDGET_RANGE_OPTIONS: readonly BudgetRangeOption[] = [
  'Not decided yet',
  'Below ₹20,000',
  '₹20,000–₹50,000',
  '₹50,000–₹1,00,000',
  'Above ₹1,00,000',
  'Prefer to discuss',
];

export function ContactEnquiryForm() {
  const searchParams = useSearchParams();

  // Extract query parameters safely
  const queryObj: Record<string, string> = {};
  searchParams.forEach((val, key) => {
    queryObj[key] = val;
  });

  const preselectedContext = resolveEnquiryContext(queryObj);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    contactNumber: '',
    eventType: preselectedContext?.defaultEventType || '',
    eventDate: '',
    location: '',
    budget: '',
    message: preselectedContext?.initialMessageNote || '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState<boolean>(false);

  // Today's local date in YYYY-MM-DD for min date picker constraint
  const [minDateString, setMinDateString] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDateString(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Update default event type when query params change
  useEffect(() => {
    if (preselectedContext?.defaultEventType && !formData.eventType) {
      setFormData((prev) => ({
        ...prev,
        eventType: preselectedContext.defaultEventType || '',
        message: prev.message || preselectedContext.initialMessageNote || '',
      }));
    }
  }, [preselectedContext]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field-specific error upon change if previously attempted
    if (hasSubmittedAttempt && errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormErrors];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);

    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Form is valid: build WhatsApp deep link and redirect safely
    const waUrl = getWhatsAppEnquiryUrl(formData);

    // Provide clear, honest feedback to the user
    setSubmissionFeedback(
      'Your enquiry is ready in WhatsApp. Please tap Send in your WhatsApp chat to share it directly with our decor team.'
    );

    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="enquiry-form"
      aria-labelledby="enquiry-heading"
      className="w-full bg-[#FAF7F0] py-16 sm:py-24 lg:py-28 border-b border-sand scroll-mt-20"
    >
      <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-dark mb-3">
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
            <span>DIRECT CELEBRATION CONSULTATION</span>
          </div>

          <h2
            id="enquiry-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-tight mb-4"
          >
            Tell Us About Your Celebration.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/75 leading-relaxed font-light">
            Share a few details, and we’ll have a clearer picture of what you’re planning across Tumakuru or South Karnataka.
          </p>
        </div>

        {/* Two-Column Grid: Context/Photo on Left, Enquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Reassurance, Details Photo & Fast Channel */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Elegant Detail Photo */}
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-sm hidden sm:block">
              <Image
                src="/images/decor/faq-decor-detail.jpg"
                alt="Close-up detail of wedding stage floral architecture and brass lanterns in Tumakuru"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-ivory text-xs font-mono">
                <span className="text-gold">Atelier Focus</span> · Handcrafted detailing for every celebration
              </div>
            </div>

            {/* Reassurance Features */}
            <div className="p-6 bg-white border border-sand/80 rounded-sm shadow-sm space-y-4">
              <h3 className="font-display text-lg text-charcoal mb-2">
                What You Can Expect
              </h3>

              <ul className="space-y-3 font-sans text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Direct Consultation:</strong> Speak directly with our creative decor team without intermediary agency layers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Transparent Guidance:</strong> Realistic scope breakdowns, honest advice on flower longevity, and clear pricing tiers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Local Presence:</strong> Rooted in Tumakuru with deep familiarity with local kalyana mantapas, halls, and lawns.</span>
                </li>
              </ul>
            </div>

            {/* Instant WhatsApp Quick Card */}
            <div className="p-6 bg-[#FAF4E6] border border-gold/40 rounded-sm shadow-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-sans font-semibold text-charcoal text-sm mb-1">
                    Need an immediate response?
                  </h4>
                  <p className="font-sans text-xs text-charcoal/75 leading-relaxed mb-3">
                    You can message our decor team directly on WhatsApp for urgent date availability checks.
                  </p>
                  <a
                    href={footerConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-gold-dark hover:underline focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <span>Open Direct WhatsApp Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Main Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 border border-sand rounded-sm shadow-md">
            {/* Preselected Context Banner if arrived via deep link */}
            {preselectedContext && (
              <div className="mb-6 p-3.5 sm:p-4 bg-[#F5EFE3] border-l-4 border-gold rounded-r-sm flex items-start justify-between gap-3 text-xs sm:text-sm font-sans">
                <div className="flex items-start gap-2 text-charcoal">
                  <Sparkles className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Enquiring about:{' '}
                    <strong className="font-semibold text-charcoal">
                      {preselectedContext.sourceLabel}
                    </strong>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-charcoal/50 flex-shrink-0">
                  Auto-selected
                </span>
              </div>
            )}

            {/* Submission Feedback Notification (Honest UX) */}
            {submissionFeedback && (
              <div
                role="status"
                className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-sm flex items-start gap-3 text-sm font-sans"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold mb-1">WhatsApp Chat Ready</p>
                  <p className="text-emerald-800/90 text-xs sm:text-sm leading-relaxed">
                    {submissionFeedback}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* GROUP A: YOUR DETAILS */}
              <div className="space-y-4">
                <div className="border-b border-sand pb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-semibold">
                    01. YOUR CONTACT DETAILS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                    >
                      Full Name <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Gowda"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-3 bg-[#FDFBF7] border rounded-sm font-sans text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-gold/50'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* WhatsApp / Contact Number */}
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                    >
                      WhatsApp / Phone <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="e.g. 98450 12345"
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!errors.contactNumber}
                      aria-describedby={errors.contactNumber ? 'contactNumber-error' : undefined}
                      className={`w-full px-4 py-3 bg-[#FDFBF7] border rounded-sm font-sans text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
                        errors.contactNumber ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-gold/50'
                      }`}
                    />
                    {errors.contactNumber && (
                      <p id="contactNumber-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.contactNumber}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* GROUP B: YOUR CELEBRATION */}
              <div className="space-y-4 pt-4">
                <div className="border-b border-sand pb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-semibold">
                    02. CELEBRATION SPECIFICS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Event Type */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="eventType"
                      className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                    >
                      Event Type <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.eventType}
                      aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                      className={`w-full px-4 py-3 bg-[#FDFBF7] border rounded-sm font-sans text-sm text-charcoal transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
                        errors.eventType ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-gold/50'
                      }`}
                    >
                      <option value="" disabled>
                        Select celebration type...
                      </option>
                      {EVENT_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p id="eventType-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.eventType}</span>
                      </p>
                    )}
                  </div>

                  {/* Expected Event Date */}
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                    >
                      Expected Date <span className="text-charcoal/50 text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        min={minDateString}
                        value={formData.eventDate}
                        onChange={handleChange}
                        aria-invalid={!!errors.eventDate}
                        aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                        className={`w-full px-4 py-3 bg-[#FDFBF7] border rounded-sm font-sans text-sm text-charcoal transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.eventDate ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-gold/50'
                        }`}
                      />
                    </div>
                    {errors.eventDate && (
                      <p id="eventDate-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.eventDate}</span>
                      </p>
                    )}
                  </div>

                  {/* Location / Venue */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                    >
                      Venue / Area <span className="text-charcoal/50 text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mandara Hall, Tumakuru"
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-sand hover:border-gold/50 rounded-sm font-sans text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>
              </div>

              {/* GROUP C: YOUR VISION */}
              <div className="space-y-4 pt-4">
                <div className="border-b border-sand pb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-semibold">
                    03. YOUR VISION & BUDGET
                  </span>
                </div>

                {/* Approximate Decoration Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                  >
                    Approximate Decor Budget <span className="text-charcoal/50 text-xs font-normal">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FDFBF7] border border-sand hover:border-gold/50 rounded-sm font-sans text-sm text-charcoal transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">Select an indicative range...</option>
                    {BUDGET_RANGE_OPTIONS.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tell Us About Your Event */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs sm:text-sm font-medium text-charcoal mb-1.5"
                  >
                    Tell Us About Your Event <span className="text-charcoal/50 text-xs font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1500}
                    placeholder="Share your theme ideas, stage dimensions, guest count, or any specific floral preferences..."
                    className="w-full px-4 py-3 bg-[#FDFBF7] border border-sand hover:border-gold/50 rounded-sm font-sans text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:outline-none focus:ring-1 focus:ring-gold resize-y"
                  />
                  <div className="flex justify-end text-[11px] font-mono text-charcoal/50 mt-1">
                    {formData.message.length} / 1500
                  </div>
                </div>

                {/* Privacy Acknowledgement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.privacyConsent}
                      aria-describedby={errors.privacyConsent ? 'privacyConsent-error' : undefined}
                      className="mt-1 w-4 h-4 rounded border-sand text-gold focus:ring-gold cursor-pointer"
                    />
                    <span className="font-sans text-xs text-charcoal/80 leading-relaxed">
                      I understand that submitting this enquiry prepares my event details to be shared directly via WhatsApp for consultation with Tumkur Events. Read our{' '}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="text-gold-dark underline hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                      >
                        Privacy Policy
                      </Link>
                      . <span className="text-red-600" aria-hidden="true">*</span>
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p id="privacyConsent-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center gap-1 pl-7">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.privacyConsent}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-[0.14em] hover:bg-[#20bd5a] transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-emerald-600 shadow-md hover:shadow-lg shadow-emerald-500/10 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                  <span>Continue on WhatsApp</span>
                </button>

                <p className="font-sans text-xs text-charcoal/60 text-center mt-3 font-light leading-relaxed">
                  Your enquiry will open in WhatsApp with all details pre-formatted. Tap <strong className="font-semibold text-charcoal">Send</strong> to share it directly with our decor team.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

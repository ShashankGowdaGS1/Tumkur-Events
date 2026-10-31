import React from 'react';

const ENQUIRY_STAGES = [
  {
    step: '01',
    title: 'Tell Us About Your Event',
    description:
      'Share your event date, occasion type, preferred venue or hall in Tumakuru, and any decorative ideas or color palettes you have in mind.',
  },
  {
    step: '02',
    title: 'Discuss the Possibilities',
    description:
      'We review your vision against venue dimensions, explore suitable floral themes, backdrop structures, and discuss practical lighting arrangements.',
  },
  {
    step: '03',
    title: 'Review the Details',
    description:
      'We present a transparent decorative scope proposal, itemized budget breakdown, and clear execution schedule tailored to your celebration.',
  },
];

export function ContactProcess() {
  return (
    <section
      aria-labelledby="enquiry-process-heading"
      className="w-full bg-[#FAF7F0] py-16 sm:py-20 lg:py-24 border-b border-sand"
    >
      <div className="container-luxury max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-dark mb-2">
            <span className="w-4 h-px bg-gold" aria-hidden="true" />
            <span>THE ENQUIRY JOURNEY</span>
          </div>
          <h2
            id="enquiry-process-heading"
            className="font-display text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-3"
          >
            From Your First Hello to Your Celebration.
          </h2>
          <p className="font-sans text-base text-charcoal/75 leading-relaxed font-light">
            Here is what to expect after reaching out to our design concierge.
          </p>
        </div>

        {/* 3-Stage Horizontal Editorial Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {ENQUIRY_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative p-6 sm:p-8 bg-white border border-sand/80 rounded-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Step Number in Gold */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-bold">
                    STAGE {stage.step}
                  </span>
                  <span className="font-display text-2xl text-sand font-light" aria-hidden="true">
                    0{idx + 1}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-3 leading-snug">
                  {stage.title}
                </h3>

                {/* Stage Description */}
                <p className="font-sans text-sm text-charcoal/75 leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-sand/60 flex items-center gap-2 text-[11px] font-mono text-charcoal/50">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                <span>Personalized Consultation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

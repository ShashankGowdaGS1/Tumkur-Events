import { PolicyDocument } from './types';

export const refundPolicyContent: PolicyDocument = {
  slug: 'refund-policy',
  eyebrow: 'BOOKING POLICIES',
  title: 'Refund & Cancellation Policy',
  subtitle:
    'This policy outlines the principles governing booking cancellations, date rescheduling, and refund eligibility for bespoke event styling engagements with Tumkur Events.',
  lastUpdated: 'October 31, 2026',
  statusNote:
    'Editorial draft prepared for website launch. Specific cancellation tiers, refund percentages, and notice deadlines require formal business determination and legal ratification.',
  seoTitle: 'Refund & Cancellation Policy | Tumkur Events',
  seoDescription:
    'Understand our approach to celebration date reservations, bespoke botanical procurement commitments, and cancellation review procedures in Tumakuru.',
  sections: [
    {
      id: 'scope-principles',
      number: '01',
      title: 'Scope & Guiding Principles',
      paragraphs: [
        'At Tumkur Events, we approach every celebration with artistic devotion and meticulous operational planning. Unlike off-the-shelf retail products, bespoke event decoration involves reserving dedicated artisan crews, reserving high-demand dates, fabricating custom stage elements, and procuring fresh perishable botanicals.',
        'This policy explains the parameters considered when a client requests a booking cancellation or calendar date modification.',
      ],
    },
    {
      id: 'booking-commitments',
      number: '02',
      title: 'Advance Resource Allocation & Procurement',
      paragraphs: [
        'When an event reservation is confirmed, our atelier immediately commits physical and financial resources. These commitments typically include:',
      ],
      bullets: [
        'Date Lock-Out: The agreed celebration date is reserved exclusively, preventing our atelier from accepting other clients for the same time slot.',
        'Perishable Floral Orders: Advance procurement reservations for seasonal blossoms (such as fresh roses, Mysore jasmine, tuberose, and orchids) placed with wholesale growers.',
        'Custom Structural Fabrication: Carpentry, custom acrylic monograms, CNC backdrop arches, and specialized lighting rental reservations.',
        'Artisan & Production Scheduling: Retaining floral designers, riggers, and setup crews for nighttime or early-morning installation shifts.',
      ],
    },
    {
      id: 'cancellation-requests',
      number: '03',
      title: 'Client-Initiated Cancellation Requests',
      paragraphs: [
        'We recognize that family emergencies, health events, and unforeseen scheduling conflicts can arise. If you need to cancel a planned celebration, we ask that you notify us in writing as soon as the decision is made.',
        'Because financial commitments increase as the event date approaches, refund eligibility is evaluated based on the proximity of the cancellation to the scheduled setup date and the extent of non-recoverable material costs already incurred.',
      ],
      reviewNote:
        '[BUSINESS REVIEW REQUIRED: Establish verified cancellation notice tiers and corresponding refund percentages, for example:\n• Cancellations > 30 days prior: Full refund less administrative fee\n• Cancellations 15–30 days prior: 50% refund of deposit\n• Cancellations < 15 days prior: Deposit non-refundable to cover perishable floral commitments]',
    },
    {
      id: 'rescheduling-date-changes',
      number: '04',
      title: 'Rescheduling & Event Date Changes',
      paragraphs: [
        'Where circumstances require moving a celebration to a new date, we endeavor to accommodate the change without cancellation whenever feasible, subject to calendar availability and venue coordination.',
      ],
      reviewNote:
        '[BUSINESS REVIEW REQUIRED: Confirm conditions for transferring booking deposits to a new date (e.g. transfer permissible if requested at least 21 days in advance for a date within 6 months, subject to availability).]',
    },
    {
      id: 'scope-adjustments',
      number: '05',
      title: 'Adjustments to Event Scope',
      paragraphs: [
        'If a client requests a reduction in decorative scope after booking confirmation, we review the request in good faith. Reductions requested before botanical orders are locked can generally be accommodated with an adjusted final balance.',
        'However, custom fabricated signage, engraved items, or flowers already purchased cannot be refunded or cancelled.',
      ],
    },
    {
      id: 'force-majeure',
      number: '06',
      title: 'Unforeseen Circumstances & Force Majeure',
      paragraphs: [
        'In the rare event that an event cannot take place due to extraordinary circumstances beyond reasonable control—such as severe natural disasters, sudden government-mandated hall closures, or public health lockdowns—we work collaboratively with the client to reschedule the service or credit applicable funds toward a future date.',
      ],
    },
    {
      id: 'atelier-cancellations',
      number: '07',
      title: 'Cancellations Initiated by the Atelier',
      paragraphs: [
        'In the exceedingly unlikely event that Tumkur Events is unable to fulfill a confirmed booking due to severe operational disruption or internal emergency, the client will receive an immediate full refund of all payments received for that booking, alongside assistance in identifying alternative reputable local decorators.',
      ],
    },
    {
      id: 'refund-method-timeline',
      number: '08',
      title: 'Refund Method & Processing Timeline',
      paragraphs: [
        'Approved refunds are processed back to the originating bank account or payment method utilized during booking. For financial auditing compliance, cash refunds are strictly avoided.',
      ],
      reviewNote:
        '[BUSINESS REVIEW REQUIRED: Confirm formal banking payout timeframe, e.g. "Refunds approved under these guidelines will be credited via NEFT/bank transfer within 10 to 14 business days."]',
    },
    {
      id: 'how-to-request',
      number: '09',
      title: 'How to Submit a Cancellation Request',
      paragraphs: [
        'To ensure a clear, verified audit trail, all cancellation and rescheduling requests must be submitted in writing by the primary booking contact.',
        'Please email your request with your booking reference details to concierge@tumkurevents.com, or coordinate directly with your assigned event manager via our official WhatsApp desk.',
      ],
    },
    {
      id: 'contact-refunds',
      number: '10',
      title: 'Questions Regarding Your Booking',
      paragraphs: [
        'If you have questions regarding an existing celebration reservation or wish to discuss date adjustments, please connect with us directly:',
      ],
      bullets: [
        'Concierge Email: concierge@tumkurevents.com',
        'Direct Phone: +91 94812 34567',
        'WhatsApp Desk: +91 94812 34567',
      ],
    },
  ],
};

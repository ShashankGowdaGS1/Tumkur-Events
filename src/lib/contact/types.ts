/**
 * Centralized Type Definitions for Contact & Event Enquiry
 * Route: /contact
 */

export type EventTypeOption =
  | 'Birthday Celebration'
  | 'Traditional Ceremony'
  | 'Wedding / Engagement'
  | 'Baby Shower'
  | 'Corporate Event'
  | 'Special Occasion'
  | 'Stage / Large Event'
  | 'Other';

export type BudgetRangeOption =
  | 'Not decided yet'
  | 'Below ₹20,000'
  | '₹20,000–₹50,000'
  | '₹50,000–₹1,00,000'
  | 'Above ₹1,00,000'
  | 'Prefer to discuss';

export interface ContactFormData {
  fullName: string;
  contactNumber: string;
  eventType: EventTypeOption | '';
  eventDate: string;
  location: string;
  budget: BudgetRangeOption | '';
  message: string;
  privacyConsent: boolean;
}

export interface ContactFormErrors {
  fullName?: string;
  contactNumber?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  message?: string;
  privacyConsent?: string;
}

export interface PreselectedEnquiryContext {
  sourceLabel: string;
  defaultEventType?: EventTypeOption;
  initialMessageNote?: string;
}

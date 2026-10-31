import { ContactFormData, ContactFormErrors, EventTypeOption } from './types';

const ALLOWED_EVENT_TYPES: readonly EventTypeOption[] = [
  'Birthday Celebration',
  'Traditional Ceremony',
  'Wedding / Engagement',
  'Baby Shower',
  'Corporate Event',
  'Special Occasion',
  'Stage / Large Event',
  'Other',
];

/**
 * Validates Contact & Enquiry Form Data client-side.
 * Returns an errors object; form is valid if errors has 0 keys.
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // 1. Full Name
  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please provide your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (trimmedName.length > 80) {
    errors.fullName = 'Name cannot exceed 80 characters.';
  }

  // 2. WhatsApp / Contact Number
  const trimmedPhone = data.contactNumber.trim();
  if (!trimmedPhone) {
    errors.contactNumber = 'Please provide a contact number for WhatsApp.';
  } else {
    // Strip common formatting characters for check
    const digitsOnly = trimmedPhone.replace(/[\s\-\(\)\.]/g, '');
    // Support Indian 10-digit mobile (+91 / 91 / 0 prefix) or valid international (8 to 15 digits)
    const indianPhoneRegex = /^(\+?91|0)?[6-9]\d{9}$/;
    const internationalPhoneRegex = /^\+?[1-9]\d{7,14}$/;

    if (!indianPhoneRegex.test(digitsOnly) && !internationalPhoneRegex.test(digitsOnly)) {
      errors.contactNumber = 'Please enter a valid 10-digit mobile number or country code.';
    }
  }

  // 3. Event Type
  if (!data.eventType) {
    errors.eventType = 'Please select the type of celebration.';
  } else if (!ALLOWED_EVENT_TYPES.includes(data.eventType as EventTypeOption)) {
    errors.eventType = 'Please select a recognized celebration type.';
  }

  // 4. Event Date (Optional, but if given, must not be in the past)
  if (data.eventDate) {
    const selectedDate = new Date(data.eventDate);
    if (isNaN(selectedDate.getTime())) {
      errors.eventDate = 'Please select a valid calendar date.';
    } else {
      // Compare with start of local today (midnight)
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const checkDate = new Date(selectedDate);
      checkDate.setHours(0, 0, 0, 0);

      if (checkDate < today) {
        errors.eventDate = 'The event date cannot be in the past.';
      }
    }
  }

  // 5. Message (Optional, check length)
  if (data.message && data.message.length > 1500) {
    errors.message = 'Event details cannot exceed 1,500 characters.';
  }

  // 6. Privacy Consent
  if (!data.privacyConsent) {
    errors.privacyConsent = 'Please acknowledge that your details will be shared for enquiry consultation.';
  }

  return errors;
}

/**
 * Normalizes contact numbers for readable display and wa.me routing.
 */
export function formatWhatsAppNumber(phone: string): string {
  // Strip non-digits
  let digits = phone.replace(/\D/g, '');

  // If 10 digits starting with 6-9, assume India (+91)
  if (digits.length === 10 && /^[6-9]/.test(digits)) {
    digits = `91${digits}`;
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = `91${digits.slice(1)}`;
  }

  return digits;
}

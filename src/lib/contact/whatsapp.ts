import { ContactFormData } from './types';
import { siteConfig } from '@/config/site';

/**
 * Builds a clean, professional, readable WhatsApp message string
 * formatted strictly according to user inputs.
 */
export function buildWhatsAppEnquiryMessage(data: ContactFormData): string {
  const lines: string[] = [
    'Hello Tumkur Events,',
    '',
    'I would like to enquire about event decoration in Tumakuru.',
    '',
    `Name: ${data.fullName.trim()}`,
    `Contact Number: ${data.contactNumber.trim()}`,
    `Event Type: ${data.eventType}`,
  ];

  if (data.eventDate) {
    const formattedDate = new Intl.DateTimeFormat('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(data.eventDate));
    lines.push(`Expected Date: ${formattedDate}`);
  }

  if (data.location && data.location.trim()) {
    lines.push(`Venue / Location: ${data.location.trim()}`);
  }

  if (data.budget && data.budget.trim()) {
    lines.push(`Decoration Budget: ${data.budget.trim()}`);
  }

  if (data.message && data.message.trim()) {
    lines.push('', 'Event Details & Vision:', data.message.trim());
  }

  lines.push('', 'Please let me know how we can discuss the decoration options.', '', 'Thank you.');

  return lines.join('\n');
}

/**
 * Constructs the final wa.me deep link using the verified studio WhatsApp number.
 */
export function getWhatsAppEnquiryUrl(data: ContactFormData): string {
  const targetNumber = '919481234567'; // Configured studio WhatsApp number from siteConfig / footerConfig
  const message = buildWhatsAppEnquiryMessage(data);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${targetNumber}?text=${encoded}`;
}

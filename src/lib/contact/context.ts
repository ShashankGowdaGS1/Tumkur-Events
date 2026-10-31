import { EventTypeOption, PreselectedEnquiryContext } from './types';

const EVENT_SLUG_MAP: Record<string, { label: string; eventType: EventTypeOption }> = {
  weddings: {
    label: 'Weddings & Engagements',
    eventType: 'Wedding / Engagement',
  },
  birthdays: {
    label: 'Birthday Celebrations',
    eventType: 'Birthday Celebration',
  },
  'traditional-ceremonies': {
    label: 'Traditional Ceremonies',
    eventType: 'Traditional Ceremony',
  },
  'baby-showers': {
    label: 'Baby Showers & Family Functions',
    eventType: 'Baby Shower',
  },
  corporate: {
    label: 'Corporate & Institutional Events',
    eventType: 'Corporate Event',
  },
  'special-occasions': {
    label: 'Special Occasions & Milestones',
    eventType: 'Special Occasion',
  },
  'stage-events': {
    label: 'Stage & Auditorium Events',
    eventType: 'Stage / Large Event',
  },
};

const PACKAGE_SLUG_MAP: Record<string, { label: string; defaultEventType?: EventTypeOption }> = {
  intimate: {
    label: 'Intimate Moments Collection (₹15,000 – ₹35,000)',
    defaultEventType: 'Birthday Celebration',
  },
  signature: {
    label: 'Signature Celebrations Collection (₹45,000 – ₹1,20,000)',
    defaultEventType: 'Traditional Ceremony',
  },
  grand: {
    label: 'Grand Statements Collection (₹1,50,000+)',
    defaultEventType: 'Wedding / Engagement',
  },
  bespoke: {
    label: 'Bespoke Custom Event Design',
  },
};

/**
 * Parses and validates URL query parameters to produce safe, human-readable preselection context.
 * Never injects raw query strings into the DOM without sanitization and matching against known keys.
 */
export function resolveEnquiryContext(
  params: { [key: string]: string | string[] | undefined }
): PreselectedEnquiryContext | null {
  const eventParam = typeof params.event === 'string' ? params.event.toLowerCase().trim() : undefined;
  const packageParam = typeof params.package === 'string' ? params.package.toLowerCase().trim() : undefined;
  const serviceParam = typeof params.service === 'string' ? params.service.toLowerCase().trim() : undefined;
  const sourceParam = typeof params.source === 'string' ? params.source.toLowerCase().trim() : undefined;

  // 1. Direct event match
  if (eventParam && EVENT_SLUG_MAP[eventParam]) {
    const config = EVENT_SLUG_MAP[eventParam];
    return {
      sourceLabel: `Occasion: ${config.label}`,
      defaultEventType: config.eventType,
      initialMessageNote: `Enquiring regarding ${config.label} styling in Tumakuru.`,
    };
  }

  // 2. Package match
  if (packageParam && PACKAGE_SLUG_MAP[packageParam]) {
    const config = PACKAGE_SLUG_MAP[packageParam];
    return {
      sourceLabel: `Package: ${config.label}`,
      defaultEventType: config.defaultEventType,
      initialMessageNote: `Enquiring regarding the ${config.label}.`,
    };
  }

  // 3. Service match
  if (serviceParam) {
    const cleanService = serviceParam.replace(/[^a-z0-9-]/g, '');
    const readable = cleanService
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      sourceLabel: `Service: ${readable} Decor`,
      initialMessageNote: `Interested in discussing ${readable} decoration services.`,
    };
  }

  // 4. Source parameter (e.g. from Blog or Gallery)
  if (sourceParam) {
    if (sourceParam.startsWith('blog-')) {
      const articleSlug = sourceParam.replace('blog-', '');
      const readable = articleSlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      return {
        sourceLabel: `Journal Inspiration: ${readable}`,
        initialMessageNote: `Inspired by the article on "${readable}".`,
      };
    }

    if (sourceParam === 'gallery') {
      return {
        sourceLabel: 'Gallery Portfolio Inspiration',
        initialMessageNote: 'Saw your portfolio in the gallery and would like to explore similar decor.',
      };
    }

    if (sourceParam === 'reviews') {
      return {
        sourceLabel: 'Client Story & Review Inspiration',
      };
    }
  }

  return null;
}

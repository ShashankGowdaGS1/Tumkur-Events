import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Plan an Event & Contact Concierge',
};

export default function ContactPage() {
  return (
    <PlaceholderView
      title="Plan an Event"
      category="Concierge & Inquiries"
      description="Connect directly with our event directors to discuss your celebration vision, dates, and venue styling."
    />
  );
}


import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Events & Celebrations',
};

export default function EventsPage() {
  return (
    <PlaceholderView
      title="Events & Celebrations"
      category="Portfolio & Event Types"
      description="Explore bespoke event management for birthdays, traditional South Indian ceremonies, weddings, and celebrations."
    />
  );
}


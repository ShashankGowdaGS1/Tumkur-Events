import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Our Past Work & Case Studies',
};

export default function OurWorkPage() {
  return (
    <PlaceholderView
      title="Our Past Events"
      category="Event Stories & Archives"
      description="Curated retrospective of milestone celebrations, grand wedding productions, and bespoke family events orchestrated across Tumakuru and South Karnataka."
    />
  );
}


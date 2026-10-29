import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Client Reviews & Stories',
};

export default function ReviewsPage() {
  return (
    <PlaceholderView
      title="Client Reviews & Experiences"
      category="Testimonials"
      description="Genuine testimonials, heartfelt memories, and experiences shared by families and hosts."
    />
  );
}


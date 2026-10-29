import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Celebration Journal & Insights',
};

export default function BlogPage() {
  return (
    <PlaceholderView
      title="Celebration Journal"
      category="Articles & Trends"
      description="Inspirational decor trends, event planning wisdom, and cultural ceremonial guides for Karnataka hosts."
    />
  );
}


import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Services & Event Production',
};

export default function ServicesPage() {
  return (
    <PlaceholderView
      title="Services & Event Production"
      category="Capabilities"
      description="Comprehensive decor planning, stage styling, floral artistry, lighting, and full event coordination."
    />
  );
}


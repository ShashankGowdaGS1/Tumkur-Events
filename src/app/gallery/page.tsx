import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Visual Gallery',
};

export default function GalleryPage() {
  return (
    <PlaceholderView
      title="Visual Gallery"
      category="Portfolio Showcase"
      description="Immersive visual documentation of scenic mandap designs, ambient lighting, and floral transformations across Karnataka."
    />
  );
}


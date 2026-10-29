import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'About Tumkur Events',
};

export default function AboutPage() {
  return (
    <PlaceholderView
      title="About Tumkur Events"
      category="Our Story & Philosophy"
      description="The narrative behind our bespoke decor atelier, our team of artisans, and our commitment to contemporary celebration luxury."
    />
  );
}


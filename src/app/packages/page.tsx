import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

export const metadata: Metadata = {
  title: 'Curated Packages',
};

export default function PackagesPage() {
  return (
    <PlaceholderView
      title="Curated Packages"
      category="Offerings"
      description="Transparent, tailored luxury celebration collections designed to suit intimate ceremonies and grand milestones."
    />
  );
}


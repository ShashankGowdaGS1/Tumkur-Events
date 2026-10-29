import { Metadata } from 'next';
import { PlaceholderView } from '@/components/ui/placeholder-view';

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const eventSlugTitles: Record<string, string> = {
  birthdays: "Birthdays & Kids' Celebrations",
  'traditional-ceremonies': 'Traditional Ceremonies',
  weddings: 'Weddings & Engagements',
  'baby-showers': 'Baby Showers & Family Functions',
  corporate: 'Corporate & Institutional Events',
  'special-occasions': 'Special Occasions & Milestones',
  'stage-events': 'Stage & Large Events',
};

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = eventSlugTitles[slug] || 'Event Details';
  return {
    title,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const title = eventSlugTitles[slug] || `Event: ${slug}`;

  return (
    <PlaceholderView
      title={title}
      category="Individual Event Category"
      description={`Bespoke design, decor concepts, and management tailored specifically for ${title.toLowerCase()}.`}
    />
  );
}


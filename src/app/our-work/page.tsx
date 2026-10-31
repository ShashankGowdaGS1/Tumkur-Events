import { redirect } from 'next/navigation';

/**
 * Our Work Canonical Redirect
 * Redirects legacy /our-work requests seamlessly to the comprehensive
 * editorial celebration gallery at /gallery.
 */
export default function OurWorkPage() {
  redirect('/gallery');
}

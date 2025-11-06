import Placeholder from '@/components/Placeholder';
import { formatSlug } from '@/lib/format';

export function generateMetadata({ params }) {
  const formatted = formatSlug(params.slug);

  return {
    title: `${formatted} | Projects | Justin Badua`,
  };
}

export default function ProjectPlaceholderPage({ params }) {
  return <Placeholder title="Project" slug={params.slug} />;
}


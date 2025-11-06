import Placeholder from '@/components/Placeholder';
import { formatSlug } from '@/lib/format';

export function generateMetadata({ params }) {
  const formatted = formatSlug(params.slug);

  return {
    title: `${formatted} | Sketches | Justin Badua`,
  };
}

export default function SketchPlaceholderPage({ params }) {
  return <Placeholder title="Sketch" slug={params.slug} />;
}


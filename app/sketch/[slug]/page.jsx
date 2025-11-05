import Placeholder from '@/components/Placeholder';

export function generateMetadata({ params }) {
  const formatted = params.slug.replace(/-/g, ' ');

  return {
    title: `${formatted} | Sketches | Justin Badua`,
  };
}

export default function SketchPlaceholderPage({ params }) {
  return <Placeholder title="Sketch" slug={params.slug} />;
}


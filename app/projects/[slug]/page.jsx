import Placeholder from '@/components/Placeholder';

export function generateMetadata({ params }) {
  const formatted = params.slug.replace(/-/g, ' ');

  return {
    title: `${formatted} | Projects | Justin Badua`,
  };
}

export default function ProjectPlaceholderPage({ params }) {
  return <Placeholder title="Project" slug={params.slug} />;
}


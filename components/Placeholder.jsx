function formatSlug(slug) {
  if (!slug) {
    return 'section';
  }

  return slug.replace(/-/g, ' ');
}

export default function Placeholder({ title, slug }) {
  const label = formatSlug(slug);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-24 text-center text-neutral-500">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">{title}</p>
        <h1 className="text-3xl font-semibold text-neutral-900">Coming soon</h1>
        <p className="max-w-xl leading-7">
          I’m curating a detailed story for {label}. Check back shortly or drop me a line if you’d like a
          preview.
        </p>
      </div>
    </div>
  );
}


import { formatSlug } from '@/lib/format';

export default function Placeholder({ title, slug }) {
  const label = formatSlug(slug);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black px-6 py-24 text-center text-neutral-500 dark:text-neutral-400">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">{title}</p>
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-[#f5f5f7]">Coming soon</h1>
        <p className="max-w-xl leading-7">
          I'm curating a detailed story for {label}. Check back shortly or drop me a DM on LinkedIn if you'd like to
          know more.
        </p>
      </div>
    </div>
  );
}


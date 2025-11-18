import { formatSlug } from '@/lib/format';

const projectResources = {
  'clikk-apply': {
    title: 'Tricode Cloud',
    website: 'https://tricode.cloud/',
  },
  nexridge: {
    title: 'Nexridge',
    website: 'https://nexridge.ca/',
  },
  micra: {
    title: 'MiCRA',
    website: 'https://mi-cra.vercel.app/',
    github: 'https://github.com/mcronin4/MiCRA',
  },
  'rl-rocket-league': {
    title: 'RL² Rocket League Agent',
    github: 'https://github.com/JoshAlbom/CUCAI-Rocket-League-Agent',
  },
  crakd: {
    title: 'Crakd',
    website: 'https://crakd.vercel.app/',
    github: 'https://github.com/justinbaduaa/crakd',
  },
};

const resourceIcons = {
  website: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z" />
    </svg>
  ),
  github: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.109-1.463-1.109-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.908-1.295 2.747-1.026 2.747-1.026.547 1.376.204 2.393.1 2.646.64.698 1.028 1.59 1.028 2.682 0 3.842-2.338 4.688-4.566 4.936.359.308.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
  ),
};

const resourceLabels = {
  website: 'Website',
  github: 'GitHub',
};

const leadershipSlugs = new Set(['first-robotics', 'compsa', 'ai-collective']);

export default function Placeholder({ title, slug }) {
  const label = formatSlug(slug);
  const resource = projectResources[slug];
  const resourceLinks = [
    resource?.website && { type: 'website', href: resource.website },
    resource?.github && { type: 'github', href: resource.github },
  ].filter(Boolean);
  const projectName = resource?.title || label;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black px-6 py-24 text-center text-neutral-500 dark:text-neutral-400">
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">{title}</p>
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-[#f5f5f7]">
            {leadershipSlugs.has(slug) ? 'Experience write-up on deck' : 'Case study in progress'}
          </h1>
          <p className="max-w-xl leading-7">
            {leadershipSlugs.has(slug)
              ? `I'm polishing up my notes from ${projectName}. Check back soon for the full story or drop me a DM on LinkedIn if you'd like the quick version.`
              : `${projectName} is already in the wild. I'm just wrapping up a proper breakdown here. Check back soon or drop me a DM on LinkedIn if you'd like the tl;dr.`}
          </p>
        </div>

        {resourceLinks.length > 0 && (
          <div className="space-y-4 pt-2">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              In the meantime, here are the live links if you want to take a look.
            </p>
            <div className="flex items-center justify-center gap-3">
              {resourceLinks.map((link) => (
                <a
                  key={`${slug}-${link.type}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/80 text-neutral-500 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-900 dark:border-[#2c2c2e] dark:text-neutral-400 dark:hover:border-[#434348] dark:hover:text-[#f5f5f7]"
                  aria-label={`Open ${resourceLabels[link.type]} for ${projectName}`}
                >
                  <span className="text-current transition-transform duration-200 group-hover:scale-105">{resourceIcons[link.type]}</span>
                  <span className="sr-only">{resourceLabels[link.type]}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

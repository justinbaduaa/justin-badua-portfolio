import { formatSlug } from '@/lib/format';
import { RESOURCE_ICONS, RESOURCE_LABELS } from '@/lib/resourceLinks';

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
  numnum: {
    title: 'NumNum',
    github: 'https://github.com/kevinvalenciaa/NumNum',
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
  cucai: {
    title: 'CUCAI',
    pdf: '/CUCAI Sponsorship Package 2026-09.18.26_compressed.pdf',
  },
};

const leadershipSlugs = new Set(['first-robotics', 'compsa', 'ai-collective']);

export default function Placeholder({ title, slug }) {
  const label = formatSlug(slug);
  const resource = projectResources[slug];
  const resourceLinks = [
    resource?.website && { type: 'website', href: resource.website },
    resource?.github && { type: 'github', href: resource.github },
    resource?.pdf && { type: 'pdf', href: resource.pdf },
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
                  aria-label={`Open ${RESOURCE_LABELS[link.type]} for ${projectName}`}
                >
                  <span className="text-current transition-transform duration-200 group-hover:scale-105">{RESOURCE_ICONS[link.type]}</span>
                  <span className="sr-only">{RESOURCE_LABELS[link.type]}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

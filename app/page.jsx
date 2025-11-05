'use client';

import { useEffect, useState } from 'react';

import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    index: 1,
    title: 'Tricode Cloud',
    subtitle: 'Clikk Apply',
    year: '2025',
    href: '/projects/clikk-apply',
    imageSrc: 'https://placehold.co/960x540/png',
    size: 'large',
  },
  {
    index: 2,
    title: 'MiCRA',
    subtitle: 'multi model content repurposing agent',
    year: '2024',
    href: '/projects/micra',
    imageSrc: 'https://placehold.co/960x540/png',
    size: 'tall',
  },
  {
    index: 3,
    title: 'RL² Rocket League Agent',
    subtitle: 'Reinforcement learning',
    year: '2024',
    href: '/projects/rl-rocket-league',
    imageSrc: 'https://placehold.co/960x540/png',
    size: 'medium',
  },
  {
    index: 4,
    title: 'Crakd',
    subtitle: 'AI Mock interview',
    year: '2024',
    href: '/projects/crakd',
    imageSrc: 'https://placehold.co/960x540/png',
    size: 'wide',
  },
  {
    index: 5,
    title: 'Nexridge',
    subtitle: 'AI automation',
    year: '2023',
    href: '/projects/nexridge',
    imageSrc: 'https://placehold.co/960x540/png',
    size: 'medium',
  },
];

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-CA', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat('en-CA', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(currentTime);

  const handleSpotlightMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    requestAnimationFrame(() => {
      setSpotlightPosition({
        x: Math.min(Math.max(x, 0), 100),
        y: Math.min(Math.max(y, 0), 100),
      });
    });
  };

  const handleSpotlightEnter = (event) => {
    setIsSpotlightActive(true);
    handleSpotlightMove(event);
  };

  const handleSpotlightLeave = () => {
    setIsSpotlightActive(false);
  };

  return (
    <div className="mx-auto w-full max-w-[1600px] pb-20 text-neutral-900">
      <header className="mb-16 space-y-10 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 pt-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="flex flex-wrap items-baseline gap-3 text-sm text-neutral-500">
              <span className="font-medium text-[18px] text-neutral-600">Hi there,</span>
              <span className="inline-flex items-baseline gap-2">
                <span className="font-medium text-[18px] text-neutral-600">kamusta !</span>
                <span className="text-xs text-neutral-400">/ka-MOOS-tah/</span>
              </span>
            </p>
          </div>
          <div className="text-xs font-medium text-neutral-400 lg:text-right">
            <p>{formattedDate}</p>
            <p className="mt-1">{formattedTime}</p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-neutral-700 sm:text-5xl lg:text-[3.5rem]">
            I&apos;m a{' '}
            <span
              className="queens-highlight"
              data-text="Queen's"
              onMouseEnter={handleSpotlightEnter}
              onMouseMove={handleSpotlightMove}
              onMouseLeave={handleSpotlightLeave}
              style={{
                '--spotlight-x': `${spotlightPosition.x}%`,
                '--spotlight-y': `${spotlightPosition.y}%`,
                '--spotlight-opacity': isSpotlightActive ? 1 : 0,
              }}
            >
              Queen&apos;s
            </span>{' '}
            Computing student in AI and Economics, building thoughtful, human-centered interfaces.
          </h1>
          <p className="max-w-4xl text-lg leading-8 text-neutral-500">
            Previously, I&apos;ve helped teams across startups and student organizations design intelligent tools that feel
            natural in everyday workflows. Today, I&apos;m exploring how emerging interaction models can empower communities
            to move with clarity and delight.
          </p>
        </div>
      </header>

      <section className="space-y-8 px-6 sm:px-8 lg:px-12">
        <div className="flex items-center border-t border-neutral-200/60 pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Work</p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid auto-rows-[280px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((project) => {
            const sizeClasses = {
              large: 'sm:col-span-2 sm:row-span-2',
              tall: 'sm:row-span-2',
              wide: 'sm:col-span-2',
              medium: '',
            };

            return (
              <div key={project.title} className={sizeClasses[project.size] || ''}>
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}


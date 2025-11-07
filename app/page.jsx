'use client';

import { useEffect, useState } from 'react';

import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    index: 1,
    title: 'Tricode Cloud',
    subtitle: 'Clikk Apply',
    year: '2024 —',
    href: '/projects/clikk-apply',
    imageSrc: '/tricode-cloud-mock.png',
    size: 'large',
  },
  {
    index: 2,
    title: 'Nexridge.',
    subtitle: 'AI Automation',
    year: '2025 —',
    href: '/projects/nexridge',
    imageSrc: '/Nexridge Mock.png',
    size: 'tall',
    imageAspect: '866 / 1000',
  },
  {
    index: 3,
    title: 'MiCRA',
    subtitle: 'Multi-Model Content Repurposing Agent',
    year: '2025 —',
    href: '/projects/micra',
    videoSrc: '/MiCRA Portfolio Demo.mp4',
    size: 'wide',
    imageFit: 'contain',
    imageAspect: '1365 / 768',
  },
  {
    index: 4,
    title: 'NumNum',
    subtitle: 'QHacks 2024',
    year: '2024',
    href: '/projects/numnum',
    imageSrc: '/NumNum Mock.png',
    size: 'tall',
    imageAspect: '866 / 1000',
  },
  {
    index: 5,
    title: 'RL² Rocket League Agent',
    subtitle: 'Reinforcement Learning',
    year: '2024',
    href: '/projects/rl-rocket-league',
    imageSrc: '/RL^2 Mock.png',
    size: 'large',
  },
  {
    index: 6,
    title: 'Crakd',
    subtitle: 'AI Mock Interview',
    year: '2024',
    href: '/projects/crakd',
    imageSrc: '/Crakd Mock V2.png',
    size: 'wide',
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
    <div className="mx-auto w-full max-w-[1400px] pb-32 text-neutral-900">
      <header className="mb-12 sm:mb-16 lg:mb-20 space-y-10 sm:space-y-12 px-6 sm:px-8 lg:px-16 pt-12 sm:pt-16">
        <div className="flex flex-col gap-3 sm:gap-4 text-sm text-neutral-500 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-[15px] text-neutral-600">
              Hi there, <span className="font-normal">kamusta!</span>
            </p>
            <p className="text-[13px] text-neutral-400 italic">/ka-MOOS-tah/</p>
          </div>
          <div className="text-[13px] font-normal text-neutral-400 sm:text-right">
            <p>{formattedDate}</p>
            <p className="mt-0.5">{formattedTime}</p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h1 className="max-w-4xl text-[2rem] font-medium leading-[1.2] text-neutral-800 sm:text-[2.75rem] lg:text-[3.25rem] tracking-tight">
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
          <p className="max-w-4xl text-[14px] sm:text-[15px] leading-[1.7] text-neutral-600">
            I like building things that help people. I&apos;ve worked with startups and student teams to turn ideas into stuff you
            can actually use: simple tools that solve real problems. I care about the details, like clear language, calm flows, and
            thoughtful choices. Lately I&apos;m exploring interactions that feel natural and useful, the kind that make technology
            fade into the background so you can just get things done.
          </p>
        </div>
      </header>

      <div className="mx-6 sm:mx-8 lg:mx-16 border-t border-neutral-200" />

      <section className="space-y-8 sm:space-y-10 px-6 sm:px-8 lg:px-16">
        <div className="flex items-center pt-6 sm:pt-8">
          <p className="text-[0.75rem] uppercase tracking-[0.4em] text-neutral-400 font-medium">Experience & Projects</p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid auto-rows-[minmax(260px,_auto)] sm:auto-rows-[minmax(280px,_auto)] gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const sizeClasses = {
              large: 'sm:col-span-2 sm:row-span-2',
              tall: 'sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-2',
              wide: 'sm:col-span-2 lg:col-span-3',
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


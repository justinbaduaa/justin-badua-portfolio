import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    index: 1,
    category: "Human Interface",
    title: "Clikk Apply",
    description: "Application system processing hundreds of applications for ASUS Orientation hiring with interview scheduling and candidate forms.",
    year: "2025",
    to: "/projects/clikk-apply",
    imageSrc: "https://placehold.co/960x540/png",
    size: "large", // spans more space in bento grid
  },
  {
    index: 2,
    category: "AI & Machine Learning",
    title: "MiCRA",
    description: "AI content repurposing system that transforms long-form video and audio into LinkedIn posts, emails, and blogs using multi-agent pipeline.",
    year: "2024",
    to: "/projects/micra",
    imageSrc: "https://placehold.co/960x540/png",
    size: "tall", // taller card
  },
  {
    index: 3,
    category: "AI & Machine Learning",
    title: "RL² Rocket League Agent",
    description: "People's Choice Award winner at CUCAI 2025. Reinforcement learning agent using Proximal Policy Optimization and self-play training.",
    year: "2024",
    to: "/projects/rl-rocket-league",
    imageSrc: "https://placehold.co/960x540/png",
    size: "medium",
  },
  {
    index: 4,
    category: "AI & Machine Learning",
    title: "Crakd",
    description: "AI mock interview platform with real-time voice interviews using Vapi AI and Google Gemini, with personalized feedback system.",
    year: "2024",
    to: "/projects/crakd",
    imageSrc: "https://placehold.co/960x540/png",
    size: "wide", // wider card
  },
];

const Home = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
  }).format(currentTime);

  return (
    <div className="w-full max-w-full bg-transparent px-6 pb-24 pt-12 text-neutral-900 sm:px-8 lg:px-12 lg:pr-16 xl:px-16 xl:pr-24">
      <header className="mb-16 min-w-0 max-w-5xl space-y-10">
        <div className="flex min-w-0 flex-col gap-4 text-neutral-500 lg:flex-row lg:items-center lg:justify-between">
          <p className="overflow-hidden text-ellipsis text-sm uppercase tracking-[0.3em] text-neutral-400">
            /ka\-MOOS-ta/ Welcome kamusta!
          </p>
          <div className="text-sm text-neutral-400 lg:text-right">
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>

        <div className="min-w-0 space-y-6 overflow-hidden">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-neutral-900 wrap-break-word sm:text-5xl">
            I'm a Queen's Computing student in AI and Economics, building thoughtful,
            human-centered interfaces.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-neutral-500 wrap-break-word">
            Previously, I've helped teams across startups and student organizations design
            intelligent tools that feel natural in everyday workflows. Today, I'm exploring how
            emerging interaction models can empower communities to move with clarity and delight.
          </p>
        </div>
      </header>

      <section className="min-w-0 max-w-5xl space-y-10 overflow-hidden">
        <div className="flex w-full min-w-0 items-center justify-between overflow-hidden border-y border-neutral-200 py-6 text-sm uppercase tracking-[0.3em] text-neutral-400">
          <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">Projects</p>
          <span className="ml-4 shrink-0 overflow-hidden text-ellipsis whitespace-nowrap">Selected Work</span>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="w-full min-w-0">
          <div className="grid min-w-0 auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 sm:auto-rows-[minmax(280px,auto)] sm:gap-5 md:grid-cols-2 md:gap-6 xl:auto-rows-[minmax(320px,auto)] xl:grid-cols-3">
            {projects.map((project) => {
              // Map size to responsive grid classes
              const sizeClasses = {
                large: "md:col-span-2 md:row-span-2",
                tall: "md:row-span-2",
                wide: "md:col-span-2",
                medium: "",
              };
              
              return (
                <div key={project.title} className={`min-w-0 ${sizeClasses[project.size] || ""}`}>
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


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
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);

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

  const handleSpotlightMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    // Use requestAnimationFrame for smoother updates
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
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 text-neutral-900 sm:px-8 lg:px-12">
      <header className="mb-20 space-y-12">
        <div className="flex flex-col gap-6 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="flex flex-wrap items-baseline gap-3 text-sm text-neutral-500">
              <span className="font-medium text-neutral-600">Hi there,</span>
              <span className="inline-flex items-baseline gap-2">
                <span className="font-medium text-neutral-600">kamusta !</span>
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
            I'm a{" "}
            <span
              className="queens-highlight"
              data-text="Queen's"
              onMouseEnter={handleSpotlightEnter}
              onMouseMove={handleSpotlightMove}
              onMouseLeave={handleSpotlightLeave}
              style={{
                "--spotlight-x": `${spotlightPosition.x}%`,
                "--spotlight-y": `${spotlightPosition.y}%`,
                "--spotlight-opacity": isSpotlightActive ? 1 : 0,
              }}
            >
              Queen&apos;s
            </span>{" "}
            Computing student in AI and Economics, building thoughtful,
            human-centered interfaces.
          </h1>
          <p className="max-w-4xl text-lg leading-8 text-neutral-500">
            Previously, I've helped teams across startups and student organizations design
            intelligent tools that feel natural in everyday workflows. Today, I'm exploring how
            emerging interaction models can empower communities to move with clarity and delight.
          </p>
        </div>
      </header>

      <section className="space-y-10">
        <div className="flex items-center border-t border-neutral-200 pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Projects</p>
        </div>

        <div className="grid auto-rows-[minmax(280px,auto)] gap-6 sm:grid-cols-2 xl:auto-rows-[minmax(320px,auto)] xl:grid-cols-3">
          {projects.map((project) => {
            const sizeClasses = {
              large: "sm:col-span-2 xl:col-span-2 xl:row-span-2",
              tall: "xl:row-span-2",
              wide: "sm:col-span-2",
              medium: "",
            };

            return (
              <div key={project.title} className={`${sizeClasses[project.size] || ""}`}>
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;


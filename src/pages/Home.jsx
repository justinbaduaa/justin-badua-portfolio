import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    index: 1,
    category: "Human Interface",
    title: "Clikk Apply",
    description: "Hiring made approachable for student-led teams, crafted with care for campus communities.",
    year: "2024",
    to: "/projects/clikk-apply",
    imageSrc: "https://placehold.co/960x540/png",
  },
  {
    index: 2,
    category: "Tools for Thought",
    title: "NumNum",
    description: "An AI-powered dining companion that balances taste, budget, and social plans.",
    year: "2024",
    to: "/projects/numnum",
    imageSrc: "https://placehold.co/960x540/png",
  },
  {
    index: 3,
    category: "Enterprise",
    title: "Marqeta SSO Forms",
    description: "Streamlining onboarding for global partners with clarity and compliance in mind.",
    year: "2023",
    to: "/projects/marqeta",
    imageSrc: "https://placehold.co/960x540/png",
  },
  {
    index: 4,
    category: "Brand",
    title: "Sleepy Cat Books",
    description: "A warm retail experience that blends discovery, literature, and community.",
    year: "2023",
    to: "/projects/sleepy-cat-books",
    imageSrc: "https://placehold.co/960x540/png",
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
    <div className="min-h-screen bg-transparent px-6 pb-24 pt-12 text-neutral-900 sm:px-10 lg:px-16">
      <header className="mb-16 space-y-10">
        <div className="flex flex-col gap-4 text-neutral-500 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            /ka\-MOOS-ta/ Welcome kamusta!
          </p>
          <div className="text-right text-sm text-neutral-400">
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            I’m a Queen’s Computing student in AI and Economics, building thoughtful,
            human-centered interfaces.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-neutral-500">
            Previously, I’ve helped teams across startups and student organizations design
            intelligent tools that feel natural in everyday workflows. Today, I’m exploring how
            emerging interaction models can empower communities to move with clarity and delight.
          </p>
        </div>
      </header>

      <section className="space-y-10">
        <div className="flex items-center justify-between border-y border-neutral-200 py-6 text-sm uppercase tracking-[0.3em] text-neutral-400">
          <p>Projects</p>
          <span>Selected Work</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


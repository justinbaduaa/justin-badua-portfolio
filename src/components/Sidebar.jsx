import { NavLink } from "react-router-dom";

const primaryLinks = [
  { label: "About", to: "/about" },
  { label: "CV", to: "/cv" },
];

const workSections = [
  {
    label: "Experience",
    items: [
      { label: "Clikk Apply", to: "/projects/clikk-apply" },
    ],
  },
  {
    label: "Projects",
    items: [
      { label: "MiCRA", to: "/projects/micra" },
      { label: "RL² Rocket League Agent", to: "/projects/rl-rocket-league" },
      { label: "Crakd", to: "/projects/crakd" },
    ],
  },
  {
    label: "Leadership & Community",
    items: [
      { label: "FIRST Robotics", to: "/projects/first-robotics" },
      { label: "COMPSA", to: "/projects/compsa" },
      { label: "AI Collective", to: "/projects/ai-collective" },
    ],
  },
];

const contactLinks = [
  { label: "Mail", href: "mailto:hello@justinbadua.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Read.cv", href: "https://read.cv" },
];

const linkBaseStyles =
  "transition-colors duration-200 text-sm text-neutral-500 hover:text-neutral-900";

const Sidebar = () => {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-neutral-200/80 bg-white pl-2 pr-10 pt-14 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:pb-12">
      <div className="space-y-12">
        <div className="space-y-5">
          <NavLink to="/" className="inline-block">
            <img
              src="/JB-Glasses.svg"
              alt="Justin Badua mark"
              className="h-14 w-auto"
              draggable={false}
            />
          </NavLink>
          <div className="space-y-1 text-sm text-neutral-500">
            <p className="font-medium text-neutral-600">Justin Badua</p>
          </div>
        </div>

        <nav className="space-y-10">
          <ul className="space-y-4 text-sm font-medium text-neutral-700">
            {primaryLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${linkBaseStyles} text-base font-medium ${
                      isActive ? "text-neutral-900" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-200/70"></div>

          <div className="space-y-6">
            {workSections.map((section) => (
              <div key={section.label} className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">
                  {section.label}
                </p>
                {section.items.length > 0 && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.to}>
                        <NavLink to={item.to} className={linkBaseStyles}>
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="space-y-3">
        <div className="border-t border-neutral-200/70"></div>
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">
          Contact
        </p>
        <ul className="space-y-2">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a className={linkBaseStyles} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;


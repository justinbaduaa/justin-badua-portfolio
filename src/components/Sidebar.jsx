import { NavLink } from "react-router-dom";

const primaryLinks = [
  { label: "About", to: "/about" },
  { label: "CV", to: "/cv" },
];

const workSections = [
  {
    label: "Human Interface",
    items: [
      { label: "Apple", to: "/projects/apple" },
      { label: "GoodNotes", to: "/projects/goodnotes" },
      { label: "Micro-Interactions", to: "/projects/micro-interactions" },
    ],
  },
  {
    label: "Enterprise",
    items: [
      { label: "Marqeta | SSO Forms", to: "/projects/marqeta" },
      { label: "Bug-Add", to: "/projects/bug-add" },
      { label: "PropertyGuru", to: "/projects/propertyguru" },
    ],
  },
  {
    label: "Brand",
    items: [
      { label: "Sleepy Cat Books", to: "/projects/sleepy-cat-books" },
    ],
  },
  {
    label: "Sketch",
    items: [
      { label: "Watercolor", to: "/sketch/watercolor" },
      { label: "Draw", to: "/sketch/draw" },
    ],
  },
];

const contactLinks = [
  { label: "Mail", href: "mailto:hello@justinbadua.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Read.cv", href: "https://read.cv" },
];

const linkBaseStyles =
  "transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900";

const Sidebar = () => {
  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-neutral-200 bg-white px-8 py-10 lg:fixed lg:left-0 lg:inset-y-0 lg:flex lg:flex-col lg:justify-between lg:overflow-y-auto">
      <div className="space-y-10">
        <div className="space-y-4">
          <NavLink to="/" className="inline-block">
            <img
              src="/JB-Glasses.svg"
              alt="Justin Badua mark"
              className="h-16 w-auto"
              draggable={false}
            />
          </NavLink>
          <div className="space-y-1 text-sm text-neutral-500">
            <p>Justin Badua</p>
            <p className="text-neutral-400">/kaˈ-moos-ta\ Welcome kamusta!</p>
          </div>
        </div>

        <nav className="space-y-8">
          <ul className="space-y-3 text-base font-medium text-neutral-800">
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

          <div className="space-y-6">
            {workSections.map((section) => (
              <div key={section.label} className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {section.label}
                </p>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.to}>
                      <NavLink to={item.to} className={linkBaseStyles}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
          Contact
        </p>
        <ul className="space-y-1">
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


'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { contactLinks, primaryLinks, workSections } from '@/lib/navigation';
import { useTheme } from './ThemeProvider';

const isActive = (pathname, href) => (href === '/' ? pathname === '/' : pathname === href);

// Every clickable row in the sidebar shares this treatment. The active row gets a
// filled background and full-contrast text; everything else stays muted until hover.
const itemClass = (active) =>
  clsx(
    'flex w-full items-center gap-2.5 rounded-md px-3 py-1.5 text-left text-sm leading-snug transition-colors duration-150',
    active
      ? 'bg-sidebar-accent font-medium text-foreground'
      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
  );

const sectionLabelClass =
  'px-3 pb-1 pt-5 text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground';

const iconProps = {
  'aria-hidden': true,
  viewBox: '0 0 24 24',
  className: 'h-4 w-4',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  mail: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  linkedin: (
    <svg {...iconProps}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
    </svg>
  ),
  github: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.109-1.463-1.109-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.908-1.295 2.747-1.026 2.747-1.026.547 1.376.204 2.393.1 2.646.64.698 1.028 1.59 1.028 2.682 0 3.842-2.338 4.688-4.566 4.936.359.308.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
  ),
  sun: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2m-7.07-15.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  moon: (
    <svg {...iconProps}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
};

const Icon = ({ name }) => (
  <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center">{icons[name]}</span>
);

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <aside className="hidden border-r border-border bg-background lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-64 lg:flex-col">
      <div className="flex h-16 shrink-0 items-center px-5">
        <Link href="/" className="inline-flex" aria-label="Go to work page">
          {/* CSS-only swap on the `dark` class so the mark never flashes the wrong colour. */}
          <Image src="/JB-Glasses.svg" alt="Justin Badua mark" width={36} height={36} className="h-9 w-auto dark:hidden" draggable={false} priority />
          <Image src="/JB Glasses White.svg" alt="Justin Badua mark" width={36} height={36} className="hidden h-9 w-auto dark:block" draggable={false} priority />
        </Link>
      </div>

      <nav className="custom-scroll flex-1 overflow-y-auto px-3 pb-4 pt-2">
        <ul className="flex flex-col gap-0.5">
          {primaryLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={itemClass(false)}>
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={itemClass(isActive(pathname, link.href))}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {workSections.map((section) => (
          <div key={section.label}>
            <p className={sectionLabelClass}>{section.label}</p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={itemClass(isActive(pathname, item.href))}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <ul className="flex shrink-0 flex-col gap-0.5 border-t border-border px-3 py-3">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer" className={itemClass(false)}>
              <Icon name={link.icon} />
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={toggleTheme}
            className={itemClass(false)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </li>
      </ul>
    </aside>
  );
}

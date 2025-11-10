'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { contactLinks, primaryLinks, workSections } from '@/lib/navigation';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const isActive = (pathname, href) => {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href;
};

const contactIcons = {
  mail: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  linkedin: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5" strokeLinecap="round" />
      <path d="M8 8v.01" strokeLinecap="round" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  github: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.109-1.463-1.109-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.908-1.295 2.747-1.026 2.747-1.026.547 1.376.204 2.393.1 2.646.64.698 1.028 1.59 1.028 2.682 0 3.842-2.338 4.688-4.566 4.936.359.308.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
  ),
};

export default function Sidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <aside className="hidden w-56 shrink-0 bg-white dark:bg-[#1c1c1e] border-r border-neutral-200 dark:border-[#2c2c2e] px-12 pt-16 lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:pb-12">
      <div className="space-y-12">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-block" aria-label="Go to work page">
              <Image
                src={theme === 'dark' ? '/JB Glasses White.svg' : '/JB-Glasses.svg'}
                alt="Justin Badua mark"
                width={48}
                height={48}
                className="h-12 w-auto"
                draggable={false}
                priority
              />
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <nav className="space-y-10">
          <ul className="space-y-4 text-sm">
            {primaryLinks.map((link) => {
              const active = link.external ? false : isActive(pathname, link.href);

              return (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-neutral-500 dark:text-neutral-400 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-[#f5f5f7]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={clsx(
                        'text-[15px] font-semibold transition-colors duration-200',
                        active ? 'text-neutral-900 dark:text-[#f5f5f7]' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-[#f5f5f7]'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="space-y-6">
            {workSections.map((section) => (
              <div key={section.label} className="space-y-3">
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-200 font-medium">
                  {section.label}
                </p>
                {section.items.length > 0 && (
                  <ul className="space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={clsx(
                            'text-[14px] font-normal transition-colors duration-200',
                            isActive(pathname, item.href) ? 'text-neutral-900 dark:text-[#f5f5f7]' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-[#f5f5f7]'
                          )}
                        >
                          {item.label}
                        </Link>
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
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-200 font-medium">Contact</p>
        <ul className="space-y-2.5">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                className="group inline-flex items-center gap-2 text-[14px] font-normal text-neutral-500 dark:text-neutral-400 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-[#f5f5f7]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {contactIcons[link.icon] && (
                  <span className="inline-flex h-4 w-4 items-center justify-center text-current opacity-80 transition-opacity duration-200 group-hover:opacity-100">
                    {contactIcons[link.icon]}
                  </span>
                )}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


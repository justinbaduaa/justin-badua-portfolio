'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { contactLinks, primaryLinks, workSections } from '@/lib/navigation';

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

export default function MobileHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex min-w-0 shrink-0 items-center justify-between bg-white border-b border-neutral-200 px-5 sm:px-6 py-4 sm:py-5 lg:hidden">
        <div className="flex items-center">
          <Image
            src="/JB-Glasses.svg"
            alt="Justin Badua mark"
            width={36}
            height={36}
            className="h-9 sm:h-10 w-auto"
            draggable={false}
            priority
          />
        </div>

        {/* Hamburger button for mobile and tablet */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col items-center justify-center w-10 h-10 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={clsx(
              'block w-5 h-0.5 bg-neutral-900 transition-all duration-300',
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            )}
          />
          <span
            className={clsx(
              'block w-5 h-0.5 bg-neutral-900 transition-all duration-300 mt-1',
              isMenuOpen ? 'opacity-0' : ''
            )}
          />
          <span
            className={clsx(
              'block w-5 h-0.5 bg-neutral-900 transition-all duration-300 mt-1',
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            )}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={clsx(
          'fixed top-0 right-0 h-full w-[280px] bg-white border-l border-neutral-200 z-50 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6 space-y-8">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 -mr-2 text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-8">
            {/* Primary links */}
            <ul className="space-y-4">
              {primaryLinks.map((link) => {
                const active = link.external ? false : isActive(pathname, link.href);

                return (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[15px] font-normal text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={clsx(
                          'block text-[15px] font-normal transition-colors duration-200',
                          active ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Work sections */}
            <div className="space-y-6">
              {workSections.map((section) => (
                <div key={section.label} className="space-y-3">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 font-medium">
                    {section.label}
                  </p>
                  {section.items.length > 0 && (
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={clsx(
                              'block text-[14px] font-normal transition-colors duration-200',
                              isActive(pathname, item.href) ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
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

            {/* Contact links */}
            <div className="space-y-3">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 font-medium">Contact</p>
              <ul className="space-y-2.5">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="group inline-flex items-center gap-2 text-[14px] font-normal text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
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
          </nav>
        </div>
      </div>
    </>
  );
}


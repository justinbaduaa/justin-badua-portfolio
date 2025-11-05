'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { contactLinks, primaryLinks, workSections } from '@/lib/navigation';

const linkBaseStyles = 'transition-colors duration-200 text-sm text-neutral-500 hover:text-neutral-900';

const isActive = (pathname, href) => {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href;
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-neutral-200/80 bg-white px-12 pt-16 lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:pb-16">
      <div className="space-y-12">
        <div className="space-y-5">
          <Link href="/" className="inline-block">
            <Image
              src="/JB-Glasses.svg"
              alt="Justin Badua mark"
              width={56}
              height={56}
              className="h-14 w-auto"
              draggable={false}
              priority
            />
          </Link>
          <div className="space-y-1 text-sm text-neutral-500">
            <p className="font-medium text-neutral-600">Justin Badua</p>
          </div>
        </div>

        <nav className="space-y-10">
          <ul className="space-y-4 text-sm font-medium text-neutral-700">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    linkBaseStyles,
                    'text-base font-medium',
                    isActive(pathname, link.href) && 'text-neutral-900'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-200/70" />

          <div className="space-y-6">
            {workSections.map((section) => (
              <div key={section.label} className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">
                  {section.label}
                </p>
                {section.items.length > 0 && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={clsx(linkBaseStyles, isActive(pathname, item.href) && 'text-neutral-900')}
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
        <div className="border-t border-neutral-200/70" />
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">Contact</p>
        <ul className="space-y-2">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                className={linkBaseStyles}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


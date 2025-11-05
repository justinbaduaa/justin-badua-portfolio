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
    <aside className="hidden w-64 shrink-0 border-r border-neutral-200/50 bg-white px-8 pt-12 lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:pb-12">
      <div className="space-y-10">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/JB-Glasses.svg"
              alt="Justin Badua mark"
              width={48}
              height={48}
              className="h-12 w-auto"
              draggable={false}
              priority
            />
          </Link>
          <div className="space-y-0.5 text-sm">
            <p className="font-medium text-neutral-700">Justin Badua</p>
          </div>
        </div>

        <nav className="space-y-8">
          <ul className="space-y-3 text-sm font-medium">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    linkBaseStyles,
                    'text-base',
                    isActive(pathname, link.href) ? 'text-neutral-900' : 'text-neutral-600'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-200/50" />

          <div className="space-y-5">
            {workSections.map((section) => (
              <div key={section.label} className="space-y-2.5">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400">
                  {section.label}
                </p>
                {section.items.length > 0 && (
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={clsx(
                            linkBaseStyles,
                            isActive(pathname, item.href) ? 'text-neutral-900' : 'text-neutral-500'
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

      <div className="space-y-2.5">
        <div className="border-t border-neutral-200/50" />
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-400">Contact</p>
        <ul className="space-y-1.5">
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


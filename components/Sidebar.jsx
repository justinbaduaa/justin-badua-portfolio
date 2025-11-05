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
    <aside className="hidden w-56 shrink-0 bg-[#FAFAFA] px-12 pt-16 lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:pb-12">
      <div className="space-y-12">
        <div className="space-y-6">
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
        </div>

        <nav className="space-y-10">
          <ul className="space-y-4 text-sm">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'text-[15px] font-normal transition-colors duration-200',
                    isActive(pathname, link.href) ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

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
                            'text-[14px] font-normal transition-colors duration-200',
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
        </nav>
      </div>

      <div className="space-y-3">
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 font-medium">Contact</p>
        <ul className="space-y-2.5">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-[14px] font-normal text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
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


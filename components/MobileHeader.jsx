'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { primaryLinks } from '@/lib/navigation';

const isActive = (pathname, href) => {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href;
};

export default function MobileHeader() {
  const pathname = usePathname();

  return (
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

      <nav className="flex items-center gap-4 sm:gap-6 text-sm">
        {primaryLinks.map((link) => {
          const active = link.external ? false : isActive(pathname, link.href);

          return link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] sm:text-[15px] font-normal text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-[14px] sm:text-[15px] font-normal transition-colors duration-200',
                active ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}


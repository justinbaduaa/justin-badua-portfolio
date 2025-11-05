'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { primaryLinks } from '@/lib/navigation';

const linkBaseStyles = 'transition-colors duration-200 hover:text-neutral-900';

const isActive = (pathname, href) => {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href;
};

export default function MobileHeader() {
  const pathname = usePathname();

  return (
    <header className="flex min-w-0 shrink-0 items-center justify-between border-b border-neutral-200/80 px-4 py-4 sm:px-6 lg:hidden">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/JB-Glasses.svg"
          alt="Justin Badua mark"
          width={40}
          height={40}
          className="h-10 w-auto"
          draggable={false}
          priority
        />
        <div className="text-sm text-neutral-500">
          <p className="font-medium text-neutral-900">Justin Badua</p>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Portfolio</p>
        </div>
      </Link>

      <nav className="flex items-center gap-6 text-sm text-neutral-500">
        {primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(linkBaseStyles, isActive(pathname, link.href) ? 'text-neutral-900' : 'text-neutral-500')}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}


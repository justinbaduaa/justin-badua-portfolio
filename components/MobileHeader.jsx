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
    <header className="flex min-w-0 shrink-0 items-center justify-between bg-[#FAFAFA] px-6 py-5 lg:hidden">
      <Link href="/" className="flex items-center">
        <Image
          src="/JB-Glasses.svg"
          alt="Justin Badua mark"
          width={40}
          height={40}
          className="h-10 w-auto"
          draggable={false}
          priority
        />
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        {primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'text-[15px] font-normal transition-colors duration-200',
              isActive(pathname, link.href) ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}


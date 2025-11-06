import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, subtitle, imageSrc, year, href }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-w-0 flex-col bg-white transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none"
    >
      {/* Image Container - Takes up most of the card */}
      <div className="relative flex-1 overflow-hidden bg-[#F5F5F5] rounded-md border border-neutral-200/40">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            priority={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-3 px-6">
              <div className="text-6xl text-neutral-300">⚡</div>
              <p className="text-sm font-normal text-neutral-400">{title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Info Section - Minimal text at bottom, matching reference */}
      <div className="relative z-10 px-0 pt-6 pb-5 bg-white">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-semibold leading-tight text-neutral-900">{title}</h3>
            <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-neutral-600">{subtitle}</p>
          </div>
          <span className="pt-0.5 text-[13px] font-medium text-neutral-500 whitespace-nowrap">{year}</span>
        </div>
      </div>
    </Link>
  );
}


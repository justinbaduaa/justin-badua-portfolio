import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, subtitle, imageSrc, year, href }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-white transition-all duration-300"
    >
      {/* Image Container - Takes up most of the card */}
      <div className="relative flex-1 overflow-hidden rounded-[6px] border border-[#E1E4E8] bg-[#FDFCFF]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="rounded-[6px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            priority={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-3 px-6">
              <div className="text-6xl text-neutral-300">⚡</div>
              <p className="text-sm font-medium text-[#A0A5AC]">{title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Info Section - Minimal text at bottom, matching reference */}
      <div className="relative z-10 px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-[1.05rem] font-medium leading-tight text-[#3B3D41]">{title}</h3>
            <p className="mt-1 text-sm font-medium leading-relaxed text-[#A0A5AC]">{subtitle}</p>
          </div>
          <span className="pt-0.5 text-sm font-medium text-[#A0A5AC] whitespace-nowrap">{year} –</span>
        </div>
      </div>
    </Link>
  );
}


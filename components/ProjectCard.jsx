import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  subtitle,
  imageSrc,
  year,
  href,
  size = 'medium',
  imageFit = 'cover',
  imageAspect = '16 / 9',
}) {
  const sizeToSizes = {
    large: '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw',
    wide: '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw',
    tall: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
    medium: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  };

  const imageSizes = sizeToSizes[size] || sizeToSizes.medium;
  const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <Link
      href={href}
      className="group relative flex h-full min-w-0 flex-col transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none"
    >
      {/* Image Container - Takes up most of the card */}
      <div
        className="relative w-full overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-shadow duration-300 group-hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] group-focus-visible:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
        style={imageAspect ? { aspectRatio: imageAspect } : undefined}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            sizes={imageSizes}
            className={`${fitClass} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
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
      <div className="relative z-10 px-0 pt-6 pb-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-[22px] font-semibold leading-tight tracking-tight text-neutral-900">{title}</h3>
            <p className="mt-0.5 text-[22px] font-semibold leading-tight tracking-tight text-[#A0A5AC]">{subtitle}</p>
          </div>
          <span className="pt-0.5 text-[13px] font-medium text-neutral-500 whitespace-nowrap">{year}</span>
        </div>
      </div>
    </Link>
  );
}


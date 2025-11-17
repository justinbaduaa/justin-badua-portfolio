"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function ProjectCard({
  title,
  subtitle,
  imageSrc,
  darkImageSrc,
  mobileImageSrc,
  darkMobileImageSrc,
  videoSrc,
  darkVideoSrc,
  mobileVideoSrc,
  darkMobileVideoSrc,
  year,
  href,
  externalLink,
  size = 'medium',
  imageFit = 'cover',
  imageAspect = '16 / 9',
  imageAspectMobile,
  mobileBreakpoint = '(max-width: 640px)',
}) {
  const { theme } = useTheme();
  const sizeToSizes = {
    large: '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw',
    wide: '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw',
    tall: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
    medium: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  };

  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileBreakpoint);

    const handleChange = (event) => {
      setIsMobileViewport(event.matches);
    };

    // Set initial state
    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [mobileBreakpoint]);

  const imageSizes = sizeToSizes[size] || sizeToSizes.medium;
  const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';
  
  // Determine the correct video source based on theme and viewport
  let currentVideoSrc;
  if (videoSrc || darkVideoSrc || mobileVideoSrc || darkMobileVideoSrc) {
    if (theme === 'dark') {
      currentVideoSrc = isMobileViewport && darkMobileVideoSrc ? darkMobileVideoSrc : (darkVideoSrc || videoSrc);
      if (isMobileViewport && !darkMobileVideoSrc && mobileVideoSrc) {
        currentVideoSrc = darkVideoSrc || videoSrc;
      }
    } else {
      currentVideoSrc = isMobileViewport && mobileVideoSrc ? mobileVideoSrc : videoSrc;
    }
  }
  
  // Determine the correct image source based on theme and viewport
  let currentImageSrc;
  if (theme === 'dark') {
    currentImageSrc = isMobileViewport && darkMobileImageSrc ? darkMobileImageSrc : (darkImageSrc || imageSrc);
    if (isMobileViewport && !darkMobileImageSrc && mobileImageSrc) {
      currentImageSrc = darkImageSrc || imageSrc;
    }
  } else {
    currentImageSrc = isMobileViewport && mobileImageSrc ? mobileImageSrc : imageSrc;
  }
  
  const currentAspect = isMobileViewport && imageAspectMobile ? imageAspectMobile : imageAspect;

  const handleExternalLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Link
      href={href}
      className="group relative flex h-full min-w-0 flex-col transition-shadow duration-300 outline-none focus:outline-none focus-visible:outline-none"
    >
      {/* Image Container - Takes up most of the card */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-shadow duration-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] group-focus-visible:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:group-focus-visible:shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        style={currentAspect ? { aspectRatio: currentAspect } : undefined}
      >
        {/* External Link Arrow Icon */}
        {externalLink && (
          <button
            type="button"
            onClick={handleExternalLinkClick}
            className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center text-neutral-400 dark:text-neutral-500 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 hover:text-neutral-900 dark:hover:text-[#f5f5f7]"
            aria-label={`Open ${title} in new tab`}
          >
            <span className="relative flex h-full w-full items-center justify-center">
              <span className="pointer-events-none absolute inset-0 rounded-full border border-transparent bg-transparent opacity-0 scale-75 shadow-none transition-all duration-200 hover:border-neutral-200/70 hover:bg-white/90 hover:opacity-100 hover:scale-100 hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)] group-hover:border-neutral-200/70 group-hover:bg-white/90 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)] dark:hover:border-[#2c2c2e] dark:hover:bg-[#1f1f21] dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] dark:group-hover:border-[#2c2c2e] dark:group-hover:bg-[#1f1f21] dark:group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] focus-visible:border-neutral-200/70 focus-visible:bg-white/90 focus-visible:opacity-100 focus-visible:scale-100 dark:focus-visible:border-[#2c2c2e] dark:focus-visible:bg-[#1f1f21]" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 text-current transition-colors duration-200 group-hover:text-neutral-900 dark:group-hover:text-[#f5f5f7]"
              >
                <path
                  d="M12 4L4 12M12 4H7.2M12 4V8.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        )}
        {currentVideoSrc ? (
          <video
            key={`${title}-${currentVideoSrc}-${theme}`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={currentVideoSrc} type="video/mp4" />
          </video>
        ) : currentImageSrc ? (
          <Image
            key={`${currentImageSrc}-${theme}`}
            src={currentImageSrc}
            alt={`${title} preview`}
            fill
            sizes={imageSizes}
            className={fitClass}
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
      <div className="relative z-10 px-0 pt-5 sm:pt-6 pb-4 sm:pb-5">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-[19px] sm:text-[22px] font-semibold leading-tight tracking-tight text-neutral-900 dark:text-[#f5f5f7]">{title}</h3>
            <p className="mt-0.5 text-[19px] sm:text-[22px] font-semibold leading-tight tracking-tight text-[#A0A5AC] dark:text-neutral-500">{subtitle}</p>
          </div>
          <span className="pt-0.5 text-[13px] sm:text-[14px] font-medium text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{year}</span>
        </div>
      </div>
    </Link>
  );
}

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

  return (
    <Link
      href={href}
      className="group relative flex h-full min-w-0 flex-col transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none"
    >
      {/* Image Container - Takes up most of the card */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] group-hover:scale-[1.01] group-focus-visible:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:group-focus-visible:shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        style={currentAspect ? { aspectRatio: currentAspect } : undefined}
      >
        {currentVideoSrc ? (
          <video
            key={`${title}-${currentVideoSrc}-${theme}`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
            className={`${fitClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
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


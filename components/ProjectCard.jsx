"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  subtitle,
  imageSrc,
  mobileImageSrc,
  videoSrc,
  mobileVideoSrc,
  year,
  href,
  size = 'medium',
  imageFit = 'cover',
  imageAspect = '16 / 9',
  imageAspectMobile,
  mobileBreakpoint = '(max-width: 640px)',
}) {
  const sizeToSizes = {
    large: '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw',
    wide: '(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw',
    tall: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
    medium: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  };

  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(mobileBreakpoint);

    const handleChange = (event) => {
      setIsMobileViewport(event.matches);
    };

    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [mobileBreakpoint]);

  useEffect(() => {
    if (typeof window === 'undefined' || !cardRef.current) {
      setHasIntersected(true);
      setIsInView(true);
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setHasIntersected(true);
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntersected(true);
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const element = videoRef.current;

    if (!element) {
      return;
    }

    if (!prefersReducedMotion && isInView) {
      const playPromise = element.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    } else {
      element.pause();
      if (!isInView) {
        element.currentTime = 0;
      }
    }
  }, [isInView, prefersReducedMotion]);

  const imageSizes = sizeToSizes[size] || sizeToSizes.medium;
  const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';
  const currentVideoSrc = isMobileViewport && mobileVideoSrc ? mobileVideoSrc : videoSrc;
  const currentImageSrc = isMobileViewport && mobileImageSrc ? mobileImageSrc : imageSrc;
  const currentAspect = isMobileViewport && imageAspectMobile ? imageAspectMobile : imageAspect;
  const shouldRenderVideo = Boolean(currentVideoSrc && hasIntersected);

  return (
    <Link
      href={href}
      ref={cardRef}
      className="group relative flex h-full min-w-0 flex-col transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none"
    >
      {/* Image Container - Takes up most of the card */}
      <div
        className="relative w-full overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-shadow duration-300 group-hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] group-focus-visible:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
        style={currentAspect ? { aspectRatio: currentAspect } : undefined}
      >
        {shouldRenderVideo ? (
          <video
            key={`${title}-${currentVideoSrc}`}
            ref={videoRef}
            loop
            muted
            playsInline
            preload={prefersReducedMotion ? 'auto' : 'metadata'}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            controls={prefersReducedMotion}
          >
            <source src={currentVideoSrc} type="video/mp4" />
          </video>
        ) : currentImageSrc ? (
          <Image
            src={currentImageSrc}
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
      <div className="relative z-10 px-0 pt-5 sm:pt-6 pb-4 sm:pb-5">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-[19px] sm:text-[22px] font-semibold leading-tight tracking-tight text-neutral-900">{title}</h3>
            <p className="mt-0.5 text-[19px] sm:text-[22px] font-semibold leading-tight tracking-tight text-[#A0A5AC]">{subtitle}</p>
          </div>
          <span className="pt-0.5 text-[13px] sm:text-[14px] font-medium text-neutral-500 whitespace-nowrap">{year}</span>
        </div>
      </div>
    </Link>
  );
}


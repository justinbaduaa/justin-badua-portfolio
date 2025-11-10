'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animate counter from 0 to 100
    const duration = 800; // 0.8 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= 100) {
        clearInterval(interval);
        // Wait a moment then fade out
        setTimeout(() => {
          setIsVisible(false);
          // Call onComplete after fade animation
          setTimeout(() => {
            onComplete();
          }, 500); // Match this with CSS transition duration
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-500 ${
        isVisible && count < 100 ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 tabular-nums">
          {count}
        </div>
      </div>
    </div>
  );
}


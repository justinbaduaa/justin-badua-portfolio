'use client';

import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'framer-motion';

export default function LottieAnimation({
    animationData,
    src,
    loop = true,
    autoplay = true,
    playOnScroll = false,
    className = '',
    style = {},
    onComplete,
}) {
    const containerRef = useRef(null);
    const lottieRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: '-100px' });
    const [animationJson, setAnimationJson] = useState(animationData || null);

    // Load animation from src if provided
    useEffect(() => {
        if (src && !animationData) {
            fetch(src)
                .then((res) => res.json())
                .then((data) => setAnimationJson(data))
                .catch((err) => console.error('Failed to load Lottie animation:', err));
        }
    }, [src, animationData]);

    // Handle scroll-triggered playback
    useEffect(() => {
        if (playOnScroll && lottieRef.current) {
            if (isInView) {
                lottieRef.current.play();
            } else {
                lottieRef.current.pause();
            }
        }
    }, [isInView, playOnScroll]);

    if (!animationJson) {
        return (
            <div
                ref={containerRef}
                className={`flex items-center justify-center ${className}`}
                style={style}
            >
                <div className="w-8 h-8 border-2 border-neutral-300 dark:border-neutral-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div ref={containerRef} className={className} style={style}>
            <Lottie
                lottieRef={lottieRef}
                animationData={animationJson}
                loop={loop}
                autoplay={playOnScroll ? false : autoplay}
                onComplete={onComplete}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

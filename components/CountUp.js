'use client';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ end, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // easeOutQuart easing function for smoother deceleration
            const easeOut = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * easeOut));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animateCount);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animateCount);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return (
        <span ref={domRef}>
            {count}{suffix}
        </span>
    );
}

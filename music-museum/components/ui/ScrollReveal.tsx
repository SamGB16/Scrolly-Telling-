'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animationClass =
    animation === 'slide-up'
      ? 'reveal slide-up'
      : animation === 'slide-left'
        ? 'reveal slide-left'
        : 'reveal';

  return (
    <div ref={ref} className={`${animationClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

'use client';
import { useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate: (latest) => {
          node.textContent = Math.round(latest).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}

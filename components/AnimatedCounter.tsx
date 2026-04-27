'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5 }: AnimatedCounterProps) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}
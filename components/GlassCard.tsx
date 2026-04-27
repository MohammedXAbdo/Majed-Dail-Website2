'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}
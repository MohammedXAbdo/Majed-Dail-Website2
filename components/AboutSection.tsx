'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import { FiBriefcase, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function AboutSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { icon: <FiBriefcase size={24} />, value: 15, label: t('about.years'), suffix: '+' },
    { icon: <FiTrendingUp size={24} />, value: 50, label: t('about.projects'), suffix: '+' },
    { icon: <FiUsers size={24} />, value: 30, label: t('about.teams'), suffix: '+' },
    { icon: <FiAward size={24} />, value: 20, label: t('about.awards'), suffix: '+' },
  ];

  return (
    <section id="about" className="section-padding relative bg-gray-50 dark:bg-dark-900">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-dark-950 to-transparent" />
      <div className="absolute top-40 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden glow-effect">
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 dark:from-dark-800 dark:to-dark-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                      <span className="text-6xl font-black text-white">M</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-gold">Majed Al-Dail</h3>
                    <p className="text-gold-500/70 mt-2">CEO & Business Leader</p>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-gold rounded-2xl p-4 glow-effect"
              >
                <FiAward className="text-gold-500" size={28} />
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-gold rounded-2xl p-4 glow-effect"
              >
                <FiBriefcase className="text-gold-500" size={28} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-5">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {t('about.p1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {t('about.p2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {t('about.p3')}
              </p>
            </div>

            {/* LinkedIn button */}
            <motion.a
              href="https://www.linkedin.com/in/majed-al-dail-%D9%85%D8%A7%D8%AC%D8%AF-%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D9%84-2b0969158/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-gold mt-8"
            >
              <FiBriefcase /> LinkedIn Profile
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <GlassCard key={i} className="text-center p-8 group hover:border-gold-500/40 transition-all duration-500">
              <div className="inline-flex p-3 rounded-xl bg-gold-500/10 text-gold-500 mb-4 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
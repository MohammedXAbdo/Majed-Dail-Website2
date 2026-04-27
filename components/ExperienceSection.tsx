'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '@/lib/data';
import GlassCard from './GlassCard';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const data = experienceData[language];

  return (
    <section id="experience" className="section-padding relative bg-white dark:bg-dark-950">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t('exp.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t('exp.subtitle')}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 hidden md:block" />

          <div className="space-y-12">
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full">
                  <GlassCard className="p-8 glow-effect hover:border-gold-500/40 transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all">
                        <FiBriefcase size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                    <h4 className="text-gold-500 font-semibold text-lg mb-3">{item.company}</h4>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar size={14} /> {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} /> {item.location}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    {item.achievements && (
                      <ul className="mt-4 space-y-2">
                        {item.achievements.map((ach, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/30 flex-shrink-0 z-10">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
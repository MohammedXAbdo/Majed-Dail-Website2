'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '@/lib/data';
import GlassCard from './GlassCard';

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const data = skillsData[language];

  return (
    <section id="skills" className="section-padding relative bg-gray-50 dark:bg-dark-900">
      <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 group hover:border-gold-500/40 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{skill.description}</p>
                {/* Skill bar */}
                <div className="relative h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                  />
                </div>
                <span className="text-xs text-gold-500 mt-2 inline-block">{skill.level}%</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
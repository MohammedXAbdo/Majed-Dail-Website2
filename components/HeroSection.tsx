'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiArrowDown, FiLinkedin } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      
      <ParticlesBackground />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                <span className="text-5xl md:text-6xl font-bold text-gradient-gold">
                  {language === 'ar' ? 'م' : 'M'}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-gold-500/30"
              style={{ margin: '-12px' }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gold-500 font-medium text-lg md:text-xl mb-4 tracking-wide"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 text-gray-900 dark:text-white leading-tight"
        >
          <span className="text-gradient-gold">{t('hero.name')}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200"
        >
          {t('hero.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,160,23,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold text-center min-w-[200px]"
          >
            {t('hero.cta1')}
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-gold text-center min-w-[200px]"
          >
            {t('hero.cta2')}
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/majed-al-dail-%D9%85%D8%A7%D8%AC%D8%AF-%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D9%84-2b0969158/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full glass-gold text-gold-500 hover:bg-gold-500 hover:text-white transition-all"
          >
            <FiLinkedin size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 dark:text-gray-500">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown className="text-gold-500" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
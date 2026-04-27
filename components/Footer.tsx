'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-dark-950 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'ماجد الدايل' : 'Majed Al-Dail'}
              </p>
              <p className="text-xs text-gray-500">{t('footer.designed')}</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://www.linkedin.com/in/majed-al-dail-%D9%85%D8%A7%D8%AC%D8%AF-%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D9%84-2b0969158/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl glass text-gray-600 dark:text-gray-400 hover:text-gold-500 transition-all"
            >
              <FiLinkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:majed@aldail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl glass text-gray-600 dark:text-gray-400 hover:text-gold-500 transition-all"
            >
              <FiMail size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {language === 'ar' ? 'ماجد الدايل' : 'Majed Al-Dail'}. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 transition-all z-40"
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
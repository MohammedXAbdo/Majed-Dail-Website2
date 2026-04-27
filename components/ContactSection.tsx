'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import GlassCard from './GlassCard';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: <FiMapPin size={22} />, label: t('contact.location'), value: language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
    { icon: <FiPhone size={22} />, label: t('contact.phone'), value: '+966 XX XXX XXXX' },
    { icon: <FiMail size={22} />, label: t('contact.emailLabel'), value: 'majed@aldail.com' },
    { icon: <FiLinkedin size={22} />, label: t('contact.linkedin'), value: 'Majed Al-Dail', href: 'https://www.linkedin.com/in/majed-al-dail-%D9%85%D8%A7%D8%AC%D8%AF-%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D9%84-2b0969158/' },
  ];

  return (
    <section id="contact" className="section-padding relative bg-gray-50 dark:bg-dark-900">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <GlassCard className="p-5 flex items-center gap-4 group hover:border-gold-500/40 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-gold-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{t('contact.name')}</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-gray-400"
                      placeholder={t('contact.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{t('contact.email')}</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-gray-400"
                      placeholder={t('contact.email')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{t('contact.subject')}</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder-gray-400"
                    placeholder={t('contact.subject')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{t('contact.message')}</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none placeholder-gray-400"
                    placeholder={t('contact.message')}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {sent ? (
                    <><FiCheck /> {t('contact.success')}</>
                  ) : sending ? (
                    <>{t('contact.sending')}</>
                  ) : (
                    <><FiSend /> {t('contact.send')}</>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
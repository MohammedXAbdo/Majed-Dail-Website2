'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرات',
    'nav.skills': 'المهارات',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'تواصل معي',
    'nav.dashboard': 'لوحة التحكم',

    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'ماجد الدايل',
    'hero.title': 'رجل أعمال ومدير تنفيذي',
    'hero.subtitle': 'قائد أعمال متميز يتمتع بخبرة واسعة في الإدارة الاستراتيجية وتطوير الأعمال والقيادة المؤسسية',
    'hero.cta1': 'تواصل معي',
    'hero.cta2': 'تعرف علي أكثر',
    'hero.scroll': 'اسحب للأسفل',

    // About
    'about.title': 'نبذة عني',
    'about.subtitle': 'رحلة من التميز والنجاح',
    'about.p1': 'ماجد الدايل، رجل أعمال سعودي متميز ومدير تنفيذي ذو رؤية استراتيجية واضحة. أتمتع بخبرة عميقة في قيادة الفرق وتطوير الأعمال وبناء شراكات استراتيجية ناجحة.',
    'about.p2': 'أؤمن بأن النجاح الحقيقي يكمن في القدرة على الابتكار والتكيف مع المتغيرات، مع الحفاظ على أعلى معايير الجودة والاحترافية في كل ما أقوم به.',
    'about.p3': 'أسعى دائماً لتحقيق التميز في كل مشروع أتولى إدارته، مع التركيز على خلق قيمة مستدامة للمؤسسات والمجتمعات التي أعمل فيها.',
    'about.years': 'سنوات الخبرة',
    'about.projects': 'مشروع ناجح',
    'about.teams': 'فريق عمل',
    'about.awards': 'جائزة وتكريم',

    // Experience
    'exp.title': 'الخبرات المهنية',
    'exp.subtitle': 'مسيرة حافلة بالإنجازات',

    // Skills
    'skills.title': 'المهارات والكفاءات',
    'skills.subtitle': 'مجموعة متنوعة من المهارات القيادية والإدارية',

    // Achievements
    'achieve.title': 'الإنجازات',
    'achieve.subtitle': 'محطات بارزة في مسيرتي المهنية',

    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'أتطلع للتواصل معكم ومناقشة فرص التعاون',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال رسالتك بنجاح!',
    'contact.location': 'الموقع',
    'contact.phone': 'الهاتف',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.linkedin': 'لينكدإن',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.designed': 'صُمم بـ ❤️ لماجد الدايل',

    // Dashboard
    'dash.title': 'لوحة التحكم',
    'dash.welcome': 'مرحباً بك، ماجد',
    'dash.visitors': 'الزوار',
    'dash.messages': 'الرسائل',
    'dash.connections': 'الاتصالات',
    'dash.views': 'المشاهدات',
    'dash.recent': 'آخر الرسائل',
    'dash.analytics': 'التحليلات',
    'dash.settings': 'الإعدادات',
    'dash.profile': 'الملف الشخصي',
    'dash.logout': 'تسجيل الخروج',
    'dash.overview': 'نظرة عامة',
    'dash.today': 'اليوم',
    'dash.week': 'هذا الأسبوع',
    'dash.month': 'هذا الشهر',
    'dash.noMessages': 'لا توجد رسائل جديدة',
    'dash.backToSite': 'العودة للموقع',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    'nav.dashboard': 'Dashboard',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Majed Al-Dail',
    'hero.title': 'Businessman & Executive Director',
    'hero.subtitle': 'A distinguished business leader with extensive experience in strategic management, business development, and corporate leadership',
    'hero.cta1': 'Get in Touch',
    'hero.cta2': 'Learn More',
    'hero.scroll': 'Scroll Down',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'A Journey of Excellence and Success',
    'about.p1': 'Majed Al-Dail, a distinguished Saudi businessman and executive director with a clear strategic vision. I have deep experience in team leadership, business development, and building successful strategic partnerships.',
    'about.p2': 'I believe that true success lies in the ability to innovate and adapt to changes, while maintaining the highest standards of quality and professionalism in everything I do.',
    'about.p3': 'I always strive for excellence in every project I manage, focusing on creating sustainable value for the organizations and communities I work in.',
    'about.years': 'Years Experience',
    'about.projects': 'Successful Projects',
    'about.teams': 'Teams Led',
    'about.awards': 'Awards & Honors',

    // Experience
    'exp.title': 'Professional Experience',
    'exp.subtitle': 'A Journey Full of Achievements',

    // Skills
    'skills.title': 'Skills & Competencies',
    'skills.subtitle': 'A diverse set of leadership and management skills',

    // Achievements
    'achieve.title': 'Achievements',
    'achieve.subtitle': 'Key milestones in my professional journey',

    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Looking forward to connecting and discussing collaboration opportunities',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Your message has been sent successfully!',
    'contact.location': 'Location',
    'contact.phone': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.linkedin': 'LinkedIn',

    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.designed': 'Designed with ❤️ for Majed Al-Dail',

    // Dashboard
    'dash.title': 'Dashboard',
    'dash.welcome': 'Welcome, Majed',
    'dash.visitors': 'Visitors',
    'dash.messages': 'Messages',
    'dash.connections': 'Connections',
    'dash.views': 'Page Views',
    'dash.recent': 'Recent Messages',
    'dash.analytics': 'Analytics',
    'dash.settings': 'Settings',
    'dash.profile': 'Profile',
    'dash.logout': 'Logout',
    'dash.overview': 'Overview',
    'dash.today': 'Today',
    'dash.week': 'This Week',
    'dash.month': 'This Month',
    'dash.noMessages': 'No new messages',
    'dash.backToSite': 'Back to Site',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    document.body.style.fontFamily = language === 'ar' ? 'Tajawal, sans-serif' : 'Inter, sans-serif';
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
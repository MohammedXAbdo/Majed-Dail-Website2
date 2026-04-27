export const experienceData: Record<string, Array<{
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
}>> = {
  ar: [
    {
      title: 'المدير التنفيذي',
      company: 'مجموعة الدايل للأعمال',
      period: '2018 - الحاضر',
      location: 'المملكة العربية السعودية',
      description: 'قيادة العمليات الاستراتيجية للمجموعة وتطوير الأعمال وبناء شراكات استراتيجية محلية ودولية',
      achievements: [
        'تحقيق نمو سنوي بنسبة 40% في الإيرادات',
        'توسيع العمليات لتشمل 5 قطاعات أعمال جديدة',
        'بناء فريق عمل متميز يضم أكثر من 200 موظف',
      ],
    },
    {
      title: 'مدير تطوير الأعمال',
      company: 'شركة الاستثمارات المتقدمة',
      period: '2014 - 2018',
      location: 'الرياض، السعودية',
      description: 'تطوير استراتيجيات النمو وإدارة العلاقات مع العملاء الرئيسيين وتحقيق أهداف الشركة',
      achievements: [
        'إدارة محفظة استثمارية بقيمة 100 مليون ريال',
        'تطوير 15 شراكة استراتيجية ناجحة',
        'زيادة رضا العملاء بنسبة 95%',
      ],
    },
    {
      title: 'مدير المشاريع',
      company: 'شركة البناء والتطوير',
      period: '2010 - 2014',
      location: 'جدة، السعودية',
      description: 'إدارة مشاريع كبرى في قطاع البناء والتطوير العقاري مع التركيز على الجودة والالتزام بالمواعيد',
      achievements: [
        'إدارة أكثر من 20 مشروعاً بنجاح',
        'تحقيق وفورات في التكاليف بنسبة 25%',
        'الحصول على جائزة أفضل مدير مشاريع',
      ],
    },
  ],
  en: [
    {
      title: 'Chief Executive Officer',
      company: 'Al-Dail Business Group',
      period: '2018 - Present',
      location: 'Saudi Arabia',
      description: 'Leading strategic operations, business development, and building local and international strategic partnerships',
      achievements: [
        'Achieved 40% annual revenue growth',
        'Expanded operations to include 5 new business sectors',
        'Built a distinguished team of over 200 employees',
      ],
    },
    {
      title: 'Business Development Director',
      company: 'Advanced Investments Company',
      period: '2014 - 2018',
      location: 'Riyadh, Saudi Arabia',
      description: 'Developing growth strategies, managing key client relationships, and achieving company objectives',
      achievements: [
        'Managed investment portfolio worth SAR 100 million',
        'Developed 15 successful strategic partnerships',
        'Increased client satisfaction to 95%',
      ],
    },
    {
      title: 'Project Manager',
      company: 'Construction & Development Co.',
      period: '2010 - 2014',
      location: 'Jeddah, Saudi Arabia',
      description: 'Managing major construction and real estate development projects with focus on quality and timely delivery',
      achievements: [
        'Successfully managed over 20 projects',
        'Achieved 25% cost savings',
        'Won Best Project Manager award',
      ],
    },
  ],
};

export const skillsData: Record<string, Array<{
  name: string;
  icon: string;
  description: string;
  level: number;
}>> = {
  ar: [
    { name: 'القيادة الاستراتيجية', icon: '🎯', description: 'قيادة الفرق وتوجيه المؤسسات نحو تحقيق رؤيتها', level: 95 },
    { name: 'تطوير الأعمال', icon: '📈', description: 'بناء وتنمية الأعمال التجارية وتوسيع نطاق العمليات', level: 92 },
    { name: 'إدارة المشاريع', icon: '📋', description: 'إدارة المشاريع الكبرى من البداية حتى التسليم', level: 90 },
    { name: 'التخطيط المالي', icon: '💰', description: 'إعداد الخطط المالية والموازنات وإدارة الاستثمارات', level: 88 },
    { name: 'التفاوض والشراكات', icon: '🤝', description: 'بناء شراكات استراتيجية وإبرام صفقات ناجحة', level: 93 },
    { name: 'الابتكار والتحول الرقمي', icon: '💡', description: 'تبني التقنيات الحديثة وقيادة التحول الرقمي', level: 85 },
    { name: 'إدارة المخاطر', icon: '🛡️', description: 'تحليل وإدارة المخاطر واتخاذ القرارات المدروسة', level: 87 },
    { name: 'التواصل المؤسسي', icon: '📢', description: 'بناء علاقات مؤثرة والتواصل الفعال مع أصحاب المصلحة', level: 91 },
    { name: 'رؤية 2030', icon: '🏗️', description: 'المساهمة الفعالة في تحقيق أهداف رؤية المملكة 2030', level: 89 },
  ],
  en: [
    { name: 'Strategic Leadership', icon: '🎯', description: 'Leading teams and guiding organizations toward their vision', level: 95 },
    { name: 'Business Development', icon: '📈', description: 'Building and growing businesses and expanding operations', level: 92 },
    { name: 'Project Management', icon: '📋', description: 'Managing major projects from inception to delivery', level: 90 },
    { name: 'Financial Planning', icon: '💰', description: 'Preparing financial plans, budgets, and investment management', level: 88 },
    { name: 'Negotiation & Partnerships', icon: '🤝', description: 'Building strategic partnerships and closing successful deals', level: 93 },
    { name: 'Innovation & Digital Transformation', icon: '💡', description: 'Adopting modern technologies and leading digital transformation', level: 85 },
    { name: 'Risk Management', icon: '🛡️', description: 'Analyzing and managing risks with informed decision-making', level: 87 },
    { name: 'Corporate Communication', icon: '📢', description: 'Building influential relationships and effective stakeholder communication', level: 91 },
    { name: 'Vision 2030', icon: '🏗️', description: 'Active contribution to achieving Saudi Vision 2030 objectives', level: 89 },
  ],
};

export const achievementsData: Record<string, Array<{
  title: string;
  year: string;
  description: string;
}>> = {
  ar: [
    { title: 'جائزة التميز في القيادة', year: '2023', description: 'تكريم خاص عن التميز في القيادة المؤسسية وتحقيق نتائج استثنائية' },
    { title: 'أفضل مدير تنفيذي', year: '2022', description: 'اختيار كأفضل مدير تنفيذي في قطاع الأعمال على مستوى المنطقة' },
    { title: 'جائزة الابتكار في الأعمال', year: '2021', description: 'تقدير للإنجازات في مجال الابتكار والتحول الرقمي في الشركة' },
    { title: 'شراكة استراتيجية دولية', year: '2020', description: 'توقيع أكبر شراكة استراتيجية دولية في تاريخ المجموعة' },
    { title: 'جائزة المسؤولية الاجتماعية', year: '2019', description: 'تكريم عن المبادرات المجتمعية والمسؤولية الاجتماعية للمؤسسة' },
    { title: 'جائزة رواد الأعمال', year: '2018', description: 'تقدير كأحد أبرز رواد الأعمال الشباب في المملكة العربية السعودية' },
  ],
  en: [
    { title: 'Leadership Excellence Award', year: '2023', description: 'Special recognition for excellence in corporate leadership and exceptional results' },
    { title: 'Best CEO Award', year: '2022', description: 'Selected as Best CEO in the business sector at regional level' },
    { title: 'Business Innovation Award', year: '2021', description: 'Recognition for achievements in innovation and digital transformation' },
    { title: 'International Strategic Partnership', year: '2020', description: 'Signing the largest international strategic partnership in the group\'s history' },
    { title: 'Social Responsibility Award', year: '2019', description: 'Recognition for community initiatives and corporate social responsibility' },
    { title: 'Young Entrepreneur Award', year: '2018', description: 'Recognized as one of the most prominent young entrepreneurs in Saudi Arabia' },
  ],
};

export const dashboardData = {
  stats: {
    visitors: 12547,
    messages: 89,
    connections: 1250,
    views: 45890,
  },
  recentMessages: [
    { id: 1, name: 'أحمد محمد', nameEn: 'Ahmed Mohammed', email: 'ahmed@email.com', subject: 'فرصة شراكة', subjectEn: 'Partnership Opportunity', date: '2024-01-15', read: false },
    { id: 2, name: 'سارة العلي', nameEn: 'Sara Al-Ali', email: 'sara@email.com', subject: 'استشارة أعمال', subjectEn: 'Business Consultation', date: '2024-01-14', read: false },
    { id: 3, name: 'خالد الحربي', nameEn: 'Khaled Al-Harbi', email: 'khaled@email.com', subject: 'دعوة لمؤتمر', subjectEn: 'Conference Invitation', date: '2024-01-13', read: true },
    { id: 4, name: 'فاطمة السعيد', nameEn: 'Fatima Al-Saeed', email: 'fatima@email.com', subject: 'طلب اجتماع', subjectEn: 'Meeting Request', date: '2024-01-12', read: true },
    { id: 5, name: 'عمر الشهري', nameEn: 'Omar Al-Shahri', email: 'omar@email.com', subject: 'مشروع مشترك', subjectEn: 'Joint Venture', date: '2024-01-11', read: true },
  ],
  weeklyVisitors: [320, 450, 380, 520, 410, 600, 550],
  monthlyViews: [4500, 5200, 4800, 6100, 5800, 7200, 6900, 7500, 8100, 7800, 8500, 9200],
};s
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Majed Al-Dail | ماجد الدايل - Business Executive',
  description: 'Majed Al-Dail - Distinguished Saudi Businessman & Executive Director | ماجد الدايل - رجل أعمال سعودي متميز ومدير تنفيذي',
  keywords: 'Majed Al-Dail, ماجد الدايل, businessman, Saudi Arabia, executive, CEO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}
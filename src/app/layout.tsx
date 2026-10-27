import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SiteHeader, SiteFooter } from '@/components/site-shell';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Khảo sát - Travel Awards 2026', template: '%s · Travel Awards 2026' },
  description: 'Lựa chọn hạng mục và chia sẻ đánh giá từ trải nghiệm của bạn.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="vi"><body className="home survey">
    <a className="skip-link" href="#main">Đến nội dung chính</a>
    <SiteHeader />{children}<SiteFooter />
  </body></html>;
}

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { travelAwardsUrl } from '@/config/site';

export function HeaderNavigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <nav aria-label="Điều hướng chính" data-scrolled={scrolled ? 'true' : undefined}>
    <div className="home-header-links">
      <span className="home-nav-home" role="link" aria-disabled="true" aria-label="Trang chủ Travel Awards"><Image src="/assets/key-visual/home.svg" alt="" width={20} height={20} unoptimized /></span>
      <span role="link" aria-disabled="true">Thể lệ</span>
      <a href={travelAwardsUrl('/tin-tuc')}>Tin tức</a>
    </div>
  </nav>;
}

import { BrandGraphic } from './brand-graphics';
import { Container } from './primitives';
import { travelAwardsUrl } from '@/config/site';

/** Travel Awards common header, copied locally to keep the two repositories independent. */
export function SiteHeader() {
  return <header className="home-header home-header--survey"><Container className="home-header-inner">
    <div className="home-header-brand-row">
      <a className="home-header-logo" href={travelAwardsUrl('/')} aria-label="Travel Awards — Trang chủ"><BrandGraphic /></a>
    </div>
  </Container></header>;
}

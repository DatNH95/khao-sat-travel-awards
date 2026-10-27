import Image from 'next/image';

/** Independent copy of the Travel Awards logo primitive; original artwork unchanged. */
export function BrandGraphic({ variant = 'logo' }: { variant?: 'logo' }) {
  return <Image src="/assets/key-visual/logo.svg" width={1000} height={350} alt="" aria-hidden="true" unoptimized className={`brand-graphic brand-graphic--${variant}`} />;
}

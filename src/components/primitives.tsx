import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

const cx = (...values: (string | undefined)[]) => values.filter(Boolean).join(' ');

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('layout-container', className)} {...props} />;
}

export function Surface({ tone = 'primary', className, ...props }: HTMLAttributes<HTMLDivElement> & {
  tone?: 'primary' | 'brand-soft' | 'brand-deep';
}) {
  return <div className={cx('surface', `surface--${tone}`, className)} {...props} />;
}

export function Button({ variant = 'primary', type = 'button', className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
}) {
  return <button type={type} className={cx('button', `button--${variant}`, className)} {...props} />;
}

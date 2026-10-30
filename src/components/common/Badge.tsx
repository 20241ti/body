import React from 'react';
import { cn } from '../../utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const variantStyles = {
    default: 'bg-slate-800 text-slate-300 border-slate-700',
    success: 'bg-emerald-950/70 text-emerald-400 border-emerald-800/80',
    warning: 'bg-amber-950/70 text-amber-400 border-amber-800/80',
    danger: 'bg-rose-950/70 text-rose-400 border-rose-800/80 animate-pulse',
    info: 'bg-sky-950/70 text-sky-400 border-sky-800/80',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};


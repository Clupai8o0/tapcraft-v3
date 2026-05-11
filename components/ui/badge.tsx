import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-mono text-[10.5px] uppercase tracking-[0.12em] px-2.5 py-1',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--paper)] border-[var(--line)] text-[var(--ink-2)]',
        accent:
          'bg-[var(--accent-soft)] border-[color-mix(in_oklab,var(--accent)_30%,transparent)] text-[var(--accent-ink)]',
        positive:
          'bg-[oklch(0.15_0.06_145)] border-[color-mix(in_oklab,var(--positive)_30%,transparent)] text-[oklch(0.78_0.18_145)]',
        outline:
          'bg-transparent border-[var(--line)] text-[var(--muted)]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

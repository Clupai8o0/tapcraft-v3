'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:translate-y-px',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--ink)] text-[var(--bg)] hover:bg-white shadow-[0_0_0_0_var(--accent)] hover:shadow-[0_0_24px_-4px_var(--accent)]',
        accent:
          'bg-[var(--accent)] text-white hover:opacity-90 shadow-[0_0_0_0_var(--accent)] hover:shadow-[0_0_32px_-4px_var(--accent)]',
        ghost:
          'bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]',
        soft:
          'bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] hover:bg-[var(--bg-2)] hover:border-[var(--ink-2)]',
        outline:
          'bg-transparent text-[var(--ink-2)] border border-[var(--line)] hover:border-[var(--ink)] hover:text-[var(--ink)]',
        link:
          'bg-transparent text-[var(--ink-2)] hover:text-[var(--ink)] underline-offset-4 hover:underline',
      },
      size: {
        sm: 'text-[13px] px-3.5 py-2',
        md: 'text-[14.5px] px-4.5 py-2.5',
        lg: 'text-[15.5px] px-5.5 py-3.5',
        xl: 'text-base px-7 py-4',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { buttonVariants };

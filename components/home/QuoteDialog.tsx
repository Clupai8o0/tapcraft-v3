'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input, Textarea } from '@/components/ui/input';
import { ArrowRight, Check } from 'lucide-react';

const QuoteSchema = z.object({
  name: z.string().min(2, 'Tell us your name'),
  email: z.string().email('We need an email to send the quote to'),
  company: z.string().optional(),
  product: z.string().min(1, 'Pick something'),
  quantity: z.string().min(1, 'Ballpark is fine'),
  details: z.string().min(8, 'A line or two about the project helps').max(800),
});

type QuoteForm = z.infer<typeof QuoteSchema>;

interface QuoteDialogProps {
  trigger: React.ReactNode;
}

const PRODUCTS = ['Keychain', 'Card', 'Lanyard', 'Badge / coin', 'Not sure — talk us through it'];

export default function QuoteDialog({ trigger }: QuoteDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteForm>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: { product: 'Keychain' },
  });

  const product = watch('product');

  const onSubmit = async (_data: QuoteForm) => {
    // wire to Brevo /api/quote route later
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      reset();
    }, 2200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[var(--accent-soft)] grid place-items-center">
              <Check className="h-6 w-6 text-[var(--accent-ink)]" />
            </div>
            <DialogTitle>Brief received.</DialogTitle>
            <DialogDescription>
              Sam or Nikhil will be in your inbox within one business day. Usually faster.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                Quote brief · ~60 seconds
              </span>
              <DialogTitle>Tell us about it.</DialogTitle>
              <DialogDescription>
                We&apos;ll reply with a quote and turnaround within one business day. No sales sequence,
                no pushy follow-ups.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] mb-1.5">
                    Name
                  </label>
                  <Input placeholder="Your name" {...register('name')} />
                  {errors.name && (
                    <p className="text-[11px] text-[oklch(0.65_0.18_25)] mt-1.5">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] mb-1.5">
                    Email
                  </label>
                  <Input type="email" placeholder="you@company.com" {...register('email')} />
                  {errors.email && (
                    <p className="text-[11px] text-[oklch(0.65_0.18_25)] mt-1.5">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] mb-1.5">
                  Company (optional)
                </label>
                <Input placeholder="Belle Property / Cup Week / etc." {...register('company')} />
              </div>

              <div>
                <label className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] mb-2">
                  Product
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setValue('product', p, { shouldValidate: true })}
                      className={`px-3 py-1.5 rounded-full text-[12.5px] border transition-colors ${
                        product === p
                          ? 'bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]'
                          : 'bg-[var(--bg)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--ink-2)]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] mb-1.5">
                  Approx quantity
                </label>
                <Input placeholder="250 / 1,000 / not sure yet" {...register('quantity')} />
                {errors.quantity && (
                  <p className="text-[11px] text-[oklch(0.65_0.18_25)] mt-1.5">{errors.quantity.message}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] mb-1.5">
                  The project
                </label>
                <Textarea
                  placeholder="Open-home keychains for our agency. Need them branded with each agent's contact. Around 200, no rush."
                  rows={3}
                  {...register('details')}
                />
                {errors.details && (
                  <p className="text-[11px] text-[oklch(0.65_0.18_25)] mt-1.5">{errors.details.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" variant="accent" disabled={isSubmitting} className="mt-2">
                {isSubmitting ? 'Sending…' : 'Send brief'}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </Button>
              <p className="text-[11px] text-[var(--muted)] text-center font-mono">
                Goes straight to hello@tapcraftstudio.com. No middlemen.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

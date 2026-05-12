import { NextResponse } from 'next/server';
import { z } from 'zod';
import { addBrevoContact } from '@/lib/brevo/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NewsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().max(80).optional(),
  hp: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const contentType = req.headers.get('content-type') ?? '';
  let raw: Record<string, FormDataEntryValue | string>;
  try {
    if (contentType.includes('application/json')) {
      raw = await req.json();
    } else {
      const fd = await req.formData();
      raw = Object.fromEntries(fd.entries());
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid body' }, { status: 400 });
  }

  const parsed = NewsletterSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 });
  }

  if (parsed.data.hp) {
    return NextResponse.json({ ok: true });
  }

  const result = await addBrevoContact({
    email: parsed.data.email,
    attributes: parsed.data.source ? { SOURCE: parsed.data.source } : undefined,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

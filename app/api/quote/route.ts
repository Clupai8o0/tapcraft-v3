import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendBrevoEmail } from '@/lib/brevo/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const QuoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(150).optional(),
  product: z.string().max(80).optional(),
  material: z.string().max(80).optional(),
  chip: z.string().max(80).optional(),
  quantity: z.string().max(20).optional(),
  deadline: z.string().max(80).optional(),
  message: z.string().max(4000).optional(),
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

  const parsed = QuoteSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'validation', issues: parsed.error.issues }, { status: 400 });
  }

  if (parsed.data.hp) {
    return NextResponse.json({ ok: true });
  }

  const d = parsed.data;
  const subject = `[Quote] ${d.product ?? 'Custom run'} — ${d.name}${d.company ? ` (${d.company})` : ''}`;

  const lines = [
    `From: ${d.name} <${d.email}>${d.company ? ` · ${d.company}` : ''}`,
    d.product ? `Product: ${d.product}` : null,
    d.material ? `Material: ${d.material}` : null,
    d.chip ? `Chip: ${d.chip}` : null,
    d.quantity ? `Quantity: ${d.quantity}` : null,
    d.deadline ? `Deadline: ${d.deadline}` : null,
    d.message ? `\nMessage:\n${d.message}` : null,
  ].filter(Boolean);

  const text = lines.join('\n');
  const html = `<h2>New quote request from ${escapeHtml(d.name)}</h2><pre>${escapeHtml(text)}</pre>`;

  const result = await sendBrevoEmail({
    channel: 'quote',
    subject,
    textContent: text,
    htmlContent: html,
    replyTo: { email: d.email, name: d.name },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

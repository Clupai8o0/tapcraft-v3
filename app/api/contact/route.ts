import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendBrevoEmail } from '@/lib/brevo/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  topic: z.string().min(2).max(200).optional(),
  message: z.string().min(10).max(4000),
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

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'validation', issues: parsed.error.issues }, { status: 400 });
  }

  // Honeypot check
  if (parsed.data.hp) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, topic, message } = parsed.data;
  const subject = `[Contact] ${topic ?? 'New enquiry'} — ${name}`;

  const text = [
    `From: ${name} <${email}>`,
    topic ? `Topic: ${topic}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
<h2>New enquiry from ${escapeHtml(name)}</h2>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
${topic ? `<p><strong>Topic:</strong> ${escapeHtml(topic)}</p>` : ''}
<hr />
<p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `.trim();

  const result = await sendBrevoEmail({
    channel: 'contact',
    subject,
    textContent: text,
    htmlContent: html,
    replyTo: { email, name },
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

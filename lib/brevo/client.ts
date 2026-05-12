import 'server-only';

// Brevo client — STUBBED. Replace with real Brevo SDK calls when keys are wired up.
// Required env vars (per CLAUDE.md, one key per function so a leak rotates one):
//   BREVO_CONTACT_API_KEY    — contact form submissions
//   BREVO_QUOTE_API_KEY      — quote form submissions
//   BREVO_NEWSLETTER_API_KEY — newsletter subscriptions
//   BREVO_FROM_EMAIL         — default sender, e.g. hello@tapcraftstudio.com
//   BREVO_TO_EMAIL           — internal recipient, e.g. hello@tapcraftstudio.com

type BrevoChannel = 'contact' | 'quote' | 'newsletter';

type SendArgs = {
  channel: BrevoChannel;
  subject: string;
  htmlContent: string;
  textContent: string;
  replyTo?: { email: string; name?: string };
};

function pickKey(channel: BrevoChannel): string | undefined {
  switch (channel) {
    case 'contact':
      return process.env.BREVO_CONTACT_API_KEY;
    case 'quote':
      return process.env.BREVO_QUOTE_API_KEY;
    case 'newsletter':
      return process.env.BREVO_NEWSLETTER_API_KEY;
  }
}

export async function sendBrevoEmail(args: SendArgs): Promise<{ ok: true } | { ok: false; reason: string }> {
  const key = pickKey(args.channel);
  const from = process.env.BREVO_FROM_EMAIL ?? 'hello@tapcraftstudio.com';
  const to = process.env.BREVO_TO_EMAIL ?? 'hello@tapcraftstudio.com';

  if (!key) {
    // No API key yet — log it server-side so submissions aren't silently dropped during the build-out phase.
    // Replace this branch with a real fetch to Brevo's transactional-email endpoint once keys are set.
    console.warn(`[brevo:${args.channel}] no API key, logging payload only`);
    console.warn({
      to,
      from,
      subject: args.subject,
      replyTo: args.replyTo,
      text: args.textContent,
    });
    return { ok: true };
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': key,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { email: from, name: 'TapCraft Studio' },
        to: [{ email: to }],
        replyTo: args.replyTo,
        subject: args.subject,
        htmlContent: args.htmlContent,
        textContent: args.textContent,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[brevo:${args.channel}] http ${res.status}: ${body}`);
      return { ok: false, reason: `brevo ${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    console.error(`[brevo:${args.channel}] fetch error:`, err);
    return { ok: false, reason: 'network' };
  }
}

export async function addBrevoContact(args: {
  email: string;
  attributes?: Record<string, string>;
  listIds?: number[];
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const key = process.env.BREVO_NEWSLETTER_API_KEY;
  if (!key) {
    console.warn('[brevo:newsletter] no API key, logging payload only', args);
    return { ok: true };
  }
  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': key,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        email: args.email,
        attributes: args.attributes ?? {},
        listIds: args.listIds ?? [],
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 409) {
      const body = await res.text();
      console.error(`[brevo:newsletter] http ${res.status}: ${body}`);
      return { ok: false, reason: `brevo ${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    console.error('[brevo:newsletter] fetch error:', err);
    return { ok: false, reason: 'network' };
  }
}

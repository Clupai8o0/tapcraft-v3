import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
  title: 'Privacy Policy — TapCraft',
  description: 'How TapCraft Studio collects, stores, and uses your personal information. Compliant with the Australian Privacy Act 1988.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" heading="Privacy Policy" lastUpdated="11 May 2026">
      <p>This policy explains how <strong>TapCraft Pty Ltd</strong> (ABN 88 612 944 301), trading as TapCraft Studio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), handles personal information collected through tapcraft.shop, tapcraftstudio.com, and any TapCraft-operated NFC payload destination.</p>

      <p>We comply with the <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles. If you have a concern about how we&apos;ve handled your information, you can lodge a complaint with us directly or with the <a href="https://www.oaic.gov.au/" target="_blank" rel="noopener noreferrer">Office of the Australian Information Commissioner</a>.</p>

      <h2>1. What we collect</h2>
      <p>We only collect information we genuinely need to quote, ship, or follow up with you.</p>
      <ul>
        <li><strong>Contact details</strong> — name, email, business name, postal address — when you fill in a quote, contact, or sample-kit form.</li>
        <li><strong>Project details</strong> — what you&apos;re making, quantities, deadlines, design files you choose to share with us.</li>
        <li><strong>Tap analytics</strong> — when an end-user taps a TapCraft NFC tag and we host the destination URL, we log the timestamp, approximate region (city-level), and device type. We do not collect names, emails, or precise location unless the user voluntarily submits them through a form on the destination page.</li>
        <li><strong>Website analytics</strong> — page views, referrer, browser type, screen size. Aggregated and anonymised.</li>
      </ul>

      <h2>2. What we don&apos;t collect</h2>
      <ul>
        <li>We don&apos;t store payment card details. Stripe handles that and we never see the number.</li>
        <li>We don&apos;t buy contact lists, scrape LinkedIn, or import data brokered from third parties.</li>
        <li>We don&apos;t use behavioural ad-tracking pixels. No Meta Pixel, no TikTok pixel.</li>
      </ul>

      <h2>3. Why we collect it</h2>
      <ul>
        <li>To respond to your enquiry and quote your job.</li>
        <li>To ship the order and follow up about delivery.</li>
        <li>To send occasional product updates (only if you opted in). Unsubscribe is one click from any email.</li>
        <li>To improve our website, content, and product (aggregated data only).</li>
        <li>To comply with our legal obligations (tax records, dispute resolution).</li>
      </ul>

      <h2>4. Who we share it with</h2>
      <p>Only the people we genuinely need to share it with:</p>
      <ul>
        <li><strong>Brevo</strong> (email delivery, hosted in EU) — to send transactional and marketing emails.</li>
        <li><strong>Stripe</strong> (payments, hosted in US) — for invoicing and card processing.</li>
        <li><strong>Vercel</strong> (web hosting, Sydney region) — to serve the website.</li>
        <li><strong>Australia Post / StarTrack</strong> — to ship the goods.</li>
        <li><strong>Xero</strong> — for accounting, where invoicing requires it.</li>
      </ul>
      <p>We do not sell your data. Ever.</p>

      <h2>5. Where it&apos;s stored</h2>
      <p>Our primary data is stored in Australia (AWS Sydney, ap-southeast-2). Some of the services we use (Brevo, Stripe) store data overseas; we&apos;ve confirmed they comply with the Australian Privacy Principles or equivalent frameworks (GDPR, SOC 2).</p>

      <h2>6. How long we keep it</h2>
      <ul>
        <li>Quote enquiries we didn&apos;t convert: 24 months, then deleted.</li>
        <li>Customer records: 7 years (ATO requirement for tax-relevant records).</li>
        <li>Marketing list: until you unsubscribe.</li>
        <li>Tap analytics: 13 months, then aggregated and anonymised permanently.</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>You can:</p>
      <ul>
        <li>Ask what we have on file about you.</li>
        <li>Correct anything that&apos;s wrong.</li>
        <li>Ask us to delete you (subject to tax-record retention obligations).</li>
        <li>Withdraw marketing consent at any time.</li>
        <li>Lodge a complaint with us or the OAIC.</li>
      </ul>
      <p>To exercise any of these, email <a href="mailto:privacy@tapcraftstudio.com">privacy@tapcraftstudio.com</a>. We aim to respond within 7 business days.</p>

      <h2>8. Cookies</h2>
      <p>We use a small number of strictly-necessary cookies (session, form anti-spam) and a single first-party analytics cookie (Plausible-style) that does not track you across sites or store personal data.</p>

      <h2>9. Children</h2>
      <p>Our products and services are not directed at children under 16. We don&apos;t knowingly collect personal information from anyone under 16. If you&apos;re a parent and believe your child has submitted personal information, email us and we&apos;ll delete it.</p>

      <h2>10. Changes to this policy</h2>
      <p>If we make material changes, we&apos;ll update the &ldquo;last updated&rdquo; date at the top and email anyone we hold marketing consent for. The current version always lives at <code>/legal/privacy</code>.</p>

      <h2>11. Contact</h2>
      <p>Questions about privacy go to <a href="mailto:privacy@tapcraftstudio.com">privacy@tapcraftstudio.com</a>. General enquiries: <a href="mailto:hello@tapcraftstudio.com">hello@tapcraftstudio.com</a>.</p>
    </LegalLayout>
  );
}

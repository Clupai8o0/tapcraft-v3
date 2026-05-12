import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
  title: 'Refunds & Remakes — TapCraft',
  description: 'How TapCraft handles refunds, remakes, and defects on custom 3D-printed and NFC-encoded products.',
};

export default function RefundsPage() {
  return (
    <LegalLayout eyebrow="Legal" heading="Refunds &amp; Remakes" lastUpdated="11 May 2026">
      <p>We make every TapCraft order to your spec. That means change-of-mind refunds aren&apos;t something we offer — but we stand behind quality. This page explains exactly when we remake, refund, or replace.</p>

      <h2>1. We&apos;ll remake if…</h2>
      <ul>
        <li>A unit fails the tap test (a chip won&apos;t read on iPhone 11+ or Android 7+ from 1.5cm).</li>
        <li>A unit arrives physically damaged.</li>
        <li>The print quality is materially below the sample we sent (warping, layer separation, visible blemishes on the brand surface).</li>
        <li>We shipped the wrong material, the wrong chip type, or the wrong artwork.</li>
        <li>The NFC payload we encoded points to the wrong URL.</li>
      </ul>
      <p>If any of the above happens, email <a href="mailto:hello@tapcraftstudio.com">hello@tapcraftstudio.com</a> within <strong>14 days of delivery</strong>. We&apos;ll typically remake within 10 business days, freight inclusive — you don&apos;t pay anything.</p>

      <h2>2. We&apos;ll refund if…</h2>
      <ul>
        <li>The remake fails the same way. We refund the affected units in full.</li>
        <li>You cancel an order <em>before</em> we&apos;ve started production (typically before day 4 of the schedule). Deposits are refunded minus a 10% admin fee.</li>
        <li>We can&apos;t fulfil the order to spec and can&apos;t agree on a remedy.</li>
      </ul>

      <h2>3. We won&apos;t refund if…</h2>
      <ul>
        <li>You change your mind after design sign-off.</li>
        <li>You supplied artwork that we then printed faithfully, and you don&apos;t like the result. (We&apos;ll always offer a free design review before production. Use it.)</li>
        <li>The wrong recipient was given the tag. NFC payloads are encoded — once shipped, we can&apos;t un-encode them.</li>
        <li>The unit was lost or damaged after delivery to your nominated address. Lodge with the courier — we&apos;ll help you with the paperwork.</li>
        <li>More than 14 days have passed since delivery without a fault report.</li>
      </ul>

      <h2>4. Sample kits</h2>
      <p>Sample kits are non-refundable. The $29 (or international) charge is to cover material and freight. If a sample kit arrives defective, we&apos;ll replace it.</p>

      <h2>5. Subscription / platform fees</h2>
      <p>Pro and Business tiers of the platform (separate from the studio) can be cancelled any time. Pro-rated refunds aren&apos;t offered — your access continues to the end of the current billing period.</p>

      <h2>6. Australian Consumer Law</h2>
      <p>None of this overrides your rights under the <em>Australian Consumer Law</em>. Our goods come with guarantees that can&apos;t be excluded. You&apos;re entitled to a replacement or refund for a major failure, and to compensation for any reasonably foreseeable loss or damage.</p>

      <h2>7. How to request a refund or remake</h2>
      <ol>
        <li>Email <a href="mailto:hello@tapcraftstudio.com">hello@tapcraftstudio.com</a>.</li>
        <li>Include your order number, photos of the issue, and (if relevant) the failed unit&apos;s serial number printed inside the packaging.</li>
        <li>We&apos;ll reply within 1 business day with a remedy plan.</li>
        <li>If we agree on a remake, we ship within 10 business days. If we agree on a refund, we process within 5 business days to the original payment method.</li>
      </ol>

      <h2>8. Disputes</h2>
      <p>If we can&apos;t agree, you can escalate to <a href="https://www.consumer.vic.gov.au/" target="_blank" rel="noopener noreferrer">Consumer Affairs Victoria</a>. We&apos;re a member of the Australian Made Campaign and bound by their dispute framework where it applies.</p>

      <h2>9. Contact</h2>
      <p>Any refund or remake question: <a href="mailto:hello@tapcraftstudio.com">hello@tapcraftstudio.com</a>. Sam or Nikhil personally read every escalation.</p>
    </LegalLayout>
  );
}

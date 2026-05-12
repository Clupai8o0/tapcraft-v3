import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
  title: 'Terms of Service — TapCraft',
  description: 'The terms that govern your engagement with TapCraft Studio — quotes, custom orders, intellectual property, and delivery.',
};

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" heading="Terms of Service" lastUpdated="11 May 2026">
      <p>These terms govern your purchase of goods and services from <strong>TapCraft Pty Ltd</strong> (ABN 88 612 944 301), trading as TapCraft Studio. By accepting a quote, paying a deposit, or placing an order, you agree to them.</p>

      <h2>1. Definitions</h2>
      <ul>
        <li><strong>&ldquo;Goods&rdquo;</strong> — the physical items we make for you (NFC keychains, badges, lanyards, wine tags, custom 3D-printed objects, etc.).</li>
        <li><strong>&ldquo;Services&rdquo;</strong> — design review, mould design, NFC encoding, payload hosting, and any consulting.</li>
        <li><strong>&ldquo;You&rdquo;</strong> — the entity or individual placing the order.</li>
        <li><strong>&ldquo;Quote&rdquo;</strong> — the written estimate we provide; valid for 30 days unless stated otherwise.</li>
      </ul>

      <h2>2. How an order works</h2>
      <ol>
        <li>You request a quote. We respond within 24 business hours.</li>
        <li>You accept the quote in writing (email reply is fine).</li>
        <li>For runs over AUD $1,000, we invoice 50% deposit. Under that, we invoice on completion.</li>
        <li>We design, print, encode, QC, and ship.</li>
        <li>We invoice the balance. Payment terms are 7 days from invoice date.</li>
      </ol>

      <h2>3. Lead times</h2>
      <p>Lead times stated in your quote are estimates, not guarantees. We&apos;ll always tell you immediately if anything threatens your deadline. If we&apos;re the cause of delay and you miss a hard date (event doors-open, product launch), we&apos;ll work out a fair remedy — typically a partial refund or a credit toward a reorder.</p>

      <h2>4. Pricing</h2>
      <p>All prices are in Australian Dollars and exclude GST unless stated. Quotes include design, printing, NFC chips, encoding, audit log, and standard packaging. Quotes <em>do not</em> include freight, custom mould design (where applicable), or rush surcharges — these are line-itemed separately.</p>

      <h2>5. Materials &amp; tolerances</h2>
      <p>We work in PLA, recycled PLA, and PHA. Slight variation in colour and texture between batches is expected and not considered a defect. We commit to:</p>
      <ul>
        <li>Dimensional tolerance: ±0.3mm on critical features, ±0.5mm overall.</li>
        <li>NFC read range: minimum 1.5cm with NTAG215 on a modern phone.</li>
        <li>Tap success rate: target ≥97% in QC testing.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>You retain ownership of any artwork, logo, brand assets, or content you supply. By supplying it, you grant us a non-exclusive licence to use it solely to fulfil your order.</p>
      <p>We retain ownership of the underlying mould designs, slicing profiles, and production templates we create. Once your order ships, we destroy the print files associated with your custom mould unless you&apos;ve commissioned an exclusive mould and paid the exclusivity fee.</p>
      <p>If we feature your project in our showcase, we&apos;ll always ask first.</p>

      <h2>7. Confidentiality</h2>
      <p>We treat your brief, files, customer lists, and any non-public information as confidential. We&apos;ll sign your NDA on request — if you don&apos;t have one, ours is one page and we&apos;re happy to send it.</p>

      <h2>8. Refunds &amp; remakes</h2>
      <p>Custom goods are exempt from change-of-mind refunds. If a unit is defective, see our <a href="/legal/refunds">refunds policy</a>. In short: we remake or refund any unit that fails QC, fails the tap test, or arrives damaged — at our cost.</p>

      <h2>9. Liability</h2>
      <p>To the maximum extent permitted by law, our liability for any claim arising from these terms is limited to the price you paid for the affected goods or services. We&apos;re not liable for indirect or consequential loss (lost profit, lost data, missed campaigns) except where the law requires otherwise.</p>
      <p>Nothing in these terms limits any right you have under the <em>Australian Consumer Law</em>.</p>

      <h2>10. NFC payloads</h2>
      <p>Where we host the NFC destination URL on a <code>tc.st/...</code> short link, we reserve the right to suspend any URL that we reasonably believe hosts unlawful content (CSAM, fraud, malware, terrorism, or content that breaches the laws of Australia or the country of the visitor). We&apos;ll notify you immediately if we do.</p>

      <h2>11. Termination</h2>
      <p>Either party can terminate an engagement at any time with written notice. Work completed up to the termination date is invoiced pro-rata. Deposits are non-refundable if termination occurs after design sign-off.</p>

      <h2>12. Governing law</h2>
      <p>These terms are governed by the laws of Victoria, Australia. Any dispute is subject to the exclusive jurisdiction of the courts of Victoria.</p>

      <h2>13. Contact</h2>
      <p>Questions about these terms: <a href="mailto:hello@tapcraftstudio.com">hello@tapcraftstudio.com</a>.</p>
    </LegalLayout>
  );
}

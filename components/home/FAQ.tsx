import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: 'What is the minimum order?',
    a: 'Single samples for AUD $45 each. Production runs start at 50 units for cards and 100 for keychains, but pricing per unit gets meaningful at 250+.',
  },
  {
    q: 'How does the NFC chip actually work?',
    a: 'Every chip is an NTAG215 (or 213/216 by request). It contains a URL — yours, ours, or a per-tag short link if you want analytics. Any modern phone reads it without an app. Apple devices since iOS 14, Android since Lollipop.',
  },
  {
    q: 'Can the URL be changed after we receive them?',
    a: 'Yes. If you use TapCraft-managed short links, you can change the destination URL any time from a simple dashboard — no re-programming needed. If you ask us to write a fixed URL, that one is permanent.',
  },
  {
    q: 'What do tag analytics look like?',
    a: 'Per-tag taps, unique devices, time-of-day, rough geolocation by IP. CSV export and a Looker / Sheets feed. We do not capture or sell personal data; everything is privacy-first by default.',
  },
  {
    q: 'How long does a custom run take?',
    a: 'Sample within 7 days of brief. Production run of up to 2,000 units within 14 days. Larger runs we quote per project — usually 18–25 days end-to-end.',
  },
  {
    q: 'Where are you based?',
    a: 'Brunswick, Naarm/Melbourne. Everything is designed, printed, encoded, and packed here. We ship Australia-wide via AusPost and internationally via DHL on request.',
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-2xl">
          <span className="eyebrow">Common questions</span>
          <h2 className="h1 balance" style={{ marginTop: 14 }}>
            Before you ask.
          </h2>
        </div>

        <div className="mt-10 rounded-[14px] overflow-hidden border border-[var(--line)] bg-[var(--paper)]">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Transformation from '@/components/home/Transformation';
import Marquee from '@/components/home/Marquee';
import Showcase from '@/components/home/Showcase';
import Products from '@/components/home/Products';
import Verticals from '@/components/home/Verticals';
import Process from '@/components/home/Process';
import Results from '@/components/home/Results';
import PlatformTeaser from '@/components/home/PlatformTeaser';
import Manifesto from '@/components/home/Manifesto';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'TapCraft — Custom NFC keychains that convert',
  description:
    "Melbourne's 3D-printing + NFC studio. Bespoke branded keychains, lanyards, cards and badges that turn handshakes into measurable leads. Made in Naarm.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Transformation />
      <Marquee />
      <Showcase />
      <Products />
      <Verticals />
      <Process />
      <Results />
      <Manifesto />
      <PlatformTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}

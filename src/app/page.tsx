import HeroSection from '@/components/Section/HeroSection';
import AboutUsSection from '@/components/Section/AboutUsSection';
import ServicesSection from '@/components/Section/ServicesSection';
import ProductSection from '@/components/Section/ProductSection';
import TrustSection from '@/components/Section/TrustSection';
import OurWritingsSection from '@/components/Section/OurWritingsSection';
import FooterSection from '@/components/Section/FooterSection';
import ScrollSpy from '@/components/SpyScroll/SpySrcoll';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between bg-black'>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProductSection />
      <TrustSection />
      <OurWritingsSection />
      <FooterSection />
      <ScrollSpy />
    </main>
  );
}

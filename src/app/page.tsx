import HeroSection from '@/components/Section/heroSection';
import AboutUsSection from '@/components/Section/aboutUsSection';
import ServicesSection from '@/components/Section/servicesSection';
import ProductSection from '@/components/Section/productSection';
import TrustSection from '@/components/Section/trustSection';
import OurWritingsSection from '@/components/Section/ourWritingsSection';
import FooterSection from '@/components/Section/footerSection';
import ScrollSpy from '@/components/SpyScroll/spySrcoll';

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

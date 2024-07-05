import HeroSection from '@/components/section/heroSection';
import AboutUsSection from '@/components/section/aboutUsSection';
import ServicesSection from '@/components/section/servicesSection';
import ProductSection from '@/components/section/productSection';
import TrustSection from '@/components/section/trustSection';
import OurWritingsSection from '@/components/section/ourWritingsSection';
import FooterSection from '@/components/section/footerSection';
import ScrollSpy from '@/components/spyScroll/spySrcoll';

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

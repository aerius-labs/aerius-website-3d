import ServicesSection from '@/components/Section/servicesSection';
import TrustSection from '@/components/Section/trustSection';
import ProductSection from '@/components/Section/productSection';
import AboutUsSection from '@/components/Section/aboutUsSection';
import OurWritingsSection from '@/components/Section/ourWritingsSection';
import HeroSection from '@/components/Section/heroSection';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between bg-black'>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProductSection />
      <TrustSection />
      <OurWritingsSection />
    </main>
  );
}

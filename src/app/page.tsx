import TopSection from '@/components/Section/topSection';
import ServicesSection from '@/components/Section/servicesSection';
import TrustSection from '@/components/Section/trustSection';
import ProductSection from '@/components/Section/productSection';
import AboutUsSection from '@/components/Section/aboutUsSection';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between overflow-x-hidden bg-black p-5 lg:p-10'>
      <TopSection />
      <AboutUsSection />
      <ServicesSection />
      <ProductSection />
      <TrustSection />
    </main>
  );
}

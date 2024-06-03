import TopSection from '@/components/Section/topSection';
import ServicesSection from '@/components/Section/servicesSection';
import TrustSection from '@/components/Section/trustSection';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between overflow-x-hidden bg-black p-5 lg:p-10'>
      <TopSection />
      <ServicesSection />
      <TrustSection />
    </main>
  );
}

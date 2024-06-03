import TopSection from '@/components/Section/topSection';
import TrustSection from '@/components/Section/trustSection';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between bg-black p-5 lg:p-10'>
      <TopSection />
      <TrustSection />
    </main>
  );
}

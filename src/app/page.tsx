import HeroSection from '@/components/section/heroSection';
import AboutUsSection from '@/components/section/aboutUsSection';
import ServicesSection from '@/components/section/servicesSection';
import ProductSection from '@/components/section/productSection';
import TrustSection from '@/components/section/trustSection';
import OurWritingsSection from '@/components/section/ourWritingsSection';
import FooterSection from '@/components/section/footerSection';
import ScrollSpy from '@/components/spyScroll/spySrcoll';

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate the loader completion
  //   const loaderTimeout = setTimeout(() => 5000); // Adjust this timeout based on your loader duration

  //   return () => clearTimeout(loaderTimeout);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loader">
  //       {/* Your loader component or styling here */}
  //       Loading...
  //     </div>
  //   );
  // }

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

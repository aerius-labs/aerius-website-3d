'use client';

import HeroSection from '@/components/section/heroSection';
import AboutUsSection from '@/components/section/aboutUsSection';
import ServicesSection from '@/components/section/servicesSection';
import ProductSection from '@/components/section/productSection';
import TrustSection from '@/components/section/trustSection';
import OurWritingsSection from '@/components/section/ourWritingsSection';
import FooterSection from '@/components/section/footerSection';
import ScrollSpy from '@/components/spyScroll/spySrcoll';
import Loader from '@/components/Loader/loader';

import { useLoading } from '../context/loadingContext';
import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export default function Home() {
  const { progress } = useProgress();
  const { isLoaded, setIsLoaded } = useLoading();

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  return (
    <>
      {!isLoaded && <Loader progress={progress} />}
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
    </>
  );
}

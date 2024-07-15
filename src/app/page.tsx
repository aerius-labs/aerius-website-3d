'use client';

import HeroSection from '@/components/section/heroSection';
import AeriusLogoSection from '@/components/section/aeriusLogoSection';
import AboutUsSection from '@/components/section/aboutUsSection';
import ServicesSection from '@/components/section/servicesSection';
import ProductSection from '@/components/section/productSection';
import TrustSection from '@/components/section/trustSection';
import OurWritingsSection from '@/components/section/ourWritingsSection';
import FooterSection from '@/components/section/footerSection';
import ScrollSpy from '@/components/spyScroll/spySrcoll';
import BordersCorner from '@/components/BorderCorners/borderCorners';
import Loader from '@/components/Loader/loader';
import CustomCursor from '@/components/customCursor/customCursor';

import { useLoading } from '../context/loadingContext';
import { useEffect, useRef } from 'react';
import { useProgress } from '@react-three/drei';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const wtbRef = useRef<HTMLDivElement>(null);
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
      {isLoaded && <CustomCursor />}
      <main
        ref={mainRef}
        className='flex flex-col items-center justify-between'
      >
        {isLoaded && <BordersCorner />}
        {isLoaded && <HeroSection />}
        <AeriusLogoSection />
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

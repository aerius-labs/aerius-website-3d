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
import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { OnScrollEvent } from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { progress } = useProgress();
  const { isLoaded, setIsLoaded } = useLoading();

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  useEffect(() => {
    (async () => {
      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.6,
        touchMultiplier: 0.6,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    })();
  }, []);

  return (
    <>
      {!isLoaded && <Loader progress={progress} />}
      {isLoaded && <CustomCursor />}
      <main className='flex flex-col items-center justify-between'>
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

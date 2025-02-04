'use client';

import HeroSection from '@/components/section/heroSection';
import AeriusLogoSection from '@/components/section/aeriusLogoSection';
import AboutUsSection from '@/components/section/aboutUsSection';
import ServicesSection from '@/components/section/servicesSection';
import ProductSection from '@/components/section/productSection';
import TrustSection from '@/components/section/trustSection';
import OurWritingsSection from '@/components/section/ourWritingsSection';
import FooterSection from '@/components/section/footerSection';
import ScrollSpy from '@/components/spyScroll/spyScroll';
import BordersCorner from '@/components/BorderCorners/borderCorners';
import Loader from '@/components/Loader/loader';
import CustomCursor from '@/components/customCursor/customCursor';

import { useLoading } from '../context/loadingContext';
import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { progress } = useProgress();
  const { isLoaded, setIsLoaded } = useLoading();
  const [isCornersLoaded, setIsCornersLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  useEffect(() => {
    let rafId: number;
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.4,
      touchMultiplier: 0.4,
    });
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      try {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      } catch (error) {
        console.error('Scroll update failed: ', error);
      }
    }
    rafId = requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      try {
        ScrollTrigger.update();
      } catch (error) {
        console.error('ScrollTrigger update failed:', error);
      }
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!isLoaded && <Loader progress={progress} />}
      {isLoaded && <CustomCursor />}
      <main className='relative flex flex-col items-center justify-between'>
        <div className='fixed -z-20 h-screen w-screen bg-black'></div>
        {isLoaded && <BordersCorner setIsCornersLoaded={setIsCornersLoaded} />}
        <HeroSection loaded={isCornersLoaded} />
        <AeriusLogoSection />
        <AboutUsSection />
        <ServicesSection />
        <ProductSection />
        <TrustSection />
        <OurWritingsSection />
        <FooterSection />
        <ScrollSpy loaded={isCornersLoaded} />
      </main>
    </>
  );
}

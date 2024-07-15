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

import gsap from 'gsap';

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

  useEffect(() => {
    // CursorFollow logic
    const moveCursor = (dets: { x: number; y: number }) => {
      gsap.to('.cursorFollower', {
        x: dets.x - 6,
        y: dets.y - 6,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.to('.cursor', {
        x: dets.x - 4,
        y: dets.y - 4,
        duration: 0.1,
        ease: 'power4.out',
      });
    };

    if (mainRef.current != null)
      mainRef.current.addEventListener('mousemove', moveCursor);

    // CursorHover logic
    return () => {
      if (mainRef.current != null)
        mainRef.current.removeEventListener('mousemove', moveCursor);
    };
  }, []);

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

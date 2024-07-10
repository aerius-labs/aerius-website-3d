'use client';

import dynamic from 'next/dynamic';
import TopSection from './topSection';

const Scene = dynamic(() => import('@/components/scene/aeriusLogoScene'), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <>
      <TopSection />
      <div className='relative flex h-screen w-screen items-center justify-center'>
        <Scene />
      </div>
    </>
  );
}

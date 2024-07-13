'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene/aeriusLogoScene'), {
  ssr: false,
});

export default function AeriusLogoSection() {
  return (
    <div className='h-[200vh]'>
      <div className='abc relative flex h-screen w-screen items-center justify-center'>
        <Scene />
      </div>
    </div>
  );
}

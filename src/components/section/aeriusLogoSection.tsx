import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene/aeriusLogoScene'), {
  ssr: false,
});

export default function AeriusLogoSection() {
  return (
    <div className='h-[150vh]'>
      <div id='logoContainer' className='h-screen w-screen brightness-100'>
        <Scene />
      </div>
    </div>
  );
}

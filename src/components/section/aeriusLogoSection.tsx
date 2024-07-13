import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene/aeriusLogoScene'), {
  ssr: false,
});

export default function AeriusLogoSection() {
  return (
    <div>
      <div id='logoContainer' className='h-screen w-screen'>
        <Scene />
      </div>
    </div>
  );
}

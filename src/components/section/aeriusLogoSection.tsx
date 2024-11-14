import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene/aeriusLogoScene'), {
  ssr: false,
});

export default function AeriusLogoSection() {
  return (
    <div className='relative h-[150vh]'>
      <div id='logoContainer' className='h-screen w-screen brightness-100'>
        <Scene />
      </div>
      <div
        className='absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-black via-black/50 to-transparent'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .5) 47%, #000)',
        }}
      />
    </div>
  );
}

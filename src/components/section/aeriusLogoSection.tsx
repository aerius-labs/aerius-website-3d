import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Scene = dynamic(() => import('@/components/scene/aeriusLogoScene'), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function AeriusLogoSection() {
  useEffect(() => {
    const logoContainer = document.getElementById('logoContainer');

    if (logoContainer) {
      gsap.fromTo(
        logoContainer,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '#logoSection',
            start: 'top center',
            end: 'top top',
            scrub: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div id='logoSection' className='relative h-[130vh]'>
      <div
        id='logoContainer'
        className='sticky top-0 h-screen w-screen'
        style={{ marginTop: '-10vh' }}
      >
        <Scene />
      </div>
      <div
        className='absolute bottom-0 left-0 right-0 h-[15vh]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .5) 47%, #000)',
          bottom: '-10vh',
        }}
      />
    </div>
  );
}

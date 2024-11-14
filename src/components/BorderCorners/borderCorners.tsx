import { gsap } from 'gsap';
import { Power2 } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';

export default function BorderCorners() {
  const bordersRef = useRef(null);

  useEffect(() => {
    if (bordersRef.current) {
      gsap.fromTo(
        bordersRef.current,
        {
          x: '50%',
          y: '50%',
          scale: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: Power2.easeOut,
        }
      );
    }
  }, []);

  return (
    <div className='fixed z-[1] flex h-full w-full flex-col justify-between gap-20 p-5 sm:p-6'>
      <div className='flex h-full animate-topAway flex-row gap-20'>
        <div className='h-4 w-4 border-l-2 border-t-2 border-white/50 sm:h-6 sm:w-6'></div>
        <div className='h-4 w-4 border-r-2 border-t-2 border-white/50 sm:h-6 sm:w-6'></div>
      </div>
      <div className='flex h-full animate-bottomAway flex-row gap-20'>
        <div className='h-4 w-4 border-b-2 border-l-2 border-white/50 sm:h-6 sm:w-6'></div>
        <div className='h-4 w-4 border-b-2 border-r-2 border-white/50 sm:h-6 sm:w-6'></div>
      </div>
    </div>
  );
}

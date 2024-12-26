import { gsap } from 'gsap';
import { Power2 } from 'gsap/dist/gsap';
import { SetStateAction, useEffect, useRef, Dispatch } from 'react';

export default function BorderCorners({
  setIsCornersLoaded,
}: {
  setIsCornersLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useEffect(() => {
    const corners = [
      topLeftRef.current,
      topRightRef.current,
      bottomLeftRef.current,
      bottomRightRef.current,
    ];
    gsap.set(corners[0], {
      left: '47%',
      top: '47%',
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    });
    gsap.set(corners[1], {
      left: '53%',
      top: '47%',
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    });
    gsap.set(corners[2], {
      left: '47%',
      top: '53%',
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    });
    gsap.set(corners[3], {
      left: '53%',
      top: '53%',
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    });

    gsap
      .timeline({
        onComplete: () => setIsCornersLoaded(true),
      })
      .to(corners, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: Power2.easeOut,
      })
      .to(
        topLeftRef.current,
        {
          left: '2%',
          top: '2%',
          xPercent: 0,
          yPercent: 0,
          duration: 2,
          ease: Power2.easeInOut,
        },
        '-=0.5'
      )
      .to(
        topRightRef.current,
        {
          left: '98%',
          top: '2%',
          xPercent: -100,
          yPercent: 0,
          duration: 2,
          ease: Power2.easeInOut,
        },
        '-=2'
      )
      .to(
        bottomLeftRef.current,
        {
          left: '2%',
          top: '98%',
          xPercent: 0,
          yPercent: -100,
          duration: 2,
          ease: Power2.easeInOut,
        },
        '-=2'
      )
      .to(
        bottomRightRef.current,
        {
          left: '98%',
          top: '98%',
          xPercent: -100,
          yPercent: -100,
          duration: 2,
          ease: Power2.easeInOut,
        },
        '-=2'
      );
  }, []);

  return (
    <div className='fixed z-[1] h-full w-full'>
      <div
        ref={topLeftRef}
        className='absolute h-4 w-4 border-l-2 border-t-2 border-white/80 sm:h-6 sm:w-6'
      />
      <div
        ref={topRightRef}
        className='absolute h-4 w-4 border-r-2 border-t-2 border-white/80 sm:h-6 sm:w-6'
      />
      <div
        ref={bottomLeftRef}
        className='absolute h-4 w-4 border-b-2 border-l-2 border-white/80 sm:h-6 sm:w-6'
      />
      <div
        ref={bottomRightRef}
        className='absolute h-4 w-4 border-b-2 border-r-2 border-white/80 sm:h-6 sm:w-6'
      />
    </div>
  );
}

import React, { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    // Cursor follow logic
    const moveCursor = (e: any) => {
      gsap.to('.cursorFollower', {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.8,
        ease: 'power2.out',
      });
      gsap.to('.cursor', {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Hover logic for arrow
    const arrowLink = document.querySelector('.group');

    const mouseEnter = () => {
      gsap.to('.cursor', {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to('.cursorFollower', {
        scale: 2,
        duration: 0.3,
      });
    };

    const mouseLeave = () => {
      gsap.to('.cursor', {
        opacity: 1,
        duration: 0.3,
      });
      gsap.to('.cursorFollower', {
        scale: 1,
        duration: 0.3,
      });
    };

    document.addEventListener('mousemove', moveCursor);

    if (arrowLink) {
      arrowLink.addEventListener('mouseenter', mouseEnter);
      arrowLink.addEventListener('mouseleave', mouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (arrowLink) {
        arrowLink.removeEventListener('mouseenter', mouseEnter);
        arrowLink.removeEventListener('mouseleave', mouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div className='cursor pointer-events-none fixed top-0 z-30 h-4 w-4 rounded-[50%] bg-black mix-blend-difference'>
        <div className='absolute left-[4px] top-[4px] h-full w-full rounded-[50%] bg-white mix-blend-difference'></div>
      </div>
      <div className='cursorFollower pointer-events-none fixed top-0 z-20 h-8 w-8 rounded-[50%] bg-white mix-blend-difference'></div>
    </>
  );
};

export default CustomCursor;

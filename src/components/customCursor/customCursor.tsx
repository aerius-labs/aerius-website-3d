'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    // CursorFollow logic
    const moveCursor = (dets: { x: number; y: number }) => {
      gsap.to('.cursorFollower', {
        x: dets.x - 6,
        y: dets.y - 6,
        duration: 1.5,
        ease: 'power4.out',
      });
      gsap.to('.cursor', {
        x: dets.x - 4,
        y: dets.y - 4,
        duration: 0.5,
        ease: 'power4.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // Hover logic
    document.querySelectorAll('.hovering').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to('.cursorFollower', {
          scale: 2,
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to('.cursorFollower', {
          scale: 1,
        });
      });
    });
  }, []);

  return (
    <>
      <div className='cursor fixed top-0 z-50 h-3 w-3 rounded-[50%] border-2 border-black'></div>
      <div className='cursorFollower fixed top-0 z-40 h-4 w-4 rounded-[50%] bg-white mix-blend-difference'></div>
    </>
  );
};

export default CustomCursor;

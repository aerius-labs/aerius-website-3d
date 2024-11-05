import { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    // CursorFollow logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to('.cursorFollower', {
        x: e.clientX - 6,
        y: e.clientY - 6,
        duration: 1.5,
        ease: 'power4.out',
      });
      gsap.to('.cursor', {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.5,
        ease: 'power4.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // Hover logic
    const mouseEnter = () => {
      gsap.set('.cursor', { display: 'none' });
      gsap.to('.cursorFollower', {
        scale: 2,
      });
    };

    const mouseLeave = () => {
      gsap.set('.cursor', { display: 'block' });
      gsap.to('.cursorFollower', {
        scale: 1,
      });
    };

    document.querySelectorAll('.hovering').forEach((el) => {
      el.addEventListener('mouseenter', mouseEnter);
      el.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('.hovering').forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className='cursor fixed top-0 z-20 flex h-4 w-4 items-center justify-center rounded-[50%] bg-black mix-blend-difference'>
        <div className='absolute left-[4px] top-[4px] h-full w-full rounded-[50%] bg-white mix-blend-difference'></div>
      </div>
      <div className='cursorFollower fixed top-0 z-10 h-8 w-8 rounded-[50%] bg-white mix-blend-difference'></div>
    </>
  );
};

export default CustomCursor;

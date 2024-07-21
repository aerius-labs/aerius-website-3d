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

    // hover on link logic
    const mouseEnterOnLink = () => {
      gsap.set('.cursor', { display: 'none' });
      gsap.set('.cursorFollower', { display: 'none' });
    };

    const mouseLeaveFromLink = () => {
      gsap.set('.cursor', { display: 'block' });
      gsap.set('.cursorFollower', { display: 'block' });
    };

    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseenter', mouseEnterOnLink);
      el.addEventListener('mouseleave', mouseLeaveFromLink);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('.hovering').forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      });
      document.querySelectorAll('a').forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnterOnLink);
        el.removeEventListener('mouseleave', mouseLeaveFromLink);
      });
    };
  }, []);

  return (
    <>
      <div className='cursor fixed top-0 z-20 flex h-2 w-2 items-center justify-center rounded-[50%] bg-black mix-blend-difference'>
        <div className='absolute left-[2px] top-[2px] h-full w-full rounded-[50%] bg-white mix-blend-difference'></div>
      </div>
      <div className='cursorFollower fixed top-0 z-10 h-4 w-4 rounded-[50%] bg-white mix-blend-difference'></div>
    </>
  );
};

export default CustomCursor;

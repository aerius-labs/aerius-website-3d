import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
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

    const handleElementHover = () => {
      gsap.to('.cursor', {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to('.cursorFollower', {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const handleElementLeave = () => {
      gsap.to('.cursor', {
        opacity: 1,
        duration: 0.3,
      });
      gsap.to('.cursorFollower', {
        scale: 1,
        duration: 0.3,
      });
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .group, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), #spy-container, #spy-container *'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', handleElementHover);
        element.addEventListener('mouseleave', handleElementLeave);
      });

      return interactiveElements;
    };
    if (shouldRender) {
      document.addEventListener('mousemove', moveCursor);
      const interactiveElements = addHoverListeners();
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          const newInteractiveElements = addHoverListeners();
          interactiveElements.forEach((element) => {
            if (!document.contains(element)) {
              element.removeEventListener('mouseenter', handleElementHover);
              element.removeEventListener('mouseleave', handleElementLeave);
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', handleElementHover);
          element.removeEventListener('mouseleave', handleElementLeave);
        });
        observer.disconnect();
      };
    }
  }, [shouldRender]);

  useEffect(() => {
    setShouldRender(window.matchMedia('(min-width: 1440px)').matches);
    const mediaQuery = window.matchMedia('(min-width: 1440px)');
    const handleChange = (e: MediaQueryListEvent) => setShouldRender(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <div className='cursor pointer-events-none fixed top-0 z-30 hidden h-4 w-4 rounded-[50%] bg-black mix-blend-difference lg:block'>
        <div className='absolute left-[4px] top-[4px] h-full w-full rounded-[50%] bg-white mix-blend-difference'></div>
      </div>
      <div className='cursorFollower pointer-events-none fixed top-0 z-20 hidden h-8 w-8 rounded-[50%] bg-white mix-blend-difference lg:block'></div>
    </>
  );
};

export default CustomCursor;

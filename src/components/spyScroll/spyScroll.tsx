import { useEffect, useState } from 'react';

const sections = ['About', 'Services', 'Products', 'Trusted', 'Blogs'];

const ScrollSpy = ({ loaded }: { loaded: boolean }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        try {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            setActiveSection(entry.target.id);
          }
        } catch (error) {
          console.error('Failed to handle intersection:', error);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    try {
      if (section && loaded) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } catch (error) {
      console.error('Failed to scroll to section:', error);
    }
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      id='spy-container'
      className={`fixed right-6 top-6 z-10 hidden p-5 ${loaded ? 'lg:block' : 'hidden'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center'>
        {sections.map((sectionId) => (
          <div
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`
              flex cursor-pointer items-center transition-all duration-300
              ${isHovered ? 'w-24' : 'w-6'}
            `}
          >
            <div className='relative flex w-full items-center justify-end'>
              <p
                className={`
                  absolute right-5 whitespace-nowrap text-sm
                  ${isHovered ? 'translate-x-0 opacity-100' : 'invisible translate-x-4 opacity-0'}
                  ${activeSection === sectionId ? 'text-white' : 'text-white/50'}
                  transition-all delay-100 duration-300 ease-in-out hover:text-white
                `}
              >
                {sectionId}
              </p>
              <div
                className={`h-3 w-3 rounded-full border transition-all duration-300
                  ${activeSection === sectionId ? 'border-white' : `border-white/50 ${isHovered ? 'border-white/80' : 'border-white/50'}`}
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpy;

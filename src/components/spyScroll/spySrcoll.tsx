import { useEffect, useState } from 'react';

const sections = ['About', 'Services', 'Products', 'Trusted', 'Blogs'];

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
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
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='group fixed right-6 top-6 z-20 hidden h-[25px] gap-2 p-5 text-white md:flex'>
      {sections.map((sectionId) => (
        <div
          key={sectionId}
          className='flex cursor-pointer items-center gap-1'
          onClick={() => scrollToSection(sectionId)}
        >
          <p
            className={`hidden text-white/50 transition duration-300 ease-in-out hover:text-white group-hover:block ${
              activeSection === sectionId ? 'text-white' : ''
            }`}
          >
            {sectionId}
          </p>
          <div
            className={`h-3 w-3 rounded-full border ${
              activeSection === sectionId ? 'border-white' : 'border-white/50'
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ScrollSpy;

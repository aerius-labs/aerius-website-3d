'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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

  return (
    <div className='group fixed right-6 top-6 z-20 hidden h-[25px] gap-2 p-5 text-white md:flex'>
      {sections.map((sectionId) => (
        <Link
          href={`#${sectionId}`}
          key={sectionId}
          className='flex items-center gap-1'
        >
          <p
            className={`hidden text-white/50 transition duration-300 ease-in-out hover:text-white group-hover:block ${activeSection === sectionId ? 'text-white' : ''}`}
          >
            {sectionId}
          </p>
          <div
            className={`h-3 w-3 rounded-full border ${activeSection === sectionId ? 'border-white' : 'border-white/50'}`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default ScrollSpy;

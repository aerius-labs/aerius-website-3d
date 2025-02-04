import Link from 'next/link';
import { IBMPlexMono, HankenGrotesk } from '@/fonts/fonts';
import { HoverEffect } from '../ui/card';
import { blogsData } from '@/data/data';

export default function OurWritingsSection() {
  return (
    <section
      id='Blogs'
      className={`relative ${HankenGrotesk.className} flex w-screen flex-col items-center justify-center px-5 text-white lg:px-20`}
    >
      {/* Content */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold uppercase sm:text-3xl lg:text-5xl'>
          Ready to Geek Out?
        </h1>
        <h3 className='pt-5 text-center text-lg lg:text-2xl'>
          <span className='text-white/50'>
            Discover tomorrow&apos;s trends today, explore our insights on{' '}
          </span>
          <span className='hovering relative'>
            <span className='absolute z-40 h-full w-full bg-transparent'></span>
            Pioneering Technologies and Future Topics
          </span>
        </h3>
      </div>

      <div className='w-full pt-10'>
        <div className='relative w-full'>
          <HoverEffect items={blogsData} />
        </div>

        <div className='mb-10 flex w-full justify-center lg:mb-40 lg:mt-20 xl:mt-10'>
          <Link
            target='_blank'
            href='https://blog.aeriuslabs.org/'
            rel='noopener noreferrer'
            aria-label='Explore more blog posts'
            className='hovering group flex items-center justify-center gap-3 transition-all duration-300'
          >
            <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white p-3 transition-all duration-300 group-hover:bg-white'>
              <span
                aria-hidden='true'
                className='text-white transition-all duration-300 group-hover:-rotate-45 group-hover:text-black'
              >
                →
              </span>
            </div>
            <span
              className={`z-10 text-base ${IBMPlexMono.className} relative font-bold md:text-lg`}
            >
              Explore More
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

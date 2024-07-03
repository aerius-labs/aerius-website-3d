import Image from 'next/image';
import Link from 'next/link';

import { IBMPlexMono, FKScreamerBlack } from '@/fonts/fonts';

export default function FooterSection() {
  return (
    <section className='relative h-[40vh] w-full sm:h-[8vh]'>
      <div className='absolute bottom-0 left-0 right-0 z-[6] flex w-full flex-col text-white'>
        <div className='absolute bottom-4 right-5 sm:relative sm:left-0 sm:flex sm:flex-row sm:py-2'>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[17.2vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/briefcase_icon.svg'
              alt='briefcase_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className={`text-sm ${IBMPlexMono.className}`}>Careers</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/telegram_icon.svg'
              alt='telegram_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className={`text-sm ${IBMPlexMono.className}`}>Telegram</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/github_icon.svg'
              alt='github_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className={`text-sm ${IBMPlexMono.className}`}>Github</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/medium_icon.svg'
              alt='medium_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className={`text-sm ${IBMPlexMono.className}`}>Medium</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[17.2vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/twitter_icon.svg'
              alt='twitter_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className={`text-sm ${IBMPlexMono.className}`}>Twitter</p>
          </Link>
        </div>
        <div className='mb-0 border-t-2 border-white/50 bg-black text-left text-[25.5vw] font-extrabold leading-none  sm:text-center sm:text-[14.5vw]'>
          AERIUS LABS
        </div>
      </div>
    </section>
  );
}

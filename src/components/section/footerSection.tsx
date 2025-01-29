import Image from 'next/image';
import Link from 'next/link';

import { IBMPlexMono, FKScreamerBlack } from '@/fonts/fonts';

export default function FooterSection() {
  return (
    <section className='relative mt-auto w-full' id='Footer'>
      <div className='relative flex w-full flex-col text-white'>
        <div className='z-20 hidden flex-col gap-2 px-4 py-6 sm:flex-row sm:gap-0 sm:py-2 md:flex'>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[17.2vw] sm:flex-col'
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
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[21.9vw] sm:flex-col'
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
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[21.9vw] sm:flex-col'
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
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[21.9vw] sm:flex-col'
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
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[17.2vw] sm:flex-col'
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
        <div className='z-20 flex flex-row justify-between gap-2 px-4 py-6 sm:flex-row sm:gap-0 sm:py-2 md:hidden'>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[17.2vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/briefcase_icon.svg'
              alt='briefcase_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/telegram_icon.svg'
              alt='telegram_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/github_icon.svg'
              alt='github_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/medium_icon.svg'
              alt='medium_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 hover:scale-125 hover:duration-300 sm:w-[17.2vw] sm:flex-col'
          >
            <Image
              src='/socialIcons/twitter_icon.svg'
              alt='twitter_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
          </Link>
        </div>
        <div
          className={`hovering relative border-t-2 ${FKScreamerBlack.className} border-white/50 text-center text-[40vw] font-extrabold leading-none sm:pl-0 sm:text-center sm:text-[24vw] md:text-left`}
        >
          <div className='absolute z-40 h-full w-full bg-transparent'></div>
          AERIUS LABS
        </div>
      </div>
    </section>
  );
}

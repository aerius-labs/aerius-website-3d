import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <section className='relative h-[40vh] w-full sm:h-[8vh]'>
      <div className='absolute bottom-0 left-0 right-0 z-[6] flex w-full flex-col text-white'>
        <div className='absolute bottom-1 right-5 sm:relative sm:left-0 sm:flex sm:flex-row sm:py-2'>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[17.2vw] sm:flex-col'
          >
            <Image
              src='/SocialIcons/briefcase_icon.svg'
              alt='social_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className='text-sm'>Careers</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/SocialIcons/telegram_icon.svg'
              alt='social_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className='text-sm'>Telegram</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/SocialIcons/github_icon.svg'
              alt='social_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className='text-sm'>Github</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[21.9vw] sm:flex-col'
          >
            <Image
              src='/SocialIcons/medium_icon.svg'
              alt='social_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className='text-sm'>Medium</p>
          </Link>
          <Link
            href='#'
            className='flex flex-row items-center gap-1 sm:w-[17.2vw] sm:flex-col'
          >
            <Image
              src='/SocialIcons/twitter_icon.svg'
              alt='social_icon'
              width={35}
              height={35}
              className='w-5 sm:w-6'
            />
            <p className='text-sm'>Twitter</p>
          </Link>
        </div>
        <div className='mb-0 border-t-2 border-grey bg-black text-left text-[25.5vw] font-extrabold leading-none  sm:text-center sm:text-[14.5vw]'>
          AERIUS LABS
        </div>
      </div>
    </section>
  );
}

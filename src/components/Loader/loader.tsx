import Image from 'next/image';

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <div className='fixed z-[15] flex h-screen w-full flex-col items-center justify-center gap-8 bg-black text-white'>
      <Image
        src='/images/aeriusLogo2.png'
        alt='loader'
        width={100}
        height={100}
      />
      <div className='relative h-[2px] w-[25%] overflow-hidden'>
        <div
          className='absolute left-0 top-0 h-full bg-gradient-to-r from-gray-600 via-white/50 to-white transition-all ease-in'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

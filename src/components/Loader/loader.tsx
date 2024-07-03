import Image from 'next/image';

export default function Loader() {
  return (
    <div className='fixed z-[15] flex h-screen w-full flex-col items-center justify-center gap-8 bg-black text-white'>
      <Image
        src='/images/aeriusLogo2.png'
        alt='loader'
        width={100}
        height={100}
      />
      <div className='relative h-[2px] w-[25%] overflow-hidden'>
        <div className='absolute left-0 top-0 h-full w-full animate-grow bg-gradient-to-r from-gray-500 to-white'></div>
      </div>
    </div>
  );
}

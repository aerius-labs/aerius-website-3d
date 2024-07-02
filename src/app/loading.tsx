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
      <div className='w-[20%] overflow-hidden'>
        <div className='loader-bar h-[3px] w-full bg-white'></div>
      </div>
    </div>
  );
}

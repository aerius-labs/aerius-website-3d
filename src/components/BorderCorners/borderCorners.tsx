import React from 'react';

export default function BorderCorners() {
  return (
    <div className='flex h-full w-full flex-col justify-between gap-20 p-5 sm:p-6'>
      <div className='flex h-full animate-topAway flex-row gap-20'>
        <div className='h-4 w-4 border-l-2 border-t-2 border-grey sm:h-6 sm:w-6'></div>
        <div className='h-4 w-4 border-r-2 border-t-2 border-grey sm:h-6 sm:w-6'></div>
      </div>
      <div className='flex h-full animate-bottomAway flex-row gap-20'>
        <div className='h-4 w-4 border-b-2 border-l-2 border-grey sm:h-6 sm:w-6'></div>
        <div className='h-4 w-4 border-b-2 border-r-2 border-grey sm:h-6 sm:w-6'></div>
      </div>
    </div>
  );
}

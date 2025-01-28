import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    publishDate: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'sticky z-10 grid h-full grid-cols-1 flex-col items-center justify-center gap-6 bg-black py-10 md:grid-cols-2 md:gap-0 lg:h-[550px] lg:grid-cols-4 lg:gap-0 xl:gap-0',
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={idx} className='relative flex flex-col items-center'>
          <Link
            href={item?.link}
            key={item?.link + idx}
            className='group relative block min-h-[460px] w-full px-2'
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute -inset-y-1.5 inset-x-0 block h-full w-full bg-neutral-200 dark:bg-gray-900'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card image={item.image} publishDate={item.publishDate}>
              <CardTitle className='text-2xl'>{item.title}</CardTitle>
              <CardDescription className='text-lg'>
                {item.description}
              </CardDescription>
            </Card>
          </Link>
          <div className='hidden min-h-[250px] w-[2px] bg-white/50 text-center lg:block'></div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  image,
  publishDate,
  children,
}: {
  className?: string;
  image?: {
    src: string;
    alt: string;
  };
  publishDate?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.4]',
        className
      )}
    >
      {image && (
        <div className='relative h-48 w-full'>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className='object-cover'
          />
        </div>
      )}
      <div className='relative z-50'>
        <div className='p-4'>
          {children}
          <div className='mt-auto flex items-center justify-between border-t border-zinc-800 pt-4'>
            <span className='text-sm text-zinc-400'>{publishDate}</span>
            <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white p-3 transition-all duration-300 group-hover:bg-white'>
              <span className='text-white transition-all duration-300 group-hover:-rotate-45 group-hover:text-black'>
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-2 text-sm leading-relaxed tracking-wide text-zinc-400',
        className
      )}
    >
      {children}
    </p>
  );
};

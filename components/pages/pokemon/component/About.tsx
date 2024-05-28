// components/PokemonCard.tsx
"use client"

import React from 'react';
import { usePokemon } from '@/utils/hooks/pokemon';
import clsx from 'clsx';
import { Skeleton } from '@nextui-org/skeleton';

interface Props {
  key?: React.Key;
  className?: string;
  id: string;
  carts?: any[];
}

const AboutPokemon: React.FC<Props> = ({ id, carts, className, ...props }) => {
  const { data, error, isLoading } = usePokemon(id);


  if (isLoading) return (
    <div {...props} className={clsx("w-full flex flex-col gap-2", className)}>
      <Skeleton className="w-36 rounded-lg">
        <div className="size-6 rounded-lg bg-gray-300">loading...</div>
      </Skeleton>

      <div className="w-full flex gap-2 items-center">
        <Skeleton className="w-20 rounded-lg">
          <div className="h-8 rounded-lg bg-gray-200">
            loading...
          </div>
        </Skeleton>
        <Skeleton className="w-20 rounded-lg">
          <div className="h-8 rounded-lg bg-gray-200">loading...</div>
        </Skeleton>
      </div>
    </div>
  );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      {...props}
      className={clsx(
        "w-full flex flex-col gap-2",
        className
      )}
    >

      <h1 className="text-base sm:text-lg font-extrabold">Physical</h1>

      <div className="w-full flex flex-col gap-1 items-start text-sm">
        <div className='w-full flex items-center justify-between'>
          <div>Weight :</div>
          <div className='font-bold'>{data?.weight}</div>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div>Height :</div>
          <div className='font-bold'>{data?.height}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPokemon;

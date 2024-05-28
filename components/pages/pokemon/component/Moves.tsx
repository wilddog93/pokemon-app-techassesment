// components/PokemonCard.tsx
"use client"

import React from 'react';
import { usePokemon } from '@/utils/hooks/pokemon';
import clsx from 'clsx';
import { Skeleton } from '@nextui-org/skeleton';
import { Progress } from "@nextui-org/progress";
import { Chip } from '@nextui-org/chip';

interface Props {
  key?: React.Key;
  className?: string;
  id: string;
  carts?: any[];
}

const MovesPokemon: React.FC<Props> = ({ id, carts, className, ...props }) => {
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
  if (!data) return null;

  return (
    <div
      {...props}
      className={clsx(
        "w-full flex flex-col gap-2",
        className
      )}
    >

      {/* <h1 className="text-base sm:text-lg font-extrabold">Moves</h1> */}

      <div className="flex flex-wrap gap-2 items-center">
        {data?.moves?.length > 0 &&
          data?.moves?.map((move: any, idx: number) => {
            return (
              <Chip
                key={idx}
                classNames={{
                  base: "bg-[#6FB9F5] text-white h-9",
                  content: "font-bold text-md sm:text-base"
                }}
                radius="sm"
              >
                {move?.move?.name}
              </Chip>
            )
          })
        }
      </div>
    </div>
  );
};

export default MovesPokemon;

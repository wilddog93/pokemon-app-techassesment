// components/PokemonCard.tsx

import React, { useMemo } from 'react';
import { usePokemon } from '@/utils/hooks/pokemon';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Card } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';

interface Props {
  key?: React.Key;
  id: string;
  carts: any[];
}

const PokemonCard: React.FC<Props> = ({ id, carts, ...props }) => {
  const { data, error, isLoading } = usePokemon(id);

  const totalPokemon: number = useMemo(() => {
    let filter = carts?.length > 0 ? carts.filter((pokemon) => pokemon?.name === id) : [];
    return filter?.length || 0;
  }, [carts])

  if (isLoading) return (
    <div className="flex items-center gap-2 p-2 rounded-2xl bg-white text-default-600">
      <Skeleton className="rounded-lg">
        <div className="size-16 rounded-lg bg-gray-300">loading...</div>
      </Skeleton>
      <div className="w-full flex flex-col gap-1">
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-gray-200">
            loading...
          </div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-gray-200">loading...</div>
        </Skeleton>
      </div>
    </div>
  );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <Link
      {...props}
      className={clsx(
        "flex items-center gap-2 p-1 rounded-2xl bg-white text-default-600 hover:cursor-pointer overflow-hidden"
      )}
      href={`/pokemon/${id}`}
    >
      <img src={data.sprites.front_default} alt={data.name} />
      <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-2xl'>{data.name}</h1>
        <p className='text-xs flex items-center gap-2'>
          <span>Owned :</span>
          <span>{totalPokemon}</span>
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;

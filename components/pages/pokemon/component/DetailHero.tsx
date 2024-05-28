// components/PokemonCard.tsx
"use client"

import React, { Fragment, useEffect, useState } from 'react';
import { usePokemon } from '@/utils/hooks/pokemon';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Card } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
import { Chip } from '@nextui-org/chip';
import { Header } from './Header';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Input } from '@nextui-org/input';
import { FormPokemon, FormValues } from './FormPokemon';

interface Props {
  key?: React.Key;
  className?: string;
  id: string;
  carts?: any[];
}

const DetailHero: React.FC<Props> = ({ id, carts, className, ...props }) => {
  const { data, error, isLoading } = usePokemon(id);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setformData] = useState<FormValues>({})

  useEffect(() => {
    if(data) {
      setformData({
        id: new Date().getMilliseconds().toString(),
        name: data?.name,
        image: data?.sprites?.front_default,
        nickname: null,
      })
    }
  }, [data])


  if (isLoading) return (
    <div {...props} className={clsx("w-full flex flex-col gap-2", className)}>
      <div className='w-full flex items-center justify-between'>
        <Skeleton className="rounded-lg">
          <div className="size-12 rounded-lg bg-gray-300">loading...</div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="size-12 rounded-lg bg-gray-300">loading...</div>
        </Skeleton>
      </div>

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

      <div className="w-full flex gap-2 items-center justify-center">
        <Skeleton className="w-1/5 rounded-lg">
          <div className="size-36 rounded-lg bg-gray-300">loading...</div>
        </Skeleton>
        <Skeleton className="w-1/5 rounded-lg">
          <div className="size-36 rounded-lg bg-gray-300">loading...</div>
        </Skeleton>
      </div>

      <Skeleton
        className='max-w-max mx-auto rounded-lg h-12'
      >
        Catch the pokemon
      </Skeleton>
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
      <Header />

      <h1 className="text-xl sm:text-3xl font-extrabold">{data?.name || ""}</h1>

      <div className="flex gap-2 items-center">
        {data?.types?.length > 0 &&
          data?.types?.map((type: any, idx: number) => {
            return (
              <Chip
                key={idx}
                classNames={{
                  base: "bg-[#70CCB7] text-white h-9",
                  content: "font-bold text-md sm:text-base"
                }}
                radius="sm"
              >
                {type?.type?.name}
              </Chip>
            )
          })
        }
      </div>

      <div className={clsx("w-full flex justify-center", !data ? "hidden" : "")}>
        <img className='object-cover object-center h-36' src={data.sprites.front_default} alt={data.name} />
        <img className='object-cover object-center h-36' src={data.sprites.back_default} alt={data.name} />
      </div>

      <Button
        variant='solid'
        color='primary'
        className='max-w-max mx-auto'
        onPress={onOpen}
      >
        Catch the pokemon
      </Button>

      {/* modal-form */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {(onClose) => (<FormPokemon items={formData} onClose={onClose} />)}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DetailHero;

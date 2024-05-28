"use client"

import { usePokemon, usePokemons } from "@/utils/hooks/pokemon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { SlotsToClasses } from "@nextui-org/theme";
import { FC, Fragment, useEffect, useMemo, useState } from "react"
import { MdSearch } from "react-icons/md";
import { useDebounce } from 'use-debounce';
import PokemonCard from "./pokemon/component/PokemonCard";
import { FormValues } from "./pokemon/component/FormPokemon";
import { Spinner } from "@nextui-org/spinner";
import clsx from "clsx";

type Props = {
  isOpen?: boolean | undefined;
  onOpenChange?: ((isOpen: boolean) => void) | undefined
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "xs" | "3xl" | "4xl" | "5xl" | undefined;
  placement?: "center" | "top-center" | "auto" | "top" | "bottom" | "bottom-center" | undefined;
  className?: string | undefined;
  classNames?: SlotsToClasses<"base" | "body" | "footer" | "header" | "backdrop" | "wrapper" | "closeButton"> | undefined
}

export const SearchComponent: FC<Props> = ({ isOpen, onOpenChange, size, placement, className, classNames }) => {


  const [name, setName] = useState<string>("");
  const [value] = useDebounce(name, 1000);
  const pokemons = usePokemons({ offset: 0, limit: 100 })
  const { data, error, isLoading } = usePokemon(value);

  const [pokemonCarts, setPokemonCarts] = useState<FormValues[]>([]);

  useEffect(() => {
    const storedValue = localStorage?.getItem('pokemon-cart');
    const storedPokemons = storedValue ? JSON.parse(storedValue) : []
    setPokemonCarts(storedPokemons);
  }, []);

  return (
    <Modal
      size={size}
      placement={placement}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={className}
      classNames={classNames}
      scrollBehavior="inside"
    >
      <ModalContent className="py-0">
        {(onClose) => (
          <Fragment>
            <ModalHeader className="flex flex-col gap-1 sm:text-2xl font-bold">What Pokemon are you looking for?.</ModalHeader>
            <ModalBody>
              <div className="w-full flex flex-col gap-4 sticky z-10 top-0 bg-white pb-4">
                <Input
                  isClearable
                  size="lg"
                  radius="full"
                  variant="bordered"
                  color="primary"
                  type="text"
                  placeholder="Search..."
                  labelPlacement="inside"
                  classNames={{
                    inputWrapper: "shadow-none",
                    input: "text-sm",
                  }}
                  onClear={() => setName("")}
                  startContent={
                    <MdSearch className="size-5 text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  autoFocus
                />
                <h1 className={clsx(
                  "text-default-400 font-bold text-lg",
                  data?.name || isLoading || error ? "" : "hidden"
                )}>Search :</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data?.name &&
                    <PokemonCard
                      id={data?.name}
                      carts={pokemonCarts}
                      className="border"
                    />
                  }
                  {error && <div className="text-xs text-default-400">Not found!</div>}
                  {isLoading && <div className="flex items-center gap-2 text-xs text-default-400">
                    <span>loading...</span>
                    <Spinner size="sm" color="primary" />
                  </div>}
                </div>

                <h1 className="text-default-400 font-bold text-lg">Pokemon</h1>
              </div>

              <div className="w-full h-full max-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pokemons?.data?.length > 0 &&
                  pokemons?.data?.map((pokemon: any, index: number) => {
                    return (
                      <PokemonCard key={index} id={pokemon?.name} carts={pokemonCarts} className="border" />
                    )
                  })
                }
              </div>
            </ModalBody>
            <ModalFooter>
              <Button type="button" color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </Fragment>
        )}
      </ModalContent>
    </Modal>
  )
}
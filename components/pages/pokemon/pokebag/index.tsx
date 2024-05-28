"use client"

import { useEffect, useState } from "react";
import { FormValues } from "../component/FormPokemon";
import { Header } from "../../Header";
import PokemonCard from "../component/PokemonCard";
import { Button } from "@nextui-org/button";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "@nextui-org/tooltip";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

type QueryTypes = {
  limit: number;
  offset: number;
}

export default function PokemonBagPage() {
  let router = useRouter();
  const [pokemonCarts, setPokemonCarts] = useState<FormValues[]>([]);

  useEffect(() => {
    const storedValue = localStorage?.getItem('pokemon-cart');
    const storedPokemons = storedValue ? JSON.parse(storedValue) : []
    setPokemonCarts(storedPokemons);
  }, []);

  const handleClearStorage = () => {
    // console.log("hit clear")
    localStorage?.removeItem("pokemon-cart")
    router.back()
  }

  return (
    <main className="container mx-auto max-w-full px-8 flex-grow">
      <section className="w-full flex flex-col gap-6 py-8 tracking-wider">
        <Header />

        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-extrabold">Poke Bag</h1>
          <Tooltip 
            content="Clear pokebag"
            placement="left"
          >
            <Button
              isIconOnly
              variant="bordered"
              className={clsx(pokemonCarts?.length == 0 ? "hidden" : "")}
              onClick={handleClearStorage}
            >
              <MdDelete className="size-5 text-inherit" />
            </Button>
          </Tooltip>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {pokemonCarts?.length > 0 &&
            pokemonCarts?.map((pokemon: any, index: number) => {
              return (
                <PokemonCard key={index} id={pokemon?.name} carts={pokemonCarts} isCart index={index + 1} />
              )
            })
          }
        </div>
      </section>
    </main>
  );
}

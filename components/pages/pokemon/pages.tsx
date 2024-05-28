"use client"

import { MdArrowBack } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { button as buttonStyle } from "@nextui-org/theme"
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { FooterPage } from "../footer";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import PokemonCard from "./component/PokemonCard";
import { useEffect, useMemo, useState } from "react";

const options = [
  {
    label: "Pokemon",
    url: "/pokemon",
    color: "bg-[#70CCB7]"
  },
  {
    label: "Moves",
    url: "/moves",
    color: "bg-[#ED8775]"
  },
  {
    label: "Abilities",
    url: "/abilities",
    color: "bg-[#6FB8F5]"
  },
  {
    label: "Genders",
    url: "/genders",
    color: "bg-[#FCD55E]"
  },
  {
    label: "Location",
    url: "/location",
    color: "bg-[#85629A]"
  },
  {
    label: "Types",
    url: "/types",
    color: "bg-[#B57F75]"
  }
]

export default function PokemonPage() {
  const router = useRouter();

  const [pokemonCarts, setPokemonCarts] = useState<any[]>([]);

    useEffect(() => {
        // This code runs only in the browser
        const storedValue = localStorage?.getItem('pokemon-cart');
        const storedPokemons = storedValue ? JSON.parse(storedValue) : []
        setPokemonCarts(storedPokemons);
    }, []);

  return (
    <main className="container mx-auto max-w-full px-8 flex-grow">
      <section className="w-full flex flex-col gap-6 py-8 tracking-wider">
        <div className="flex items-center justify-between gap-6">
          <Button 
            isIconOnly 
            variant="light"
            className=""
            onClick={() => router.back()}
          >
            <MdArrowBack className="size-6 text-inherit" />
          </Button>

          <Button 
            isIconOnly 
            variant="light"
            className=""
          >
            <FaServer className="size-6 text-inherit rotate-180" />
          </Button>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold">Pokemon</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <PokemonCard id="1" carts={pokemonCarts} />
          <PokemonCard id="2" carts={pokemonCarts} />
          <PokemonCard id="3" carts={pokemonCarts} />
          <PokemonCard id="4" carts={pokemonCarts} />
          <PokemonCard id="5" carts={pokemonCarts} />
        </div>
      </section>
    </main>
  );
}

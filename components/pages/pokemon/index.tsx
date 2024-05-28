"use client"

import { MdArrowBack } from "react-icons/md";
import { FaCircleNotch, FaServer } from "react-icons/fa";
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
import { usePokemons } from "@/utils/hooks/pokemon";

import { Spinner } from "@nextui-org/spinner";
import { Header } from "../Header";
import { FormValues } from "./component/FormPokemon";

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

type QueryTypes = {
  limit: number;
  offset: number;
}

type PokemonProps = {
  data: any[];
  error: boolean;
  isLoading: boolean;
}

export default function PokemonPage() {
  const router = useRouter();
  const [query, setQuery] = useState<QueryTypes>({
    limit: 100,
    offset: 10
  })

  const { data, error, isLoading } = usePokemons(query);

  const [pokemonCarts, setPokemonCarts] = useState<FormValues[]>([]);

  useEffect(() => {
    const storedValue = localStorage?.getItem('pokemon-cart');
    const storedPokemons = storedValue ? JSON.parse(storedValue) : []
    setPokemonCarts(storedPokemons);
  }, []);



  return (
    <main className="container mx-auto max-w-full px-8 flex-grow">
      <section className="w-full flex flex-col gap-6 py-8 tracking-wider">
        <Header />

        <h1 className="text-2xl sm:text-4xl font-extrabold">Pokemon</h1>

        <div className={clsx(
          "flex items-center justify-center gap-1 text-lg font-bold text-center",
          isLoading ? "" : "hidden"
          )}>
          <Spinner size="lg" label="loading..." />
        </div>

        <div className={clsx(
          "flex items-center justify-center gap-1 text-lg font-bold text-center",
          error ? "" : "hidden"
          )}>
          Pokemon not found!
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.length > 0 &&
            data?.map((pokemon: any, index: number) => {
              return (
                <PokemonCard key={index} id={pokemon?.name} carts={pokemonCarts} />
              )
            })
          }
        </div>
      </section>
    </main>
  );
}

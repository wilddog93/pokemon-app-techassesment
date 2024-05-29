"use client"

import AboutPokemon from "../component/About";
// component
import DetailHero from "../component/DetailHero";
import { Tab, Tabs } from "@nextui-org/tabs";
import StatsPokemon from "../component/Stats";
import MovesPokemon from "../component/Moves";
import AbilitiesPokemon from "../component/Abilities";

type Props = {
  params: {
    detail: string;
  },
  searchParams?: string
}

export default function PokemonDetailPage({ params }: Props) {
  return (
    <main className="container mx-auto max-w-full flex-grow">
      <DetailHero
        className="w-full flex flex-col gap-6 p-8 tracking-wider"
        id={params.detail}
      />

      <div className="w-full h-full min-h-[350px] max-h-[400px] overflow-x-hidden overflow-auto bg-white flex flex-col gap-6 px-8 tracking-wider rounded-t-[2rem] shadow-sm">
        <Tabs
          variant="underlined"
          aria-label="tab-pokemon"
          classNames={{
            base: "sticky z-10 top-0 bg-white",
            panel: "h-full",
            tabList: "gap-6 w-full flex justify-between relative rounded-none p-0 border-divider py-4",
            cursor: "w-full h-1 rounded-lg",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:font-bold"
          }}
        >
          <Tab key="about" title="About" className="text-base sm:text-lg tracking-wider">
            <AboutPokemon id={params.detail} />
          </Tab>
          <Tab key="base_stat" title="Base Stats" className="text-base sm:text-lg tracking-wider">
            <StatsPokemon id={params.detail} />
          </Tab>
          <Tab key="moves" title="Moves" className="text-base sm:text-lg tracking-wider">
            <MovesPokemon id={params.detail} />
          </Tab>
          <Tab key="abilities" title="Abilities" className="text-base sm:text-lg tracking-wider">
            <AbilitiesPokemon id={params.detail} />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
}

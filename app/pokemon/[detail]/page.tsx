
import PokemonPage from "@/components/pages/pokemon";
import PokemonDetailPage from "@/components/pages/pokemon/detail";

interface Props {
  params: {
    detail: string
  },
  searchParams: any
}

export default function Detail({ params }: Props) {

  return (
    <div className="relative h-full overflow-x-hidden overflow-auto">
      <PokemonDetailPage params={params} />
    </div>
  );
}

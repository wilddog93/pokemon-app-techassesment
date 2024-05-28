import { useQuery } from '@tanstack/react-query';
import { getPokemon, getPokemons } from '@/utils/services/pokemon';
import { queryParams } from '../types';

export const usePokemons  = ({ limit, offset }: queryParams | any) => {
  return useQuery({
    queryKey: ["pokemon", {
      "limit": limit,
      "offset": offset
    }],
    queryFn: () => getPokemons({ params: { limit, offset } }),
  })
};

export const usePokemon = (nameOrId: string) => {
  return useQuery({
    queryKey: ['pokemon', nameOrId],
    queryFn: () => getPokemon(nameOrId),
    enabled: !!nameOrId
  })
};

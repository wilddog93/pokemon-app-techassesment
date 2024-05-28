// hooks/usePokemon.ts

import { useQuery } from '@tanstack/react-query';
import { getPokemon, getPokemons } from '@/utils/services/pokemon';

type queryParams = {
  limit: number;
  offset: number;
}

export const usePokemons  = ({ limit, offset }: queryParams) => {
  return useQuery({
    queryKey: [{
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
  })
};

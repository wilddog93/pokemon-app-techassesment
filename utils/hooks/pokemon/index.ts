// hooks/usePokemon.ts

import { useQuery } from '@tanstack/react-query';
import { getPokemon, getPokemons } from '@/utils/services/pokemon';

export const usePokemons = (params: any) => {
  return useQuery({
    //      ^? const data: string | undefined
    queryKey: ['pokemon', params],
    queryFn: () => getPokemons(),
  })
};

export const usePokemon = (nameOrId: string) => {
  return useQuery({
    //      ^? const data: string | undefined
    queryKey: ['pokemon', nameOrId],
    queryFn: () => getPokemon(nameOrId),
  })
};

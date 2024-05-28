import { useQuery } from '@tanstack/react-query';
import { getPokemon, getPokemons } from '@/utils/services/pokemon';
import { queryParams } from '../types';

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

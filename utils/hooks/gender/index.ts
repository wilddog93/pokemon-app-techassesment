import { useQuery } from '@tanstack/react-query';
import { queryParams } from '../types';
import { getGenders } from '@/utils/services/gender';

export const useGenders  = ({ limit, offset }: queryParams) => {
  return useQuery({
    queryKey: [{
      "limit": limit,
      "offset": offset
    }],
    queryFn: () => getGenders({ params: { limit, offset } }),
  })
};

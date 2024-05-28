import { getAbilities } from '@/utils/services/ability';
import { useQuery } from '@tanstack/react-query';
import { queryParams } from '../types';

export const useAbilities  = ({ limit, offset }: queryParams) => {
  return useQuery({
    queryKey: [{
      "limit": limit,
      "offset": offset
    }],
    queryFn: () => getAbilities({ params: { limit, offset } }),
  })
};

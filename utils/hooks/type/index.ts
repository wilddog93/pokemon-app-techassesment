import { useQuery } from '@tanstack/react-query';
import { queryParams } from '../types';
import { getTypes } from '@/utils/services/type';

export const useTypes  = ({ limit, offset }: queryParams) => {
  return useQuery({
    queryKey: [{
      "limit": limit,
      "offset": offset
    }],
    queryFn: () => getTypes({ params: { limit, offset } }),
  })
};

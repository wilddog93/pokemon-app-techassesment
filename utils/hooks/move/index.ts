import { getMoves } from '@/utils/services/move';
import { useQuery } from '@tanstack/react-query';
import { queryParams } from '../types';

export const useMoves  = ({ limit, offset }: queryParams) => {
  return useQuery({
    queryKey: [{
      "limit": limit,
      "offset": offset
    }],
    queryFn: () => getMoves({ params: { limit, offset } }),
  })
};

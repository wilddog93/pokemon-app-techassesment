import { getLocations } from '@/utils/services/location';
import { useQuery } from '@tanstack/react-query';
import { queryParams } from '../types';

export const useLocations  = ({ limit, offset }: queryParams) => {
  return useQuery({
    queryKey: [{
      "limit": limit,
      "offset": offset
    }],
    queryFn: () => getLocations({ params: { limit, offset } }),
  })
};

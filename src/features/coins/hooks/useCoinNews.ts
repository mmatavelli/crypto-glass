import { useQuery } from 'react-query';

import { findNewsByCoinIdRequest } from '../requests/findNewsByCoinIdRequest';

const findNewsByCoinId = async (coinId: string) => {
  const result = await findNewsByCoinIdRequest(coinId);

  return result.news.slice(0, 10).map(news => ({
    ...news,
    formattedCreatedAt: new Date(news.created_at).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  }));
};

export const useCoinNews = (coinId: string) => {
  return useQuery(['coinNews', coinId], () => findNewsByCoinId(coinId), {
    staleTime: 1000 * 5,
  });
};

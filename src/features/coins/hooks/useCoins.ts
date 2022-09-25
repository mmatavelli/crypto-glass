import { useInfiniteQuery } from 'react-query';

import { formatUsd } from '../../../shared/currency/formatCurrency';
import { listCoinRequest } from '../requests/listCoinRequest';
import { ListCoinRequest } from '../types';

const listCoins = async ({
  ids,
  page = 1,
  per_page,
  vs_currency,
  price_change_percentage,
}: ListCoinRequest) => {
  const result = await listCoinRequest({
    ids,
    page,
    per_page,
    vs_currency,
    price_change_percentage,
  });

  return {
    coins: result.map(coin => ({
      ...coin,
      formattedCurrentPrice: formatUsd(coin.current_price),
      formattedPriceChangePercentage24: `${coin.price_change_percentage_24h.toFixed(
        2,
      )}%`,
    })),
    nextPage: page + 1,
  };
};

export const useCoins = (params: ListCoinRequest) => {
  return useInfiniteQuery(
    ['coins', params],
    ({ pageParam }) =>
      listCoins({
        ...params,
        page: pageParam,
      }),

    {
      staleTime: 1000 * 5,
      getNextPageParam: lastPage => {
        return lastPage.nextPage + 1;
      },
    },
  );
};

import { useQuery } from 'react-query';

import { listOhlcByCoinIdRequest } from '../requests/listOhlcByCoinId';

const findCoinChartDataById = async (coinId: string, days: number) => {
  const result = await listOhlcByCoinIdRequest(coinId, days);

  return result;
};

export const useCoinChartData = (coinId: string, days = 1) => {
  return useQuery(
    ['coinChartData', { coinId, days }],
    () => findCoinChartDataById(coinId, days),
    {
      keepPreviousData: true,
    },
  );
};

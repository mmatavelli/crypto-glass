import { coinGeckoApi } from '../../../services/coinGeckoApi';
import { FindCoinByIdResponse } from '../types';

export async function findCoinByIdRequest(
  coinId: string,
): Promise<FindCoinByIdResponse> {
  const response = await coinGeckoApi.get<FindCoinByIdResponse>(
    `/coins/${coinId}`,
    {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    },
  );

  return response.data;
}

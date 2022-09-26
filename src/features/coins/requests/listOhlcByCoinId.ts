import { coinGeckoApi } from '../../../services/coinGeckoApi';
import { ListOhlcByCoinIdResponse } from '../types';

export async function listOhlcByCoinIdRequest(
  coinId: string,
  days = 1,
): Promise<ListOhlcByCoinIdResponse> {
  const response = await coinGeckoApi.get<ListOhlcByCoinIdResponse>(
    `/coins/${coinId}/ohlc`,
    {
      params: {
        vs_currency: 'usd',
        days,
      },
    },
  );

  return response.data;
}

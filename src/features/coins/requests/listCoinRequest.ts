import { coinGeckoApi } from '../../../services/coinGeckoApi';
import { ListCoinRequest, ListCoinResponse } from '../types';

export async function listCoinRequest({
  ids,
  page,
  per_page,
  vs_currency = 'usd',
  price_change_percentage,
}: ListCoinRequest): Promise<ListCoinResponse> {
  const response = await coinGeckoApi.get<ListCoinResponse>('/coins/markets', {
    params: {
      ids: ids?.join(','),
      page,
      per_page,
      vs_currency,
      price_change_percentage,
    },
  });

  return response.data;
}

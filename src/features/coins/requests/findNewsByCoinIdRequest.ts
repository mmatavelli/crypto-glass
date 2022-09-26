import { cryptoNewsApi } from '../../../services/cryptoNewsApi';
import { FindNewsByCoinIdResponse } from '../types';

export async function findNewsByCoinIdRequest(
  coinId: string,
): Promise<FindNewsByCoinIdResponse> {
  const response = await cryptoNewsApi.get<FindNewsByCoinIdResponse>(
    `/news/${coinId}`,
  );

  return response.data;
}

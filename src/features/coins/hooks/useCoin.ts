import { useQuery } from 'react-query';

import { formatUsd } from '../../../shared/currency/formatCurrency';
import { findCoinByIdRequest } from '../requests/findCoinByIdRequest';

const findCoinById = async (coinId: string) => {
  const result = await findCoinByIdRequest(coinId);

  return {
    ...result,
    image: result.image.large,
    formattedCurrentPrice: formatUsd(result.market_data.current_price.usd),
    formattedPriceChangePercentage24: `${result.market_data.price_change_percentage_24h.toFixed(
      2,
    )}%`,
  };
};

export const useCoin = (coinId: string) => {
  return useQuery(['coins', coinId], () => findCoinById(coinId), {
    staleTime: 1000 * 5,
  });
};

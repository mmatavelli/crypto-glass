export type Roi = {
  times: number;
  currency: string;
  percentage: number;
};

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: any;
  market_cap_rank: number;
  fully_diluted_valuation?: number;
  total_volume: any;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply?: number;
  max_supply?: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  roi: Roi;
  last_updated: Date;
  price_change_percentage_1h_in_currency: number;
};

export type ListCoinRequest = {
  price_change_percentage?: '1h' | '24h' | '7d' | '30d' | '200d' | '1y';
  ids?: string[];
  search?: string;
  page?: number;
  per_page?: number;
  vs_currency?: string;
};

export type ListCoinResponse = Coin[];

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
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

export type FindCoinByIdResponse = Omit<Coin, 'image'> & {
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
};

export type ListOhlcByCoinIdResponse = [
  number,
  number,
  number,
  number,
  number,
][];

export type CoinNew = {
  title: string;
  keywords: string;
  url: string;
  source_name: string;
  source_url: string;
  created_at: string;
};

export type FindNewsByCoinIdResponse = {
  news: CoinNew[];
};

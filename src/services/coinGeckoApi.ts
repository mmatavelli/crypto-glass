import axios from 'axios';
import Config from 'react-native-config';

export const coinGeckoApi = axios.create({
  baseURL: Config.COINGECKO_API_URL,
});

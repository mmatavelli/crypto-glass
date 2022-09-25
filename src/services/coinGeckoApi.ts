import axios from 'axios';
import Config from 'react-native-config';

export const coinGeckoApi = axios.create({
  baseURL: Config.COINGECKO_API_URL,
  headers: {
    'X-RapidAPI-Key': Config.RAPID_API_KEY,
    'X-RapidAPI-Host': Config.RAPID_API_HOST,
  },
});

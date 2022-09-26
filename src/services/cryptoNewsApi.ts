import axios from 'axios';
import Config from 'react-native-config';

export const cryptoNewsApi = axios.create({
  baseURL: 'https://crypto-news-today.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': Config.RAPIDAP_KEY,
    'X-RapidAPI-Host': 'crypto-news-today.p.rapidapi.com',
  },
});

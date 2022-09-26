import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { useTheme } from 'styled-components/native';

import { Divider } from '../../../../components/Divider';
import { Tabs } from '../../../../components/Tabs';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { ApplicationStackParamsList } from '../../../../types/navigation';
import { CoinItem } from '../../components/CoinItem';
import { CoinNewsItem } from '../../components/NewsItem';
import { useCoin } from '../../hooks/useCoin';
import { useCoinChartData } from '../../hooks/useCoinChartData';
import { useCoinNews } from '../../hooks/useCoinNews';
import {
  addCoinToWatchList,
  removeCoinFromWatchList,
} from '../../store/slices/watchListSlice';
import { Container, Row, WatchListButton } from './styles';

const RANGES = [
  {
    value: 1,
    label: '1D',
  },
  {
    value: 7,
    label: '7D',
  },
  {
    value: 30,
    label: '1M',
  },
  {
    value: 365,
    label: '1Y',
  },
];

export function CoinDetails() {
  const {
    params: { coinId },
  } = useRoute<RouteProp<ApplicationStackParamsList, 'CoinDetails'>>();

  const { width } = useWindowDimensions();

  const { bottom } = useSafeAreaInsets();

  const { spacing, colors, palette } = useTheme();

  const { coinsIds } = useAppSelector(state => state.watchList);

  const coinIsOnWatchList = coinsIds.includes(coinId);

  const dispatch = useAppDispatch();

  const [selectedRange, setSelectedRange] = useState(1);

  const { data: coin, isLoading: isCoinLoading } = useCoin(coinId);

  const { data: coinChartData, isLoading: isCoinChartDataLoading } =
    useCoinChartData(coinId, selectedRange);

  const { data: coinNews, isLoading: isCoinNewsLoading } = useCoinNews(coinId);

  const chartWidth = width - spacing[3] * 2;

  function handleWatchListButtonPress() {
    if (coinsIds.includes(coinId)) {
      dispatch(removeCoinFromWatchList(coinId));
    } else {
      dispatch(addCoinToWatchList(coinId));
    }
  }

  if (isCoinLoading || !coin || isCoinChartDataLoading || !coinChartData) {
    return null;
  }

  return (
    <Container
      contentContainerStyle={{
        paddingTop: spacing[4],
        paddingBottom: bottom + spacing[2],
        paddingHorizontal: spacing[3],
      }}
    >
      <Row>
        <Tabs tabs={RANGES} value={selectedRange} onChange={setSelectedRange} />
        <WatchListButton onPress={handleWatchListButtonPress}>
          <Feather
            name="star"
            size={28}
            color={coinIsOnWatchList ? palette.warning : palette.text}
          />
        </WatchListButton>
      </Row>
      <CandlestickChart.Provider
        data={coinChartData.map(([timestamp, open, high, low, close]) => ({
          timestamp,
          open,
          high,
          low,
          close,
        }))}
      >
        <CandlestickChart
          height={width / 2}
          width={chartWidth}
          style={{
            borderWidth: 1,
            borderColor: colors.grey[200],
            borderRadius: spacing[1],
            marginBottom: spacing[4],
          }}
        >
          <CandlestickChart.Candles
            positiveColor={palette.positive}
            negativeColor={palette.negative}
          />
          <CandlestickChart.Crosshair>
            <CandlestickChart.Tooltip />
          </CandlestickChart.Crosshair>
        </CandlestickChart>
      </CandlestickChart.Provider>
      <CoinItem coin={coin} />
      <Divider />
      <Tabs
        tabs={[
          {
            value: 1,
            label: 'News',
          },
          {
            value: 2,
            label: 'About',
          },
        ]}
        value={1}
        onChange={() => {}}
        style={{ marginVertical: spacing[4] }}
      />
      {coinNews?.map(news => (
        <CoinNewsItem key={news.title} data={news} />
      ))}
    </Container>
  );
}

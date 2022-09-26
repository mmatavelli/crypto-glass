import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { Tabs } from '../../../../components/Tabs';
import { Typography } from '../../../../components/Typography';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { CoinItem } from '../../components/CoinItem';
import { CoinListPlaceholder } from '../../components/CoinListPlaceholder';
import { useCoins } from '../../hooks/useCoins';
import { Container } from './styles';

const TABS = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'watchList',
    icon: 'star',
  },
];

export function CoinList() {
  const { spacing, palette } = useTheme();

  const { bottom } = useSafeAreaInsets();

  const [tabValue, setTabValue] = useState('all');

  const coinsIds = useAppSelector(state => {
    if (state.watchList.coinsIds.length === 0) {
      return ['none'];
    }

    return state.watchList.coinsIds;
  });

  const {
    data,
    isLoading,
    isError,
    isRefetching,
    hasNextPage,
    refetch,
    fetchNextPage,
  } = useCoins({
    per_page: 10,
    price_change_percentage: '24h',
    ids: tabValue === 'watchList' ? coinsIds : undefined,
  });

  function handleFetchNextPage() {
    if (hasNextPage) {
      fetchNextPage();
    }
  }

  if (isLoading || isError) {
    return <CoinListPlaceholder />;
  }

  return (
    <Container>
      <FlatList
        keyExtractor={item => item.id}
        data={data?.pages.flatMap(page => page.coins)}
        renderItem={({ item }) => <CoinItem coin={item} />}
        onRefresh={refetch}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            tintColor={palette.primary}
          />
        }
        onEndReachedThreshold={0.1}
        onEndReached={handleFetchNextPage}
        ListHeaderComponentStyle={{
          marginBottom: spacing[4],
        }}
        contentContainerStyle={{
          paddingTop: spacing[4],
          paddingBottom: bottom + spacing[2],
          paddingHorizontal: spacing[3],
        }}
        ListHeaderComponent={
          <Tabs tabs={TABS} value={tabValue} onChange={setTabValue} />
        }
        ListEmptyComponent={
          <Typography variant="heading3" align="center">
            No coins found
          </Typography>
        }
      />
    </Container>
  );
}

import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { CoinListHeader } from '../../components/CoinListHeader';
import { CoinListItem } from '../../components/CoinListItem';
import { CoinListPlaceholder } from '../../components/CoinListPlaceholder';
import { useCoins } from '../../hooks/useCoins';
import { Container } from './styles';

export function CoinList() {
  const { spacing, palette } = useTheme();

  const { bottom } = useSafeAreaInsets();

  const [tabValue, setTabValue] = useState('all');

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
    price_change_percentage: '1h',
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
        renderItem={({ item }) => <CoinListItem coin={item} />}
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
          <CoinListHeader tabValue={tabValue} onTabChange={setTabValue} />
        }
      />
    </Container>
  );
}

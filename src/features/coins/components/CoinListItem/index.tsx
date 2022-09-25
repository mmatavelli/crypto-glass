import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Typography } from '../../../../components/Typography';
import { ApplicationScreenProp } from '../../../../types/navigation';
import { Coin } from '../../types';
import { CoinImage, CoinImageContainer, Container } from './styles';

type CoinListItemProps = {
  coin: Coin & {
    formattedCurrentPrice: string;
    formattedPriceChangePercentage1h: string;
  };
};

function CoinListItemComponent({ coin }: CoinListItemProps) {
  const { spacing } = useTheme();

  const { navigate } = useNavigation<ApplicationScreenProp<'CoinList'>>();

  const {
    name,
    symbol,
    image,
    formattedCurrentPrice,
    formattedPriceChangePercentage1h,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    price_change_percentage_1h_in_currency,
  } = coin;

  const color =
    price_change_percentage_1h_in_currency > 0 ? 'positive' : 'negative';

  function handleNavigateToCoinDetails() {
    navigate('CoinDetails', { coinId: coin.id, coinName: coin.name });
  }

  return (
    <Container onPress={handleNavigateToCoinDetails}>
      <CoinImageContainer>
        <CoinImage
          source={{
            uri: image,
          }}
          resizeMode="contain"
        />
      </CoinImageContainer>
      <View>
        <Typography style={{ marginBottom: spacing[1] }}>{name}</Typography>
        <Typography variant="body2" color="border">
          {symbol}
        </Typography>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Typography
          variant="button1"
          align="right"
          style={{ marginBottom: spacing[1] }}
        >
          {formattedCurrentPrice}
        </Typography>
        <Typography variant="body2" color={color} align="right">
          {formattedPriceChangePercentage1h}
        </Typography>
      </View>
    </Container>
  );
}

export const CoinListItem = memo(CoinListItemComponent, (prev, next) => {
  return prev.coin.id === next.coin.id;
});

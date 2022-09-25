import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Typography } from '../../../../components/Typography';
import { ApplicationScreenProp } from '../../../../types/navigation';
import { Coin } from '../../types';
import { CoinImage, CoinImageContainer, Container } from './styles';

type CoinItemProps = {
  coin: Coin & {
    formattedCurrentPrice: string;
    formattedPriceChangePercentage24: string;
  };
};

function CoinItemComponent({ coin }: CoinItemProps) {
  const { spacing } = useTheme();

  const { navigate } = useNavigation<ApplicationScreenProp<'CoinList'>>();

  const {
    name,
    symbol,
    image,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    price_change_percentage_24h,
    formattedCurrentPrice,
    formattedPriceChangePercentage24,
  } = coin;

  const color = price_change_percentage_24h > 0 ? 'positive' : 'negative';

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
          {formattedPriceChangePercentage24}
        </Typography>
      </View>
    </Container>
  );
}

export const CoinItem = memo(CoinItemComponent, (prev, next) => {
  return prev.coin.id === next.coin.id;
});

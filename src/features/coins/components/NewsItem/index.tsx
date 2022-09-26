import { Linking } from 'react-native';

import { Typography } from '../../../../components/Typography';
import { CoinNew } from '../../types';
import { Container, Footer, Title } from './styles';

export type CoinNewsProps = {
  data: CoinNew & { formattedCreatedAt: string };
};

export function CoinNewsItem({ data }: CoinNewsProps) {
  function handlePress() {
    Linking.openURL(data.url);
  }

  return (
    <Container onPress={handlePress}>
      <Title>{data.title}</Title>
      <Footer>
        <Typography variant="body2">{data.formattedCreatedAt}</Typography>
        <Typography variant="body2">{data.source_url}</Typography>
      </Footer>
    </Container>
  );
}

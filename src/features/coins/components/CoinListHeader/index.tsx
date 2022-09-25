import { cloneElement } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import { Typography } from '../../../../components/Typography';
import { Container, TabButton } from './styles';

const TAB_ITEMS = [
  {
    value: 'all',
    children: <Typography variant="button1">All</Typography>,
  },
  {
    value: 'favorites',
    children: <Feather name="star" size={24} />,
  },
];

type CoinListHeaderProps = {
  tabValue: string;
  onTabChange: (value: string) => void;
};

export function CoinListHeader({ tabValue, onTabChange }: CoinListHeaderProps) {
  const { colors } = useTheme();

  return (
    <Container>
      {TAB_ITEMS.map(item => {
        const isActive = tabValue === item.value;

        return (
          <TabButton
            key={item.value}
            onPress={() => {
              onTabChange(item.value);
            }}
            isActive={isActive}
          >
            {cloneElement(item.children, {
              color: isActive ? 'white' : colors.greekBlue[400],
            })}
          </TabButton>
        );
      })}
    </Container>
  );
}

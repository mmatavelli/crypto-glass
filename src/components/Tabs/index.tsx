import { StyleProp, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import { Typography } from '../Typography';
import { Container, TabButton } from './styles';

type CoinListHeaderProps<T> = {
  tabs: {
    value: T;
    label?: string;
    icon?: string;
  }[];
  value: T;
  onChange: (value: T) => void;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<ViewStyle>;
};

export function Tabs<T>({
  tabs,
  value,
  onChange,
  style,
}: CoinListHeaderProps<T>) {
  const { colors, palette } = useTheme();

  return (
    <Container style={style}>
      {tabs.map((item, index) => {
        const isActive = value === item.value;

        const isTheLastItem = index === tabs.length - 1;

        return (
          <TabButton
            key={String(item.value)}
            isTheLastItem={isTheLastItem}
            onPress={() => {
              onChange(item.value);
            }}
            isActive={isActive}
          >
            {item.icon ? (
              <Feather
                name={item.icon}
                size={24}
                color={isActive ? palette.white : colors.greekBlue[300]}
              />
            ) : (
              <Typography
                variant="button2"
                color={isActive ? 'white' : colors.greekBlue[300]}
              >
                {item.label}
              </Typography>
            )}
          </TabButton>
        );
      })}
    </Container>
  );
}

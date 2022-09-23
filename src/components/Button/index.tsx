import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { Typography } from '../Typography';
import { Container } from './styles';

export type ButtonProps = RectButtonProps & {
  variant?: 'button1' | 'button2';
  isLoading?: boolean;
};

export function Button({ variant, isLoading, children, ...rest }: ButtonProps) {
  const { palette } = useTheme();

  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator color={palette.white} />
      ) : (
        <Typography variant="button1" color="white">
          {children}
        </Typography>
      )}
    </Container>
  );
}

Button.defaultProps = {
  variant: 'button1',
};

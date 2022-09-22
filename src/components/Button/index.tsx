import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Typography } from '../Typography';
import { Container } from './styles';

export type ButtonProps = RectButtonProps & {
  variant?: 'button1' | 'button2';
};

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Typography variant={variant} color="white">
        {children}
      </Typography>
    </Container>
  );
}

Button.defaultProps = {
  variant: 'button1',
};

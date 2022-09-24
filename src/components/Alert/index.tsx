import React, { memo, useMemo } from 'react';
import { ViewProps } from 'react-native';

import { Typography } from '../Typography';
import { Container, Content, Icon } from './styles';

type AlertProps = ViewProps & {
  severity?: 'success' | 'info' | 'warning' | 'error';
};

export const Alert = memo(({ severity, children, ...rest }: AlertProps) => {
  const iconName = useMemo(() => {
    switch (severity) {
      case 'success':
        return 'check-circle';
      case 'info':
        return 'info';
      case 'warning':
        return 'alert-triangle';
      case 'error':
        return 'alert-circle';
      default:
        return 'info';
    }
  }, [severity]);

  return (
    <Container severity={severity} {...rest}>
      <Icon name={iconName} />
      <Content>
        <Typography
          color="white"
          variant="button2"
          accessibilityRole="none"
          numberOfLine={1}
        >
          {children}
        </Typography>
      </Content>
    </Container>
  );
});

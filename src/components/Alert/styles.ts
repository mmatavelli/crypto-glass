import { Animated } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

type BaseProps = {
  severity?: 'success' | 'info' | 'warning' | 'error';
};

export const Container = styled(Animated.View)<BaseProps>`
  height: 64px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 0 ${({ theme }) => theme.spacing[4]}px;

  background-color: ${({ theme, severity }) => {
    switch (severity) {
      case 'success':
        return theme.palette.positive;
      case 'info':
        return theme.palette.info;
      case 'warning':
        return theme.palette.warning;
      case 'error':
        return theme.palette.negative;
    }
  }};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Icon = styled(Feather)<BaseProps>`
  margin-right: ${({ theme }) => theme.spacing[2]}px;
  font-size: ${({ theme }) => theme.textVariants.heading2.fontSize}px;
  color: ${({ theme }) => theme.palette.white};
`;

Container.defaultProps = {
  severity: 'info',
};

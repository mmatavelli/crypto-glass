import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { Button } from '../../../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Pagination = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]}px;
`;

export const Dot = styled(Animated.View)<{ isActive: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 6.5px;
  margin: 0 6px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary : theme.palette.disabled};
`;

export const StartNowButton = styled(Button)`
  margin: 0 ${({ theme }) => theme.spacing[4]}px;
`;

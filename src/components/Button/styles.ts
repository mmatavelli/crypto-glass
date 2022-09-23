import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)<{ isDisabled?: boolean }>`
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.palette.disabled : theme.palette.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

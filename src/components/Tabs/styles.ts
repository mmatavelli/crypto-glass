import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const TabButton = styled(RectButton)<{
  isActive?: boolean;
  isTheLastItem?: boolean;
}>`
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing[3]}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary : theme.colors.greekBlue[50]};
  margin-right: ${({ theme, isTheLastItem }) =>
    isTheLastItem ? 0 : theme.spacing[2]}px;
`;

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Tabs = styled.View`
  flex-direction: row;
`;

export const TabButton = styled(RectButton)<{
  isActive?: boolean;
}>`
  height: 40px;
  width: 60px;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing[2]}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary : theme.colors.greekBlue[50]};
`;

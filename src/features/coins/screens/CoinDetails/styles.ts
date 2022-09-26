import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
`;

export const WatchListButton = styled(RectButton)`
  height: 40px;
  width: 40px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  align-items: center;
  justify-content: center;
`;

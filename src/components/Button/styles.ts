import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

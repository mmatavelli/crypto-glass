import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 60px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
`;

export const CoinImageContainer = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greekBlue[50]};
  margin-right: ${({ theme }) => theme.spacing[3]}px;
`;

export const CoinImage = styled.Image`
  height: 30px;
  width: 30px;
`;

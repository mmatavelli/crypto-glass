import styled from 'styled-components/native';

import { Typography } from '../../../../components/Typography';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-bottom: ${({ theme }) => theme.spacing[3]}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.palette.divider};
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing[1]}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing[4]}px;
  padding-bottom: ${({ theme }) => theme.spacing[2]}px;
`;

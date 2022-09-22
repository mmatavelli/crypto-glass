import styled from 'styled-components/native';

import { Typography } from '../../../../components/Typography';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metric.window.width}px;
`;

export const Image = styled.Image`
  flex: 0.7;
  width: ${({ theme }) => theme.metric.window.width}px;
  margin-bottom: ${({ theme }) => theme.spacing[6]}px;
`;

export const Title = styled(Typography)`
  text-align: center;
  margin: 0 ${({ theme }) => theme.spacing[8]}px;
`;

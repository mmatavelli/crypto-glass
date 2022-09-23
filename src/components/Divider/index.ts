import styled from 'styled-components/native';

export const Divider = styled.View`
  flex: 1;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.divider};
`;

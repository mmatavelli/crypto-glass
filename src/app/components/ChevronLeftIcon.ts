import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const ChevronLeftIcon = styled(Feather).attrs({
  name: 'chevron-left',
})`
  color: ${({ theme }) => theme.palette.text};
  font-size: 24px;
`;

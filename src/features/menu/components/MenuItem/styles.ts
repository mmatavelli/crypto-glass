import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]}px 0;
`;

export const Icon = styled(Feather)`
  margin-right: ${({ theme }) => theme.spacing[3]}px;
  color: ${({ theme }) => theme.palette.text};
  font-size: ${({ theme }) => theme.textVariants.heading1.fontSize}px;
`;

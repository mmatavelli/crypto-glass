import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { Avatar } from '../../../../components/Avatar';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing[4]}px;
`;

export const UserPhotoAvatar = styled(Avatar)`
  margin-right: ${({ theme }) => theme.spacing[3]}px;
`;

export const ChevronRightIcon = styled(Feather).attrs({
  name: 'chevron-right',
})`
  margin-right: ${({ theme }) => theme.spacing[3]}px;
  color: ${({ theme }) => theme.palette.text};
  font-size: ${({ theme }) => theme.textVariants.heading2.fontSize}px;
  margin-left: auto;
`;

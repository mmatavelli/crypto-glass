import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { Typography } from '../../../../components/Typography';
import { ApplicationScreenProp } from '../../../../types/navigation';
import {
  ChevronRightIcon,
  Container,
  UserNameContainer,
  UserPhotoAvatar,
} from './styles';

export function UserProfile() {
  const user = auth().currentUser;

  const { navigate } = useNavigation<ApplicationScreenProp<'MenuList'>>();

  function handlePress() {
    navigate('ProfileSettings' as any);
  }

  return (
    <Container onPress={handlePress}>
      <UserPhotoAvatar
        size={60}
        source={{
          uri:
            user?.photoURL ||
            'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image-365x365.png',
        }}
      />
      <UserNameContainer>
        <Typography variant="heading2" numberOfLines={1}>
          {user?.displayName}
        </Typography>
        <Typography color="border" variant="body2">
          Profile Settings
        </Typography>
      </UserNameContainer>
      <ChevronRightIcon />
    </Container>
  );
}

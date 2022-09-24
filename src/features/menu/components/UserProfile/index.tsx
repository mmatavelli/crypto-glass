import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '../../../../components/Typography';
import { ApplicationScreenProp } from '../../../../types/navigation';
import { ChevronRightIcon, Container, UserPhotoAvatar } from './styles';

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
          uri: 'https://avatars.githubusercontent.com/u/13172299?v=4',
        }}
      />
      <Typography variant="heading2">
        {user?.displayName} {'\n'}
        <Typography color="border" variant="body2">
          Profile Settings
        </Typography>
      </Typography>
      <ChevronRightIcon />
    </Container>
  );
}

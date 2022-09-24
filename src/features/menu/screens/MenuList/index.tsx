import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ApplicationScreenProp } from '../../../../types/navigation';
import { MenuItem } from '../../components/MenuItem';
import { UserProfile } from '../../components/UserProfile';
import { Container } from './styles';

const menuItems = [
  {
    title: 'Settings',
    route: 'Settings',
    icon: 'settings',
  },
  {
    title: 'Help & Support',
    route: 'Help',
    icon: 'help-circle',
  },
  {
    title: 'App Information',
    route: 'AppInfo',
    icon: 'globe',
  },
];

export function MenuList() {
  const { spacing } = useTheme();

  const { navigate } = useNavigation<ApplicationScreenProp<'MenuList'>>();

  function handleSignOut() {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        onPress: () => auth().signOut(),
      },
    ]);
  }

  function renderItem(item: typeof menuItems[0]) {
    function handlePress() {
      navigate(item.route as any);
    }

    return (
      <MenuItem title={item.title} icon={item.icon} onPress={handlePress} />
    );
  }

  return (
    <Container>
      <FlatList
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        data={menuItems}
        ListHeaderComponent={UserProfile}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={{ paddingHorizontal: spacing[3] }}
        ListHeaderComponentStyle={{ marginBottom: spacing[4] }}
        ListFooterComponent={
          <MenuItem title="Logout" icon="log-out" onPress={handleSignOut} />
        }
      />
    </Container>
  );
}

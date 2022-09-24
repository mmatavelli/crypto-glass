import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
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

  function renderItem({ item }: { item: typeof menuItems[0] }) {
    return <MenuItem {...item} />;
  }

  return (
    <Container>
      <FlatList
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        data={menuItems}
        ListHeaderComponent={UserProfile}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: spacing[3] }}
        ListHeaderComponentStyle={{ marginBottom: spacing[4] }}
      />
    </Container>
  );
}

import { useNavigation } from '@react-navigation/native';
import { Typography } from '../../../../components/Typography';
import { ApplicationScreenProp } from '../../../../types/navigation';
import { Container, Icon } from './styles';

type MenuItemProps = {
  title: string;
  icon: string;
  route: string;
};

export function MenuItem({ title, icon, route }: MenuItemProps) {
  const { navigate } = useNavigation<ApplicationScreenProp<'MenuList'>>();

  function handlePress() {
    navigate(route as any);
  }

  return (
    <Container onPress={handlePress}>
      <Icon name={icon} />
      <Typography variant="heading3">{title}</Typography>
    </Container>
  );
}

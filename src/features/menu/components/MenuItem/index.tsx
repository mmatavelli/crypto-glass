import { Typography } from '../../../../components/Typography';
import { Container, Icon } from './styles';

type MenuItemProps = {
  title: string;
  icon: string;
  onPress: () => void;
};

export function MenuItem({ title, icon, onPress }: MenuItemProps) {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} />
      <Typography variant="heading3">{title}</Typography>
    </Container>
  );
}

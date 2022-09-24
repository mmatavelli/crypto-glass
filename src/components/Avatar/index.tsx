import { ImageProps, ViewProps } from 'react-native';
import { Container, Image } from './styles';

export type AvatarProps = ViewProps & {
  size?: number;
  source: ImageProps['source'];
};

export function Avatar({ size = 30, source, ...rest }: AvatarProps) {
  return (
    <Container size={size} {...rest}>
      <Image source={source} size={size} resizeMode="contain" />
    </Container>
  );
}

Avatar.defaultProps = {
  size: 30,
};

import { Container, Image, Title } from './styles';

type OnboardingItemProps = {
  image: any;
  title: string;
};

export function OnboardingItem({ image, title }: OnboardingItemProps) {
  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Title>{title}</Title>
    </Container>
  );
}

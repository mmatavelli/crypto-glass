import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  useWindowDimensions,
  ViewToken,
} from 'react-native';
import { AuthScreenProp } from '../../../../types/navigation';

import { OnboardingItem } from '../../components/OnboardingItem';
import { Container, Dot, Pagination, StartNowButton } from './styles';

const SLIDES = [
  {
    image: require('../../assets/images/onboarding1.png'),
    title: 'Cryptocurrency is the most very secure in the world',
  },
  {
    image: require('../../assets/images/onboarding2.png'),
    title: 'Our application will help you work comfortably',
  },
  {
    image: require('../../assets/images/onboarding3.png'),
    title: 'Save your time - start earning with us!',
  },
];

export function Onboarding() {
  const { navigate } = useNavigation<AuthScreenProp<'Onboarding'>>();

  const { width } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index as number);
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  function handleStartNow() {
    navigate('SignIn');
  }

  return (
    <Container>
      <FlatList
        keyExtractor={item => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        pagingEnabled
        bounces={false}
        data={SLIDES}
        renderItem={({ item }) => <OnboardingItem {...item} />}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
      />
      <Pagination>
        {SLIDES.map((slide, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Dot
              key={slide.title}
              isActive={index === currentIndex}
              style={{
                opacity,
              }}
            />
          );
        })}
      </Pagination>
      <StartNowButton onPress={handleStartNow}>Start Now</StartNowButton>
    </Container>
  );
}

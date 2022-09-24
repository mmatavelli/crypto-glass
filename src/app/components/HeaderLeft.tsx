import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import { Avatar } from '../../components/Avatar';

type HeaderLeftProps = {
  canGoBack?: boolean;
};

function HeaderLeftComponent({ canGoBack }: HeaderLeftProps) {
  const { textVariants, palette } = useTheme();
  const { goBack, navigate } = useNavigation();

  function handlePress() {
    if (canGoBack) {
      goBack();
    } else {
      navigate('MenuList' as never);
    }
  }

  return (
    <Pressable onPress={handlePress}>
      {canGoBack ? (
        <Feather
          name="arrow-left"
          size={textVariants.heading2.fontSize}
          color={palette.text}
        />
      ) : (
        <Avatar
          source={{
            uri: 'https://avatars.githubusercontent.com/u/13172299?v=4',
          }}
        />
      )}
    </Pressable>
  );
}

HeaderLeftComponent.defaultProps = {
  canGoBack: false,
};

export const HeaderLeft = memo(HeaderLeftComponent);

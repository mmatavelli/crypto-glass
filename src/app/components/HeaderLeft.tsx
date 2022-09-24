import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Pressable } from 'react-native';

import { Avatar } from '../../components/Avatar';
import { ChevronLeftIcon } from './ChevronLeftIcon';

type HeaderLeftProps = {
  canGoBack?: boolean;
};

function HeaderLeftComponent({ canGoBack }: HeaderLeftProps) {
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
        <ChevronLeftIcon />
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

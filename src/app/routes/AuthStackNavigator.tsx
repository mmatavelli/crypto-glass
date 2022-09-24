import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import { Onboarding } from '../../features/auth/screens/Onboarding';
import { SignIn } from '../../features/auth/screens/SignIn';
import { SignUp } from '../../features/auth/screens/SignUp';
import { AuthStackParamsList } from '../../types/navigation';

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>();

export function AuthStackNavigator() {
  const { palette, textVariants, spacing } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: palette.background,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTitleStyle: {
          ...textVariants.heading3,
        },
        headerBackImage: () => (
          <Feather
            name="arrow-left"
            size={textVariants.heading2.fontSize}
            color={palette.text}
            style={{
              marginLeft: spacing[3],
            }}
          />
        ),
      }}
    >
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: 'Sign In',
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: 'Sign Up',
        }}
      />
    </Navigator>
  );
}

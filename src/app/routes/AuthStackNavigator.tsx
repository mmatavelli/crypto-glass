import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';

import { Onboarding } from '../../features/auth/screens/Onboarding';
import { SignIn } from '../../features/auth/screens/SignIn';
import { SignUp } from '../../features/auth/screens/SignUp';
import { AuthStackParamsList } from '../../types/navigation';
import { ChevronLeftIcon } from '../components/ChevronLeftIcon';

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
        headerLeftContainerStyle: {
          paddingLeft: spacing[3],
        },
        headerTitleStyle: {
          ...textVariants.heading3,
          fontWeight: 'bold',
        },
        headerBackImage: ChevronLeftIcon,
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

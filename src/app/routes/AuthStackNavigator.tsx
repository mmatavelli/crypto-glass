import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../../components/Header';
import { Onboarding } from '../../features/auth/screens/Onboarding';
import { SignIn } from '../../features/auth/screens/SignIn';
import { AuthStackParamsList } from '../../types/navigation';

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>();

export function AuthStackNavigator() {
  return (
    <Navigator initialRouteName="SignIn">
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
          header: Header,
          headerTitle: 'Sign In',
        }}
      />
    </Navigator>
  );
}

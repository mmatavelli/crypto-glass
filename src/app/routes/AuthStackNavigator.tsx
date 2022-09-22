import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '../../features/auth/screens/Onboarding';
import { AuthStackParamsList } from '../../types/navigation';

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>();

export function AuthStackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  );
}

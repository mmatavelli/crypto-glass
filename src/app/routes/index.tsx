import { NavigationContainer } from '@react-navigation/native';
import { navigationTheme } from '../../theme/lightTheme';
import { AuthStackNavigator } from './AuthStackNavigator';

export function Routes() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

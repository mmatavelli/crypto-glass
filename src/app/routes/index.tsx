import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import { navigationTheme } from '../../theme/lightTheme';
import { ApplicationStackNavigator } from './ApplicationStackNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';

export function Routes() {
  const [initializing, setInitializing] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User) => {
      setIsAuthenticated(!!user);
      if (initializing) setInitializing(false);
    },
    [initializing],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged as any);
    return subscriber;
  }, [onAuthStateChanged]);

  if (initializing) return null;

  return (
    <NavigationContainer theme={navigationTheme}>
      {isAuthenticated ? <ApplicationStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

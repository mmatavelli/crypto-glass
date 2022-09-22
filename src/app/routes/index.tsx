import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { navigationTheme } from '../../theme/lightTheme';
import { AuthStackNavigator } from './AuthStackNavigator';

export function Routes() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

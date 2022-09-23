import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme } from '../theme/lightTheme';
import { Routes } from './routes';

export function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SafeAreaProvider>
        <ThemeProvider theme={lightTheme}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

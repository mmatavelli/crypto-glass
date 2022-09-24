import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { SnackbarProvider } from '../contexts/SnackbarContext';
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
          <SnackbarProvider>
            <StatusBar
              barStyle="dark-content"
              translucent
              backgroundColor="transparent"
            />
            <Routes />
          </SnackbarProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

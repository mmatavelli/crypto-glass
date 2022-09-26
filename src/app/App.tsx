import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { SnackbarProvider } from '../contexts/SnackbarContext';
import { queryClient } from '../services/reactQuery';
import { store } from '../store';
import { lightTheme } from '../theme/lightTheme';
import { Routes } from './routes';

export function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={lightTheme}>
            <SafeAreaProvider>
              <SnackbarProvider>
                <StatusBar
                  barStyle="light-content"
                  backgroundColor="transparent"
                  translucent
                />
                <Routes />
              </SnackbarProvider>
            </SafeAreaProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

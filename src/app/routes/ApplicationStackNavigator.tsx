import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { CoinList } from '../../features/markets/screens/CoinList';
import { ApplicationStackParamsList } from '../../types/navigation';
import { HeaderLeft } from '../components/HeaderLeft';

const { Navigator, Screen } =
  createStackNavigator<ApplicationStackParamsList>();

export function ApplicationStackNavigator() {
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
          ...textVariants.heading2,
        },
        headerLeft: ({ canGoBack }) => <HeaderLeft canGoBack={canGoBack} />,
      }}
    >
      <Screen
        name="CoinList"
        component={CoinList}
        options={{
          title: 'Home',
        }}
      />
      <Screen name="Menu" component={CoinList} />
    </Navigator>
  );
}
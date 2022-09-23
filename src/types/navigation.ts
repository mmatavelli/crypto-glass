import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamsList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthScreenProp<T extends keyof AuthStackParamsList> =
  StackNavigationProp<AuthStackParamsList, T>;

export type ApplicationStackParamsList = {
  CoinList: undefined;
};

export type ApplicationScreenProp<T extends keyof ApplicationStackParamsList> =
  StackNavigationProp<ApplicationStackParamsList, T>;

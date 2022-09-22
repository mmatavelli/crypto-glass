import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamsList = {
  Onboarding: undefined;
};

export type AuthScreenProp<T extends keyof AuthStackParamsList> =
  StackNavigationProp<AuthStackParamsList, T>;

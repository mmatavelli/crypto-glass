import { Dimensions } from 'react-native';

import * as colors from './colors';

const { height, width } = Dimensions.get('screen');

export const lightTheme = {
  palette: {
    primary: colors.greekBlue[500],
    secondary: colors.magenta[500],
    background: colors.grey[50],
    positive: colors.positive[600],
    negative: colors.negative[600],
    info: '#2196f3',
    warning: '#ff9800',
    text: colors.grey[900],
    disabled: colors.grey[400],
    hint: colors.grey[400],
    white: colors.grey[50],
    black: colors.grey[1200],
    divider: colors.grey[400],
    border: colors.grey[600],
  },
  colors,
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  textVariants: {
    heading1: {
      fontSize: 28,
      lineHeight: 32,
      fontFamily: 'Manrope-ExtraBold',
      fontWeight: '800',
    },
    heading2: {
      fontSize: 24,
      lineHeight: 28,
      fontFamily: 'Manrope-ExtraBold',
      fontWeight: '800',
    },
    heading3: {
      fontSize: 22,
      lineHeight: 32,
      fontFamily: 'Manrope-ExtraBold',
      fontWeight: '800',
    },
    body1: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'Manrope-Regular',
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'Manrope-Regular',
      fontWeight: 'normal',
    },
    button1: {
      fontSize: 18,
      lineHeight: 32,
      fontFamily: 'Manrope-ExtraBold',
      fontWeight: '800',
    },
    button2: {
      fontSize: 14,
      lineHeight: 0,
      fontFamily: 'Manrope-Bold',
      fontWeight: '700',
    },
  },
  shape: {
    borderRadius: 6,
  },
  metric: {
    window: {
      width,
      height,
    },
  },
};

export const navigationTheme = {
  dark: false,
  colors: {
    primary: lightTheme.palette.primary,
    background: lightTheme.palette.background,
    card: lightTheme.palette.background,
    text: lightTheme.palette.text,
    border: lightTheme.palette.border,
    notification: lightTheme.palette.primary,
  },
};

export type Theme = typeof lightTheme;

export type TextVariants = keyof typeof lightTheme.textVariants;

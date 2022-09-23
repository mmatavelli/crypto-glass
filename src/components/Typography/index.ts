import { TextStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

import { TextVariants, Theme } from '../../theme/lightTheme';

export type TypographyProps = {
  variant: TextVariants;
  color?: keyof Theme['palette'];
  align?: TextStyle['textAlign'];
};

export const Typography = styled.Text<TypographyProps>`
  ${({ theme, variant = 'body1', align, color = 'text' }) =>
    css`
      font-size: ${theme.textVariants[variant].fontSize}px;
      line-height: ${theme.textVariants[variant].lineHeight}px;
      font-family: ${theme.textVariants[variant].fontFamily};
      color: ${theme.palette[color]};
      text-align: ${align};
    `}
`;

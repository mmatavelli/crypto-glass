import { ColorValue } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styled, { css } from 'styled-components/native';
import { Typography } from '../Typography';

type BaseTextInputProps = {
  isErrored?: boolean;
  isFocused?: boolean;
};

export const Container = styled.View``;

export const InputContainer = styled.View<BaseTextInputProps>`
  height: 52px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  border-color: ${({ theme, isErrored, isFocused }) => {
    if (isErrored) {
      return theme.colors.negative[600];
    }

    if (isFocused) {
      return theme.colors.greekBlue[500];
    }

    return theme.colors.grey[600];
  }};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.palette.hint as ColorValue,
}))`
  flex: 1;
  height: 100%;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing[3]}px;
    color: ${theme.colors.grey[1000]};
    font-family: ${theme.textVariants.body1.fontFamily};
    font-size: ${theme.textVariants.body1.fontSize}px;
    line-height: ${theme.textVariants.body1.lineHeight}px;
  `};
`;

export const Label = styled(Typography)<BaseTextInputProps>`
  margin-bottom: ${({ theme }) => theme.spacing[2]}px;
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.greekBlue[500] : theme.palette.black};
`;

export const ErrorMessage = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing[2]}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.textVariants.heading3.fontSize}px;
  margin-right: ${({ theme }) => theme.spacing[3]}px;
`;

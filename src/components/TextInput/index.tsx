import { forwardRef, memo, useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  ViewStyle,
} from 'react-native';
import {
  Container,
  ErrorMessage,
  Icon,
  Input,
  InputContainer,
  Label,
} from './styles';

export type TextInputProps = RNTextInputProps & {
  label: string;
  error?: string;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const TextInputComponent = forwardRef(
  (
    {
      label,
      error,
      isDisabled,
      secureTextEntry,
      onBlur,
      style,
      ...rest
    }: TextInputProps,
    ref: React.Ref<RNTextInput> | undefined,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    function handleInputFocus() {
      setIsFocused(true);
    }

    function handleTogglePasswordVisibility() {
      setIsPasswordVisible(prevState => !prevState);
    }

    const handleInputBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    return (
      <Container style={style}>
        <Label>{label}</Label>
        <InputContainer isFocused={isFocused} isErrored={!!error}>
          <Input
            ref={ref}
            secureTextEntry={isPasswordVisible}
            editable={!isDisabled}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
          {secureTextEntry && (
            <Pressable onPress={handleTogglePasswordVisibility}>
              <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} />
            </Pressable>
          )}
        </InputContainer>
        {error && <ErrorMessage color="negative">{error}</ErrorMessage>}
      </Container>
    );
  },
);

export const TextInput = memo(TextInputComponent);

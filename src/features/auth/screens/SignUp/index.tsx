import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { Platform, Pressable, TextInput as RNTextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';
import { Divider } from '../../../../components/Divider';
import { TextInput } from '../../../../components/TextInput';
import { Typography } from '../../../../components/Typography';
import { useSnackbar } from '../../../../hooks/useSnackbar';
import { AuthScreenProp } from '../../../../types/navigation';
import { createUserWithEmailAndPasswordRequest } from '../../requests/createUserWithEmailAndPasswordRequest';
import { SignUpFormData } from '../../types';
import { Container, Content, SubmitButton } from './styles';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export function SignUp() {
  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);
  const passwordConfirmationInputRef = useRef<RNTextInput>(null);

  const { spacing } = useTheme();

  const { goBack } = useNavigation<AuthScreenProp<'SignUp'>>();

  const { show } = useSnackbar();

  async function handleSignUp({ name, email, password }: SignUpFormData) {
    try {
      await createUserWithEmailAndPasswordRequest({
        name,
        email,
        password,
      });
    } catch (error) {
      if (error instanceof Error) {
        show(error.message, {
          severity: 'error',
        });
      }
    }
  }

  const formik = useFormik<SignUpFormData>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: handleSignUp,
  });

  function handleFocusEmailInput() {
    emailInputRef.current?.focus();
  }

  function handleFocusPasswordInput() {
    passwordInputRef.current?.focus();
  }

  function handleFocusPasswordConfirmationInput() {
    passwordConfirmationInputRef.current?.focus();
  }

  return (
    <Container behavior={Platform.OS === 'android' ? undefined : 'padding'}>
      <Content
        keyboardShouldPersistTaps="handled"
        style={{
          paddingVertical: spacing[8],
          paddingHorizontal: spacing[3],
        }}
      >
        <Divider />
        <TextInput
          label="Name"
          style={{
            marginTop: spacing[6],
            marginBottom: spacing[4],
          }}
          autoCapitalize="words"
          returnKeyType="next"
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          error={formik.errors.name}
          onSubmitEditing={handleFocusEmailInput}
        />
        <TextInput
          ref={emailInputRef}
          label="Mail"
          style={{
            marginBottom: spacing[4],
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={formik.errors.email}
          onSubmitEditing={handleFocusPasswordInput}
        />
        <TextInput
          ref={passwordInputRef}
          label="Password"
          secureTextEntry
          returnKeyType="next"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          error={formik.errors.password}
          onSubmitEditing={handleFocusPasswordConfirmationInput}
          style={{
            marginBottom: spacing[3],
          }}
        />
        <TextInput
          ref={passwordConfirmationInputRef}
          label="Password Confirmation"
          secureTextEntry
          returnKeyType="send"
          value={formik.values.passwordConfirmation}
          onChangeText={formik.handleChange('passwordConfirmation')}
          onBlur={formik.handleBlur('passwordConfirmation')}
          error={formik.errors.passwordConfirmation}
          onSubmitEditing={formik.handleSubmit}
          style={{
            marginBottom: spacing[3],
          }}
        />
        <SubmitButton
          isLoading={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          Start Now
        </SubmitButton>
        <Pressable onPress={goBack}>
          <Typography variant="body1" align="center">
            Already have an account?{' '}
            <Typography color="primary" variant="button1">
              Sign in
            </Typography>
          </Typography>
        </Pressable>
      </Content>
    </Container>
  );
}

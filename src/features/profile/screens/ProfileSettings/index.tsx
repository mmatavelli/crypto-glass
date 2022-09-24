import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { Platform, TextInput as RNTextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { Divider } from '../../../../components/Divider';
import { TextInput } from '../../../../components/TextInput';
import { useSnackbar } from '../../../../hooks/useSnackbar';
import { ApplicationScreenProp } from '../../../../types/navigation';
import { updateProfileRequest } from '../../requests/updateProfileRequest';
import { UpdateProfileFormData } from '../../types';
import { Container, Content, SubmitButton } from './styles';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().length(6, 'Password must be 6 characters long'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export function ProfileSettings() {
  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);
  const passwordConfirmationInputRef = useRef<RNTextInput>(null);

  const { spacing } = useTheme();

  const { goBack } = useNavigation<ApplicationScreenProp<'ProfileSettings'>>();

  const { show } = useSnackbar();

  const user = auth().currentUser;

  async function handleUpdateProfile({
    name,
    email,
    password,
  }: UpdateProfileFormData) {
    try {
      await updateProfileRequest({ name, email, password });

      show('Profile updated successfully', {
        severity: 'success',
      });

      goBack();
    } catch (error) {
      if (error instanceof Error) {
        show(error.message, {
          severity: 'error',
        });
      }
    }
  }

  const formik = useFormik<UpdateProfileFormData>({
    initialValues: {
      name: user?.displayName || '',
      email: user?.email || '',
      password: '',
      passwordConfirmation: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
    onSubmit: handleUpdateProfile,
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

  function handleSubmit() {
    if (formik.isValid && formik.dirty) {
      formik.handleSubmit();
    }
  }

  return (
    <Container behavior={Platform.OS === 'android' ? undefined : 'padding'}>
      <Content
        keyboardShouldPersistTaps="handled"
        style={{
          paddingVertical: spacing[4],
          paddingHorizontal: spacing[3],
        }}
      >
        <Divider />
        <TextInput
          label="Name"
          style={{
            marginTop: spacing[4],
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
          onSubmitEditing={handleSubmit}
          style={{
            marginBottom: spacing[3],
          }}
        />
        <SubmitButton
          isLoading={formik.isSubmitting}
          isDisabled={formik.isSubmitting || !formik.dirty}
          onPress={handleSubmit}
        >
          Save
        </SubmitButton>
      </Content>
    </Container>
  );
}

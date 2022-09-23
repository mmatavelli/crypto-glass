import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { useRef } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  TextInput as RNTextInput,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';
import { Divider } from '../../../../components/Divider';
import { TextInput } from '../../../../components/TextInput';
import { Typography } from '../../../../components/Typography';
import { AuthScreenProp } from '../../../../types/navigation';
import { AppleIcon } from '../../components/icons/AppleIcon';
import { GoogleIcon } from '../../components/icons/GoogleIcon';
import { MetaIcon } from '../../components/icons/MetaIcon';
import {
  Container,
  Content,
  DividerContainer,
  SocialLoginButton,
  SocialLoginContainer,
  SubmitButton,
} from './styles';

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export function SignIn() {
  const passwordInputRef = useRef<RNTextInput>(null);

  const { spacing } = useTheme();

  const { navigate } = useNavigation<AuthScreenProp<'SignIn'>>();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: values => {
      Alert.alert(JSON.stringify(values, null, 2));
    },
  });

  function handleNavigateToSigUp() {
    navigate('SignUp');
  }

  function handleFocusPasswordInput() {
    passwordInputRef.current?.focus();
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
        <SocialLoginContainer>
          <SocialLoginButton backgroundColor="#000">
            <AppleIcon />
          </SocialLoginButton>
          <SocialLoginButton backgroundColor="#F45252">
            <GoogleIcon />
          </SocialLoginButton>
          <SocialLoginButton backgroundColor="#0081FB">
            <MetaIcon />
          </SocialLoginButton>
        </SocialLoginContainer>
        <DividerContainer>
          <Divider />
          <Typography
            color="divider"
            style={{
              paddingHorizontal: spacing[3],
            }}
          >
            or
          </Typography>
          <Divider />
        </DividerContainer>
        <TextInput
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
          returnKeyType="send"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          error={formik.errors.password}
          onSubmitEditing={formik.handleSubmit}
          style={{
            marginBottom: spacing[3],
          }}
        />
        <Typography variant="body1" color="border" align="right">
          Forgot your password?
        </Typography>
        <SubmitButton
          isLoading={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          Sign In
        </SubmitButton>
        <Pressable onPress={handleNavigateToSigUp}>
          <Typography variant="body1" align="center">
            You are not registered?{' '}
            <Typography color="primary" variant="button1">
              Create an account
            </Typography>
          </Typography>
        </Pressable>
      </Content>
    </Container>
  );
}

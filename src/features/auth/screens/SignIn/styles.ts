import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Button } from '../../../../components/Button';

export const Container = styled.KeyboardAvoidingView``;

export const Content = styled.ScrollView``;

export const SocialLoginContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.theme.spacing[3]}px;
  margin-bottom: ${({ theme }) => theme.spacing[5]}px;
`;

export const SocialLoginButton = styled(RectButton)<{
  backgroundColor: string;
}>`
  height: 60px;
  width: 30%;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const DividerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]}px;
`;

export const SubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing[6]}px;
  margin-bottom: ${({ theme }) => theme.spacing[3]}px;
`;

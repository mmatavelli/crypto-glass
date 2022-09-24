import auth from '@react-native-firebase/auth';
import { SignInFormData } from '../types';

export async function signInWithEmailAndPasswordRequest({
  email,
  password,
}: SignInFormData) {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      throw new Error('User not found');
    }
    if (error.code === 'auth/wrong-password') {
      throw new Error('Wrong password');
    }
    throw new Error('Something went wrong');
  }
}

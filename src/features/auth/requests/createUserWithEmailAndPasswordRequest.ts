import auth from '@react-native-firebase/auth';

import { SignUpFormData } from '../types';

export async function createUserWithEmailAndPasswordRequest({
  name,
  email,
  password,
}: SignUpFormData) {
  try {
    await auth().createUserWithEmailAndPassword(email, password);

    const { currentUser } = auth();

    if (currentUser) {
      await currentUser.updateProfile({
        displayName: name,
      });
    }
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      throw new Error('That email address is invalid!');
    }
  }
}

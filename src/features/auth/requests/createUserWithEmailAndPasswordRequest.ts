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
      const photoURL =
        'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image-365x365.png';
      await currentUser.updateProfile({
        displayName: name,
        photoURL,
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

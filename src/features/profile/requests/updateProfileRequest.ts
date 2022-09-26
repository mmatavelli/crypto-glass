import auth from '@react-native-firebase/auth';

import { UpdateProfileFormData } from '../types';

export async function updateProfileRequest({
  name,
  email,
  password,
  photoURl,
}: UpdateProfileFormData) {
  try {
    const { currentUser } = auth();

    if (currentUser) {
      if (
        name !== currentUser.displayName ||
        photoURl !== currentUser.photoURL
      ) {
        await currentUser.updateProfile({
          displayName: name,
          photoURL: photoURl,
        });
      }

      if (email !== currentUser.email) {
        await currentUser.updateEmail(email);
      }

      if (password) {
        await currentUser.updatePassword(password);
      }

      await currentUser?.getIdToken(true);
    }
  } catch (error: any) {
    if (error.code === 'auth/invalid-email') {
      throw new Error('The email address is badly formatted.');
    }
    if (error.code === 'auth/weak-password') {
      throw new Error('The password is not strong enough.');
    }

    throw new Error('An error occurred while updating your profile.');
  }
}

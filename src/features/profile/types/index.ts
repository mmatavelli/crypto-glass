import { Asset } from 'react-native-image-picker';

export type UpdateProfileFormData = {
  email: string;
  password: string;
  name: string;
  passwordConfirmation?: string;
  photoURl?: string;
  asset?: Asset;
};

import { useContext } from 'react';

import {
  SnackbarContext,
  SnackbarContextData,
} from '../contexts/SnackbarContext';

export function useSnackbar(): SnackbarContextData {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnackbar must be used within an SnackbarProvider');
  }

  return context;
}

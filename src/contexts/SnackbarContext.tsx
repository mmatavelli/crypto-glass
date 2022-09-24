import React, { createContext, useCallback, useMemo, useState } from 'react';

import { Snackbar } from '../components/Snackbar';

type SnackbarProviderProps = {
  children: React.ReactNode;
};

type Options = {
  severity?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
};

export type SnackbarContextData = {
  show: (message: string, options?: Options) => void;
  close: () => void;
};

export const SnackbarContext = createContext<SnackbarContextData>(
  {} as SnackbarContextData,
);

const defaultOptions: Options = {
  severity: 'info',
  duration: 5000,
};

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [options, setOptions] = useState<Options>(defaultOptions);

  const show = useCallback(
    async (snackbarMessage: string, snackbarOptions?: Options) => {
      setMessage(snackbarMessage);
      if (snackbarOptions) {
        setOptions(snackbarOptions);
      }
      setIsVisible(true);
    },
    [],
  );

  const close = useCallback(() => {
    setIsVisible(false);
    setOptions(defaultOptions);
  }, []);

  const snackbarContextData = useMemo(() => {
    return {
      show,
      close,
    };
  }, [close, show]);

  return (
    <SnackbarContext.Provider value={snackbarContextData}>
      {children}
      <Snackbar visible={isVisible} onDismiss={close} {...options}>
        {message}
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

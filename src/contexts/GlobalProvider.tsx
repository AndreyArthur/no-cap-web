import React, { ReactNode } from 'react';

import { ToastContextProvider } from '@/contexts';

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = (
  { children }: GlobalContextProviderProps,
): JSX.Element => (
  <ToastContextProvider>
    {children}
  </ToastContextProvider>
);

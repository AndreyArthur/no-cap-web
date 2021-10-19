import React from 'react';

import { Router } from '@/routes';
import { GlobalContextProvider } from '@/contexts';

import '@/styles/globals.css';

export const App = (): JSX.Element => (
  <GlobalContextProvider>
    <Router />
  </GlobalContextProvider>
);

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NewPage } from '@/pages';

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/new" exact component={NewPage} />
    </Switch>
  </BrowserRouter>
);

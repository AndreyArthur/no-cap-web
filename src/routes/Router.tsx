import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MessagePage, NewPage } from '@/pages';

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MessagePage} />
      <Route path="/new" exact component={NewPage} />
    </Switch>
  </BrowserRouter>
);

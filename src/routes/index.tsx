import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CatalogOfProductsRoute } from './CatalogOfProductsRoute';

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <CatalogOfProductsRoute />
    </Route>
    <Route path="/:countryname" >

    </Route>
  </Switch>
);


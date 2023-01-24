import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';

function Routes() {
  return (
    <Switch>
      <Route exact path={ ['/login', '/'] } component={ Login } />
    </Switch>
  );
}

export default Routes;

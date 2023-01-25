import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={ Register } />
      <Route exact path={ ['/login', '/'] } component={ Login } />
    </Switch>
  );
}

export default Routes;

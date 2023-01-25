import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
}

export default Routes;

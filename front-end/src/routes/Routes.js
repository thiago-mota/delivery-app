import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomerProducts from '../pages/CustomerProducts/CustomerProducts';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import withAuth from './auth/withAuth';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/products"><CustomerProducts /></Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
}

export default Routes;

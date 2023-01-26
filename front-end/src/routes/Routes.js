import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomerProducts from '../pages/CustomerProducts/CustomerProducts';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Sales from '../pages/Sales/Sales';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/seller/orders" component={ Sales } />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
}

export default Routes;

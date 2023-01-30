import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminManager from '../pages/AdminManager/AdminManeger';
import CustomerCheckout from '../pages/CustomerCheckout/CustomerCheckout';
import CustomerProducts from '../pages/CustomerProducts/CustomerProducts';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
// import withAuth from './auth/withAuth';
import Sales from '../pages/Sales/Sales';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/orders/:id">
        <CustomerCheckout />
      </Route>
      <Route path="/customer/products">
        <CustomerProducts />
      </Route>
      <Route path="/customer/checkout">
        <CustomerCheckout />
      </Route>
      <Route path="/admin/manage">
        <AdminManager />
      </Route>
      <Route path="/seller/orders" component={ Sales } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
}

export default Routes;

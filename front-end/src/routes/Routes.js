import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminManager from '../pages/AdminManager/AdminManeger';
import CustomerCheckout from '../pages/CustomerCheckout/CustomerCheckout';
import CustomerOrders from '../pages/CustomerOrders/CustomerOrders';
import CustomerProducts from '../pages/CustomerProducts/CustomerProducts';
import Login from '../pages/Login/Login';
import OrderDetail from '../pages/OrderDetail/OrderDetail';
import Register from '../pages/Register/Register';
import Sales from '../pages/Sales/Sales';
import withAuth from './auth/withAuth';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/orders/:id">
        <OrderDetail />
      </Route>
      <Route path="/customer/orders">
        <CustomerOrders />
      </Route>
      <Route path="/customer/products">
        <CustomerProducts />
      </Route>
      <Route path="/customer/checkout">
        <CustomerCheckout />
      </Route>
      <Route path="/customer/orders">
        <CustomerOrders />
      </Route>
      <Route path="/admin/manage">
        <AdminManager />
      </Route>
      <Route path="/seller/orders" component={ Sales } />
      <Route path="/register" component={ Register } />
      <Route path="/login">
        {withAuth(<Login />)}
      </Route>
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
}

export default Routes;

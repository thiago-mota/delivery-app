import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import CustomerCheckout from '../pages/CustomerCheckout/CustomerCheckout';
import CustomerProducts from '../pages/CustomerProducts/CustomerProducts';
import Login from '../pages/Login/Login';
import OrderDetail from '../pages/OrderDetail/OrderDetail';
import Register from '../pages/Register/Register';
// import withAuth from './auth/withAuth';
import Sales from '../pages/Sales/Sales';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/orders/:id">
        <OrderDetail />
      </Route>
      {/* <Route path="/customer/orders">
        <Orders />
      </Route> */}
      <Route path="/customer/products">
        <CustomerProducts />
      </Route>
      <Route path="/customer/checkout">
        <CustomerCheckout />
      </Route>
      <Route path="/admin/manage">
        <Header />
      </Route>
      <Route path="/seller/orders" component={ Sales } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink() {
  return (
    <Switch>
      <Route path="/customer/products">
        <NavLink
          to="/customer/checkout"
          data-testid="customer_products__element-navbar-link-products"
          className={ styles.links }
        >
          Produtos
        </NavLink>
      </Route>
      <Route path="/seller/orders">
        <NavLink
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.links }
        >
          Produtos
        </NavLink>
      </Route>
      <Route path="/admin/manage" />
      <Route>
        <NavLink
          to="/admin/manage"
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.links }
        >
          Produtos
        </NavLink>
      </Route>
    </Switch>
  );
}

export default HeaderLink;

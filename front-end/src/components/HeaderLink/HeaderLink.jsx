import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink() {
  return (
    <Switch>
      <Route path="/customer/">
        <NavLink
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          className={ styles.links }
        >
          Produtos
        </NavLink>
      </Route>
      <Route exact path="/seller/orders">
        <NavLink
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.links }
        >
          Pedidos
        </NavLink>
      </Route>
      <Route exact path="/admin/manage" />
      <Route>
        <NavLink
          to="/admin/manage"
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.links }
        >
          Gerenciar Usuários
        </NavLink>
      </Route>
    </Switch>
  );
}

export default HeaderLink;

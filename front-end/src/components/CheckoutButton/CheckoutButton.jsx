import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CheckoutButton.module.css';

function CheckoutButton() {
  return (
    <nav className={ styles.checkout }>
      <NavLink
        to="/customer/checkout"
        data-testid="customer_products__button-cart"
      >
        Ver carrinho:
        <span data-testid="customer_products__checkout-bottom-value">
          R$20,00
        </span>
      </NavLink>
    </nav>
  );
}

export default CheckoutButton;

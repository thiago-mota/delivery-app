import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './Header.module.css';

const handleDataTestIdByRole = (role) => {
  switch (role) {
  case 'administrator':
    return 'customer_products__element-navbar-link-orders';
  case 'seller':
    return 'customer_products__element-navbar-link-orders';
  default:
    return 'customer_products__element-navbar-link-products';
  }
};

const handleHrefPathByRole = (role) => {
  switch (role) {
  case 'administrator':
    return '/admin/manage';
  case 'seller':
    return '/seller/orders';
  default:
    return '/customer/checkout';
  }
};

function Header() {
  const userData = useMemo(() => getLocalStorage('user'), []);

  return (
    <header className={styles.container}>
      <div className={styles['margin-container']}>
        <nav className={styles['common-links-container']}>
          <NavLink
            to={handleHrefPathByRole(userData.role)}
            data-testid={handleDataTestIdByRole(userData.role)}
            className={styles['multi-link']}
          >
            Products
          </NavLink>
          {userData.role === 'customer' && (
            <NavLink
              to={handleHrefPathByRole(userData.role)}
              data-testid="customer_products__element-navbar-link-orders"
              className={styles['product-orders']}
            >Product Orders</NavLink>
          )}
        </nav>
        <nav className={styles['role-links-container']}>
          <span
            className={styles['user-name']}
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userData.name}
          </span>
          <NavLink
            onClick={ () => localStorage.removeItem('user') }
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            className={styles.logout}
          >
            Logout
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

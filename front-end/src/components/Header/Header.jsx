import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// import PropTypes from 'prop-types';

function Header() {
  handleHrefPathByRole = (role) => {
    switch (role) {
    case 'administrator':
      return '';
    case 'seller':
      return '';
    default:
      return '';
    }
  };

  return (
    <header className={styles.container}>
      <nav>
        <NavLink to={ handleHrefPathByRole('role') } />
        <NavLink to={ handleHrefPathByRole('role') } />
      </nav>
      <nav>
        <span> USERNAME </span>
        <NavLink to="/login" />
      </nav>
    </header>
  );
}

// Header.propTypes = {

// };

export default Header;

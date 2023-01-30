// import PropTypes from 'prop-types';
import React from 'react';
import AdminRegister from '../../components/AdminRegister/AdminRegister';
import Header from '../../components/Header/Header';
import styles from './Admin.module.css';

function Manager() {
  return (
    <div className={ styles['manager-page'] }>
      <Header />
      <AdminRegister />
    </div>
  );
}

// Maneger.propTypes = {
//   order: PropTypes.shape({
//     id: PropTypes.number,
//     status: PropTypes.string,
//     saleDate: PropTypes.instanceOf(),
//     totalPrice: PropTypes.string,
//     deliveryAddress: PropTypes.string,
//   }).isRequired,
//   role: PropTypes.string.isRequired,
// };

export default Manager;

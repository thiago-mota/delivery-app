import React from 'react';
import AdminRegister from '../../components/AdminRegister/AdminRegister';
import Header from '../../components/Header/Header';
import UsersManager from '../../components/UsersManager/UsersManager';
import styles from './Admin.module.css';

function Manager() {
  return (
    <div className={ styles['manager-page'] }>
      <Header />
      <AdminRegister />
      <UsersManager />
    </div>
  );
}

export default Manager;

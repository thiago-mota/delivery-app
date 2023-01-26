// import axios from 'axios';
import React from 'react';
import CardPedidos from '../../components/CardPedidos/CardPedidos';
import styles from './Pedidos.module.css';

const order = {
  id: 1,
  status: 'Pendente',
  saleDate: '08/04/2021',
  totalPrice: 23.80,
  deliveryAddress: 'Rua Irmãos Monteiro, Bairo Pedras, 851',
};

function Pedidos() {
  return (
    <div className={ styles['pedidos-page'] }>
      <h1>Pedidos</h1>
      <CardPedidos
        order={ order }
        role="seller"
      />
    </div>
  );
}

export default Pedidos;

import React from 'react';
import SaleCard from '../../components/CardSales/Card';
import styles from './Sales.module.css';

const order = {
  id: 1,
  status: 'Pendente',
  saleDate: '08/04/2021',
  totalPrice: 23.81,
  deliveryAddress: 'Rua Irmãos Monteiro, Bairo Pedras, 851',
};

const role = 'seller';

// const VALID_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2xpZW50ZSB6aWthIiwi
// ZW1haWwiOiJjbGllbnRlQGhvdG1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc0NjgwNjUwLCJleH
// AiOjE2NzY0MDg2NTB9.68xRy7oZC4RnwFBc0CSBxDBm3roI1h8l_OmAsckxxw4`;

// const FETCH_OPTIONS = {
//   method: 'get',
//   endpoint: 'http://localhost:3001/customer/checkout',
//   options: { headers: { authorization: VALID_TOKEN } },
// };

function Pedidos() {
  // const [data, isLoading] = useFetch(FETCH_OPTIONS);
  // const datas = data?.data;
  return (
    <div className={ styles['pedidos-page'] }>
      <h1>Pedidos</h1>

      {/* {!isLoading
            && datas?.map((index) => (
              <SaleCard order={ index } role={ index } key={ index.id } />
            ))} */}

      <SaleCard
        order={ order }
        role={ role }
      />

    </div>
  );
}

export default Pedidos;

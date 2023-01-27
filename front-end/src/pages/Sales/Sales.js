import React from 'react';
import SaleCard from '../../components/CardSales/Card';
// import useFetch from '../../hooks/useFetch';
import styles from './Sales.module.css';

const order = {
  id: 1,
  status: 'Pendente',
  saleDate: '08/04/2021',
  totalPrice: 23.81,
  deliveryAddress: 'Rua Irmãos Monteiro, Bairo Pedras, 851',
};

const role = 'seller';

// const VALID_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRnVsYW5hIFBlcmVp
// cmEiLCJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWF
// wcC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWF0Ij
// oxNjc0ODI3ODY0LCJleHAiOjE2NzY1NTU4NjR9.moe6aFh0F8AzDX5q7mlFeuIx8X5AQLLSAej03A99PEE`;

// const FETCH_OPTIONS = {
//   method: 'get',
//   endpoint: 'http://localhost:3001/checkout',
//   options: { headers: { authorization: VALID_TOKEN } },
// };

function Sales() {
  // const [data, isLoading] = useFetch(FETCH_OPTIONS);
  // const datas = data?.data;
  return (
    <div className={ styles['pedidos-page'] }>
      <h1>Pedidos</h1>

      {/* {!isLoading
            && datas?.map((index) => (
              <div className={ styles.card } key={ index.id }>
                <SaleCard order={ index } role={ index } />
                {' '}
              </div>
            ))} */}

      <div className={ styles.card }>
        <SaleCard
          order={ order }
          role={ role }
        />
      </div>

    </div>
  );
}

export default Sales;

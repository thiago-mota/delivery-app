import PropTypes from 'prop-types';
import React from 'react';
import SaleCard from '../../components/CardSales/Card';
import useFetch from '../../hooks/useFetch';
import styles from './Sales.module.css';

// const order = {
//   id: 1,
//   status: 'Pendente',
//   saleDate: '08/04/2021',
//   totalPrice: 23.81,
//   deliveryAddress: 'Rua Irmãos Monteiro, Bairo Pedras, 851',
// };

// const role = 'seller';

const VALID_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1
lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYUBkZW´
xpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNj
c0ODI3Mzk3LCJleHAiOjE2NzY1NTUzOTd9.PE-cNjrtRBSdhcd_k
swogE4datgTdMpYfCQWguEXDJweyJhbGciOiJIUzI1NiIsInR5cC
I6IkpXVCJ9.eyJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFu
YUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWF0
IjoxNjc0ODI3Mzk3LCJleHAiOjE2NzY1NTUzOTd9.PE-cNjrtRBSdhcd_kswogE4datgTdMpYfCQWguEXDJw`;

const FETCH_OPTIONS = {
  method: 'get',
  endpoint: 'http://localhost:3001/checkout',
  options: { headers: { authorization: VALID_TOKEN } },
};

const seller = 'seller';

function Sales() {
  const [data, isLoading] = useFetch(FETCH_OPTIONS);
  const datas = data?.data;
  return (

    <div className={ styles['pedidos-page'] }>
      <h1>Pedidos</h1>

      {!isLoading
            && datas?.map((index) => (
              <div className={ styles.card } key={ index.id }>
                <SaleCard order={ index } role={ seller } />
                {' '}
              </div>
            ))}
      {/*
      <div className={ styles.card }>
        <SaleCard
          order={ order }
          role={ role }
        />
      </div> */}

    </div>
  );
}

SaleCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.instanceOf(),
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default Sales;

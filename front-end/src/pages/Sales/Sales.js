import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import SaleCard from '../../components/CardSales/Card';
import Header from '../../components/Header/Header';
import useFetch from '../../hooks/useFetch';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './Sales.module.css';

const role = 'seller';

function Sales() {
  const fetchOptions = useMemo(() => ({
    method: 'get',
    url: 'http://localhost:3001/checkout',
    headers: { Authorization: getLocalStorage('user')?.token },
  }), []);

  const [data, isLoading] = useFetch(fetchOptions);
  const datas = data?.data;
  return (
    <div className={ styles['pedidos-page'] }>
      <Header />
      <div className={ styles['pedidos-container'] }>

        {!isLoading
            && datas?.map((index) => (
              <div className={ styles.card } key={ index.id }>
                <SaleCard order={ index } role={ role } />
                {' '}
              </div>
            ))}
      </div>
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

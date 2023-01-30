import React, { useMemo } from 'react';
import CheckoutButton from '../../components/CheckoutButton/CheckoutButton';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import useFetch from '../../hooks/useFetch';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './CustomerProducts.module.css';

function CustomerProducts() {
  const fetchOptions = useMemo(() => ({
    method: 'get',
    url: 'http://localhost:3001/products',
    headers: { Authorization: getLocalStorage('user')?.token },
  }), []);
  const [data, isLoading] = useFetch(fetchOptions);

  const products = data?.data;
  return (
    <>
      <Header />
      <div className={ styles['page-container'] }>
        <div className={ styles.container }>
          <div className={ styles['products-container'] }>
            {!isLoading
              && products?.map((product) => (
                <Product product={ product } key={ product.id } />
              ))}
            <CheckoutButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProducts;

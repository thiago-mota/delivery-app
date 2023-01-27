import React from 'react';
import Product from '../../components/Product/Product';
import useFetch from '../../hooks/useFetch';
import styles from './CustomerProducts.module.css';

const VALID_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2xpZW50ZSB6aWthIiwi
ZW1haWwiOiJjbGllbnRlQGhvdG1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc0NjgwNjUwLCJleH
AiOjE2NzY0MDg2NTB9.68xRy7oZC4RnwFBc0CSBxDBm3roI1h8l_OmAsckxxw4`;

const FETCH_OPTIONS = {
  method: 'get',
  endpoint: 'http://localhost:3001/products',
  options: { headers: { authorization: VALID_TOKEN } },
};
// [
//   {
//     id: 1,
//     name: 'Skol Lata 250ml',
//     price: 2.20,
//     url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
//   },
// ]

function CustomerProducts() {
  const [data, isLoading] = useFetch(FETCH_OPTIONS);
  const products = data?.data;
  console.log(products, isLoading);
  return (
    <div className={ styles['margin-container'] }>
      <div className={ styles.container }>
        <div className={ styles['products-container'] }>
          {!isLoading
            && products?.map((product) => (
              <Product product={ product } key={ product.id } />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerProducts;

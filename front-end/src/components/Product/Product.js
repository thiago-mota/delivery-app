import React from 'react';
import PropTypes from 'prop-types';
import QuantityControl from '../QuantityControl/QuantityControl';
import styles from './Product.module.css';

function Product({ product: { urlImage, price, name, id }}) {
  console.log(urlImage, 'xablau');
  return (
    <div className={styles['margin-container']}>
      <div className={ styles.container }>
        <span data-testid={`customer_products__element-card-price-${id}`}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </span>
        <img
          src={urlImage}
          alt={name}
          data-testid={`customer_products__img-card-bg-image-${id}`}
        />
        <div>
          <span data-testid={`customer_products__element-card-title-${id}`}>
            {name}
          </span>
          <QuantityControl id={ id } />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    urlImage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;

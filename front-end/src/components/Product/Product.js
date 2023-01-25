import React from 'react';
import PropTypes from 'prop-types';
import QuantityControl from '../QuantityControl/QuantityControl';

function Product({ url_image: urlImage, price, name, id }) {
  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </span>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div>
        <span
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </span>
        <QuantityControl id={ id } />
      </div>
    </div>
  );
}

Product.propTypes = {
  url_image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Product;

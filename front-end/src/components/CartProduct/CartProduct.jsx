import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/actions/cartActions';

function CartProduct({ product, index }) {
  const dispatch = useDispatch();
  const handleRemove = (productData) => {
    dispatch(removeItem(productData.id));
  };

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {product.name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {product.price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {(Number(product.price) * product.quantity).toFixed(2)}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <button
          type="button"
          onClick={ () => { handleRemove(product); } }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CartProduct.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartProduct;

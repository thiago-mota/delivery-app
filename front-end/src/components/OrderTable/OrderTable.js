import PropTypes from 'prop-types';
import React from 'react';
import { priceFormatter } from '../../utils/dataFormat';
import styles from './OrderTable.module.css';

function OrderTable({ products }) {
  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={ product.id }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {index}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${index}`
              }
            >
              {product.name}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {product.SalesProduct.quantity}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              {product.price}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {priceFormatter
                .format(parseFloat(product.price) * product.SalesProduct.quantity)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    SalesProduct: PropTypes.shape({
      productId: PropTypes.number.isRequired,
      saleId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default OrderTable;

import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function SaleCard({ order, role }) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;

  return (
    <Link className={ styles['link-card'] } to={ `/${role}/orders/${id}` }>
      <div className={ styles.container }>

        <div
          className={ styles.id }
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          <p>{`Pedido ${id}`}</p>
        </div>

        <div
          className={ styles.status }
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          <p>{status}</p>
        </div>

        <div className={ styles.orders }>
          <div className={ styles['order-data'] }>

            <p
              className={ styles['date-value'] }
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              { moment(saleDate).format('DD/MM/YYYY') }
            </p>

            <p
              className={ styles['date-value'] }
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {`R$ ${totalPrice}`.split('.').join(',')}
            </p>
          </div>

          { deliveryAddress && (
            <div
              className={ styles.address }
              data-testid={ `seller_orders__element-card-address-${id}` }
            >
              <p>{deliveryAddress}</p>
            </div>
          )}
        </div>

      </div>
    </Link>
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

export default SaleCard;

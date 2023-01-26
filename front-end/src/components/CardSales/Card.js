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
          data-testid={ `${id.dataTestId}${id}` }
        >
          <p>{`Pedido ${id}`}</p>
        </div>

        <div
          className={ styles.status }
          data-testid={ `${status.dataTestId}${id}` }
        >
          <p>{status}</p>
        </div>

        <div className={ styles.orders }>
          <div className={ styles['order-data'] }>

            <p
              className={ styles['date-value'] }
              data-testid={ `${saleDate.dataTestId}${id}` }
            >
              { moment(saleDate).format('DD/MM/YYYY') }
            </p>

            <p
              className={ styles['date-value'] }
              data-testid={ `${totalPrice.dataTestId}${id}` }
            >
              {`R$ ${totalPrice}`.split('.').join(',')}
            </p>
          </div>

          { deliveryAddress && (
            <div
              className={ styles.address }
              data-testid={ `${deliveryAddress.dataTestId}${id}` }
            >
              <p>{deliveryAddress}</p>
            </div>
          )}
        </div>

      </div>
    </Link>
  );
}

const itemProp = {
  dataTestId: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SaleCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.shape(itemProp),
    status: PropTypes.shape(itemProp),
    saleDate: PropTypes.shape(itemProp),
    totalPrice: PropTypes.shape(itemProp),
    deliveryAddress: PropTypes.shape(itemProp),
  }).isRequired,
  role: PropTypes.string.isRequired,
};
export default SaleCard;

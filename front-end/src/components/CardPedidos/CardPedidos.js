import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function SaleCard({ order, role }) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;

  return (
    <Link to={ `/${role}/orders/${id.text}` }>
      <li>
        <div data-testid={ `${id.dataTestId}${id.text}` }>{`Pedido ${id}`}</div>
        <div data-testid={ `${status.dataTestId}${id.text}` }>{status}</div>
        <div data-testid={ `${saleDate.dataTestId}${id.text}` }>
          { moment(saleDate).format('DD/MM/YYYY') }
        </div>
        <div data-testid={ `${totalPrice.dataTestId}${id.text}` }>
          {`${totalPrice}`.split('.').join(',')}
        </div>
        { deliveryAddress && (
          <div data-testid={ `${deliveryAddress.dataTestId}${id.text}` }>
            {deliveryAddress}
          </div>
        )}
      </li>
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

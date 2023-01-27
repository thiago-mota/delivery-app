import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuantityControl.module.css';

function QuantityControl({ id }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevState) => (prevState ? prevState - 1 : 0));
  };

  const handleQuantity = ({ target: { value } }) => {
    setQuantity(() => {
      if (value < 0) {
        return 0;
      }
      return +value;
    });
  };

  return (
    <div className={ styles.container }>
      <button
        type="button"
        onClick={ handleDecrement }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        className={ styles['quantity-controller'] }
      >
        -
      </button>
      <input
        className={ styles['quantity-display'] }
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="text"
        name="quantity"
        value={ quantity }
        onChange={ handleQuantity }
      />
      <button
        type="button"
        onClick={ handleIncrement }
        data-testid={ `customer_products__button-card-add-item-${id}` }
        className={ styles['quantity-controller'] }
      >
        +
      </button>
    </div>
  );
}

QuantityControl.propTypes = {
  id: PropTypes.number.isRequired,
};

export default QuantityControl;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CheckoutForms() {
  const [isError, setIsError] = useState([]);
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      address: '',
      number: '',
    },
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <section>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <label htmlFor="text">
            Endereço
            <input
              type="text"
              id="text"
              data-testid="customer_checkout__input-address"
              { ...register('address', {
                required: 'Please put an email!',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Please enter a valid email!',
                },
              }) }
            />
          </label>
          <label htmlFor="text">
            Número
            <input
              type="text"
              id="text"
              data-testid="customer_checkout__input-address-number"
              { ...register('number', {
                required: 'Número é obrigatório',
                pattern: {
                  value: /[0-9]/,
                  message: 'Coloque um número válido',
                },
              }) }
            />
          </label>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            disabled={ !isValid }
          >
            FINALIZAR PEDIDO
          </button>
        </form>
      </section>
    </div>
  );
}

export default CheckoutForms;

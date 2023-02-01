import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OrderTable from '../../components/OrderTable/OrderTable';
import useFetch from '../../hooks/useFetch';
import { priceFormatter } from '../../utils/dataFormat';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './OrderDetail.module.css';

const numberFormatter = new Intl.NumberFormat('pt-BR', {
  minimumIntegerDigits: 4,
  useGrouping: false,
});

const DATA_TESTID = {
  orderId: 'customer_order_details__element-order-details-label-order-id',
  seller: 'customer_order_details__element-order-details-label-seller-name',
  date: 'customer_order_details__element-order-details-label-order-date',
  status: 'customer_order_details__element-order-details-label-delivery-status',
  submit: 'customer_order_details__button-delivery-check',
};

const dateFormatter = new Intl.DateTimeFormat('pt-br');
function OrderDetail() {
  const {
    params: { id },
  } = useRouteMatch();
  const fetchOptions = useMemo(
    () => ({
      method: 'get',
      url: `http://localhost:3001/customer/orders/${id}`,
      headers: { Authorization: getLocalStorage('user')?.token },
    }),
    [id],
  );
  const [{ data }, isLoading] = useFetch(fetchOptions);
  console.log(data);
  if (isLoading) { return <span>Loading...</span>; }
  return (
    <div>
      <Header />
      <h2 className={ styles.title }>Detalhes do Pedido</h2>
      <section className={ styles.container }>
        <div className={ styles.head }>
          <div className={ styles.pedido }>
            <span>{'Pedido '}</span>
            <span data-testid={ DATA_TESTID.orderId }>
              {numberFormatter.format(data[0].id)}
            </span>
          </div>
          <span className={ styles.name } data-testid={ DATA_TESTID.seller }>
            {data[0].seller.name}
          </span>
          <span className={ styles.date } data-testid={ DATA_TESTID.date }>
            {dateFormatter.format(new Date(data[0].saleDate))}
          </span>
          <span
            className={ styles.status }
            data-testid={ DATA_TESTID.status }
          >
            {data[0].status}
          </span>
          <button
            className={ styles.button }
            data-testid={ DATA_TESTID.submit }
            type="button"
            disabled={ data[0].status !== 'Em Trânsito' }
            onClick={ () => console.log('ouch') }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <OrderTable products={ data[0].products } />
        <div className={ styles.total }>
          <span data-testid="customer_order_details__element-order-total-price">
            {priceFormatter.format(data[0].totalPrice)}
          </span>
        </div>
      </section>
    </div>
  );
}

export default OrderDetail;

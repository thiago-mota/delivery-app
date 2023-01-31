import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useFetch from '../../hooks/useFetch';
import { getLocalStorage } from '../../utils/localStorage';

function OrderDetail() {
  const { params: { id }} = useRouteMatch();
  const fetchOptions = useMemo(
    () => ({
      method: 'get',
      url: `http://localhost:3001/customer/orders/${id}`,
      headers: { Authorization: getLocalStorage('user')?.token },
    }),
    [id],
  );
  const [data, isLoading] = useFetch(fetchOptions);
  console.log(data);

  return (
    <div>
      <Header />
      <h2>Detalhes do Pedido</h2>
      <section>
        <div>
          <span>{'Pedido '}</span>
          {/* <span>{}</span> */}
        </div>
      </section>
    </div>
  );
}

export default OrderDetail;

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../../components/CartProduct/CartProduct';
import CheckoutForms from '../../components/CheckoutForms/CheckoutForms';
import Header from '../../components/Header/Header';
import calculateTotalPrice from '../../utils/calculateTotalPrice';

function CustomerCheckout() {
  const { cartProducts } = useSelector((store) => store.cart);
  const totalPrice = useMemo(() => calculateTotalPrice(cartProducts), [cartProducts]);
  console.log(totalPrice);
  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <CartProduct product={ product } index={ index } key={ product.id } />
          ))}
        </tbody>
      </table>
      <div>
        <h3>
          {'Total: R$ '}
          <span>{totalPrice}</span>
        </h3>
      </div>
      <CheckoutForms />
      <section />
    </div>
  );
}

export default CustomerCheckout;

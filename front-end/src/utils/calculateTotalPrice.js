const calculateTotalPrice = (cartProducts) => new Intl
  .NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    cartProducts.reduce(
      (sum, cartProduct) => sum + parseFloat(cartProduct.price) * cartProduct.quantity,
      0,
    ),
  );

export default calculateTotalPrice;

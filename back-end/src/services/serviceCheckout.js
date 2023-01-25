const jwt = require('jsonwebtoken');
const { Sale, SalesProduct } = require('../database/models');

const decodeToken = async (token) => {
  const decodedToken = jwt.decode(token);
  return decodedToken;
};

const createSaleProducts = async (products, saleId) => {
  console.log(products);
  Promise.all(
    products.map(async ({ productId, quantity }) => {
      await SalesProduct.create({ saleId, productId, quantity });
    }),
  );
};

const createSale = async (body, token) => {
  try {
    const decode = await decodeToken(token);
    const { status, products, sellerId, totalPrice, deliveryAddress, deliveryNumber } = body;
    const date = new Date();
    const statusMessage = status || 'Pendente';
    const data = await Sale.create({
      userId: decode.userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: date,
      status: statusMessage });
    await createSaleProducts(products, data.id);
    return { data };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createSale,
};
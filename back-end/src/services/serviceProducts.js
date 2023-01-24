const { Product } = require('../database/models');

const getAllService = async () => {
  const products = await Product.findAll();

  return products;
};

module.exports = {
  getAllService,
};
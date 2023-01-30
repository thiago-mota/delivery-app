'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('sales_products',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 10,
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 20,
      },
      {
        sale_id: 3,
        product_id: 3,
        quantity: 30,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('sales_products', null, {}),
};
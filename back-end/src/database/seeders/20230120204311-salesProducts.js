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
        sale_id: 1,
        product_id: 2,
        quantity: 10,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('sales_products', null, {}),
};
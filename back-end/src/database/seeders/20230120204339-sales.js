'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('sales',
    [
      {
        user_id: 2,
        seller_id: 1,
        total_price: 22.81,
        delivery_address: "Rua Irmãos Monteiro, Bairo Pedras",
        delivery_number: "851",
        // saleDate: Date(04/08/2021),
        status: "Pendente"
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('sales', null, {}),
};
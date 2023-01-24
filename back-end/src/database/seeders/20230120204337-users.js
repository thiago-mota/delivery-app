'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer',
      },
      {
        id: 4,
        name: 'Dona Tereza',
        email: 'adm@hotmail.com',
        password: '994242de3894f53ac7bc9d6c56364b2a', //Senha: 1234567Aa
        role: 'administrator',
      },
      {
        id: 5,
        name: 'Cliente zika',
        email: 'cliente@hotmail.com',
        password: '0dced281d75c3f1d2352bb28454ebc46', //Senha: 1234567Bb
        role: 'customer',
      },
      {
        id: 6,
        name: 'Vendedor zika',
        email: 'vendedor@hotmail.com',
        password: 'fee8bc8bb31d184765fa7f7886257cfb', //Senha: 1234567Cb
        role: 'seller',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
const express = require('express');
const controllerCheckout = require('../controllers/controllerCheckout');

const routers = express.Router();

routers.post('/customer/checkout', controllerCheckout.requestId);
routers.get('/checkout', controllerCheckout.getAll);
routers.put('/checkout/:id', controllerCheckout.updateStatus);

module.exports = routers;

// "devo fazer um post para pegar um valor de ID ou seja "findOne" que sera uma request do front para mecher na api, devendo ser validada pelo token retornando 201-created, e apos isso o validador verificara se o endereço da url será o mesmo do request"
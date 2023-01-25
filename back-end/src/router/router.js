const express = require('express');
const { authorizationToken } = require('../middlewares/authorizationToken');
// const errorMiddleware = require('../middlewares/errorMiddleware');
const routeLogin = require('./routerLogin');
const routeRegister = require('./routerUser');
const routeProducts = require('./routerProducts');
const routeCheckout = require('./routerCheckout');

const routers = express.Router();

routers.use('/login', routeLogin);
routers.use('/register', routeRegister);

routers.use(authorizationToken);
routers.use('/customer/checkout', routeCheckout);
routers.use('/customer/products', routeProducts);

module.exports = routers;

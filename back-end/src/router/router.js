const express = require('express');
// const { authorizationToken } = require('../middlewares/authorizationToken');
const errorMiddleware = require('../middlewares/errorMiddleware');
const routeLogin = require('./routerLogin');
const routeRegister = require('./routerUser');
const routeProducts = require('./routerProducts');

const routers = express.Router();

routers.use('/login', routeLogin);
routers.use('/register', routeRegister);
routers.use('/products', routeProducts);

// routers.use(authorizationToken);
routers.use(errorMiddleware);

module.exports = routers;

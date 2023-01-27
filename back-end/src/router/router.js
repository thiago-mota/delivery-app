const express = require('express');
const { authorizationToken } = require('../middlewares/authorizationToken');
const errorMiddleware = require('../middlewares/errorMiddleware');
const routeLogin = require('./routerLogin');
const routeUsers = require('./routerUser');
const routeProducts = require('./routerProducts');

const routers = express.Router();

routers.use('/login', routeLogin);
routers.use('/users', routeUsers);
routers.use('/products', routeProducts);

routers.use(errorMiddleware);
routers.use(authorizationToken);

module.exports = routers;

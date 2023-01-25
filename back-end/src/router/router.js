const express = require('express');
// const { authorizationToken } = require('../middlewares/authorizationToken');
const routeLogin = require('./routerLogin');
const routeUsers = require('./routerUser');
const routeProducts = require('./routerProducts');

const routers = express.Router();

routers.use('/login', routeLogin);
routers.use('/users', routeUsers);
routers.use('/products', routeProducts);

// routers.use(authorizationToken);

module.exports = routers;
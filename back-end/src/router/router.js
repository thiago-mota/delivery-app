const express = require('express');
const { authorizationToken } = require('../middlewares/authorizationToken');
const routeLogin = require('./routerLogin');
const routeRegister = require('./routerUser');

const routers = express.Router();

routers.use('/login', routeLogin);
routers.use('/register', routeRegister);

routers.use(authorizationToken);

module.exports = routers;
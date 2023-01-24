const express = require('express');
const controllerLogin = require('../controllers/controllerLogin');

const routers = express.Router();

routers.post('/', controllerLogin.login);

module.exports = routers;

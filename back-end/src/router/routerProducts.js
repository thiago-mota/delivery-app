const express = require('express');
const controllerProducts = require('../controllers/controllerProducts');

const routers = express.Router();

routers.get('/', controllerProducts.getAll);

module.exports = routers;

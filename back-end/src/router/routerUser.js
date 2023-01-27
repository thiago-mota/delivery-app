const express = require('express');
const controllerUser = require('../controllers/controllerUser');

const routers = express.Router();

routers.post('/', controllerUser.create);
routers.get('/', controllerUser.getAll);
routers.delete('/', controllerUser.deleteUser);

module.exports = routers;

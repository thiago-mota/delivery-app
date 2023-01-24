const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models/index');

const jwtConfig = {
  expiresIn: '20D',
  algorithm: 'HS256',
};

const secretKey = 'secret_key';

const existenceUser = async ({ email, password }) => User.findOne({
  where: { email, password },
});

const loginService = async ({ email, password }) => {
  const newPassword = md5(password);
  const checkUser = await existenceUser({ email, password: newPassword });
  const userData = { 
    id: checkUser.id, name: checkUser.name, email: checkUser.email, role: checkUser.role,
  };
  const token = jwt.sign(userData, secretKey, jwtConfig);
  return { token };
};

module.exports = {
  loginService,
};
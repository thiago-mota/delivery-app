const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models/index');
const ErrorGenerator = require('../utils/errorGenerator');


const jwtConfig = {
  expiresIn: '20D',
  algorithm: 'HS256',
};

const secretKey = 'secret_key';

const existenceUser = async ({ email, password }) => User.findOne({
  where: { email, password },
});

const findUserbyEmail = async ({ email }) => User.findOne({
  where: { email },
});

const isBadRequest = ({email, password}) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
  return isValidEmail.test(email) && password.length > 6;
}

const loginService = async ({ email, password }) => {
  const requestType = isBadRequest({ email, password });
  
  if (!requestType) throw new ErrorGenerator(403, "bad request")
  
  const user = await findUserbyEmail({ email });
  if (!user) throw new ErrorGenerator(404, "user not found");
   
  const newPassword = md5(password);
  if (user.password !== newPassword) throw new ErrorGenerator(401, "wrong password");
  const checkUser = await existenceUser({ email, password: newPassword });
  const response = { 
    name: checkUser.name, email: checkUser.email, role: checkUser.role,
  };
  const token = jwt.sign(response, secretKey, jwtConfig);
  return { ...response, token };
};

module.exports = {
  loginService,
};

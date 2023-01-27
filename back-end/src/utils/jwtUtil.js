const jwt = require('jsonwebtoken');
require('dotenv/config');

const createToken = (data) => {
  const token = jwt.sign({ data }, 'secret_key', {
    expiresIn: "99d",
    algorithm: "HS256",
  });
  console.log('createToken', token);
  return token;
};

const validatedToken = (token) => {
  try {
    const { data } = jwt.verify(token, 'secret_key');
    console.log('verify', data);
    return data;
  } catch (_e) {
    const error = new Error('Token Invalido');
    return error;
  }
};

module.exports = {
  validatedToken,
  createToken,
};
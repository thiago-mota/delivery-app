// const jwt = require('jsonwebtoken');
// require('dotenv/config');

// const createToken = (data) => {
//   const token = jwt.sign({ data }, process.env.JWT_SECRET, {
//     expiresIn: '2d',
//     algorithm: 'HS256',
//   });
//   return token;
// };

// const validatedToken = (token) => {
//   try {
//     const { data } = jwt.verify(token, process.env.JWT_SECRET);
//     return data;
//   } catch (_e) {
//     const error = new Error('Token Invalido');
//     return error;
//   }
// };

// module.exports = {
//   validatedToken,
//   createToken,
// };
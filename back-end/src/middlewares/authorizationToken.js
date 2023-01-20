const jwtUtil = require('../utils/jwlUtils');

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token é obrigatório');
    throw e;
  }

  const user = jwtUtil.validatedToken(token);
  return user;
};

const authorizationToken = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const user = validateToken(authorization);
  req.user = user;

  next();
};

module.exports = {
  authorizationToken,
  validateToken,
};

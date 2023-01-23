const { User } = require('../database/models');
const md5 = require('md5');
const tokenGenerator = require('../middlewares/authorizationToken');

const createService = async (name, email, password) => {
  const newPassword = md5(password);
  const newUser = await User.create({ name, email, newPassword });
  const token = tokenGenerator(newUser);

  return { token };
};

module.exports = {
  createService,
};
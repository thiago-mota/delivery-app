const md5 = require('md5');
const { User } = require('../database/models');
const tokenGenerator = require('../middlewares/tokenGenerator');
const existenceEmail = require('../middlewares/existenceEmail');

const createService = async ({ name, email, password, role }) => {
  await existenceEmail(email);
  const newPassword = md5(password);
  const newUser = await User.create({ name, email, password: newPassword, role });
  const token = tokenGenerator(newUser);
  return { token };
};

const getAllService = async () => {
  const users = await User.findAll();

  return users;
};

const getByIdService = async (id) => {
  const deleteUserId = await User.destroy({ where: { id } });
  return deleteUserId;
};

module.exports = {
  createService,
  getAllService,
  getByIdService,
};
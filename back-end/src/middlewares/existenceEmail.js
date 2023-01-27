const { User } = require('../database/models/index');

const existenceEmail = async (email) => User.findOne({
  where: { email },
});

module.exports = async (email) => {
  const check = await existenceEmail(email);
  if (check !== null) {
    const message = 'User already registered';
    throw new Error(message);
  }
};
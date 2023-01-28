const ServiceLogin = require('../services/serviceLogin');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const newLogin = await ServiceLogin.loginService({ email, password });
    console.log(newLogin, 'aaaa');
    return res.status(200).json({ message: 'success', response: newLogin, token: newLogin.token });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };

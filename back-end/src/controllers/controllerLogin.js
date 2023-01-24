const ServiceLogin = require('../services/serviceLogin');

const login = async (req, res) => {
    const { email, password } = req.body;
    const newLogin = await ServiceLogin.loginService({ email, password });
    return res.status(200).json(newLogin);
};

module.exports = { login };
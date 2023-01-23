const ServiceRegister = require('../services/serviceRegister');

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await ServiceRegister.createService(name, email, password);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: erro });
  }
};

module.exports = {
  create,
};
const ServiceUser = require('../services/serviceUser');

const create = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await ServiceUser.createService({
      name,
      email,
      password,
      role: role || 'customer',
    });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'User already registered' });
  }
};

module.exports = {
  create,
};
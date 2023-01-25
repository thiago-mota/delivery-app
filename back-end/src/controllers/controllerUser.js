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

    return res.status(201).json({ response: newUser });
  } catch (e) {
    console.log(e.message);
    if (e.message === 'User already registered') {
      return res.status(409).json({ message: e.message });
    }
    res.status(404).json({ message: e.message });
  }
};

module.exports = {
  create,
};
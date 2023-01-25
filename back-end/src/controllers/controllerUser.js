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

const getAll = async (_req, res) => {
  try {
    const users = await ServiceUser.getAllService();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await ServiceUser.getByIdService(id);
    res.status(200).end();
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports = {
  create,
  getAll,
  deleteUser,
};
const serviceCheckout = require('../services/serviceCheckout');

const requestId = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const data = await serviceCheckout.createSale(req.body, token);
    return res.status(201).json({ message: 'created', response: data });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAll = async (_req, res) => {
  try {
    const sales = await serviceCheckout.getAllService();
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { requestId, getAll };

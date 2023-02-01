const serviceCheckout = require('../services/serviceCheckout');

const ERROR_MESSAGE = 'Ocorreu um erro';
const requestId = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const data = await serviceCheckout.createSale(req.body, token);
    return res.status(201).json({ message: 'created', response: data });
    // const body = req.body;
    // console.log(body);
    // return res.status(201).json({ body });
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
    res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedStatus = await serviceCheckout.updateStatusService(id, status);

    res.status(200).json(updatedStatus);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await serviceCheckout.getOneService(id);
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: ERROR_MESSAGE });
  }
};

module.exports = { requestId, getAll, getOne, updateStatus };

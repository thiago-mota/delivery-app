const serviceCheckout = require('../services/serviceCheckout');

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
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

<<<<<<< HEAD

module.exports = { requestId, getAll };
=======
const updateStatus = async (req, res) => {
  try { 
    const { id } = req.params;
    const { status } = req.body;

    const updatedStatus = await serviceCheckout.updateStatusService(id, status);

    res.status(200).json(updatedStatus);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { requestId, getAll, updateStatus };
>>>>>>> 2b40d35f0a9d7965ba28c154d5ed834773ebc685

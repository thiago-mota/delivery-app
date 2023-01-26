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

module.exports = { requestId };

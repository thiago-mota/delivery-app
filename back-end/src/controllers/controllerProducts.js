const ServiceProducts = require('../services/serviceProducts');

const getAll = async (_req, res) => {
  try {
    console.log(_req.headers);
    const products = await ServiceProducts.getAllService();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};
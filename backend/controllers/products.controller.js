const Product = require('../models/product.model');

const getProducts = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({
        error: {
          message: 'Product not found!',
        },
      });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
};

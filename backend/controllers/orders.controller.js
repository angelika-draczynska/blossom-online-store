const Order = require('../models/order.model');

const postOrder = async (req, res) => {
  try {
    const post = new Order({ ...req.body });
    await post.save();
    res.status(201).json({
      post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOrders = async (req, res) => {
  try {
    res.json(await Order.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  postOrder,
  getOrders,
};

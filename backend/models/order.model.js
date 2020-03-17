const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      note: {
        type: String,
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  user: {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);

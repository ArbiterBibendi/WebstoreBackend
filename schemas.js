const { default: mongoose } = require("mongoose");

module.exports.inventorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });

  module.exports.transactionSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    }, 
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }
  })
  module.exports.orderSchema = new mongoose.Schema({
    transaction_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Processing" // shipped, delivered
    }
  })
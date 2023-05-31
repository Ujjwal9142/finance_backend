const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    productIds: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);

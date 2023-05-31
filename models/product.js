const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  price: {
    type: String,
    required: true,
  },
  expense: {
    type: String,
    required: true,
  },
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
});

module.exports = mongoose.model('Product', productSchema);

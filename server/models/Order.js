const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: Array,
  total: Number,
  gst: Number,
  finalTotal: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);


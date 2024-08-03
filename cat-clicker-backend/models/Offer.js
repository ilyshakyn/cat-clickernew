const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Offer', OfferSchema);

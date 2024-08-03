const mongoose = require('mongoose');

const UpgradeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  bonus: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Upgrade', UpgradeSchema);

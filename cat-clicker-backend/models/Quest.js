const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
  description: { type: String, required: true },
  reward: { type: Number, required: true },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Quest', QuestSchema);

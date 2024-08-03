const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  reward: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Achievement', AchievementSchema);

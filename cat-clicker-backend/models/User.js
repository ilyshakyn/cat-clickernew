const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  energy: { type: Number, default: 2000 },
});

module.exports = mongoose.model('User', UserSchema);

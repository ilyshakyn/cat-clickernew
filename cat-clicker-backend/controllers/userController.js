const User = require('../models/User');

const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    let user = new User({ username });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  const { username } = req.query;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  getUser,
};

const Achievement = require('../models/Achievement');

exports.getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find({ user: req.params.userId });
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAchievement = async (req, res) => {
  const achievement = new Achievement({
    title: req.body.title,
    description: req.body.description,
    reward: req.body.reward,
    user: req.body.user
  });
  try {
    const newAchievement = await achievement.save();
    res.status(201).json(newAchievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

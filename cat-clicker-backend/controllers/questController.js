const Quest = require('../models/Quest');

const getQuests = async (req, res) => {
  try {
    const quests = await Quest.find({ user: req.params.userId });
    res.json(quests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createQuest = async (req, res) => {
  const quest = new Quest({
    description: req.body.description,
    reward: req.body.reward,
    user: req.body.userId
  });
  try {
    const newQuest = await quest.save();
    res.status(201).json(newQuest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getQuests, createQuest };

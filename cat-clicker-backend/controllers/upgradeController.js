const Upgrade = require('../models/Upgrade');

const getUpgrades = async (req, res) => {
  try {
    const upgrades = await Upgrade.find({ user: req.params.userId });
    res.json(upgrades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUpgrade = async (req, res) => {
  const upgrade = new Upgrade({
    name: req.body.name,
    cost: req.body.cost,
    bonus: req.body.bonus,
    user: req.body.userId
  });
  try {
    const newUpgrade = await upgrade.save();
    res.status(201).json(newUpgrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getUpgrades, createUpgrade };

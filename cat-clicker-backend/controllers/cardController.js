const Card = require('../models/Card');

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({ user: req.params.userId });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCard = async (req, res) => {
  const card = new Card({
    name: req.body.name,
    cost: req.body.cost,
    bonus: req.body.bonus,
    user: req.body.user
  });
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

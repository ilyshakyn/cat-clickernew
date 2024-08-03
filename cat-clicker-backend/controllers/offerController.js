const Offer = require('../models/Offer');

exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find({ user: req.params.userId });
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOffer = async (req, res) => {
  const offer = new Offer({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    user: req.body.user
  });
  try {
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

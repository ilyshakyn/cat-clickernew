const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ user: req.params.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createItem = async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    user: req.body.user
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

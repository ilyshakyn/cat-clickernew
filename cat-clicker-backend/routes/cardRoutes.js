const express = require('express');
const router = express.Router();
const { getCards, createCard } = require('../controllers/cardController');

router.get('/:userId', getCards);
router.post('/', createCard);

module.exports = router;

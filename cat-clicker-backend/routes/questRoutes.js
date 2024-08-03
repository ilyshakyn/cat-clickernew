const express = require('express');
const router = express.Router();
const { getQuests, createQuest } = require('../controllers/questController');

router.get('/:userId', getQuests);
router.post('/', createQuest);

module.exports = router;

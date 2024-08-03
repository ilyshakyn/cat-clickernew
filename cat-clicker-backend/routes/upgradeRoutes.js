const express = require('express');
const router = express.Router();
const { getUpgrades, createUpgrade } = require('../controllers/upgradeController');

router.get('/:userId', getUpgrades);
router.post('/', createUpgrade);

module.exports = router;

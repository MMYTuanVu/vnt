const express = require('express');
const router = express.Router();
//part
const baogiaController = require('../../app/controllers/QTV/BaogiaController.js');

router.post('/x', baogiaController.index);

module.exports = router;

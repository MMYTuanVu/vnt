const express = require('express');
const router = express.Router();
//part
const test = require('../../app/controllers/QTV/testController.js');

router.get('/api', test.test);

module.exports = router;

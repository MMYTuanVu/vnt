const express = require('express');
const router = express.Router();
//part
const addMysqlController = require('../../app/controllers/QTV/AddMysqlController.js');

router.post('/add', addMysqlController.hotel);

module.exports = router;

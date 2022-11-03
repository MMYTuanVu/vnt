const express = require('express');
const router = express.Router();
//part
const createHanhtrinh = require('../../app/controllers/QTV/createHanhtrinh.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/create-hanh-trinh/one-page', checkConnect.checkLink, checkConnect.LinkConnect, createHanhtrinh.index);

module.exports = router;

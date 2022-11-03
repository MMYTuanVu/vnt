const express = require('express');
const router = express.Router();
//part
const hotelController = require('../../app/controllers/QTV/hotelController.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/hotel/allpages', checkConnect.checkLink, checkConnect.LinkConnect, hotelController.page);
router.post('/hotel/edit/children', checkConnect.PostCheckLink, checkConnect.PostLinkConnect, hotelController.edit);
router.get('/search/hotel', checkConnect.checkLink, checkConnect.LinkConnect, hotelController.search);
module.exports = router;

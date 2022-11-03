const express = require('express');
const router = express.Router();
//part
const golfController = require('../../app/controllers/QTV/golfController.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/golf/allpages', checkConnect.checkLink, checkConnect.LinkConnect, golfController.page);
router.post('/golf/edit/children', checkConnect.PostCheckLink, checkConnect.PostLinkConnect, golfController.edit);
router.get('/search/golf', checkConnect.checkLink, checkConnect.LinkConnect, golfController.search);

module.exports = router;

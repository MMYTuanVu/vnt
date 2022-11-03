const express = require('express');
const router = express.Router();
//part
const hdvController = require('../../app/controllers/QTV/hdvController.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/hdv/allpages', checkConnect.checkLink, checkConnect.LinkConnect, hdvController.page);
router.post('/hdv/edit/children', checkConnect.PostCheckLink, checkConnect.PostLinkConnect, hdvController.edit);
router.get('/search/hdv', checkConnect.checkLink, checkConnect.LinkConnect, hdvController.search);
module.exports = router;

const express = require('express');
const router = express.Router();
//part
const nhaXeController = require('../../app/controllers/QTV/nhaxeController.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/nha-xe/allpages', checkConnect.checkLink, checkConnect.LinkConnect, nhaXeController.page);
router.post('/nha-xe/edit/children', checkConnect.PostCheckLink, checkConnect.PostLinkConnect, nhaXeController.edit);
router.get('/search/nha-xe', checkConnect.checkLink, checkConnect.LinkConnect, nhaXeController.search);

module.exports = router;

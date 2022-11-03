const express = require('express');
const router = express.Router();
//part
const dichVuAnUong = require('../../app/controllers/QTV/dichVuAnUong.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/dichvu-anuong/allpages', checkConnect.checkLink, checkConnect.LinkConnect, dichVuAnUong.page);

router.post(
  '/dichvu-anuong/edit/children',
  checkConnect.PostCheckLink,
  checkConnect.PostLinkConnect,
  dichVuAnUong.edit,
);

router.get('/search/dichvu-anuong', checkConnect.checkLink, checkConnect.LinkConnect, dichVuAnUong.search);

module.exports = router;

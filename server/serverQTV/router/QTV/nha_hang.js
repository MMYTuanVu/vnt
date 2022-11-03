const express = require('express');
const router = express.Router();
//part
const nha_hangController = require('../../app/controllers/QTV/nha_hangController.js');
const checkConnect = require('../../app/controllers/QTV/CheckConnect.js');

router.get('/nha-hang/allpages', checkConnect.checkLink, checkConnect.LinkConnect, nha_hangController.page);
router.post(
  '/nha-hang/edit/children',
  checkConnect.PostCheckLink,
  checkConnect.PostLinkConnect,
  nha_hangController.edit,
);
router.get('/search/nha-hang', checkConnect.checkLink, checkConnect.LinkConnect, nha_hangController.search);
module.exports = router;

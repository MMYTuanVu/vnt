const express = require('express');
const router = express.Router();
//part
const ConnectedController = require('../../app/controllers/QTV/CheckConnect.js');

router.get(
  '/check/connect',
  ConnectedController.checkLink,
  ConnectedController.LinkConnect,
  ConnectedController.connectPages,
);

module.exports = router;

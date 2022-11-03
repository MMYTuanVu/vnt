const express = require('express');
const router = express.Router();
//part
const loginController = require('../../app/controllers/QTV/LoginController.js');

router.get('/check_cookie/enable', loginController.checkClientCookie, loginController.checkTokenKey);
router.post('/login', loginController.checkAccountSV, loginController.checkAcount);

module.exports = router;

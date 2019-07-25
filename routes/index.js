const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const deviceController = require('../controller/deviceController');

const apnController = require('../controller/apnController');

const User = require('../models/user');

router.post('/user',userController.addUser);
router.get('/profile/:user_id',userController.getUser);
router.post('/device',deviceController.addDevice)
router.get('/apn/new/:user_id', apnController.sendPushNotification);

module.exports = router;

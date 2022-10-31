const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');



router.get('/user', userController.getListUser);
router.post('/user/create', userController.postUser);


module.exports = router;

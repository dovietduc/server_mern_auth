const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const authMiddleware = require('../Middeware/AuthMiddleware');



router.get('/user', [
    authMiddleware.isAuthentication
], userController.getListUser);

router.post('/user/create', [
    authMiddleware.isAuthentication,
    authMiddleware.isAdmin
], userController.postUser);


module.exports = router;

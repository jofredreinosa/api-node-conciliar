'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const userController = require('../controllers/userController');

routes.post('/signup', userController.signUp);
routes.post('/signin', userController.signIn);

module.exports = routes;
'use strict'
const express = require('express');
const transactionRoutes = express.Router();
const auth = require('../middlewares/auth');

const transactionController = require('../controllers/transactionController');

/* Rutas para transacciones */
transactionRoutes.post('/transactions', transactionController.create);

module.exports = transactionRoutes;
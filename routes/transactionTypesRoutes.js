'use strict'
const express = require('express');
const transactionTypeRoutes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypeController = require('../controllers/transactionTypeController');

/* Rutas para tipos de transacción */
transactionTypeRoutes.get('/transactiontypes', transactionTypeController.getAll);
transactionTypeRoutes.get('/transactiontypes/:id', transactionTypeController.getOne);
transactionTypeRoutes.post('/transactiontypes', transactionTypeController.create);
transactionTypeRoutes.put('/transactiontypes/:id', transactionTypeController.update);
transactionTypeRoutes.delete('/transactiontypes/:id', transactionTypeController.remove);

module.exports = transactionTypeRoutes;
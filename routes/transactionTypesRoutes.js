'use strict'
const express = require('express');
const transactionTypeRroutes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypeController = require('../controllers/transactionTypeController');

/* Rutas para tipos de transacción */
transactionTypeRroutes.get('/transactiontypes', transactionTypeController.getAll);
transactionTypeRroutes.get('/transactiontypes/:id', transactionTypeController.getOne);
transactionTypeRroutes.post('/transactiontypes', transactionTypeController.create);
transactionTypeRroutes.put('/transactiontypes/:id', transactionTypeController.update);
transactionTypeRroutes.delete('/transactiontypes/:id', transactionTypeController.remove);

module.exports = transactionTypeRroutes;
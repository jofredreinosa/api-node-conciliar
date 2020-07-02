'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypeController = require('../controllers/transactionTypeController');

/* Rutas para tipos de transacción */
routes.get('/transactiontypes', transactionTypeController.getAll);
routes.get('/transactiontypes/:id', transactionTypeController.getOne);
routes.post('/transactiontypes', transactionTypeController.create);
routes.put('/transactiontypes/:id', transactionTypeController.update);
routes.delete('/transactiontypes/:id', transactionTypeController.remove);

module.exports = routes;
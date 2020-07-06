'use strict'
const express = require('express');
const accountRoutes = express.Router();
const auth = require('../middlewares/auth');

const accountsController = require('../controllers/accountsController');

/* Rutas para tipos de transacción */
accountRoutes.get('/accounts', accountsController.getAll);
accountRoutes.get('/accounts/:id', accountsController.getOne);
accountRoutes.post('/accounts', accountsController.create);
accountRoutes.put('/accounts/:id', accountsController.update);
accountRoutes.delete('/accounts/:id', accountsController.remove);

module.exports = accountRoutes;
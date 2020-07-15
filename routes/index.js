'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypesRoutes = require('./transactionTypesRoutes');
const userRoutes = require('./userRoutes');
const accountRoutes = require('./accountsRoutes');
const transactionRoutes = require('./transactionRoutes');

routes.use(transactionTypesRoutes);
routes.use(userRoutes);
routes.use(accountRoutes);
routes.use(transactionRoutes);

module.exports = routes;
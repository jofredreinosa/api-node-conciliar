'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypesRoutes = require('./transactionTypesRoutes');
const userRoutes = require('./userRoutes');
const accountRoutes = require('./accountsRoutes');
const transactionRoutes = require('./transactionRoutes');
const settingsRoutes = require('./settingsRoutes');

routes.use(transactionTypesRoutes);
routes.use(userRoutes);
routes.use(accountRoutes);
routes.use(transactionRoutes);
routes.use(settingsRoutes);

module.exports = routes;
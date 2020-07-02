'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypesRoutes = require('./transactionTypesRoutes');
const userRoutes = require('./userRoutes');

routes.use(transactionTypesRoutes);
routes.use(userRoutes);

module.exports = routes;
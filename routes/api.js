'use strict';

const appconfig = require('../appconfig');
const authentication = require('../middlewares/auth');
const accountsRoutes = require('./accountsRoutes');
const transactionTypesRoutes = require('./transactionTypesRoutes');
const userRoutes = require('./userRoutes');

const api = app => {
	const basePath = appconfig.basePath;
  app.use(`${basePath}/transactiontypes`, transactionTypesRoutes);
  app.use(`${basePath}/accounts`, accountsRoutes);
  app.use(`${basePath}/users`, userRoutes);
};

module.exports = api;

'use strict';

const appconfig = require('../appconfig');
const authentication = require('../middlewares/auth');
const transactionTypesRoutes = require('./transactionTypesRoutes');
const userRoutes = require('./userRoutes');

const api = app => {
	const basePath = appconfig.basePath;
  app.use(`${basePath}/transactiontypes`, transactionTypesRoutes);
  app.use(`${basePath}/users`, userRoutes);
};

module.exports = api;

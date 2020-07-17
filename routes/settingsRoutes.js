'use strict'
const express = require('express');
const settingRoutes = express.Router();
const auth = require('../middlewares/auth');

const settingsController = require('../controllers/settingsController');

/* Rutas para tipos de transacción */
settingRoutes.get('/settings', settingsController.getAll);
settingRoutes.put('/settings/:id', settingsController.update);

module.exports = settingRoutes;
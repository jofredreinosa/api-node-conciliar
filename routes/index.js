'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const transactionTypeController = require('../controllers/transactionTypeController');
const userController = require('../controllers/userController');

/* Rutas para tipos de transacción */
routes.get('/transactiontypes', transactionTypeController.getAll);
routes.get('/transactiontypes/:id', transactionTypeController.getOne);
routes.post('/transactiontypes', transactionTypeController.create);
routes.put('/transactiontypes/:id', transactionTypeController.update);
routes.delete('/transactiontypes/:id', transactionTypeController.remove);

routes.get('/private' , auth.isAuth,  function(request, response) {
  console.log('acceso a ruta protegida');
        return response.status(200).send(
            {
                success: true,
                data: [],
                message: 'Ok'
            }
        );
})

routes.post('/signup', userController.signUp);
routes.post('/signin', userController.signIn);

module.exports = routes;
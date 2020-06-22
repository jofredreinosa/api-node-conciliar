'use strict'
const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');

const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

/* Rutas para productos */
routes.get('/product', auth.isAuth, productController.getProducts);
routes.get('/product/:id', productController.getProduct);
routes.post('/product', productController.createProduct);
routes.put('/product/:id', productController.updateProduct);
routes.delete('/product/:id', productController.deleteProduct);

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
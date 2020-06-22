'use strict'

const User = require('../models/user');
const _authService = require('../services/authService');

function signUp( request, response ) {
  const userData = request.body
  const user = new User({
    email: userData.email,
    displayName: userData.displayName,
  });

  user.save( error => {
    if ( error ) {
      console.log(error);
      response.status(500).send(
          {
            success: false,
            message: "Error al crear el Usuario",
            error: error
          }
      );
    }

    let token = _authService.createToken(user);
    console.log('create user Ok')
    return response.status(200).send(
        {
            success: true,
            data: user,
            token: token,
            message: 'Usuario creado con éxito'
        }
    );
  })
}

function signIn( request, response ) {
  const userData = request.body;
  User.find({ email: userData.email } , ( error, user ) => {
    if ( error ) {
      console.log(error);
      response.status(500).send(
          {
            success: false,
            message: "Error al iniciar Sesión",
            error: error
          }
      );
    }

    if ( ! user ) {
      console.log('User not found');
      response.status(404).send(
          {
            success: false,
            message: "Usuario no encontrado"
          }
      );
    }

    console.log('Login Ok')
    request.user = user;
    let token = _authService.createToken(user);
    return response.status(200).send(
        {
            success: true,
            data: user,
            token: token,
            message: 'Inicio de sesión correcto'
        }
    );

  })
}

module.exports = {
  signUp,
  signIn
}
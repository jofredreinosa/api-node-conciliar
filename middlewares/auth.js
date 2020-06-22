'use strict'

const _authService = require('../services/authService');

function isAuth(request, response, next) {
  if ( ! request.headers.authorization ) {
    console.log('unauthorize');
    return response.status(403).send(
      {
          success: false,
          message: 'No está autorizado para acceder a este recurso'
      }
    );
  }
  const token = request.headers.authorization.split(' ')[1];
  _authService.decodeToken(token).then( (response) => {
    request.user = response;
    next();
  })
  .catch( ( response ) => {

  });
}

module.exports = {isAuth}

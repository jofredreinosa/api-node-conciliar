'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const appconfig = require('../appconfig');

function createToken(user) {
  const payload = {
    sub: user._id,
    iat: moment.unix(),
    exp: moment().add('days',14).unix()
  }

  return jwt.encode(payload, appconfig.SECRET_TOKEN);
}

function decodeToken(token) {
  const decodedToken = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, appconfig.SECRET_TOKEN);
      if ( payload.exp <= moment.unix()) {
        reject({
          status: 401,
          message: 'Token expirado'
        })
      }

      resolve(payload.sub);
    }
    catch(error) {
      reject({
        status: 500,
        message: 'Token Invalido'
      })
    }
  })

  return decodedToken;
}

module.exports = {createToken, decodeToken};
'use strict'
const Settings = require('../models/setting');

function getAll(request, response) {
  console.log('Get:  /api/settings');
  Settings.find({} , (error, data) => {
    if (error) {
      console.log(error);
      response.status(500).send(
        {
          success: false,
          message: "Error al consultar las configuraciones",
          error: error
        }
      );
    }
    if ( data.length == 0) {
      console.log('Error, settings not found')
      return response.status(404).send(
        {
          success: false,
          message: 'No hay Configuraciones creadas'
        }
      );
    }
    console.log('Get settings Ok')
    return response.status(200).send(
      {
        success: true,
        data: data,
        message: 'Configuración devuelta con éxito'
      }
    );
  });
}

function update(request, response) {
  console.log('put: api/accounts');
  let data = request.body;
  let id = request.params.id;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    console.log('put fails, bad id');
    return response.status(422).send(
      {
        success: false,
        message: "El identificador de la configuración no es válido",
        error: ''
      }
    );
  }

  Settings.findByIdAndUpdate(id, data, (error, setting) => {
    if (error) {
      console.log('put fail ', error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al actualizar la cuenta",
          error: error
        }
      );
    }
    if ( ! setting ) {
      console.log('update fail, settings not found');
      return response.status(404).send(
        {
          success: false,
          message: "Configuración no encontrada",
          error: error
        }
      );
    }
    console.log('update Ok');
    return response.status(200).send(
      {
        success: true,
        data: setting,
        message: "Configuración actualizada con éxito",
      }
    );
  });
}

module.exports = {
  getAll,
  update
}
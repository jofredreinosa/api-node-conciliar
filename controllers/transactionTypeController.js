'use strict'
const TransactionType = require('../models/transactionType');

function getAll(request, response) {
  console.log('Get:  /api/transactiontypes');
  TransactionType.find({} , (error, data) => {
    if (error) {
      console.log(error);
      response.status(500).send(
        {
          success: false,
          message: "Error al consultar los tipos de transacción",
          error: error
        }
      );
    }
    if (!data) {
      console.log('Error, transaction types not found')
      return response.status(404).send(
        {
          success: false,
          message: 'No hay tipos de transacción creados'
        }
      );
    }
    console.log('Get transaction types Ok')
    return response.status(200).send(
      {
        success: true,
        data: data,
        message: 'Lista de tipos de transacción devuelta con éxito'
      }
    );
  });
}

function getOne(request, response) {
  console.log('get: api/transactiontypes/:id');
  let id = request.params.id;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    console.log('get fails, bad id');
    return response.status(422).send(
      {
        success: false,
        message: "El identificador del tipo de transacción a consultar no es válido",
        error: ''
      }
    );
  }

  TransactionType.findById(id, (error, transactionType) => {
    if (error) {
      console.log(error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al realizar la búsqueda",
          error: error
        }
      );
    }
    if ( ! transactionType ) {
      console.log('get fail, transaction type not found');
      return response.status(404).send(
        {
          success: false,
          message: "Tipo de transacción no encontrado",
          error: error
        }
      );
    }
    console.log('get OK');
    return response.status(200).send(
      {
        success: true,
        data: transactionType,
        message: "Tipo de transacción encontrado",
      }
    );
  });
}

function create(request, response) {
  console.log('post: api/transactiontypes');
  const data = request.body;
  let transactionType = new TransactionType();
  transactionType.code = data.code.toUpperCase();
  transactionType.description = data.description.toUpperCase();
  transactionType.type = data.type;

  transactionType.save((error, createdEntity) => {
    if (error) {
      console.log(error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al crear el Tipo de transacción",
          error: error
        }
      );
    }

    console.log('Entity transactiontype created successfully');
    return response.status(201).send(
      {
        success: true,
        data: createdEntity,
        message: "Tipo de transacción creado con éxito"
      }
    );
  });
  

}

function update(request, response) {
  console.log('put: api/transactiontypes');
  let data = request.body;
  data.code = data.code.toUpperCase();
  data.description = data.description.toUpperCase();
  let id = request.params.id;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    console.log('put fails, bad id');
    return response.status(422).send(
      {
        success: false,
        message: "El identificador del tipo de transacción a actualizar no es válido",
        error: ''
      }
    );
  }

  TransactionType.findByIdAndUpdate(id, data, (error, transactionType) => {
    if (error) {
      console.log('put fail ', error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al realizar la búsqueda",
          error: error
        }
      );
    }
    if ( ! transactionType ) {
      console.log('update fail, transaction type not found');
      return response.status(404).send(
        {
          success: false,
          message: "Tipo de transacción no encontrado",
          error: error
        }
      );
    }
    console.log('update Ok');
    return response.status(200).send(
      {
        success: true,
        data: transactionType,
        message: "Tipo de transacción actualizado",
      }
    );
  });
}

function remove(request, response) {
  console.log('delete: api/transactiontypes');
  let id = request.params.id;
  if ( ! id.match(/^[0-9a-fA-F]{24}$/) ) {
    console.log('delete fails, bad id');
    return response.status(422).send(
      {
        success: false,
        message: "El identificador del tipo de transacción a eliminar no es válido",
        error: ''
      }
    );
  }

  TransactionType.findById(id, (error, transactionType) => {
    if ( error ) {
      console.log(error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al borrar el tipo de transacción",
          error: error
        }
      );
    }
    if ( ! transactionType ) {
      console.log('transaction type not found');
      return response.status(404).send(
        {
          success: false,
          message: "Tipo de transacción no encontrado",
          error: error
        }
      );
    }
    transactionType.deleteOne((error) => {
      if ( error ) {
        console.log(error);
        return response.status(500).send(
          {
            success: false,
            message: "Error al borrar el tipo de transacción",
            error: error
          }
        );
      }
      console.log('Delete Ok');
      return response.status(200).send(
        {
          success: true,
          message: "Tipo de transacción borrado con éxito"
        }
      );
    });
  });
}

module.exports = {
  getOne,
  getAll,
  create,
  update,
  remove
}
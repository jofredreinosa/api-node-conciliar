'use strict'
const BankAccount = require('../models/account');

function getAll(request, response) {
  console.log('Get:  /api/accounts');
  BankAccount.find({} , (error, data) => {
    if (error) {
      console.log(error);
      response.status(500).send(
        {
          success: false,
          message: "Error al consultar las cuentas bancarias",
          error: error
        }
      );
    }
    if ( data.length == 0) {
      console.log('Error, bank accounts not found')
      return response.status(404).send(
        {
          success: false,
          message: 'No hay Cuentas creadas'
        }
      );
    }
    console.log('Get bank accounts Ok')
    return response.status(200).send(
      {
        success: true,
        data: data,
        message: 'Lista de cuentas devuelta con éxito'
      }
    );
  });
}

function getOne(request, response) {
  console.log('get: api/accounts/:id');
  let id = request.params.id;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    console.log('get fails, bad id');
    return response.status(422).send(
      {
        success: false,
        message: "El identificador de la cuenta a consultar no es válido",
        error: ''
      }
    );
  }

  BankAccount.findById(id, (error, bankAccount) => {
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
    if ( ! bankAccount ) {
      console.log('get fail, account not found');
      return response.status(404).send(
        {
          success: false,
          message: "Cuenta no encontrada",
          error: error
        }
      );
    }
    console.log('get OK');
    return response.status(200).send(
      {
        success: true,
        data: bankAccount,
        message: "Cuenta encontrada",
      }
    );
  });
}

function create(request, response) {
  console.log('post: api/accounts');
  const data = request.body;
  let bankAccount = new BankAccount();
  bankAccount.accountName = data.accountName;
  bankAccount.accountNumber = data.accountNumber;
  bankAccount.accountType = data.accountType;
  bankAccount.accountBankType = data.accountBankType;

  bankAccount.save((error, createdEntity) => {
    if (error) {
      console.log(error);
      response.status(500).send(
        {
          success: false,
          message: "Error al crear la cuenta",
          error: error
        }
      );
    }

    response.status(201).send(
      {
        success: true,
        data: createdEntity,
        message: "Cuenta bancaria creada con éxito"
      }
    );

  });
  console.log('Entity bank account created successfully');

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
        message: "El identificador de la cuenta a actualizar no es válido",
        error: ''
      }
    );
  }

  BankAccount.findByIdAndUpdate(id, data, (error, bankAccount) => {
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
    if ( ! bankAccount ) {
      console.log('update fail, bank account not found');
      return response.status(404).send(
        {
          success: false,
          message: "Cuenta no encontrada",
          error: error
        }
      );
    }
    console.log('update Ok');
    return response.status(200).send(
      {
        success: true,
        data: bankAccount,
        message: "Cuenta actualizada con éxito",
      }
    );
  });
}

function remove(request, response) {
  console.log('delete: api/accounts');
  let id = request.params.id;
  if ( ! id.match(/^[0-9a-fA-F]{24}$/) ) {
    console.log('delete fails, bad id');
    return response.status(422).send(
      {
        success: false,
        message: "El identificador de la cuenta a eliminar no es válido",
        error: ''
      }
    );
  }

  BankAccount.findById(id, (error, bankAccount) => {
    if ( error ) {
      console.log(error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al borrar la cuenta",
          error: error
        }
      );
    }
    if ( ! bankAccount ) {
      console.log('bank account not found');
      return response.status(404).send(
        {
          success: false,
          message: "Cuenta no encontrada",
          error: error
        }
      );
    }
    bankAccount.deleteOne((error) => {
      if ( error ) {
        console.log(error);
        return response.status(500).send(
          {
            success: false,
            message: "Error al borrar la cuenta",
            error: error
          }
        );
      }
      console.log('Delete Ok');
      return response.status(200).send(
        {
          success: true,
          message: "Cuenta borrada con éxito"
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
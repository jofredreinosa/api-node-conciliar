'use strict'
const Transaction = require('../models/transaction');
const TransactionType = require('../models/transactionType');

function create(request, response) {
  console.log('post: api/transactions');
  const data = request.body;
  let transaction = new Transaction();
  let transactionType = new TransactionType();
  transactionType = JSON.parse(data.transactionType);
  transaction.accountId = data.accountId;
  transaction.transactionType = transactionType;
  transaction.transactionDate = data.transactionDate;
  transaction.transactionNumber = data.transactionNumber;
  transaction.transactionMotive = data.transactionMotive;
  transaction.transactionAmount = data.transactionAmount;
  transaction.transactionStatement = data.transactionStatement;

  const validation = validateFields(transaction);
  if ( validation.length > 0  ) {
    console.log('Faltan datos requeridos');
    validation.forEach( value => {
      console.log(value);
    })
    return response.status(421).send(
      {
        success: false,
        message: "Faltan datos requeridos",
        errors: validation,
      }
    );
  }

  transaction.save((error, createdEntity) => {
    if (error) {
      console.log(error);
      return response.status(500).send(
        {
          success: false,
          message: "Error al crear la transacción",
          error: error
        }
      );
    }
    console.log('Entity transaction created successfully');
    return response.status(201).send(
      {
        success: true,
        data: createdEntity,
        message: "Transacción creada con éxito"
      }
    );

  });
  

}

function validateFields(transaction) {
  let validationErrors = [];
  if ( ! transaction.accountId )
    validationErrors.push('La cuenta bancaria es requerida');
  
  if ( ! transaction.transactionDate )
    validationErrors.push('La fecha de la transacción es requerida');
  
  if ( ! transaction.transactionType )
    validationErrors.push('El tipo de transacción es requerido');
  
  if ( ! transaction.transactionNumber )
    validationErrors.push('El número de transacción es requerido');

  if ( ! transaction.transactionAmount )
    validationErrors.push('El monto de la transacción es requerido');

  if ( ! transaction.transactionMotive )
    validationErrors.push('La descripción de la transacción es requerida');
  
  return validationErrors;
}

module.exports = {
  create,
}
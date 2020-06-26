'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const appconfig = require('./appconfig');

mongoose.connect(appconfig.dbString , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, ( err, response) => {
  if ( err ) {
    return console.log("Failed connecting to database, error: " + err);
  }

  console.info('Database Connected successfully');
  app.listen(appconfig.port, () =>{
    console.info(`Api ready in http://localhost:${appconfig.port}`);
  });
});

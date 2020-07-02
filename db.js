'use strict';
const mongoose = require('mongoose');
const appconfig = require('./appconfig');

const db = {
	connect: ()  => {
		const connection = mongoose.connect(
      appconfig.dbString ,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      ( err, response) => {
        if ( err ) {
          return console.log("Failed connecting to database, error: " + err);
        }
        console.info('Database Connected successfully');
      }
    );
    return connection;
	}
};

module.exports = db;
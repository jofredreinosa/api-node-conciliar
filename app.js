'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const db = require('./db');
const appconfig = require('./appconfig');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api' , routes);


app.listen(appconfig.port, () =>{
  console.info(`Api ready in http://localhost:${appconfig.port}`);
});

db.connect();

module.exports = app;

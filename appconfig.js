'use strict';

const appconfig =
{
    port: process.env.PORT || 3000,
    dbString: process.env.DBSTRING || 'mongodb+srv://usermongo:usermongo@mycluster-2whva.mongodb.net/conciliar?retryWrites=true&w=majority',
    dbName: 'conciliar',
    SECRET_TOKEN: 'secrettoken',
    basePath: 'http://localhost:3000'
}

module.exports = appconfig;
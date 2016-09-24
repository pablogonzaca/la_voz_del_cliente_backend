var sequelize = require('database');


var User = sequelize.define('respuesta', {
Id: {
    type: Sequelize.INTEGER,
    primaryKey: true
},

Respuesta01: {
    type: Sequelize.INTEGER
},

Respuesta02: {
    type: Sequelize.INTEGER
    
},

Respuesta03: {
    type: Sequelize.INTEGER
},

Respuesta04: {
    type: Sequelize.INTEGER
    
},

Respuesta05: {
    type: Sequelize.INTEGER
    
},

FechaRespuesta:{
    type: Sequelize.DATE
},

GeneroID:{
    type: Sequelize.STRING,
    references:{
        model: genero,
        key: 'Id',
    }
},
PymeID:{
    type: Sequelize.INTEGER,
    references:{
        model:pyme,
        key: 'Id',
    }
},

Campo01:{
    type: Sequelize.STRING,
},

Campo02:{
    type: Sequelize.STRING,
},

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
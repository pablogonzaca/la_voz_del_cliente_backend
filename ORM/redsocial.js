var sequelize = require('database');


var User = sequelize.define('redsocial', {
  TipoRedSocialId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: tiporedsocial,
      key: 'Id'
    }
  },

  PymeID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: pyme,
      key: 'Id'
    }
  }

  Comentario: {
    type: Sequelize.STRING
  },

  InformacionContacto: {
    type: Sequelize.STRING
  },

  Link: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
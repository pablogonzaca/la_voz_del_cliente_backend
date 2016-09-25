var Sequelize = require("sequelize");
var sequelize = require('./database');

var Pyme = sequelize.define('pyme',
    {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },

        NombreComercio: {
            type: Sequelize.CHAR
        },

        EstadoID: {
            type: Sequelize.INTEGER,
            references: {
             // This is a reference to another model
             model: "estado",
             // This is the column name of the referenced model
             key: 'Id',
           }
        },

        SectorID: {
            type: Sequelize.INTEGER,
            references: {
             // This is a reference to another model
             model: "sector",
             // This is the column name of the referenced model
             key: 'Id',
           }
        },

        AnnoInicioOperaciones: {
            type: Sequelize.INTEGER
        },

        NumeroTelefono: {
            type: Sequelize.CHAR
        },

        Direccion: {
            type: Sequelize.CHAR
        },

        EsActiva: {
            type: Sequelize.BOOLEAN
        },

        EsNegocioFamiliar: {
            type: Sequelize.BOOLEAN
        },

        Logo: {
              type: Sequelize.BLOB
        },

        ExtensionLogo: {
            type: Sequelize.CHAR
        },

        FechaCreacion: {
            type: Sequelize.DATE
        },

        FechaUltimaActualizacion: {
            type: Sequelize.DATE
        },

        EsFacebookAppInstalado: {
            type: Sequelize.BOOLEAN
        },

        UsuarioID: {
            type: Sequelize.INTEGER,
            references: {
             // This is a reference to another model
             model: "usuario",
             // This is the column name of the referenced model
             key: 'ID',
           }
        },

        GeneroPropietarioID: {
            type: Sequelize.INTEGER,
            references: {
             // This is a reference to another model
             model: "genero",
             // This is the column name of the referenced model
             key: 'Id',
           }
        },

        CedJuridica: {
            type: Sequelize.STRING
        }
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false
    }
);

module.exports = Pyme;

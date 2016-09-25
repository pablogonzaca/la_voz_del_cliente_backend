var express = require('express');
var router = express.Router();
var pais = require('../ORM/pais');

/* GET users listing. */
router.get('/', function(req, res, next) {
    pais.findAll({attributes: ["Id", "Nombre", "Iso", "Iso3", "CodigoNumerico", "CodigoTelefono"]}).then(
        function(paises) {
          res.send(paises);
        },
        function(error) {
        }
    );
});

router.post('/', function (req, res) {

});

module.exports = router;

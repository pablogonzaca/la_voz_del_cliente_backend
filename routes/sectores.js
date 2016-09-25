var express = require('express');
var router = express.Router();
var pais = require('../ORM/sector');

/* GET users listing. */
router.get('/', function(req, res, next) {
    pais.findAll({attributes: ["Id", "Nombre"]}).then(
        function(data) {
          res.send(data);
        },
        function(error) {
        }
    );
});

router.post('/', function (req, res) {

});

module.exports = router;

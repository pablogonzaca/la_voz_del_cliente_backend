var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var pymes = require('./routes/pymes');
var users = require('./routes/users');
var paises = require('./routes/paises');
var generos = require('./routes/generos');
var estados = require('./routes/estados');
var sectores = require('./routes/sectores');
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/pymes', pymes);
app.use('/usuarios', users);
app.use('/paises', paises);
app.use('/generos', generos);
app.use('/estados', estados);
app.use('/sectores', sectores);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;

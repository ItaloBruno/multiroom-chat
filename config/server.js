// Importação de dependências que serão usadas no projeto
var express    = require('express');
var consign    = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Iniciando Express e configurando suas propriedades
var application = express();
application.set('view engine','ejs');
application.set('views', './app/views');
application.use(express.static('./app/public'));
application.use(bodyParser.urlencoded({extended: true}));
application.use(expressValidator());
consign().include('app/routes')
         .then('app/models')
         .then('app/controllers')
         .into(application);

module.exports = application;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/catergoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configurando a conexão com banco de dados
mongoose.connect(variables.Database.connection,{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);


//Exportando nossa Api
module.exports = app;


// Api -> MIDDLEWARES -> Rotas -> Controller -> Repository -> Banco
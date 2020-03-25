const express = require('express');
const cors = require('cors');
/**
 * Importa o arquivo de rotas
 */
const routes = require('./routes');
const app = express();

app.use(cors());
/**
 * Para que o request body possa entender o conteúdo do corpo.
 * json para o corpo das requisições
 * Antes de todas as requisições o json é transformado em um objeto javascript, para que o node (backend) enteda o conteúdo do corpo
 */
app.use(express.json());

/**
 * Vincula o uso do arquivo de rotas com a aplicação
 */
app.use(routes);

app.listen(3333);
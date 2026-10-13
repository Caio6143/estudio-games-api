const URL_BASE = '/api';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jogoDao = require('./rotas/jogoDao');
app.use(URL_BASE + '/jogo', jogoDao);

// Trata rotas inexistentes (404)
app.use((req, res, next) => {
    const erro = new Error('Rota Inexistente!');
    erro.status = 404;
    next(erro);
});

// Tratamento global de erros (500)
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;
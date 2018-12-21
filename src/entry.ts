import * as path from 'path';
import express from 'express';
import api from './server';
import { ApiConstants } from './constants/api_constants';
import { AppConstants } from './constants/app_constants';

// Porta da aplicação com suporte ao Heroku
const APP_PORT: string = process.env.PORT || AppConstants.APP_PORT;

// Define aplicação express
const app = express();

// Configura o path para execução da sub-aplicação express
app.use(`/api/${ApiConstants.API_VERSION}`, api);

// Configurações de views e conteudo estático
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Adiciona configuração do path principal
app.get('/', (_, res) => {
    res.render('pages/index');
});

// Escuta a aplicação na porta designada pela aplicação
app.listen(APP_PORT, () => {
    console.log('[SERVER] Sendo executado em http://localhost:8080');
});
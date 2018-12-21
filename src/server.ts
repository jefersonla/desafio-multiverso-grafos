import express from 'express';
import { midErroProblemaRequisicao, midErroRequisicaoNaoEncontrada } from './helpers/core.helper';
import * as bodyParser from 'body-parser';

/**
 * Aplicação do Express a ser exportada
 */
export const api = express();

// Parse HTTP POST com conteúdo json
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

// Adiciona body parser ao projeto
api.use(midErroRequisicaoNaoEncontrada());
api.use(midErroProblemaRequisicao());

/**
 * ------------------------ Definição de rotas ------------------------
 */

// GET /
// Rota inicial para acesso de dados
api.get('/');

// TODO

/**
 * --------------------------------------------------------------------
 */

// Default export
export default api;

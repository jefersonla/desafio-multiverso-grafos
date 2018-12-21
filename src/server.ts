import express from 'express';

/**
 * Aplicação do Express a ser exportada
 */
export const api = express();

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

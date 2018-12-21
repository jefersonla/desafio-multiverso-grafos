import * as HttpStatus from 'http-status-codes';

/**
 *
 * Middleware para requisições que não forem identificadas.
 *
 */
import { RequestFunctionPromise, RequestFunctionPromiseError } from '../core/interfaces.type';

export const midErroRequisicaoNaoEncontrada = (): RequestFunctionPromise => {
    return (req, res, _): void => {
        console.error('[ERROR] {Core} - Path não encontrado ', req.url);

        res.status(HttpStatus.UNPROCESSABLE_ENTITY)
            .send({
                sucesso: false,
                erro: '[ERROR] {Core} - Path nao encontrado' + req.url
            });
    };
};

/**
 *
 * Middleware para problema durante a execução de requisições.
 *
 */
export const midErroProblemaRequisicao = (): RequestFunctionPromiseError => {
    return (err, _1, res, _2) => {
        const mensagem_erro = '[ERROR] {Core} - Problema durante a requisição - ';
        console.error(mensagem_erro, err.message);

        // Se o erro não tiver um código de status definido, define o mesmo como erro interno do sistema
        if (!err.statusCode) {
            err.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        // Retorna a mensagem de erro
        res.status(err.statusCode)
            .send({
                sucesso: false,
                erro: '[ERROR] {Core} -Problema durante a requisição'
            });
    };
};


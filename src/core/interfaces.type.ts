import {Request, Response} from 'express';

/**
 *
 * Callback para requisição http para construção de novos usuarios
 *
 * @callback RequestFunction
 * @param req Dados da requisição
 * @param res Resultado da requisição
 */
export type RequestFunction = (req: Request, res: Response) => void;

/**
 *
 * Callback para requisição http para construção de novos usuarios
 *
 * @callback RequestFunctionAsync
 * @param req Dados da requisição
 * @param res Resultado da requisição
 * @return Retorna uma promise de chamdas assincronas
 */
export type RequestFunctionAsync = (req: Request, res: Response) => Promise<any>;

/**
 *
 * Callback para requisição http para construção de novos usuarios
 *
 * @callback RequestFunction
 * @param req Dados da requisição
 * @param res Resultado da requisição
 * @param next Próxima função de seguimento do middleware
 */
export type RequestFunctionPromise = (req: Request, res: Response, next: Function) => void;

/**
 *
 * Callback para requisições de baixo nível com erro
 *
 * @callback RequestFunctionPromiseError
 * @param err Tipo de erro apresentado pelo sistema
 * @param req Dados da requição
 * @param res Resultado da requisição
 * @param next Próxima função de seguimento do middleware
 */
export type RequestFunctionPromiseError = (err: any, req: Request, res: Response, next: Function) => void;

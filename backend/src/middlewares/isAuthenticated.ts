/**
 *  verificamos o headers authorization se há um token
 *  recupere o token apenas no bearer
 *  verifica se o token é valido
 *  armazena o sub como uma variável dentro do request no express. O sub contém o id do usuario. Cria pasta @types/express/index.d.ts e delare namespace Express { export interface Request {user_id: string}}
 *  retorna para a próxima função
 */

import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

interface PayLoad {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(' '); 

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET,

        ) as PayLoad
        req.user_id = sub;
        return next();

    } catch (err) {
        return res.status(401).end()
    }

    next();
}
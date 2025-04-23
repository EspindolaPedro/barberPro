/*
 * recupera email e senha
 * busca no db o email e inclui subscriptions
 * joga as exceções
 * gera o token
 * retorna user e seus dados
*/

import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthUserRequest {
    email: string,
    password: string
}

class AuthUserService{
    async exec({ email, password }: AuthUserRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                email
            },
            include: {
                subscriptions: true,
            }
        })

        if (!user) {
            throw new Error("User not found")
        }
        
        const matchPassword = await compare(password, user?.password)

        if (!matchPassword) {
            throw new Error("User not found")
        }

        const token = sign(
        {
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d' 
        }
        )

        return { 
            id: user?.id,
            email: user?.email,
            name: user?.name,
            endereco: user?.endereco,
            token: token,
            subscriptions: user.subscriptions ? {
                id: user?.subscriptions.id,
                status: user?.subscriptions.status,
                priceId: user?.subscriptions.priceId,
            } : null
         }
    }
}

export { AuthUserService }
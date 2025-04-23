import express, {Request, Response, NextFunction, Application } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'

const server: Application  = express()

server.use(express.json())
server.use(cors())

server.use(router)

server.use((error: Error, req: Request, res: Response, next: NextFunction ): void => {
    if (error instanceof Error) {
        res.status(400).json({
            error: error.message
        })
    }
    res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

server.listen(4444, () => console.log('Rodando na porta 4444'))
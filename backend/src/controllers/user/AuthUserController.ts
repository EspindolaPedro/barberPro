import { Request, Response } from "express"
import { AuthUserService } from "../../services/user/AuthUserSerivce";

class AuthUserController {
    async handle(req: Request, res: Response) {

        const {email, password} = req.body;

        const authUserService = new AuthUserService()
        const session = await authUserService.exec({
            email,
            password
        })

        return res.status(200).json(session)

    }
}

export { AuthUserController }
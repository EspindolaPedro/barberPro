import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name, endereco } = req.body;
        const { user_id } = req;

        const updateUserService = new UpdateUserService();
        const dataUpdated = await updateUserService.exec({
            user_id,
            name,
            endereco
        }) 

        return res.status(200).json(dataUpdated);

    }
}

export { UpdateUserController }
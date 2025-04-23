import { Request, Response } from "express";
import { CountHaircutService } from "../../services/haircut/CountHaircutService";

class CountHaitcutController {
    async handle(req: Request, res: Response) {
        const {user_id} = req;

        const countHaircutService = new CountHaircutService()

        const countHaircut = await countHaircutService.exec({
            user_id
        }) 

        res.json(countHaircut)
    }
}

export { CountHaitcutController}
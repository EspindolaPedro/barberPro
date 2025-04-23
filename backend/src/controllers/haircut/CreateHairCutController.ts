import { Request, Response } from "express";
import { CreateHaircutService } from "../../services/haircut/CreateHairCutService";

class CreateHaircutController {
    async handle(req: Request, res: Response) {
        const { name, price } = req.body;
        const { user_id } = req;

        const createHaircutService = new CreateHaircutService()
        const newHaircut = await createHaircutService.exec({
            user_id,
            name,
            price,
        })
        
        return res.status(201).json(newHaircut)

    }
}
export { CreateHaircutController }
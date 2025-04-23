import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController {
    async handle(req: Request, res: Response) {
        const {user_id} = req;
        const {status, haircut_id, name, price,} = req.body;

        const updateHaircutService = new UpdateHaircutService()

        const haircut = await updateHaircutService.exec({
            user_id,
            haircut_id,
            name,
            price,
            status,
        })

        return res.json(haircut)

    }
}
export {UpdateHaircutController}
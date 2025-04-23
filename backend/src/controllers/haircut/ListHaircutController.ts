import { Request, Response } from "express";
import { ListHaircutService } from "../../services/haircut/ListHaircutService";

class ListHaircutController  {
    async handle(req: Request, res: Response) {
        const {user_id} = req;
        const status = req.query.status as string;

        const listHaircutService = new ListHaircutService()

        const list = await listHaircutService.exec({
            user_id,
            status,
        })

        return res.status(200).json(list)


    }
}

export {ListHaircutController}
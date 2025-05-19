import { Request, Response, } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService";

class ListScheduleController {
    async handle(req: Request, res:Response) {

        const user_id = req.user_id
        
        const listScheduleService = new ListScheduleService();
        const list = await listScheduleService.exec({user_id});

        return res.json(list)


    }
}

export {ListScheduleController}
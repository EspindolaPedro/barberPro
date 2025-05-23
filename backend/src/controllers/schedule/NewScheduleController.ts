import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

class NewScheduleController {
    async handle(req: Request, res:Response) {
        const { haircut_id, customer } = req.body;
        const user_id = req.user_id;
        
        const newScheduleService = new NewScheduleService();

        const schedule = await newScheduleService.exec({user_id, haircut_id, customer})

        return res.json(schedule)
    
    }
}

export {NewScheduleController}
import { Request, Response } from "express";
import { FinishScheduleService } from "../../services/schedule/FinishScheduleService";


class FinishScheduleController {
    async handle(req: Request, res:Response) {
        const user_id = req.user_id;
        const schedule_id = req.query.schedule_id as string;

        if (schedule_id == '') {
            return res.json("Schedule not found");
        }

        const finishScheduleService = new FinishScheduleService();

        const finished = await finishScheduleService.exec({ 
            schedule_id,
            user_id 
        })

        return res.json(finished);

    }
}

export {FinishScheduleController}
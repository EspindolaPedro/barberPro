import { Request, Response } from "express";
import { CheckSubcriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubcriptionController {
    async handle(req: Request, res: Response) {
        const {user_id} = req;

        const checkSubcriptionService = new CheckSubcriptionService();

        const status = await checkSubcriptionService.exec({
            user_id
        })
        return res.status(200).json(status)
    }
}

export {CheckSubcriptionController}
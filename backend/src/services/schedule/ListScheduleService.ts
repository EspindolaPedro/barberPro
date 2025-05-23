import { scheduler } from "timers/promises";
import prismaClient from "../../prisma";

interface ListScheduleRequest {
    user_id: string
}

class ListScheduleService {
    async exec({user_id}: ListScheduleRequest) {
        
        const schedule = await prismaClient.service.findMany({
            where: {
                user_id: user_id,
            },
            select: {
                id: true,
                customer: true,
                haircut: true,
            }
        })
        return schedule;

    }
}

export {ListScheduleService
    
}
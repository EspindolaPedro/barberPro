import prismaClient from "../../prisma";

interface NewScheduleRequest {
    user_id: string;
    haircut_id: string;
    customer: string;
}

class NewScheduleService {
// receber id, haircut e custumer
// criar um agendamento

async exec({user_id, haircut_id, customer}: NewScheduleRequest) {
    if (haircut_id === '' || customer === '') return Error();

    const schedule = await prismaClient.service.create({
        data: {
            customer,
            haircut_id,
            user_id,
        }
    }) 
    return schedule;
} }

export { NewScheduleService }
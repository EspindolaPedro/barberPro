import prismaClient from "../../prisma";
interface FinishRequest {
    schedule_id: string
    user_id: string
}

class FinishScheduleService {
    async exec({schedule_id, user_id}: FinishRequest) {

        if (schedule_id == '' || user_id == '') {
        throw new Error("Error");
        }
        try {

            const belongsTo = await prismaClient.service.findFirst({
                where: {
                    id: schedule_id,
                    user_id: user_id,
                }
            })

            if (!belongsTo) {
                throw new Error("Not authorized")
            }

            const update = await prismaClient.service.delete({
                where: {
                    id: schedule_id
                }
            })
            return { message: "Deletado com sucesso" };
    } catch (e) {

    }
    }

}

export {
    FinishScheduleService
}
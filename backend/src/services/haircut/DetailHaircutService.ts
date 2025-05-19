import prismaClient from "../../prisma";

class DetailHaircutService {
    async exec({haircut_id}: {haircut_id: string}) {
        const haircut = await prismaClient.haircut.findFirst({
            where: {
                id: haircut_id,
            }
        })
        return haircut;
    }
}

export {DetailHaircutService}
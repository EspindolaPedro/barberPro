import prismaClient from "../../prisma";

class CountHaircutService {
    async exec({user_id} : {user_id: string}) {
        const count = await prismaClient.haircut.count({
            where: {
                user_id
            }
        })

        return count;
    }
} 

export {CountHaircutService}
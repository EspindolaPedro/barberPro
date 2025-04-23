import prismaClient from "../../prisma";

interface LisReq {
    user_id: string,
    status: string | boolean,
}

class ListHaircutService {
    async exec({user_id, status}: LisReq) {
        
        const haircutList = await prismaClient.haircut.findMany({
            where: {
                user_id,
                status: status === "true" ? true : false
            }
        }) 
        return haircutList;
    }
}

export {ListHaircutService}
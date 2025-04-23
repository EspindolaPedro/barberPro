import prismaClient from "../../prisma";

interface CheckSubcription {
    user_id: string
}

class CheckSubcriptionService {
    async exec({user_id}: CheckSubcription) {

        const status = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }, select: {
                subscriptions: {
                    select: {
                        id: true,
                        status: true
                    }
                }
            }
        }) 
        return status;
    }
}

export { CheckSubcriptionService }
import prismaClient from "../../prisma";

interface UserReq {
    user_id: string,
    name: string,
    endereco: string,
}

class UpdateUserService {
    async exec({user_id, name, endereco}) {
        try {

            const userExists = await prismaClient.user.findFirst({
                where: {
                    id: user_id,
                }
            })
            if (!userExists) {
                throw new Error('User not found.')
            }

            const dataUpdated = await prismaClient.user.update({
                where: {
                    id: user_id,
                }, 
                data: {
                    name: name,
                    endereco: endereco,
                },
                select: {
                    name: true,
                    endereco: true,
                    email: true,
                } 
            })
            
            return dataUpdated;

        } catch (err) {
            throw new Error('Error to update user details.')
        }
    }
}

export { UpdateUserService }
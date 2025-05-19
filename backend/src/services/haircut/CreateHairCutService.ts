/**
 * receber o id do user, nome e price do haircut
 * verifica se esta todos os dados preenchidos
 * verifica quantos modelos de cortes o usuário tem cadastrado
 * verifica se ele é premium ou não
 * se não for premium, limita o registro de corte para apenas três 
*/
import prismaClient from "../../prisma";

interface HaircutReq {
    user_id: string, 
    name: string, 
    price: number
}

class CreateHaircutService {
    async exec({user_id, name, price}: HaircutReq) {
        if (!name && !price) {
            throw new Error();
        }
                      

            const myHaircuts = await prismaClient.haircut.count({
                where: {
                    user_id
                }
            })

            const user = await prismaClient.user.findFirst({
                where: {
                    id: user_id
                },
                include: {
                    subscriptions: true,
                }
            })

            if (myHaircuts >= 3 && user?.subscriptions?.status !== 'active') { 
                throw new Error('Not Authorized') 
            }
            
            const newHaircut = await prismaClient.haircut.create({
                data: {
                    name,
                    price,
                    user_id,
                }
            })

            return newHaircut;

 
    }
}

export { CreateHaircutService }
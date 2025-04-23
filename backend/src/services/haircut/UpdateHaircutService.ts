// Só podera atualizar se for premium

import prismaClient from "../../prisma";

interface HaircutReq {
  user_id: string;
  haircut_id: string;
  name: string;
  price: number;
  status: boolean | string;
}

class UpdateHaircutService {
  async exec({user_id, haircut_id, name, price, status = true}: HaircutReq) {

    const user = await prismaClient.user.findFirst({
        where: {
            id: user_id,
        }, 
        include: {
            subscriptions: true
        }
    })

    if (user?.subscriptions?.status !== 'active') {
        throw new Error('Not authorized')
    }

    const haircut = await prismaClient.haircut.update({
     where: {
        id: haircut_id,
     },
     data: {
        name,
        price,
        status: status === true ? true : false,
     }
    })
    return haircut;

  }
}

export {UpdateHaircutService}
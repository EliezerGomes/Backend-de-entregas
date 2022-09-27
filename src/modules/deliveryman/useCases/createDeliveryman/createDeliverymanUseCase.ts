import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt"

interface ICreateDeliveryman {
    username: string
    password: string
}

export class CreateDeliverymanUseCase {
    async execute({username, password}: ICreateDeliveryman) {
        //validar se o deliveryman existe
        const deliverymanExist = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if(deliverymanExist) {
            throw new Error("Client already exists");
        }
        //criptografar a senha
        const hashPassword = await hash(password, 10);
        //salvar o deliveryman
        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return deliveryman;
    }
}
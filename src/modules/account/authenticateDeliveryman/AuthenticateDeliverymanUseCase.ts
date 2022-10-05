import { prisma } from "../../../database/prismaClient";  
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AutheticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
        // verificar se username e senha estao cadastrados
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if(!deliveryman) {
            throw new Error("Username or password invalid!");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch) {
            throw new Error("Username or password invalid!")
        }
        // gerar o token
        const token = sign({ username }, "outubro", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })

        return token
    }
}
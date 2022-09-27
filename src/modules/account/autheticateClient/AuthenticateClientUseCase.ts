import { prisma } from "../../../database/prismaClient";  
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AutheticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        // verificar se username e senha estao cadastrados
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if(!client) {
            throw new Error("Username or password invalid!");
        }

        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch) {
            throw new Error("Username or password invalid!")
        }
        // gerar o token
        const token = sign({ username }, "setembro", {
            subject: client.id,
            expiresIn: "1d"
        })

        return token
    }
}
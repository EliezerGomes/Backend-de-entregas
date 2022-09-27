import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt"

interface ICreateClient {
    username: string
    password: string
}

export class CreateClientUseCase {
    async execute({ username, password }: ICreateClient) {
        //validar se o client existe
        const clientExist = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if(clientExist) {
            throw new Error("Client already exists");
        }
        //criptografar a senha
        const hashPassword = await hash(password, 10);
        //salvar o client
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return client;
    }
}
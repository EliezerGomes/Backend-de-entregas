import { AutheticateClientUseCase } from './AuthenticateClientUseCase';
import { Request, Response } from "express";

export class AutheticateClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const autheticateClientUseCase = new AutheticateClientUseCase();

        const result = await autheticateClientUseCase.execute({ username, password })

        return response.json(result)
    }
}